# Impresora Vertical · I-TECH España (Next.js)

Web oficial para `impresoravertical.com` construida con **Next.js 15 + TypeScript + Tailwind CSS**.

Reemplaza el sitio actual Wix Classic con un stack moderno, hosteado gratis en **Vercel**, con SEO y rendimiento muy superiores.

## Stack

- **Next.js 15** (App Router) — framework React
- **TypeScript** — tipos estrictos
- **Tailwind CSS 3** — utility-first CSS con design tokens custom
- **Google Fonts** — Instrument Serif, Instrument Sans, JetBrains Mono

## Estructura del proyecto

```
impresoravertical-web/
├── app/
│   ├── components/          → Header, Footer, ContactForm, CalculadoraROI, Configurador, FAQAccordion
│   │   └── home/            → 11 bloques de la Home
│   ├── data/
│   │   └── models.ts        → Datos centralizados de los 6 modelos
│   ├── api/
│   │   └── contact/         → API route para formulario
│   ├── modelos/
│   │   ├── page.tsx         → Catálogo /modelos
│   │   └── [slug]/          → Ruta dinámica /modelos/e2, /modelos/k1, etc.
│   ├── configurador/        → Configurador interactivo
│   ├── calculadora-roi/     → Calculadora ROI con sliders
│   ├── comparador/          → Oficial vs. clónica
│   ├── perfiles-icc/        → Perfiles ICC validados
│   ├── sobre-itech/         → Sobre I-TECH España
│   ├── contacto/            → Formulario contacto
│   ├── casos-cliente/       → Casos reales
│   ├── servicio-tecnico/    → Soporte técnico
│   ├── formacion/           → Cursos de formación
│   ├── faq/                 → Preguntas frecuentes
│   ├── aviso-legal/         → Legal
│   ├── privacidad/          → GDPR
│   ├── cookies/             → Cookies
│   ├── layout.tsx           → Layout raíz con metadata SEO
│   ├── page.tsx             → Home
│   └── globals.css          → Tailwind + componentes custom
├── public/                  → Assets estáticos (imágenes, fonts locales si las hay)
├── tailwind.config.ts       → Design tokens (colors, fonts, spacing, animations)
├── next.config.mjs          → Configuración Next.js
└── tsconfig.json            → TypeScript config
```

## Design system

### Paleta de colores
- **Ink** `#0E0E0E` — primario oscuro
- **Paper** `#FAFAF7` — fondo claro principal
- **Carbon** `#1F1F1F` — territorio premium
- **Stone** `#5F5E5A` — texto secundario
- **Bone** `#EFEDE5` — fondo alternativo
- **Cobalto 500** `#2856B8` — acento azul I-TECH
- **Cobalto 900** `#08193D` — footer territorio oficial
- **Ocre 500** `#D89C2E` — acento dorado
- **Ocre 200** `#FAC775` — eyebrows premium

### Tipografías
- **Instrument Serif** — H1, H2, H3 (display, headings)
- **Instrument Sans** — body, párrafos
- **JetBrains Mono** — eyebrows, código, monospace UI

### Territorios visuales
- **Paper / Ink** — territorio default
- **Carbon / Bone / Ocre 200** — territorio premium (Perfiles ICC, Galería)
- **Cobalto 900 / Bone** — territorio oficial (Footer, CTAs)

## Cómo arrancar el proyecto en local

