const STEPS = [
  {
    code: "01",
    title: "Rellena el formulario",
    body: "Un agente te contactará y te facilitará una explicación básica de la tecnología junto con la tarifa de precios actual.",
  },
  {
    code: "02",
    title: "Visita demo en taller",
    body: "Si el precio encaja, coordinamos una visita de 1h-1h30 en Les Preses para conocernos, hacerte una explicación extensa, ver la impresora en funcionamiento y mostrarte distintas impresiones en diferentes acabados.",
  },
  {
    code: "03",
    title: "Definimos tu serie ideal",
    body: "Durante la visita decidimos contigo la serie y modelo que mejor encaja con tu uso, volumen y superficies. Sin presión comercial.",
  },
  {
    code: "04",
    title: "Proforma y fábrica",
    body: "Te pasamos la proforma definitiva. Una vez confirmada, gestionamos la orden directamente con la fábrica.",
  },
];

export default function ProcesoCompra() {
  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Proceso de compra</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              Cómo adquirir tu
              <span className="block text-cobalto-700">impresora vertical.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Te lo explicamos paso a paso. Sin sorpresas. 4 pasos para llegar
              a la fábrica. Cada paso tiene su tiempo y ninguno requiere
              compromiso hasta que tú lo digas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/15 border border-stone/15">
          {STEPS.map((s) => (
            <article
              key={s.code}
              className="bg-bone p-6 lg:p-8 space-y-3 hover:bg-paper transition-colors"
            >
              <div className="font-mono text-h3 text-ocre-500 leading-none">
                {s.code}
              </div>
              <h3 className="font-display text-h5 uppercase tracking-tight text-ink leading-tight">
                {s.title}
              </h3>
              <p className="font-sans text-body-sm text-stone leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
