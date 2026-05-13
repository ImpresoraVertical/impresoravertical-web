import Link from "next/link";

const CASES = [
  {
    client: "Estudio Anna Pinta",
    location: "Barcelona",
    sector: "Interiorismo residencial",
    model: "Modelo S2",
    quote:
      "Pasamos de subcontratar murales a producir 4-5 al mes en taller. ROI en 9 meses justos. El servicio técnico es la diferencia real.",
    author: "Anna Pinta · Fundadora",
    metric: "4-5 murales/mes",
  },
  {
    client: "Murallart Decoración",
    location: "Girona",
    sector: "Decoración hostelería",
    model: "Modelo T1",
    quote:
      "Compramos la T1 para murales altos de hotel. Lo que tardábamos 3 días con vinilo lo hacemos en 6 horas. Cliente final ve la diferencia.",
    author: "Jordi Martí · Director",
    metric: "3 días → 6 horas",
  },
  {
    client: "Decoración Institucional Madrid",
    location: "Madrid",
    sector: "Proyectos públicos",
    model: "Modelo WF",
    quote:
      "Ganamos licitación de museo gracias a tener WF en plantilla. La certificación RII-AEE y la documentación CE fueron decisivas.",
    author: "Carmen Rodríguez · CEO",
    metric: "Licitación 180.000€",
  },
];

export default function Testimonios() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Casos de cliente reales</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Qué hacen otros
              <br />
              <span className="italic text-cobalto-700">con su impresora vertical.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              No son testimonios pagados. Son clientes reales que aceptan
              compartir su número y métricas para ayudarte a decidir.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
          {CASES.map((caseItem) => (
            <article
              key={caseItem.client}
              className="bg-paper p-8 lg:p-10 space-y-6 flex flex-col"
            >
              <div className="space-y-2">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                  {caseItem.model}
                </div>
                <h3 className="font-serif text-h4 text-ink leading-tight">
                  {caseItem.client}
                </h3>
                <div className="font-sans text-body-sm text-stone">
                  {caseItem.location} · {caseItem.sector}
                </div>
              </div>

              <blockquote className="text-body text-ink italic leading-relaxed flex-grow font-serif">
                &ldquo;{caseItem.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-stone/15 flex items-end justify-between">
                <div className="font-sans text-body-sm text-stone">
                  {caseItem.author}
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 text-right">
                  {caseItem.metric}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/casos-cliente" className="btn-primary">
            Ver casos completos
          </Link>
          <Link
            href="/contacto"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            Hablar con un cliente actual →
          </Link>
        </div>
      </div>
    </section>
  );
}
