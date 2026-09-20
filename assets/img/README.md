# Imágenes del portafolio

Estas imágenes ya están puestas (las armé desde tu carpeta `fotos/`).
Si querés cambiar alguna, reemplazá el archivo con **el mismo nombre**.

| Archivo | Se usa en | Foto actual |
|---|---|---|
| `hilary-retrato.jpg` | «Sobre mí» (retrato) | Vos en bata, laboratorio |
| `proyecto-vaccinegenics.png` | Proyecto VaccineGenics | Captura real de la app (Streamlit) |
| `proyecto-neurohunter.png` | Proyecto NeuroHunter PRO | Captura real de la app (Streamlit) |
| `proyecto-myconexus.png` | Proyecto MycoNexus | Captura real del sitio (myconexuscr.com) |
| `entrevista-canal13.jpg` | Medios · entrevista Canal 13 | **PENDIENTE** — ver nota abajo |
| `divulgacion-1.jpg` | Medios · Hilary ConCiencia | *Amanita muscaria* — P.N. Volcán Irazú |
| `divulgacion-2.jpg` | Medios · Hilary ConCiencia | Ficha *Coprinellus disseminatus* |
| `divulgacion-3.jpg` | Medios · Hilary ConCiencia | «El verde no es del hongo» |
| `prensa-ucimed-1.jpg` | Prensa · tarjeta de Instagram | Story de UCIMED sobre tu proyecto |
| `prensa-ucimed-2.jpg` | Prensa · tarjeta de LinkedIn | Story de UCIMED — Agents League Hackathon |
| `og-image.jpg` | Vista previa al compartir el link | (captura anterior de VaccineGenics) |
| `lab-bio-1.jpg` | *(disponible, sin usar aún)* | Vos en el lab con equipos |
| `favicon.svg` | Ícono de la pestaña | — |

> La sección de práctica en el Hospital México se quitó del sitio; las fotos
> `hospital-1..4.jpg` ya no se usan (se borraron de `assets/img/`, pero seguís
> teniéndolas en tu carpeta `fotos/`).

## Falta: foto de la entrevista de Canal 13

Guardá la foto del set de «Su Lado Positivo» como `assets/img/entrevista-canal13.jpg`
y va a aparecer sola en la tarjeta de Medios → Videos (ahora mismo muestra un
ícono de reemplazo, no está roto). Está referenciada en `content.js` →
`media.videos` → la entrada de Canal 13.

## Cambiar fotos de divulgación

En `assets/js/content.js`, array `media.divulgacion.posts`. Cada entrada es una
línea así:

```js
{ src: "assets/img/divulgacion-4.jpg", alt: { es: "Descripción", en: "Description" } },
```

## Consejos

- Comprimí antes de subir (https://squoosh.app), ideal < 300 KB por foto.
- La carpeta `fotos/` con los originales podés borrarla cuando quieras; el
  sitio ya no la necesita.
