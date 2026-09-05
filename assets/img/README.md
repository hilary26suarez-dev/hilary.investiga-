# Imágenes del portafolio

Estas imágenes ya están puestas (las armé desde tu carpeta `fotos/`).
Si querés cambiar alguna, reemplazá el archivo con **el mismo nombre**.

| Archivo | Se usa en | Foto actual |
|---|---|---|
| `hilary-retrato.jpg` | «Sobre mí» (retrato) | Vos en bata, laboratorio |
| `proyecto-vaccinegenics.jpg` | Proyecto VaccineGenics | Vos en el lab con microscopios y monitor |
| `proyecto-neurohunter.jpg` | Proyecto NeuroHunter PRO | Vista al microscopio (tinción H&E) |
| `proyecto-myconexus.jpg` | Proyecto MycoNexus | Pantalla con hifas + laptop con análisis |
| `hospital-1.jpg` | Práctica Hospital México | Vos frente al rótulo «HOSPITAL MÉXICO» |
| `hospital-2.jpg` | Práctica Hospital México | Rótulo del hospital (plano más abierto) |
| `hospital-3.jpg` | Práctica Hospital México | Vos en el laboratorio clínico (microscopio Olympus) |
| `hospital-4.jpg` | Práctica Hospital México | Vos en el laboratorio (microscopio grande) |
| `divulgacion-1.jpg` | Medios · Hilary ConCiencia | *Amanita muscaria* — P.N. Volcán Irazú |
| `divulgacion-2.jpg` | Medios · Hilary ConCiencia | Ficha *Coprinellus disseminatus* |
| `divulgacion-3.jpg` | Medios · Hilary ConCiencia | «El verde no es del hongo» |
| `prensa-ucimed-1.jpg` | Prensa · tarjeta de Instagram | Story de UCIMED sobre tu proyecto |
| `prensa-ucimed-2.jpg` | Prensa · tarjeta de LinkedIn | Story de UCIMED — Agents League Hackathon |
| `og-image.jpg` | Vista previa al compartir el link | (igual que VaccineGenics) |
| `lab-bio-1.jpg` | *(disponible, sin usar aún)* | Vos en el lab con equipos |
| `favicon.svg` | Ícono de la pestaña | — |

## Cambiar fotos de la galería del hospital o de divulgación

En `assets/js/content.js`:
- galería del hospital → array `hospital.photos`
- divulgación → array `media.divulgacion.posts`

Cada entrada es una línea así:

```js
{ src: "assets/img/hospital-5.jpg", alt: { es: "Descripción", en: "Description" } },
```

## Consejos

- Comprimí antes de subir (https://squoosh.app), ideal < 300 KB por foto.
- La carpeta `fotos/` con los originales podés borrarla cuando quieras; el
  sitio ya no la necesita.
