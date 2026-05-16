# Carpeta /public/series/ — foto hero por cada serie

Foto principal de cada Serie. Se usa como hero en:
- `/series` (página catálogo)
- `/series/[slug]` (página de cada serie)
- Cards de Series en el home

---

## Archivos esperados (6 fotos)

| Archivo        | Serie | Tipo de tinta            |
|----------------|-------|--------------------------|
| `serie-e.jpg`  | E     | Base agua — Entry        |
| `serie-k.jpg`  | K     | Base agua — Compact      |
| `serie-g.jpg`  | G     | Personalizable industria |
| `serie-t.jpg`  | T     | UV — Tall                |
| `serie-w.jpg`  | W     | UV — Wide                |
| `serie-fb.jpg` | FB    | UV — Suelos              |

---

## Especificaciones técnicas

- **Resolución**: 2400 × 1600 px (ratio 3:2 horizontal) o
  2400 × 2400 px (cuadrado).
- **Peso máximo**: 400 KB.
- **Formato**: JPG o WebP.
- **Estilo**: foto en taller, con la máquina como protagonista. Puede
  ser una composición tipo lifestyle (la máquina trabajando, no foto
  catalográfica plana).
- **Coherencia**: todas las 6 con el mismo estilo de iluminación.

---

## Después de subir

Avisa a Claude: "series subidas". Yo:
1. Actualizo `app/data/series.ts` con `image: "/series/serie-e.jpg"` etc.
2. Actualizo `app/series/page.tsx` y `app/series/[slug]/page.tsx` para
   usar la imagen como hero.
3. Commit + push.
