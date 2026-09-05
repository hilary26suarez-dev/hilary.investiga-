/* =========================================================================
   main.js — render + interacciones
   No necesitás editar este archivo para actualizar contenido: usá content.js
   ========================================================================= */
(function () {
  "use strict";

  var C = window.CONTENT || {};
  var I18N = window.I18N || { es: {}, en: {} };

  var state = {
    lang: localStorage.getItem("hs-lang") || "es",
    theme: localStorage.getItem("hs-theme") || "dark"
  };
  if (state.lang !== "es" && state.lang !== "en") state.lang = "es";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------- helpers */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function el(tag, attrs) {
    var n = document.createElement(tag), i, kids = [].slice.call(arguments, 2);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.slice(0, 2) === "on" && typeof v === "function") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    });
    kids.forEach(function add(kid) {
      if (kid == null || kid === false) return;
      if (Array.isArray(kid)) return kid.forEach(add);
      n.appendChild(typeof kid === "string" ? document.createTextNode(kid) : kid);
    });
    return n;
  }

  function pick(v) {
    if (v && typeof v === "object" && ("es" in v || "en" in v)) return v[state.lang] || v.es || v.en || "";
    return v == null ? "" : v;
  }
  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || (I18N.es && I18N.es[key]) || key; }
  function deep(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }

  /* Placeholder branded (se usa si falta la foto real en assets/img/) */
  function phData(label) {
    var txt = String(label || "IMAGEN").replace(/[<&>]/g, "");
    var svgStr =
      "<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
      "<stop offset='0' stop-color='#0a1322'/><stop offset='1' stop-color='#0f2b2b'/></linearGradient></defs>" +
      "<rect width='100%' height='100%' fill='url(#g)'/>" +
      "<g fill='none' stroke='#5eead4' stroke-width='3' opacity='.18' transform='translate(500 500)'>" +
      "<path d='M-70 -260c140 70 140 130 0 200s-140 130 0 200s140 130 0 200'/>" +
      "<path d='M70 -260c-140 70-140 130 0 200s140 130 0 200s-140 130 0 200'/>" +
      "<path d='M-52 -190h104M-52 -60h104M-52 70h104M-52 200h104'/></g>" +
      "<text x='50%' y='49%' fill='#5eead4' font-family='monospace' font-size='34' letter-spacing='1' text-anchor='middle'>" + txt + "</text>" +
      "<text x='50%' y='53%' fill='#6f8296' font-family='monospace' font-size='18' text-anchor='middle'>assets/img/</text></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svgStr);
  }
  function imgEl(src, alt, label) {
    var im = el("img", { src: src, alt: alt, loading: "lazy" });
    im.addEventListener("error", function () {
      if (im.dataset.ph) return;
      im.dataset.ph = "1";
      im.src = phData(label || alt);
    });
    return im;
  }

  /* --------------------------------------------------------------- icons */
  var ICON = {
    dna: '<path d="M4 3c0 5 16 6 16 9S4 18 4 21M20 3c0 5-16 6-16 9s16 4 16 9M6.5 6h11M7.5 9h9M7.5 15h9M6.5 18h11"/>',
    pill: '<path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7ZM8 8l8 8"/>',
    code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    brain: '<path d="M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3 3 0 0 0 7 18a3 3 0 0 0 5.5 0V4.5A2.5 2.5 0 0 0 9.5 4ZM14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3 3 0 0 1 17 18a3 3 0 0 1-5 2"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M7.5 15h9"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1ZM14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14"/>',
    email: '<path d="M3 6h18v12H3zM3 7l9 6 9-6"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
    github: '<path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 3.6 5.3 3.9 5.3 3.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 10.3c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/>',
    tiktok: '<path d="M15 4c.5 2.5 2 4 4.5 4.2M15 4v10.5a4.5 4.5 0 1 1-4.5-4.5c.5 0 1 .1 1.5.2M15 4h-2.5"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M9 8.5v7M9 6.6v.01M12 8.5v7h1.8a3.5 3.5 0 0 0 0-7H12Z"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    open: '<path d="M4 7a2 2 0 0 1 2-2h5v14H6a2 2 0 0 0-2 2V7Z"/><path d="M20 7a2 2 0 0 0-2-2h-5v14h5a2 2 0 0 1 2 2V7Z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/><circle cx="12" cy="12" r="3"/>',
    women: '<circle cx="12" cy="7" r="4"/><path d="M12 11v8M9 16h6"/>'
  };
  function svg(name, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 20) + '" height="' + (size || 20) +
      '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICON[name] || ICON.web) + "</svg>";
  }

  /* --------------------------------------------------- i18n estático + perfil */
  function applyStaticI18n() {
    $$("[data-i18n]").forEach(function (n) {
      var v = I18N[state.lang][n.getAttribute("data-i18n")];
      if (v != null) n.textContent = v;
    });
    document.documentElement.lang = state.lang;
    document.title = state.lang === "es"
      ? "Hilary Suárez — Biotecnología, bioinformática y programación"
      : "Hilary Suárez — Biotechnology, bioinformatics and programming";
  }

  function applyContent() {
    $$("[data-content]").forEach(function (n) {
      var val = pick(deep(C, n.getAttribute("data-content")));
      if (/<[a-z][\s\S]*>/i.test(val)) n.innerHTML = val;
      else n.textContent = val;
    });
  }

  /* ------------------------------------------------------------- renderers */
  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

  function renderAreas() {
    var g = $("#expertiseGrid"); if (!g) return; clear(g);
    (C.areas || []).forEach(function (a, i) {
      var card = el("article", { class: "exp-card reveal" },
        el("span", { class: "exp-icon", html: svg(a.icon, 24) }),
        el("h3", { text: pick(a.title) }),
        el("p", { text: pick(a.desc) })
      );
      card.style.setProperty("--i", i);
      g.appendChild(card);
    });
  }

  function renderValues() {
    var g = $("#valueList"); if (!g) return; clear(g);
    (C.values || []).forEach(function (v) {
      g.appendChild(el("li", {},
        el("span", { class: "value-ico", html: svg(v.icon, 18) }),
        el("span", { text: pick(v.text) })
      ));
    });
  }

  function renderSkills() {
    var w = $("#skillsWrap"); if (!w) return; clear(w);
    (C.skills || []).forEach(function (s) {
      var chips = (s.items || []).map(function (it) {
        return el("li", { text: pick(it) });
      });
      w.appendChild(el("div", { class: "skill-group reveal" },
        el("h4", { text: pick(s.group) }),
        el("ul", { class: "chips" }, chips)
      ));
    });
  }

  function projectCard(p) {
    var links = (p.links || []).map(function (l) {
      return el("a", { class: "card-link", href: l.url, target: "_blank", rel: "noopener",
        html: pick(l.label) + " " + svg("external", 14) });
    });
    var tags = (p.tags || []).map(function (tg) { return el("span", { class: "tag", text: tg }); });
    return el("article", { class: "proj-card reveal" },
      el("div", { class: "proj-media" },
        imgEl(p.image, p.name, p.name),
        el("span", { class: "proj-badge", text: p.name })
      ),
      el("div", { class: "proj-body" },
        el("p", { class: "proj-context", text: pick(p.context) }),
        el("h4", { text: p.name }),
        el("p", { class: "proj-desc", text: pick(p.desc) }),
        el("div", { class: "tag-row" }, tags),
        links.length ? el("div", { class: "card-links" }, links) : null
      )
    );
  }
  function renderProjects(area, sel) {
    var g = $(sel); if (!g) return; clear(g);
    (C.projects || []).filter(function (p) { return (p.areas || []).indexOf(area) > -1; })
      .forEach(function (p) { g.appendChild(projectCard(p)); });
  }

  function renderResearch() {
    var g = $("#researchLines"); if (!g) return; clear(g);
    (C.research || []).forEach(function (r, i) {
      g.appendChild(el("article", { class: "research-card reveal" },
        el("span", { class: "research-num", text: String(i + 1).padStart(2, "0") }),
        el("h4", { text: pick(r.title) }),
        el("p", { text: pick(r.body) })
      ));
    });
  }

  function renderHospital() {
    var meta = $("#hospitalMeta");
    if (meta) {
      var parts = [deep(C, "hospital.place"), pick(deep(C, "hospital.period"))].filter(Boolean);
      meta.textContent = parts.join("  ·  ");
    }
    var rot = $("#hospitalRotations");
    if (rot) {
      clear(rot);
      (deep(C, "hospital.rotations") || []).forEach(function (r) {
        rot.appendChild(el("li", { text: pick(r) }));
      });
    }
    var g = $("#hospitalGallery"); if (!g) return; clear(g);
    (deep(C, "hospital.photos") || []).forEach(function (ph, i) {
      g.appendChild(el("figure", { class: "gal-item reveal" },
        imgEl(ph.src, pick(ph.alt), "HOSPITAL " + (i + 1)),
        el("figcaption", { text: pick(ph.alt) })
      ));
    });
  }

  function ytFacade(id, title) {
    var wrap = el("button", { class: "yt", type: "button", "aria-label": t("ui.watch") + ": " + title });
    wrap.style.backgroundImage = "url(https://i.ytimg.com/vi/" + id + "/hqdefault.jpg)";
    wrap.appendChild(el("span", { class: "yt-play", html: '<svg viewBox="0 0 68 48" width="60" aria-hidden="true"><path d="M66 7.4A8 8 0 0 0 60.4 1.8C55.5.5 34 .5 34 .5s-21.5 0-26.4 1.3A8 8 0 0 0 2 7.4 83 83 0 0 0 .7 24 83 83 0 0 0 2 40.6a8 8 0 0 0 5.6 5.6C12.5 47.5 34 47.5 34 47.5s21.5 0 26.4-1.3a8 8 0 0 0 5.6-5.6A83 83 0 0 0 67.3 24 83 83 0 0 0 66 7.4Z" fill="#f00"/><path d="M27 34 45 24 27 14Z" fill="#fff"/></svg>' }));
    wrap.addEventListener("click", function () {
      var f = el("iframe", {
        src: "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0",
        title: title, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "", frameborder: "0"
      });
      wrap.replaceWith(f);
    });
    return wrap;
  }

  function renderVideos() {
    var g = $("#videoGrid"); if (!g) return; clear(g);
    (deep(C, "media.videos") || []).forEach(function (v) {
      g.appendChild(el("article", { class: "video-card reveal" },
        el("div", { class: "video-frame" }, ytFacade(v.youtubeId, pick(v.title))),
        el("div", { class: "video-body" },
          el("p", { class: "video-src", text: pick(v.source) + (v.date ? " · " + pick(v.date) : "") }),
          el("h4", { text: pick(v.title) }),
          el("p", { class: "video-desc", text: pick(v.desc) }),
          el("a", { class: "card-link", href: "https://youtu.be/" + v.youtubeId, target: "_blank", rel: "noopener",
            html: t("ui.watch") + " " + svg("external", 14) })
        )
      ));
    });
  }

  function renderPress() {
    var g = $("#pressGrid"); if (!g) return; clear(g);
    (deep(C, "media.press") || []).forEach(function (p) {
      var card = el("a", { class: "press-card reveal" + (p.image ? " has-media" : ""),
          href: p.url, target: "_blank", rel: "noopener" },
        p.image ? el("span", { class: "press-media" }, imgEl(p.image, pick(p.title), p.outlet)) : null,
        el("span", { class: "press-row" },
          el("span", { class: "press-icon", html: svg(p.platform || "web", 20) }),
          el("div", {},
            el("p", { class: "press-outlet", text: p.outlet + (p.date ? " · " + p.date : "") }),
            el("h4", { text: pick(p.title) }),
            el("p", { class: "press-desc", text: pick(p.desc) })
          ),
          el("span", { class: "press-go", html: svg("external", 16) })
        )
      );
      g.appendChild(card);
    });
  }

  function renderDivulgacion() {
    var g = $("#divulgacionBlock"); if (!g) return; clear(g);
    var d = deep(C, "media.divulgacion"); if (!d) return;
    var posts = (d.posts || []).map(function (p) {
      return el("a", { class: "divu-item", href: d.url, target: "_blank", rel: "noopener" },
        imgEl(p.src, pick(p.alt), "DIVULGACIÓN"));
    });
    g.appendChild(el("div", { class: "divu-intro reveal" },
      el("p", { text: pick(d.blurb) }),
      el("a", { class: "card-link", href: d.url, target: "_blank", rel: "noopener",
        html: t("ui.follow") + " · " + (d.handle || "") + " " + svg("external", 14) })
    ));
    g.appendChild(el("div", { class: "divu-grid reveal" }, posts));
  }

  function renderCongresos() {
    var g = $("#congresosTimeline"); if (!g) return; clear(g);
    (C.congresos || []).forEach(function (c) {
      g.appendChild(el("li", { class: "tl-item reveal" },
        el("span", { class: "tl-date", text: pick(c.date) }),
        el("div", { class: "tl-body" },
          el("h4", { text: pick(c.event) }),
          el("p", { class: "tl-role", text: pick(c.role) }),
          el("p", { class: "tl-talk", text: pick(c.talk) }),
          el("p", { class: "tl-place", text: pick(c.place) }),
          c.doi ? el("p", { class: "tl-doi" },
            "DOI: ",
            el("a", { href: "https://doi.org/" + c.doi, target: "_blank", rel: "noopener", text: c.doi })
          ) : null,
          c.url ? el("a", { class: "card-link", href: c.url,
              target: c.url.slice(0, 4) === "http" ? "_blank" : null, rel: "noopener",
              html: t("ui.abstract") + " " + svg("external", 14) }) : null
        )
      ));
    });
  }

  function renderTimeline(list, sel, mapper) {
    var g = $(sel); if (!g) return; clear(g);
    (list || []).forEach(function (x) {
      var m = mapper(x);
      g.appendChild(el("li", { class: "tl-item reveal" },
        el("span", { class: "tl-date", text: m.date }),
        el("div", { class: "tl-body" },
          el("h4", { text: m.title }),
          el("p", { class: "tl-role", text: m.org })
        )
      ));
    });
  }
  function renderEducation() {
    renderTimeline(C.education, "#educationList", function (e) {
      return { date: pick(e.period), title: pick(e.title), org: e.org };
    });
  }
  function renderWork() {
    renderTimeline(C.work, "#workList", function (w) {
      return { date: pick(w.period), title: pick(w.role), org: w.org };
    });
  }

  function renderCerts() {
    var g = $("#certGroups"); if (!g) return; clear(g);
    (C.certifications || []).forEach(function (grp) {
      var rows = (grp.items || []).map(function (it) {
        return el("li", {},
          el("span", { class: "cert-name", text: pick(it.name) }),
          el("span", { class: "cert-meta", text: it.org + (pick(it.date) && pick(it.date) !== "—" ? " · " + pick(it.date) : "") })
        );
      });
      g.appendChild(el("div", { class: "cert-group reveal" },
        el("h5", { text: pick(grp.group) }),
        el("ul", {}, rows)
      ));
    });
  }

  function socialItems() {
    var links = deep(C, "profile.links") || {};
    var order = ["email", "linkedin", "github", "instagram", "youtube", "orcid", "researchgate", "scholar"];
    var labels = { email: "Email", linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram",
      youtube: "YouTube", orcid: "ORCID", researchgate: "ResearchGate", scholar: "Google Scholar" };
    return order.filter(function (k) { return links[k]; }).map(function (k) {
      return { key: k, url: links[k], label: labels[k], icon: ICON[k] ? k : "web" };
    });
  }
  function renderContactLinks() {
    var g = $("#contactLinks"); if (!g) return; clear(g);
    var loc = pick(deep(C, "profile.location"));
    if (loc) g.appendChild(el("li", { class: "contact-loc", html: svg("web", 18) + "<span>" + loc + "</span>" }));
    socialItems().forEach(function (s) {
      g.appendChild(el("li", {},
        el("a", { href: s.url, target: s.key === "email" ? null : "_blank", rel: "noopener",
          html: svg(s.icon, 18) + "<span>" + s.label + "</span>" })
      ));
    });
  }
  function renderFooterSocial() {
    var g = $("#footerSocial"); if (!g) return; clear(g);
    socialItems().forEach(function (s) {
      g.appendChild(el("li", {},
        el("a", { href: s.url, target: s.key === "email" ? null : "_blank", rel: "noopener",
          "aria-label": s.label, html: svg(s.icon, 18) })
      ));
    });
  }

  function renderAll() {
    renderValues(); renderAreas(); renderSkills();
    renderProjects("bioinformatica", "#bioProjects");
    renderProjects("programacion", "#progProjects");
    renderResearch(); renderHospital();
    renderVideos(); renderPress(); renderDivulgacion(); renderCongresos();
    renderEducation(); renderWork(); renderCerts();
    renderContactLinks(); renderFooterSocial();
    observeReveals();
  }

  /* --------------------------------------------------------- interacciones */
  function setTheme(th) {
    state.theme = th;
    document.documentElement.setAttribute("data-theme", th);
    localStorage.setItem("hs-theme", th);
  }
  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("hs-lang", lang);
    var cur = $(".lang-current"); if (cur) cur.textContent = lang.toUpperCase();
    var lt = $("#langToggle"); if (lt) lt.setAttribute("aria-label", t("ui.langLabel"));
    applyStaticI18n();
    applyContent();
    renderAll();
  }

  function initHeader() {
    var header = $("#siteHeader");
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = $("#navBurger"), nav = $("#mainNav");
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#mainNav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initScrollSpy() {
    var links = $$('.main-nav a[href^="#"]');
    var map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var secs = $$("main section[id]");
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          if (map[e.target.id]) map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { io.observe(s); });
  }

  var revealIO;
  function observeReveals() {
    var items = $$(".reveal:not(.in-view)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("in-view"); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in-view"); revealIO.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    items.forEach(function (n) { revealIO.observe(n); });
  }

  function initBio3D() {
    var nodes = $$("[data-bio3d]");
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    // Sin WebGL: dejar el fallback y no cargar three.js
    try {
      var c = document.createElement("canvas");
      if (!(c.getContext("webgl2") || c.getContext("webgl"))) return;
    } catch (e) { return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var elm = en.target;
        io.unobserve(elm);
        import("./bio3d.js").then(function (mod) {
          return mod.mountBio3D(elm, { kind: elm.getAttribute("data-bio3d"), src: elm.getAttribute("data-src") });
        }).catch(function () { elm.classList.add("bio3d-error"); });
      });
    }, { rootMargin: "300px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function initContactForm() {
    var form = $("#contactForm"); if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var to = deep(C, "profile.email") || "";
      var subject = encodeURIComponent(t("ui.mailSubject") + " — " + (fd.get("name") || ""));
      var body = encodeURIComponent(
        (fd.get("message") || "") + "\n\n— " + (fd.get("name") || "") + " (" + (fd.get("email") || "") + ")"
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------------------------------------------------------------- init */
  document.addEventListener("DOMContentLoaded", function () {
    setTheme(state.theme);
    var cur = $(".lang-current"); if (cur) cur.textContent = state.lang.toUpperCase();

    $("#themeToggle").addEventListener("click", function () {
      setTheme(state.theme === "dark" ? "light" : "dark");
    });
    $("#langToggle").addEventListener("click", function () {
      setLang(state.lang === "es" ? "en" : "es");
    });

    applyStaticI18n();
    applyContent();
    renderAll();

    // retrato: placeholder de marca si aún no está la foto
    var portrait = $(".portrait-frame img");
    if (portrait) portrait.addEventListener("error", function () {
      if (portrait.dataset.ph) return;
      portrait.dataset.ph = "1";
      portrait.src = phData("RETRATO");
    });

    initHeader();
    initScrollSpy();
    initContactForm();
    initBio3D();

    var y = $("#year"); if (y) y.textContent = "© " + new Date().getFullYear();
  });
})();
