import Link from "next/link";

// VideoObject schema para SEO (Rich Results de vídeo en Google)
const tallerVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Taller I-TECH España · Les Preses, Girona",
  description:
    "Visita virtual al taller oficial de I-TECH España en Les Preses, Girona. Demos en vivo de impresoras verticales con cita previa.",
  thumbnailUrl: "https://www.impresoravertical.com/opengraph-image",
  contentUrl: "https://www.impresoravertical.com/videos/taller-hero.mp4",
  uploadDate: "2025-01-01T09:00:00+01:00",
  publisher: { "@id": "https://www.impresoravertical.com/#organization" },
};

/**
 * Proceso de compra. Antes vivía en ProcesoCompra.tsx como sección
 * independiente; fusionado aquí porque el paso 02 (visita al taller)
 * era exactamente el contenido de esta sección.
 */
const STEPS = [
  {
    code: "01",
    title: "Rellena el formulario",
    body: "Un agente te contacta, te explica la tecnología y te pasa la tarifa actual.",
  },
  {
    code: "02",
    title: "Visita al taller",
    body: "Visita de 1h-1h30 en Les Preses: ves la impresora funcionando, traes tu archivo y tu superficie, y te llevas la muestra impresa.",
  },
  {
    code: "03",
    title: "Definimos tu serie",
    body: "Decidimos contigo el modelo que encaja con tu uso, volumen y superficies. Sin presión comercial.",
  },
  {
    code: "04",
    title: "Proforma y fábrica",
    body: "Te pasamos la proforma definitiva. Confirmada, gestionamos la orden con la fábrica.",
  },
];

export default function Taller() {
  return (
    <section className="section-pad bg-bone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tallerVideoSchema) }}
      />
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Proceso de compra · 4 pasos</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Vienes, ves, imprimes.
              <br />
              <span className="italic text-cobalto-700">Después decides.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              No te vamos a vender una impresora por catálogo. Ningún paso
              requiere compromiso hasta que tú lo digas. Café incluido.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Pasos */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-stone/15 border border-stone/15">
              {STEPS.map((s) => (
                <article
                  key={s.code}
                  className="bg-bone p-6 lg:p-8 space-y-3 hover:bg-paper transition-colors"
                >
                  <div className="font-mono text-h3 text-ocre-500 leading-none">
                    {s.code}
                  </div>
                  <h3 className="font-serif text-h5 text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-sans text-body-sm text-stone leading-relaxed">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link href="/contacto" className="btn-primary">
                Pedir info
              </Link>
              <a href="tel:+34623007729" className="btn-secondary">
                +34 623 007 729
              </a>
            </div>
          </div>

          {/* Vídeo + dirección */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] bg-ink overflow-hidden max-w-[320px]">
              <video
                src="/videos/taller-hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-paper p-6 border border-stone/15">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-2">
                El taller · Les Preses, Girona
              </div>
              <div className="font-serif text-h5 text-ink leading-tight">
                Calle del Centre d&apos;Empreses, 1-7
                <br />
                Nave 7 · 17178 Les Preses
              </div>
              <div className="font-sans text-body-sm text-stone mt-2">
                Girona, Cataluña · España
              </div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-4 pt-4 border-t border-stone/15">
                L-V · 9:00 a 18:00 · cita previa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
