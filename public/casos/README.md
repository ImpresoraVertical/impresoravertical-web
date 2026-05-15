# Carpeta /public/casos/ — fotos de los 9 casos reales

Una foto por cada caso de uso del bloque "Aplicaciones y superficies"
del home. Ahora mismo son sólo cards de texto — con foto el bloque pasa
a ser mucho más persuasivo.

Se usa en:
- Home → componente `Galeria.tsx` (bloque 02 · Casos de uso)
- `/casos-cliente` (página completa)

---

## Archivos esperados (9 fotos)

| Archivo            | Caso                            | Idea de foto                                  |
|--------------------|---------------------------------|-----------------------------------------------|
| `caso-barcos.jpg`  | Barcos y embarcaciones          | Camarote o panel decorado en yate             |
| `caso-museos.jpg`  | Museos y espacios culturales    | Sala expositiva con mural impreso             |
| `caso-remolques.jpg` | Remolques y autocaravanas     | Food truck con branding lateral               |
| `caso-skate.jpg`   | Tablas de skate y deporte       | Detalle de tabla impresa                      |
| `caso-persianas.jpg` | Persianas comerciales         | Rotulación impresa sobre persiana metálica    |
| `caso-escuelas.jpg`| Escuelas / centros educativos   | Pasillo de cole con mural educativo           |
| `caso-hospitales.jpg` | Hospitales / sanitarios      | Paritorio o sala pediátrica decorada          |
| `caso-pabellones.jpg` | Pabellones deportivos        | Pabellón con branding deportivo en pared      |
| `caso-arte.jpg`    | Réplicas de cuadros y arte      | Réplica colgada o detalle ampliado            |

---

## Especificaciones técnicas

- **Resolución**: 1600 × 1200 px (ratio 4:3) o 1500 × 1500 px (cuadrado).
- **Peso máximo**: 250 KB.
- **Formato**: JPG o WebP.
- **Estilo**: foto del **resultado real** (no la máquina). Lo que el
  cliente final ve. Si no hay foto del proyecto exacto, vale una foto
  del mismo tipo de superficie en otro contexto.
- **Composición**: que se vea el mural / impresión claramente, no
  recortado.

---

## Si no hay foto para algún caso

Está bien dejar el archivo sin subir. El código ya tiene fallback:
muestra solo el texto. Lo importante es subir las que sí tengas.

---

## Después de subir

Avisa a Claude: "casos subidos: [lista de los que has subido]". Yo:
1. Actualizo `app/components/home/Galeria.tsx` añadiendo el path de cada
   imagen al array `CASOS`.
2. Cambio las cards para mostrar la imagen + texto en overlay.
3. Actualizo `app/casos-cliente/page.tsx` para usar las mismas imágenes.
4. Commit + push.