```bash
# 1. Entrar en la carpeta
cd impresoravertical-web

# 2. Instalar dependencias (la primera vez)
npm install

# 3. Arrancar servidor de desarrollo
npm run dev

# Visita http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Deploy a Vercel

### Opción A — Sin GitHub (rápido)
1. Instalar Vercel CLI: `npm install -g vercel`
2. Desde la carpeta `impresoravertical-web/`: `vercel`
3. Seguir el wizard (login, nombre proyecto)
4. Vercel da una URL temporal tipo `impresoravertical-web.vercel.app`

### Opción B — Con GitHub (recomendado para producción)
1. Crear cuenta en https://github.com (gratis)
2. Crear repo nuevo `impresoravertical-web`
3. Subir el código:
   ```bash
   cd impresoravertical-web
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU-USUARIO/impresoravertical-web.git
   git push -u origin main
   ```
4. Crear cuenta en https://vercel.com (gratis, login con GitHub)
5. "Import Project" → seleccionar el repo → Deploy
6. Cada push a `main` actualiza la web automáticamente

## Migración del dominio impresoravertical.com

**⚠️ NO HACER hasta que la web Next.js esté 100% aprobada por Marc.**

Cuando llegue el momento:

1. **En Vercel**: añadir el dominio personalizado en Settings → Domains
2. **En el panel DNS actual** (probablemente Wix o registrador):
   - Cambiar registro A `@` apuntando a IP de Vercel (76.76.21.21)
   - Cambiar registro CNAME `www` apuntando a `cname.vercel-dns.com`
3. **Esperar propagación DNS** (1-48h típicamente)
4. **Vercel** generará certificado SSL automáticamente
5. **Configurar redirects 301** desde slugs antiguos de Wix:
   - `/carreras-profesionales` → `/modelos/e2`
   - `/serie-e-copy` → `/modelos/k1`
   - `/serie-k-copy` → `/modelos/s2`
   - `/serie-s-copy` → `/modelos/t1`
   - `/copia-de-serie-t` → `/modelos/w1`
   - `/serie-t-copy` → `/modelos/wf`
   - `/acerca-de` → `/sobre-itech`
   - `/por-qué-elegirnos` → `/comparador`
   - `/acerca-de-1` → `/formacion`
   - `/carreras-profesionales-1` → `/faq`
6. **Cancelar plan de Wix** (lo último)

## Variables de entorno (cuando se configure email)

Crear `.env.local`:

```bash
# Resend (recomendado, 100 emails/día gratis)
RESEND_API_KEY=re_xxxxxxxxxx

# Email destino formularios
CONTACT_EMAIL=info@impresoravertical.com
```

Luego en `app/api/contact/route.ts` reemplazar el `console.log` por el envío real con Resend.

## Próximos pasos (post-deploy)

- [ ] Conectar GitHub
- [ ] Deploy primer build a Vercel
- [ ] Configurar dominio temporal
- [ ] Marc revisa la web y aprueba/pide cambios
- [ ] Iteraciones de copy y diseño
- [ ] Añadir imágenes reales (descargar de Wix actual o sesión fotográfica)
- [ ] Configurar Resend para emails
- [ ] Migrar dominio impresoravertical.com
- [ ] Cancelar Wix

## Páginas creadas (21 total)

| Slug | Estado |
|---|---|
| `/` (Home) | ✓ 11 bloques |
| `/modelos` | ✓ Catálogo |
| `/modelos/e2` | ✓ Dinámica |
| `/modelos/k1` | ✓ Dinámica |
| `/modelos/s2` | ✓ Dinámica (destacado) |
| `/modelos/t1` | ✓ Dinámica |
| `/modelos/w1` | ✓ Dinámica |
| `/modelos/wf` | ✓ Dinámica |
| `/configurador` | ✓ Interactivo 4 pasos |
| `/calculadora-roi` | ✓ Interactiva con sliders |
| `/comparador` | ✓ Tabla 13 filas |
| `/perfiles-icc` | ✓ 9 superficies |
| `/sobre-itech` | ✓ |
| `/contacto` | ✓ Formulario funcional |
| `/casos-cliente` | ✓ 3 casos |
| `/servicio-tecnico` | ✓ |
| `/formacion` | ✓ 6 módulos |
| `/faq` | ✓ 4 categorías |
| `/aviso-legal` | ✓ |
| `/privacidad` | ✓ |
| `/cookies` | ✓ |

---

Hecho con cariño desde Les Preses, Girona. ☕
