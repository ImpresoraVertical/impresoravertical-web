import Link from "next/link";
import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto · Reserva tu demo en taller",
  description:
    "Reserva una demo gratuita en nuestro taller de Les Preses, Girona. Sin compromiso. Imprime sobre tu superficie real. +34 623 007 729.",
};

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

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Contacto · proceso de compra</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Cómo adquirir tu
                <span className="block text-cobalto-700">impresora vertical.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Te lo explicamos paso a paso. Sin sorpresas. Cuando llegues al
                formulario ya sabrás cómo va a ir todo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso 4 pasos */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">El proceso</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                4 pasos
                <span className="block text-cobalto-700">para llegar a la fábrica.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Cada paso tiene su tiempo. Ninguno requiere compromiso hasta
                que tú lo digas.
              </p>
            </div>
          </div>

          <div className="space-y-px bg-stone/15 border border-stone/15">
            {STEPS.map((s) => (
              <article
                key={s.code}
                className="bg-bone p-8 lg:p-10 grid lg:grid-cols-12 gap-6 items-start hover:bg-paper transition-colors"
              >
                <div className="lg:col-span-2">
                  <div className="font-mono text-h2 text-ocre-500">{s.code}</div>
                </div>
                <div className="lg:col-span-9 lg:col-start-4 space-y-2">
                  <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-body text-stone leading-relaxed">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="eyebrow">Paso 1 · Empezamos aquí</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Cuéntanos
                <span className="block text-cobalto-700">qué necesitas.</span>
              </h2>
              <p className="text-body-lg text-stone max-w-xl text-pretty">
                Te respondemos en menos de 24h laborables. Sin compromiso.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-4 lg:col-start-9 space-y-8">
              <div className="bg-paper p-8 border border-stone/15 space-y-6">
                <div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Llamada directa
                  </div>
                  <a
                    href="tel:+34623007729"
                    className="font-display text-h3 uppercase tracking-tight text-ink mt-1 block hover:text-cobalto-700 transition-colors"
                  >
                    +34 623 007 729
                  </a>
                  <p className="text-body-sm text-stone mt-1">
                    L-V · 9:00 a 18:00
                  </p>
                </div>

                <div className="border-t border-stone/15 pt-6">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Email
                  </div>
                  <a
                    href="mailto:info@impresoravertical.com"
                    className="font-sans text-body-lg text-ink mt-1 block hover:text-cobalto-700 transition-colors break-all"
                  >
                    info@impresoravertical.com
                  </a>
                  <p className="text-body-sm text-stone mt-1">
                    Respuesta &lt; 24h laborables
                  </p>
                </div>

                <div className="border-t border-stone/15 pt-6">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Taller
                  </div>
                  <p className="font-sans text-body text-ink mt-1 leading-snug">
                    Calle del Centre d&apos;Empreses 1-7
                    <br />
                    Nave 7 · 17178 Les Preses
                    <br />
                    Girona, Cataluña · España
                  </p>
                  <p className="text-body-sm text-stone mt-2">
                    Demos con cita previa
                  </p>
                  <a
                    href="https://maps.app.goo.gl/9irgokoeBUDvCEu67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 hover:text-cobalto-800 transition-colors"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-cobalto-900 text-bone p-8 space-y-4">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                  Visita en taller
                </div>
                <p className="text-body text-bone/90 leading-relaxed">
                  Trae tu archivo y muestra de superficie. Imprimimos en vivo,
                  te llevas la impresión + propuesta económica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
