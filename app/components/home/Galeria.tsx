import Link from "next/link";
import MediaPlaceholder from "../MediaPlaceholder";

/* Iconos SVG inline — uniformes, color heredado */
const Icon = {
  Pared: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <line x1="3" y1="11" x2="29" y2="11" />
      <line x1="3" y1="20" x2="29" y2="20" />
      <line x1="12" y1="3" x2="12" y2="11" />
      <line x1="20" y1="11" x2="20" y2="20" />
      <line x1="10" y1="20" x2="10" y2="29" />
      <line x1="22" y1="20" x2="22" y2="29" />
    </svg>
  ),
  Madera: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <path d="M3 9 Q 16 11 29 9" />
      <path d="M3 16 Q 16 18 29 16" />
      <path d="M3 23 Q 16 25 29 23" />
    </svg>
  ),
  Vidrio: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <line x1="8" y1="8" x2="14" y2="8" />
      <line x1="8" y1="8" x2="8" y2="14" />
    </svg>
  ),
  Hormigon: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <circle cx="9" cy="10" r="1.2" />
      <circle cx="20" cy="14" r="0.9" />
      <circle cx="13" cy="20" r="1" />
      <circle cx="23" cy="23" r="1.3" />
      <circle cx="7" cy="22" r="0.8" />
    </svg>
  ),
  Metal: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <line x1="3" y1="3" x2="29" y2="29" />
      <line x1="29" y1="3" x2="3" y2="29" />
    </svg>
  ),
  Lona: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 10 Q 8 6 13 10 T 23 10 T 29 10" />
      <path d="M3 16 Q 8 12 13 16 T 23 16 T 29 16" />
      <path d="M3 22 Q 8 18 13 22 T 23 22 T 29 22" />
    </svg>
  ),
  Acrilico: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M16 3 L 29 16 L 16 29 L 3 16 Z" />
      <path d="M16 9 L 23 16 L 16 23 L 9 16 Z" />
    </svg>
  ),
  Azulejo: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="11" height="11" />
      <rect x="18" y="3" width="11" height="11" />
      <rect x="3" y="18" width="11" height="11" />
      <rect x="18" y="18" width="11" height="11" />
    </svg>
  ),
  Textil: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="26" height="26" />
      <line x1="3" y1="3" x2="11" y2="11" />
      <line x1="11" y1="3" x2="3" y2="11" />
      <line x1="14" y1="3" x2="22" y2="11" />
      <line x1="22" y1="3" x2="14" y2="11" />
      <line x1="3" y1="14" x2="11" y2="22" />
      <line x1="11" y1="14" x2="3" y2="22" />
      <line x1="14" y1="14" x2="22" y2="22" />
      <line x1="22" y1="14" x2="14" y2="22" />
    </svg>
  ),
};

const MATERIALES = [
  { name: "Pared lisa pintada", detail: "Yeso, mate o satinado", icon: <Icon.Pared /> },
  { name: "Madera tratada", detail: "MDF, contrachapado, panel fenólico", icon: <Icon.Madera /> },
  { name: "Vidrio templado", detail: "Front-side o back-side", icon: <Icon.Vidrio /> },
  { name: "Hormigón / microcemento", detail: "Pulido, decorativo, fachada", icon: <Icon.Hormigon /> },
  { name: "Metal", detail: "Aluminio, acero lacado, chapa", icon: <Icon.Metal /> },
  { name: "Lona PVC y textil", detail: "Mesh, blackout, bandera", icon: <Icon.Lona /> },
  { name: "Acrílico / metacrilato", detail: "Transparente, color, opaco", icon: <Icon.Acrilico /> },
  { name: "Azulejo y cerámica", detail: "Liso, rugoso, gres porcelánico", icon: <Icon.Azulejo /> },
  { name: "Panel acústico", detail: "Fonoabsorbente con textura", icon: <Icon.Textil /> },
];

