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
| `elements/adn-01.png` | Hero · capa principal del ADN (paralaje) | ADN azul, estilo "cuentas" |
| `elements/adn-02.png` | *(de repuesto, sin usar)* | ADN azul/dorado ornamentado |
| `elements/adn-03.png` | Hero · capa de fondo con glow (paralaje) | ADN turquesa brillante |
| `elements/adn-04.png` | *(de repuesto, sin usar)* | ADN turquesa, estilo "cuentas" |
| `elements/cromosoma.png` | Hero · capa del cromosoma (paralaje) | Cromosoma azul en X |
| `elements/enzima-01.png` | Hero · capa de enzima/proteína (paralaje) | Superficie molecular verde-violeta |
| `elements/enzima-02.png` | Hero · capa de enzima/proteína (paralaje) | Superficie molecular violeta-verde |
| `prensa-ucimed-1.jpg` | Prensa · tarjeta de Instagram | Story de UCIMED sobre tu proyecto |
| `prensa-ucimed-2.jpg` | Prensa · tarjeta de LinkedIn | Story de UCIMED — Agents League Hackathon |
| `og-image.jpg` | Vista previa al compartir el link | (captura anterior de VaccineGenics) |
| `lab-bio-1.jpg` | *(disponible, sin usar aún)* | Vos en el lab con equipos |
| `favicon.svg` | Ícono de la pestaña | — |

> La sección de práctica en el Hospital México se quitó del sitio; las fotos
> `hospital-1..4.jpg` ya no se usan (se borraron de `assets/img/`, pero seguís
> teniéndolas en tu carpeta `fotos/`).

## Cambiar las capas del hero (paralaje)

Las 5 capas están en `index.html`, dentro de `<div class="hero-parallax">`.
Cada una es una imagen envuelta en un `<span class="pl-slot ...">`, con
`data-depth` (0 a 1: más alto = se mueve más, se siente más cerca). Para
cambiar cuál ADN se usa de principal o de fondo, solo cambiá el `src` de
`.pl-main` o `.pl-back` por `elements/adn-02.png` o `elements/adn-04.png`
(los dos que quedaron de repuesto).

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
