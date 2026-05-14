import Link from "next/link";

const CARDS = [
  {
    code: "01",
    title: "¿Qué superficie?",
    description:
      "Paredes lisas, panel acústico, madera tratada, vidrio templado. Cada superficie tiene un perfil ICC validado.",
  },
  {
    code: "02",
    title: "¿Qué tamaño?",
    description:
      "Desde 0,9 × 1,8 m del modelo K1 hasta 1,5 × 4,5 m del WF. Te recomendamos según tus murales tipo.",
  },
  {
    code: "03",
    title: "¿Qué volumen?",
    description:
      "Si imprimes 10 m² al mes o 100 m² al día, el motor que necesitas es distinto. Calculamos contigo.",
  },
  {
    code: "04",
    title: "¿Qué presupuesto?",
    description:
      "Desde 10.500€ entrada tinta base agua, hasta 26.500€ UV profesional. Financiación disponible.",
  },
];

export default function ConfiguradorTeaser() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="eyebrow">Configurador interactivo</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              ¿Qué impresora necesitas?
              <br />
              <span className="italic text-cobalto-700">Te lo decimos en 2 minutos.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              4 preguntas. Una recomendación basada en datos reales de 15 años
              de instalaciones. Sin compromiso, sin formulario obligatorio.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/15 border border-stone/15">
          {CARDS.map((card) => (
            <div
              key={card.code}
              className="bg-paper p-8 lg:p-10 space-y-6 hover:bg-bone transition-colors group"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-h6 text-ocre-500 group-hover:text-ocre-600 transition-colors">
                  {card.code}
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                  /04
                </span>
              </div>
              <h3 className="font-serif text-h4 text-ink leading-tight">
                {card.title}
              </h3>
              <p className="text-body-sm text-stone leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/configurador" className="btn-primary">
            Empezar el configurador
          </Link>
          <Link
            href="/series"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            o ver las 6 series directamente →
          </Link>
        </div>
      </div>
    </section>
  );
}