type Caso = {
  code: string;
  title: string;
  detail: string;
  /** URL del post real en Instagram. Si está vacía, la card no es clickable. */
  instagram?: string;
};

const CASOS: Caso[] = [
  { code: "01", title: "Oficinas y aparadores", detail: "Decoración corporativa · escaparate · branding interior", instagram: "https://www.instagram.com/reel/ChUnbhJKcN6/" },
  { code: "02", title: "Oficinas corporativas", detail: "Despachos · salas de reunión · branding interior", instagram: "https://www.instagram.com/p/CnNPQT6LQCz/" },
  { code: "03", title: "Remolques y autocaravanas", detail: "Branding exterior · food trucks", instagram: "https://www.instagram.com/reel/C6OixKyNxnB/" },
  { code: "04", title: "Pabellones deportivos", detail: "Branding institucional · murales de gran formato", instagram: "https://www.instagram.com/reel/CRJdkmuoyIo/" },
  { code: "05", title: "Escaparates comerciales", detail: "Rotulación · escaparate 24/7", instagram: "https://www.instagram.com/reel/ClFLlpTDU2f/" },
  { code: "06", title: "Escuelas y centros educativos", detail: "Pasillos · biblioteca · comedor", instagram: "https://www.instagram.com/p/CM49krsItKG/" },
  { code: "07", title: "Murales callejeras", detail: "Arte urbano · fachadas · street art", instagram: "https://www.instagram.com/reel/DO6VUVIDML8/" },
  { code: "08", title: "Persianas comerciales", detail: "Cierre nocturno con identidad · branding 24/7", instagram: "https://www.instagram.com/p/CECnCRNgfLO/" },
  { code: "09", title: "Polipel para tapizar", detail: "Tejidos técnicos personalizados · tapicería a medida", instagram: "https://www.instagram.com/reel/CofnnoFgmtF/" },
];

/* Cuentas de Instagram de inspiración sobre impresoras verticales */
const CUENTAS_INSPIRACION = [
  {
    handle: "@impresoravertical",
    label: "Nuestra cuenta oficial",
    url: "https://www.instagram.com/impresoravertical/reels/",
  },
  {
    handle: "@thewallprinter",
    label: "The Wall Printer · referencia global",
    url: "https://www.instagram.com/thewallprinter/",
  },
  {
    handle: "@wallprinters.it",
    label: "Wall Printers Italia",
    url: "https://www.instagram.com/wallprinters.it/",
  },
  {
    handle: "@prismaprint_",
    label: "Prisma Print · proyectos creativos",
    url: "https://www.instagram.com/prismaprint_/",
  },
  {
    handle: "@bf_imprimante_murale",
    label: "BF Imprimante Murale · Francia",
    url: "https://www.instagram.com/bf_imprimante_murale/",
  },
];

