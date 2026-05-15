# Carpeta /public/modelos/ — fotos individuales de cada modelo

Foto de catálogo de cada modelo individual. Se usa en:
- `/series/[slug]` — página de cada serie, mostrando todos los modelos
- `Catálogo preview` del home
- Configurador (recomendación final)

---

## Archivos esperados (13 fotos)

| Archivo  | Modelo       | Serie | Nota                     |
|----------|--------------|-------|--------------------------|
| `e2.jpg` | E2           | E     | Base agua                |
| `e3.jpg` | E3           | E     | Base agua                |
| `k1.jpg` | K1           | K     | Base agua                |
| `k2.jpg` | K2           | K     | Base agua                |
| `k3.jpg` | K3           | K     | Base agua                |
| `g.jpg`  | G            | G     | Personalizable industria |
| `t1.jpg` | T1           | T     | UV — modelo destacado    |
| `t2.jpg` | T2           | T     | UV                       |
| `t3.jpg` | T3           | T     | UV                       |
| `w1.jpg` | W1           | W     | UV                       |
| `w2.jpg` | W2           | W     | UV                       |
| `wf.jpg` | WF (Wide-FB) | W     | UV — gran formato        |
| `fb.jpg` | FB           | FB    | Suelos                   |

> Si no hay foto para algún modelo, dejarlo. El código tiene fallback.

---

## Especificaciones técnicas

- **Resolución**: 1200 × 1500 px (ratio 4:5 vertical) o 1500 × 1500 px
  (cuadrado).
- **Peso máximo**: 200 KB por foto.
- **Formato**: JPG (calidad ~80%) o WebP.
- **Fondo**: neutro (blanco, gris claro o el taller). Coherencia entre
  todas las fotos del set: o todas con fondo, o todas sin fondo.

### Encuadre recomendado

- La máquina ocupa el 70-80% del frame.
- Vista frontal o ligero 3/4 (15-30° de giro).
- Iluminación uniforme, sin sombras duras.
- Pantalla integrada visible si la tiene (modelos T, W).

---

## Naming convention

- Minúsculas, sin acentos, sin espacios.
- Una sola palabra: `e2.jpg`, `t1.jpg`, etc.
- WF se escribe `wf.jpg` (en minúsculas también).

---

## Después de subir

Avisa a Claude: "modelos subidos". Yo:
1. Actualizo `app/data/series.ts` añadiendo el path `image: "/modelos/e2.jpg"`
   en cada `ModelSpec`.
2. Actualizo los componentes que renderizan modelos para usar `<Image>`
   con esos paths.
3. Commit + push.
