# Imágenes del portafolio

Estas imágenes ya están puestas (las armé desde tu carpeta `fotos/`).
Si querés cambiar alguna, reemplazá el archivo con **el mismo nombre**.

| Archivo | Se usa en | Foto actual |
|---|---|---|
| `hilary-retrato.jpg` | «Sobre mí» (retrato) | Vos en bata, laboratorio |
| `proyecto-vaccinegenics.png` | Proyecto VaccineGenics | Captura real de la app (Streamlit) |
| `proyecto-neurohunter.png` | Proyecto NeuroHunter PRO | Captura real de la app (Streamlit) |
| `proyecto-myconexus.png` | Proyecto MycoNexus | Captura real del sitio (myconexuscr.com) |
| `entrevista-canal13.jpg` | Medios · entrevista Canal 13 | Vos en el set de «Su Lado Positivo» |
| `divulgacion-1.jpg` | Fungi + Naturaleza · Hilary ConCiencia | *Amanita muscaria* — P.N. Volcán Irazú |
| `divulgacion-2.jpg` | Fungi + Naturaleza · Hilary ConCiencia | Ficha *Coprinellus disseminatus* |
| `divulgacion-3.jpg` | Fungi + Naturaleza · Hilary ConCiencia | «El verde no es del hongo» |
| `elements/adn-01.png` a `adn-04.png` | *(disponibles, sin usar — el hero ahora usa el ADN 3D de three.js)* | ADN azul/turquesa, varios estilos |
| `elements/cromosoma.png` | *(disponible, sin usar)* | Cromosoma azul en X |
| `elements/enzima-01.png` / `enzima-02.png` | *(disponibles, sin usar)* | Superficie molecular verde-violeta / violeta-verde |
| `prensa-ucimed-1.jpg` | Prensa · tarjeta de Instagram | Story de UCIMED sobre tu proyecto |
| `prensa-ucimed-2.jpg` | Prensa · tarjeta de LinkedIn | Story de UCIMED — Agents League Hackathon |
| `og-image.jpg` | Vista previa al compartir el link | (captura anterior de VaccineGenics) |
| `lab-bio-1.jpg` | *(disponible, sin usar aún)* | Vos en el lab con equipos |
| `favicon.svg` | Ícono de la pestaña | — |

> La sección de práctica en el Hospital México se quitó del sitio; las fotos
> `hospital-1..4.jpg` ya no se usan (se borraron de `assets/img/`, pero seguís
> teniéndolas en tu carpeta `fotos/`).

## El ADN del hero

El hero ya no usa imágenes en capas: es un modelo 3D real (three.js), la
misma librería que arma la proteína de Bioinformática. Está en
`assets/js/bio3d.js` (`buildDNA()`) y se monta en el `<div class="bio3d
bio3d-hero" data-bio3d="dna">` de `index.html`. Las imágenes de
`elements/` quedaron disponibles por si más adelante querés usarlas en
otra sección (por ejemplo, Fungi).

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
