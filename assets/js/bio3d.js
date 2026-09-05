/* =========================================================================
   bio3d.js — visores 3D con three.js
   · kind "dna"     -> doble hélice B-DNA idealizada (procedural)
   · kind "protein" -> traza del esqueleto de una estructura PDB real
   Carga diferida desde main.js. Si three.js o WebGL fallan, queda el fallback.
   ========================================================================= */
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ELEMENT_COLORS = { C: 0x53e6bd, N: 0x5ac8ff, O: 0xff7fa8, P: 0xffc061, S: 0xf2d24b };

/* ------------------------------------------------------------ utilidades */
function addTube(parent, pts, radius, hex, emissive) {
  const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.15);
  const geo = new THREE.TubeGeometry(curve, Math.max(48, pts.length * 10), radius, 16, false);
  const mat = new THREE.MeshStandardMaterial({
    color: hex, emissive: hex, emissiveIntensity: emissive == null ? 1.25 : emissive,
    roughness: 0.34, metalness: 0.0
  });
  parent.add(new THREE.Mesh(geo, mat));
}
function addBeads(parent, pts, r, hex) {
  const g = new THREE.SphereGeometry(r, 16, 16);
  const m = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 1.05, roughness: 0.3 });
  const inst = new THREE.InstancedMesh(g, m, pts.length);
  const m4 = new THREE.Matrix4();
  pts.forEach((p, i) => { m4.makeTranslation(p.x, p.y, p.z); inst.setMatrixAt(i, m4); });
  inst.instanceMatrix.needsUpdate = true;
  parent.add(inst);
}
function addRungs(parent, a, b, hex) {
  const geo = new THREE.CylinderGeometry(0.16, 0.16, 1, 8, 1, true);
  const mat = new THREE.MeshStandardMaterial({
    color: hex, emissive: hex, emissiveIntensity: 0.8, roughness: 0.5, transparent: true, opacity: 0.9
  });
  const inst = new THREE.InstancedMesh(geo, mat, a.length);
  const up = new THREE.Vector3(0, 1, 0), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  for (let i = 0; i < a.length; i++) {
    const mid = a[i].clone().add(b[i]).multiplyScalar(0.5);
    const dir = b[i].clone().sub(a[i]); const len = dir.length();
    q.setFromUnitVectors(up, dir.normalize());
    s.set(1, len, 1); m4.compose(mid, q, s); inst.setMatrixAt(i, m4);
  }
  inst.instanceMatrix.needsUpdate = true;
  parent.add(inst);
}

/* --------------------------------------------------------- ADN procedural */
function buildDNA(model) {
  const N = 46, rise = 1.5, twist = (33 * Math.PI) / 180, R = 6.1;
  const H = (N - 1) * rise;
  const A = [], B = [];
  for (let i = 0; i < N; i++) {
    const y = i * rise - H / 2;
    const t = i * twist;
    A.push(new THREE.Vector3(Math.cos(t) * R, y, Math.sin(t) * R));
    const t2 = t + Math.PI * 0.76; // surco mayor / menor
    B.push(new THREE.Vector3(Math.cos(t2) * R, y, Math.sin(t2) * R));
  }
  addTube(model, A, 0.5, 0x3fe6b2, 1.3);
  addTube(model, B, 0.5, 0x57c8ff, 1.15);
  addBeads(model, A, 0.62, 0x8affd0);
  addBeads(model, B, 0.62, 0x9fe0ff);
  addRungs(model, A, B, 0xbff3e4);
  return H / 2 + R * 0.4;
}

