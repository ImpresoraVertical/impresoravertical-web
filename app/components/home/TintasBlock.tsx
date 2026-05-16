import Link from "next/link";

/* Iconos SVG de tipos de tinta */
const IconDrop = ({ filled }: { filled?: boolean }) => (
  <svg viewBox="0 0 32 40" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M16 4 C 16 4, 5 18, 5 26 a 11 11 0 0 0 22 0 C 27 18, 16 4, 16 4 Z" />
  </svg>
);

const TINTAS = [
  {
    code: "01",
    title: "Tinta Premium Hard",
    target: "Soportes rígidos",
    description:
      "Formulada para superficies duras y no porosas: cristal, metal, cerámica, acrílico, hormigón pulido.",
  },
  {
    code: "02",
    title: "Tinta Premium Soft",
    target: "Soportes flexibles",
    description:
      "Formulada para soportes que se doblan o flexan: lonas PVC, vinilos, textiles técnicos, papeles tapiz.",
  },
  {
    code: "03",
    title: "Tintas Ultravioleta",
    target: "A petición · proyectos especiales",
    description:
      "Tintas UV específicas bajo pedido para proyectos con requisitos técnicos concretos.",
  },
];

export default function TintasBlock() {
  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        {/* Cabecera */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Tintas · disponibilidad y formulación
            </div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              Tinta siempre lista.
              <span className="block text-cobalto-700">Precio especial cliente.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Disponemos de tinta en stock permanente de corta fabricación
              en nuestro taller. Como servicio a nuestros clientes, ofrecemos
              precio de formulación especial para impresoras verticales.
            </p>
          </div>
        </div>

        {/* 3 tipos de tinta */}
        <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15 mb-12">
          {TINTAS.map((t, i) => (
            <div
              key={t.code}
              className="bg-paper p-8 lg:p-10 space-y-4 hover:bg-bone transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="text-ocre-500">
                  <IconDrop filled={i < 2} />
                </div>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                  {t.code} / 03
                </span>
              </div>
              <div>
                <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {t.title}
                </h3>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mt-2">
                  {t.target}
                </div>
              </div>
              <p className="font-sans text-body-sm text-stone leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        {/* Caducidad UV + CTA */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-cobalto-900 text-bone p-8 lg:p-10">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200 mb-3">
              Importante · caducidad tintas UV
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-display text-h2 uppercase tracking-tight text-bone leading-none">
                  1 año
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200 mt-2">
                  Almacenada (cerrada)
                </div>
              </div>
              <div>
                <div className="font-display text-h2 uppercase tracking-tight text-bone leading-none">
                  6 meses
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200 mt-2">
                  Una vez abierta
                </div>
              </div>
            </div>
            <p className="text-body text-bone/80 mt-6 leading-relaxed max-w-2xl">
              Por eso fabricamos en cortas series y mantenemos stock fresco
              en taller. La tinta UV que recibes está siempre en su ventana
              óptima de uso.
            </p>
          </div>
          <div className="lg:col-span-4 bg-ink text-paper p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-3">
                ¿Eres cliente?
              </div>
              <h3 className="font-display text-h4 uppercase tracking-tight text-paper leading-tight">
                Pídenos tu reposición de tinta al precio cliente.
              </h3>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-6 py-4 font-mono text-eyebrow uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Solicitar tinta →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
