import Link from "next/link";

/** Posts reales de Instagram embebidos. loading="lazy" evita que carguen
 *  hasta que el usuario hace scroll hasta la sección. */
const CASOS = [
  { code: "01", title: "Oficinas y aparadores", detail: "Decoración corporativa · escaparate · branding interior", url: "https://www.instagram.com/reel/ChUnbhJKcN6/" },
  { code: "02", title: "Oficinas corporativas", detail: "Despachos · salas de reunión · branding interior", url: "https://www.instagram.com/p/CnNPQT6LQCz/" },
  { code: "03", title: "Remolques y autocaravanas", detail: "Branding exterior · food trucks", url: "https://www.instagram.com/reel/C6OixKyNxnB/" },
  { code: "04", title: "Pabellones deportivos", detail: "Branding institucional · murales de gran formato", url: "https://www.instagram.com/reel/CRJdkmuoyIo/" },
  { code: "05", title: "Escaparates comerciales", detail: "Rotulación · escaparate 24/7", url: "https://www.instagram.com/reel/ClFLlpTDU2f/" },
  { code: "06", title: "Escuelas y centros educativos", detail: "Pasillos · biblioteca · comedor", url: "https://www.instagram.com/p/CM49krsItKG/" },
  { code: "07", title: "Murales callejeros", detail: "Arte urbano · fachadas · street art", url: "https://www.instagram.com/reel/DO6VUVIDML8/" },
  { code: "08", title: "Persianas comerciales", detail: "Cierre nocturno con identidad · branding 24/7", url: "https://www.instagram.com/p/CECnCRNgfLO/" },
  { code: "09", title: "Polipel para tapizar", detail: "Tejidos técnicos personalizados · tapicería a medida", url: "https://www.instagram.com/reel/CofnnoFgmtF/" },
];

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function CasosInstagram() {
  return (
    <section className="section-pad bg-ink text-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
              Casos reales · 9 aplicaciones
            </div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-paper text-balance">
              Donde un vinilo se rinde,
              <span className="block text-ocre-300">la impresora vertical empieza.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-bone/80 text-pretty">
              Trabajos reales de nuestros clientes, tal cual los publican en
              Instagram. Sin retoques.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASOS.map((c) => (
            <article key={c.code} className="space-y-3 bg-bone/5 border border-bone/15 p-4">
              <div className="relative w-full bg-paper overflow-hidden" style={{ height: "560px" }}>
                <iframe
                  src={c.url.replace(/\/$/, "") + "/embed/"}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  scrolling="no"
                  allow="encrypted-media; picture-in-picture; web-share"
                  title={`Post Instagram · ${c.title}`}
                />
              </div>
              <div className="px-1">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-mono text-h6 text-ocre-300">{c.code}</div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 inline-flex items-center gap-2 hover:text-ocre-200 transition-colors"
                  >
                    <IconInstagram /> Abrir →
                  </a>
                </div>
                <h3 className="font-display text-h5 uppercase tracking-tight text-paper leading-tight mt-1">
                  {c.title}
                </h3>
                <p className="font-sans text-body-sm text-bone/70 mt-1">{c.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-12">
          <a
            href="https://www.instagram.com/impresoravertical/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ocre-300 text-ink px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
          >
            <IconInstagram /> @impresoravertical
          </a>
          <Link href="/contacto" className="font-mono text-body-sm uppercase tracking-wider text-bone link-underline">
            Probar tu caso en taller →
          </Link>
        </div>
      </div>
    </section>
  );
}
