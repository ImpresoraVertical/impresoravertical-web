import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de cliente · Historias reales con impresora vertical I-TECH",
  description:
    "Casos reales de empresas que producen con impresora vertical I-TECH: ROI, métricas, sectores y modelos elegidos. Habla directamente con un cliente actual.",
};

const CASES = [
  {
    client: "Estudio Anna Pinta",
    location: "Barcelona",
    sector: "Interiorismo residencial premium",
    model: "S2 · Standard",
    year: "2022",
    challenge:
      "Subcontrataban murales a impresor externo (3-4 semanas de plazo) con margen escaso. Querían recuperar el control y mejorar márgenes.",
    solution:
      "S2 instalada en su estudio de Barcelona. Formación en RIP y perfiles ICC para pared lisa pintada (la mayoría de sus proyectos). Demos a clientes finales en sus propias instalaciones.",
    results: [
      { metric: "4-5 murales/mes", label: "Producción ahora" },
      { metric: "9 meses", label: "ROI real" },
      { metric: "+62%", label: "Margen vs. subcontrata" },
    ],
    quote:
      "Pasamos de subcontratar a producir 4-5 al mes en nuestro taller. ROI en 9 meses justos. El servicio técnico es la diferencia real — cuando algo pasa, lo resuelven el mismo día.",
    author: "Anna Pinta · Fundadora",
  },
  {
    client: "Murallart Decoración",
    location: "Girona",
    sector: "Decoración hostelería",
    model: "T1 · Tall",
    year: "2023",
    challenge:
      "Hoteles de cadena media-alta pidiendo murales altos (3-4m) en zonas comunes. Con vinilo tardaban 2-3 días por mural y el resultado tenía juntas visibles.",
    solution:
      "T1 elegida por su capacidad hasta 4m de altura sin juntas. Formación in situ + acompañamiento en primeras 3 instalaciones reales.",
    results: [
      { metric: "3 días → 6 horas", label: "Tiempo instalación" },
      { metric: "12 hoteles", label: "Proyectos cerrados 2024" },
      { metric: "0 juntas", label: "Resultado vs. vinilo" },
    ],
    quote:
      "Compramos la T1 para murales altos de hotel. Lo que tardábamos 3 días con vinilo lo hacemos en 6 horas. El cliente final ve la diferencia y nos paga sin regatear.",
    author: "Jordi Martí · Director",
  },
  {
    client: "Decoración Institucional Madrid",
    location: "Madrid",
    sector: "Proyectos institucionales y públicos",
    model: "WF · Wide Pro",
    year: "2024",
    challenge:
      "Empresa especializada en licitaciones públicas. Necesitaban capacidad de producción industrial y toda la documentación CE/RII-AEE para concursos.",
    solution:
      "WF con doble cabezal y refrigeración líquida para volumen alto. Documentación completa CE, fichas técnicas y declaración RII-AEE entregada lista para pliegos.",
    results: [
      { metric: "180.000€", label: "Licitación museo ganada" },
      { metric: "5 m²/h", label: "Productividad real WF" },
      { metric: "0 incidencias", label: "En 6 meses operación" },
    ],
    quote:
      "Ganamos licitación de museo gracias a tener WF en plantilla. La certificación RII-AEE y la documentación CE fueron decisivas en el concurso público.",
    author: "Carmen Rodríguez · CEO",
  },
];

export default function CasosClientePage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Casos de cliente · datos reales</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Qué hacen otros
                <br />
                <span className="italic text-cobalto-700">con su impresora vertical.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                No son testimonios pagados. Son clientes reales que aceptan
                compartir su número y métricas para ayudar a otros profesionales
                a decidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper space-y-32">
        {CASES.map((caseItem, i) => (
          <article key={caseItem.client} className="container-page">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left: nombres, sector, modelo */}
              <div className="lg:col-span-4 space-y-6">
                <div className="font-mono text-h2 text-ocre-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-serif text-h2 text-ink leading-tight">
                    {caseItem.client}
                  </h2>
                  <p className="text-body text-stone mt-2">
                    {caseItem.location} · {caseItem.sector}
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-stone/15">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Modelo
                  </div>
                  <div className="font-serif text-h5 text-ink">{caseItem.model}</div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                    Cliente desde {caseItem.year}
                  </div>
                </div>
              </div>

              {/* Right: caso */}
              <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                <div>
                  <h3 className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-2">
                    El reto
                  </h3>
                  <p className="text-body-lg text-ink leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-2">
                    La solución
                  </h3>
                  <p className="text-body-lg text-ink leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-4">
                    Resultados
                  </h3>
                  <div className="grid grid-cols-3 gap-6 bg-bone p-6">
                    {caseItem.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-serif text-h3 text-cobalto-700">
                          {r.metric}
                        </div>
                        <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-ocre-300 pl-6 py-2 space-y-3">
                  <p className="font-serif text-h5 italic text-ink leading-relaxed">
                    &ldquo;{caseItem.quote}&rdquo;
                  </p>
                  <cite className="font-mono text-eyebrow uppercase tracking-wider text-stone not-italic">
                    {caseItem.author}
                  </cite>
                </blockquote>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-h1 text-bone text-balance">
            ¿Quieres hablar con uno de ellos <span className="italic text-ocre-200">directamente?</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6">
            Te ponemos en contacto con un cliente actual de un sector y modelo
            similar al tuyo. Sin guion, sin presión comercial.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200"
            >
              Pedir contacto con cliente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
