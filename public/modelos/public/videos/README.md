# Carpeta /public/videos/ — vídeos cortos para la web

Vídeos cortos sin sonido para usar como elemento dinámico. Cuidado con
el peso (afecta a la velocidad de carga).

Se usa en:
- Hero del home (vídeo de fondo en bucle, opcional)
- Card de modelo destacado
- Página /sobre-itech (timelapse del taller)

---

## Archivos esperados

| Archivo              | Uso                              | Duración    |
|----------------------|----------------------------------|-------------|
| `maquina-imprimiendo.mp4` | Hero del home o sección demo | 8-15 seg.   |
| `taller-loop.mp4`    | Bucle de ambiente del taller     | 10-20 seg.  |
| `t1-demo.mp4`        | Demo Serie T (modelo destacado)  | 10-15 seg.  |

Mínimo 1 vídeo para empezar: `maquina-imprimiendo.mp4`. Es el más
impactante.

---

## Especificaciones técnicas

- **Resolución**: 1920 × 1080 (Full HD). 1280 × 720 (HD) también vale
  y pesa menos.
- **Peso máximo**: 5 MB por vídeo (idealmente 2-3 MB).
- **Formato**: MP4 (H.264, AAC) — el más universal.
- **Audio**: **sin audio** (loop silencioso). Si lo grabaste con
  sonido, eliminar pista de audio antes de subir (HandBrake gratis,
  o ffmpeg `-an`).
- **Duración**: 8-15 segundos, ideal para bucle.
- **Cierre del clip**: que el último frame sea similar al primero para
  que el bucle no salte de forma evidente.

### Cómo reducir peso

Si el vídeo pesa más de 5 MB:
1. Abrir [HandBrake](https://handbrake.fr) (gratis, Win/Mac)
2. Preset: "Web > Vimeo YouTube HD 1080p60"
3. Activar "Web Optimized"
4. Vídeo → Constant Quality RF: 28-30 (a más alto, más comprimido)
5. Audio: quitar la pista o "None"
6. Exportar — debería pesar 60-80% menos

---

## Después de subir

Avisa a Claude: "vídeo subido: maquina-imprimiendo.mp4". Yo:
1. Decidimos juntos dónde lo colocamos (hero o sección dedicada).
2. Implemento el `<video>` con `autoPlay muted loop playsInline`.
3. Commit + push.
