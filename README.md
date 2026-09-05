# Portafolio — Hilary Suárez

Sitio web personal, bilingüe (español / inglés), tema claro y oscuro.
Ciencia · Código · Impacto.

---

## Ver el sitio en tu computadora

Abrí `index.html` con doble clic. Para que todo funcione bien (idiomas, videos),
es mejor levantarlo con un servidor local:

```bash
# opción 1: Python
python -m http.server 8000

# opción 2: Node
npx serve
```

Luego abrí `http://localhost:8000`.

---

## Cómo actualizar el contenido

**Solo tenés que editar un archivo:** [`assets/js/content.js`](assets/js/content.js)

Ahí están, en un solo lugar y en los dos idiomas:

- tus datos y bio
- áreas de experiencia
- habilidades
- proyectos (VaccineGenics, NeuroHunter PRO, MycoNexus)
- líneas de investigación
- práctica en el Hospital México + fotos
- medios: videos de YouTube, prensa (UCIMED) y la serie de divulgación «Hilary ConCiencia»
- congresos (COMPAC 2026 + hackathon)
- formación académica, experiencia laboral y certificaciones

Cada texto tiene versión `es:` y `en:`. Donde dice **`PENDIENTE`** falta un dato tuyo.

### Cosas que faltan por completar (`PENDIENTE`)

| Dónde | Qué falta |
|---|---|
| `projects[].links` | Repos de GitHub de cada proyecto, si querés enlazarlos |
| `profile.links.youtube` | Tu canal de YouTube, si tenés uno (opcional) |

Ya están puestos: LinkedIn, GitHub, Instagram, ORCID · los dos congresos reales
con fechas (COMPAC 2026 y Congreso Internacional de Biotecnología CR 2026) · el
**DOI 10.5281/zenodo.22089990** del trabajo de MPS II · las fechas de los dos
videos · la práctica de 4 meses en el Hospital México con sus servicios.

**Fotos:** ya están integradas (16 fotos de tu carpeta `fotos/`, repartidas en
retrato, proyectos, práctica en el Hospital México, prensa de UCIMED y la serie
de divulgación «Hilary ConCiencia»). Detalle en [assets/img/README.md](assets/img/README.md).
La carpeta `fotos/` con los originales podés borrarla cuando quieras.

**Documentos de congresos** (en `assets/docs/`, enlazados desde Congresos y
Proyectos):
- `abstract-compac-2026-mps-ii.html` — resumen del póster de MPS II (COMPAC 2026).
- `aceptacion-biotecnologia-2026-myconexus.html` — carta de aceptación de MycoNexus / «MycoLab CR».

Si preferís los PDF oficiales, guardalos en `assets/docs/` y cambiá `.html` por
`.pdf` en las líneas correspondientes de `content.js`.

Los textos de la interfaz (menú, botones, títulos de sección) están en
[`assets/js/i18n.js`](assets/js/i18n.js).

---

## Fotos

Van en [`assets/img/`](assets/img/) con los nombres exactos que se listan en
[`assets/img/README.md`](assets/img/README.md). Mientras falte una foto, se
muestra un placeholder con la marca; no se rompe nada.

---

## Publicar el sitio (gratis, con tu propio dominio)

El sitio es 100 % estático (sin build). Ya trae config para **Vercel** y **Render**.

### Opción A — Vercel (recomendada)

**Con la CLI (rápido, sin GitHub):**
```bash
npm i -g vercel
cd "Hilary Suarez portafolio"
vercel          # primera vez: seguí el asistente, aceptá los valores por defecto
vercel --prod   # publica la versión final
```

**Con GitHub:**
1. Subí la carpeta a un repositorio.
2. <https://vercel.com> → *Add New… → Project* → importás el repo.
3. Framework Preset: **Other**. Build Command: *(vacío)*. Output Directory: *(vacío / raíz)*.
4. *Deploy*. Dominio propio en *Project → Settings → Domains*.

El archivo [`vercel.json`](vercel.json) ya deja esto configurado.

### Opción B — Render

1. Subí la carpeta a un repositorio de GitHub/GitLab.
2. <https://dashboard.render.com> → *New → Static Site* → conectás el repo.
3. Build Command: *(vacío)* · Publish Directory: **`.`**
4. *Create Static Site*. Dominio propio en *Settings → Custom Domains*.

El archivo [`render.yaml`](render.yaml) permite crearlo como *Blueprint* sin tocar nada.

> **Formulario de contacto:** hoy abre tu correo con el mensaje ya escrito
> (funciona sin servidor). Si lo querés recibir automáticamente, creá una cuenta
> gratis en <https://formspree.io> o <https://www.web3forms.com> y te digo cómo conectarlo.

---

## Visores 3D (hero y Bioinformática)

- **Doble hélice de ADN** (hero) y **proteína GFP** (Bioinformática) son 3D reales
  con [three.js](https://threejs.org), que se carga desde CDN sólo cuando entran en
  pantalla. Código: [`assets/js/bio3d.js`](assets/js/bio3d.js).
- La proteína usa la estructura real `assets/models/gfp-1ema.pdb` (GFP, PDB 1EMA).
- Si no hay internet o WebGL, se muestra una ilustración de respaldo — el sitio no se rompe.

## CV

`assets/docs/cv.html` es tu CV completo como página (botón **CV** del menú). Si querés
un PDF, exportalo desde el navegador (Imprimir → Guardar como PDF) y enlazalo en su lugar.

## Estructura

```
.
├── index.html                  estructura de la página
├── vercel.json / render.yaml    config de despliegue
├── assets/
│   ├── css/styles.css          diseño (tema claro/oscuro)
│   ├── js/content.js           ← TU CONTENIDO (editá esto)
│   ├── js/i18n.js              textos de interfaz ES/EN
│   ├── js/main.js              lógica: render, idioma, tema, animaciones
│   ├── js/bio3d.js             visores 3D (ADN / proteína) con three.js
│   ├── img/                    tus fotos
│   ├── models/                 estructura PDB de la proteína
│   └── docs/                   CV + resúmenes de congresos
└── README.md
```