/* Icono Instagram inline */
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Galeria() {
  return (
    <section className="section-pad bg-ink text-paper">
      <div className="container-page">
        {/* Cabecera única */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
              Aplicaciones y superficies
            </div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-paper text-balance">
              Donde un vinilo se rinde,
              <span className="block text-ocre-300">la impresora vertical empieza.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-bone/80 text-pretty">
              Trabajamos con clientes que decoran desde habitaciones de hotel
              hasta fachadas de museo. Primero los materiales, después los casos
              reales.
            </p>
          </div>
        </div>

        {/* BLOQUE 1 — MATERIALES */}
        <div className="mb-20">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-6">
            01 · Materiales imprimibles
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/15 border border-bone/15">
            {MATERIALES.map((m) => (
              <div
                key={m.name}
                className="bg-ink p-6 lg:p-8 space-y-4 hover:bg-cobalto-900 transition-colors group"
              >
                <div className="text-ocre-300 group-hover:text-ocre-200 transition-colors">
                  {m.icon}
                </div>
                <div>
                  <h3 className="font-display text-h5 uppercase tracking-tight text-paper leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-body-sm text-bone/70 mt-1">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOQUE 2 — CASOS DE USO con embed real de Instagram */}
        <div className="mb-16">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-6">
            02 · Casos de uso · 9 aplicaciones reales
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASOS.map((c) => {
              const slug = c.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^a-z0-9-]/g, "")
                .slice(0, 20);
              const hasInsta = Boolean(c.instagram);

              // Convertir URL pública en URL embed: añade "embed/" al final del path
              // Acepta /p/{id}/ y /reel/{id}/
              const embedUrl = hasInsta
                ? c.instagram!.replace(/\/$/, "") + "/embed/"
                : "";

              return (
                <article key={c.code} className="space-y-3 bg-bone/5 border border-bone/15 p-4">
                  {hasInsta ? (
                    <div className="relative w-full bg-paper overflow-hidden" style={{ height: "560px" }}>
                      <iframe
                        src={embedUrl}
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        scrolling="no"
                        allow="encrypted-media; picture-in-picture; web-share"
                        title={`Post Instagram · ${c.title}`}
                      />
                    </div>
                  ) : (
                    <MediaPlaceholder
                      type="image"
                      title={`Foto del caso: ${c.title}`}
                      description={c.detail}
                      dimensions="1200×900 px · ratio 4:3"
                      filename={`/casos/caso-${slug}.jpg`}
                      aspect="aspect-[4/3]"
                      variant="dark"
                    />
                  )}

                  <div className="px-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-mono text-h6 text-ocre-300">{c.code}</div>
                      {hasInsta && (
                        <a
                          href={c.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 inline-flex items-center gap-2 hover:text-ocre-200 transition-colors"
                        >
                          <IconInstagram /> Abrir →
                        </a>
                      )}
                    </div>
                    <h3 className="font-display text-h5 uppercase tracking-tight text-paper leading-tight mt-1">
                      {c.title}
                    </h3>
                    <p className="font-sans text-body-sm text-bone/70 mt-1">{c.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BLOQUE 2.5 — INSPIRACIÓN · cuentas de Instagram */}
        <div className="mb-20">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-3">
            Inspiración · cuentas que seguimos
          </div>
          <p className="text-body text-bone/70 max-w-2xl mb-8">
            Si quieres ver más impresión vertical en acción, estas son las
            cuentas de referencia mundial. Síguelas para inspirarte.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-bone/15 border border-bone/15">
            {CUENTAS_INSPIRACION.map((cuenta) => (
              <a
                key={cuenta.url}
                href={cuenta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink p-6 space-y-3 hover:bg-cobalto-900 transition-colors group"
              >
                <div className="text-ocre-300 group-hover:text-ocre-200 transition-colors">
                  <IconInstagram />
                </div>
                <div>
                  <div className="font-mono text-body-sm text-paper leading-tight break-all">
                    {cuenta.handle}
                  </div>
                  <p className="font-sans text-eyebrow uppercase tracking-wider text-bone/60 mt-2">
                    {cuenta.label}
                  </p>
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 pt-2">
                  Abrir →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* BLOQUE 3 — DIMENSIONES */}
        <div className="bg-bone/5 border-l-4 border-ocre-300 p-8 lg:p-10 max-w-4xl mb-12">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-3">
            Dimensiones de impresión
          </div>
          <p className="text-body text-bone/85 leading-relaxed">
            La altura de impresión es de hasta{" "}
            <strong className="text-paper">5 metros</strong> (depende del modelo)
            y en ancho{" "}
            <strong className="text-paper">no tiene limitación de longitud</strong>.
            Existe la posibilidad de usar la técnica de solapación: al unir dos
            imágenes, la altura puede superar los 5 metros.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/casos-cliente"
            className="inline-flex items-center justify-center bg-ocre-300 text-ink px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
          >
            Ver casos completos
          </Link>
          <Link
            href="/contacto"
            className="font-mono text-body-sm uppercase tracking-wider text-bone link-underline"
          >
            Probar tu caso en taller →
          </Link>
        </div>
      </div>
    </section>
  );
}
