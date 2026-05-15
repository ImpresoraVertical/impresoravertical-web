# Carpeta /public/taller/ — ambiente del taller de Les Preses

Fotos de ambiente que dan identidad de marca y refuerzan la cercanía
(taller propio en España, equipo trabajando, máquinas en exhibición).

Se usa en:
- Home → bloque "El taller en Les Preses" (`Taller.tsx`)
- `/sobre-itech`
- Hero de fondo opcional

---

## Archivos esperados

| Archivo                | Uso                                        |
|------------------------|--------------------------------------------|
| `taller-hero.jpg`      | Foto panorámica del taller (uso destacado) |
| `taller-equipo.jpg`    | Equipo trabajando con un cliente           |
| `taller-maquinas.jpg`  | Varias máquinas en exhibición              |
| `taller-formacion.jpg` | Curso / formación en el taller             |
| `taller-1.jpg` `taller-2.jpg` … | Extras para galería interna       |

Mínimo 3-4 fotos. Cuantas más, mejor para componer una galería.

---

## Especificaciones técnicas

- **Resolución**: 2400 × 1600 px (horizontal 3:2).
- **Peso máximo**: 400 KB.
- **Formato**: JPG o WebP.
- **Estilo**: luz natural si es posible. Mostrar el taller real, sin
  retocar tipo "render". Auténtico vende más.

---

## Después de subir

Avisa a Claude: "taller subido". Yo:
1. Actualizo `app/components/home/Taller.tsx` para usar `taller-hero.jpg`
   (en vez del placeholder actual).
2. Actualizo `app/sobre-itech/page.tsx` para mostrar galería.
3. Commit + push.