/* ------------------------------------------------------- proteína (PDB) */
function parsePDB(text) {
  const atoms = [];
  for (const l of text.split(/\r?\n/)) {
    const rec = l.slice(0, 6);
    if (rec !== "ATOM  " && rec !== "HETATM") continue;
    const alt = l[16];
    if (alt !== " " && alt !== "A") continue;
    const name = l.slice(12, 16).trim();
    let el = l.slice(76, 78).trim() || name.replace(/[^A-Za-z]/g, "").charAt(0);
    el = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    atoms.push({
      name, chain: l[21], res: parseInt(l.slice(22, 26), 10),
      x: parseFloat(l.slice(30, 38)), y: parseFloat(l.slice(38, 46)), z: parseFloat(l.slice(46, 54)), el
    });
  }
  return atoms;
}
function centroid(atoms) {
  const c = new THREE.Vector3();
  for (const a of atoms) c.add(new THREE.Vector3(a.x, a.y, a.z));
  return c.multiplyScalar(1 / atoms.length);
}
function caChains(atoms) {
  const byChain = new Map();
  for (const a of atoms) {
    if (a.name !== "CA") continue;
    if (!byChain.has(a.chain)) byChain.set(a.chain, []);
    byChain.get(a.chain).push(a);
  }
  const out = [];
  for (const [, arr] of byChain) {
    arr.sort((x, y) => x.res - y.res);
    if (arr.length > 3) out.push(arr.map((a) => new THREE.Vector3(a.x, a.y, a.z)));
  }
  return out;
}
function buildProtein(model, atoms) {
  const c = centroid(atoms);
  const chains = caChains(atoms);
  chains.forEach((pts) => {
    const p = pts.map((v) => v.clone().sub(c));
    // tubo con degradado N -> C (esmeralda -> azul -> menta)
    const curve = new THREE.CatmullRomCurve3(p, false, "catmullrom", 0.15);
    const segs = Math.max(64, p.length * 12);
    const geo = new THREE.TubeGeometry(curve, segs, 0.6, 18, false);
    const colors = [];
    const cA = new THREE.Color(0x35e6a8), cB = new THREE.Color(0x57c8ff), cC = new THREE.Color(0x9affd6);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const tt = (i / (pos.count - 1));
      const col = tt < 0.5 ? cA.clone().lerp(cB, tt * 2) : cB.clone().lerp(cC, (tt - 0.5) * 2);
      colors.push(col.r, col.g, col.b);
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.0,
      color: 0xffffff, roughness: 0.3, metalness: 0.0
    });
    mat.emissive = new THREE.Color(0x2fe6ad); mat.emissiveIntensity = 1.55;
    model.add(new THREE.Mesh(geo, mat));
  });
  // nube de átomos tenue
  const pos = new Float32Array(atoms.length * 3), col = new Float32Array(atoms.length * 3);
  const tmp = new THREE.Color();
  atoms.forEach((a, i) => {
    pos[i * 3] = a.x - c.x; pos[i * 3 + 1] = a.y - c.y; pos[i * 3 + 2] = a.z - c.z;
    tmp.setHex(ELEMENT_COLORS[a.el] || 0x9fe6d4);
    col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  model.add(new THREE.Points(g, new THREE.PointsMaterial({
    size: 0.34, vertexColors: true, transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
  })));
  const box = new THREE.Box3().setFromObject(model);
  return box.getBoundingSphere(new THREE.Sphere()).radius || 18;
}

/* --------------------------------------------------------------- montar */
export async function mountBio3D(container, opts) {
  const kind = opts.kind === "protein" ? "protein" : "dna";
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) { return null; }

  let atoms = null;
  if (kind === "protein") {
    try { atoms = parsePDB(await (await fetch(opts.src)).text()); } catch (e) { return null; }
    if (!atoms || !atoms.length) return null;
  }

  const w = container.clientWidth || 480, h = container.clientHeight || 520;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.domElement.className = "bio3d-canvas";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 5000);
  scene.add(new THREE.AmbientLight(0x1e4a44, 1.5));
  const key = new THREE.PointLight(0x5affd6, 2.0, 0, 2); key.position.set(6, 10, 14); scene.add(key);
  const fill = new THREE.PointLight(0x5ab8ff, 1.1, 0, 2); fill.position.set(-9, -6, 8); scene.add(fill);

  const model = new THREE.Group();
  scene.add(model);
  const radius0 = kind === "dna" ? buildDNA(model) : buildProtein(model, atoms);
  model.rotation.x = 0.16;

  // polvo de fondo
  const dust = (() => {
    const N = 180, p = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = radius0 * (1.6 + Math.random() * 2.6);
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(ph) * Math.cos(th);
      p[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      p[i * 3 + 2] = r * Math.cos(ph);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({
      size: 0.5, color: 0x35e6b0, transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(pts);
    return pts;
  })();

  camera.position.set(0, radius0 * 0.04, radius0 / Math.sin((camera.fov * Math.PI) / 360) * (kind === "dna" ? 1.24 : 1.12));
  camera.lookAt(0, 0, 0);

  const composer = new EffectComposer(renderer);
  composer.setSize(w, h);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.58, 0.5, 0.24));
  composer.addPass(new OutputPass());

  let raf = 0, running = false, last = performance.now();
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
  function onPointer(e) {
    const r = container.getBoundingClientRect();
    tilt.tx = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
    tilt.ty = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
  }
  if (!REDUCED) container.addEventListener("pointermove", onPointer);

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    model.rotation.y += (kind === "dna" ? 0.36 : 0.26) * dt;
    tilt.x += (tilt.ty - tilt.x) * 0.05;
    tilt.y += (tilt.tx - tilt.y) * 0.05;
    model.rotation.x = 0.16 + tilt.x + Math.sin(now * 0.00018) * 0.04;
    model.position.y = Math.sin(now * 0.0006) * radius0 * 0.015;
    dust.rotation.y -= 0.02 * dt;
    composer.render();
  }
  function start() { if (!running && !REDUCED) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

  composer.render();
  container.classList.add("bio3d-ready");

  const io = new IntersectionObserver((es) => { es[0].isIntersecting ? start() : stop(); }, { threshold: 0.04 });
  io.observe(container);
  const ro = new ResizeObserver(() => {
    const nw = container.clientWidth, nh = container.clientHeight;
    if (!nw || !nh) return;
    renderer.setSize(nw, nh); composer.setSize(nw, nh);
    camera.aspect = nw / nh; camera.updateProjectionMatrix();
    if (!running) composer.render();
  });
  ro.observe(container);

  return {
    destroy() {
      stop(); io.disconnect(); ro.disconnect();
      container.removeEventListener("pointermove", onPointer);
      renderer.dispose(); if (composer.dispose) composer.dispose();
      renderer.domElement.remove();
      container.classList.remove("bio3d-ready");
    }
  };
}
