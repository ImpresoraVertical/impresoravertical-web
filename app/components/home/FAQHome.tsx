"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * FAQ de home — 3 preguntas COMERCIALES exclusivas.
 * Antes eran 6 preguntas técnicas duplicadas literalmente de /faq, lo que
 * canibalizaba contenido. /faq cubre lo técnico; aquí solo lo que pregunta
 * quien está a punto de comprar.
 * Sin schema FAQPage para no competir con el de /faq.
 */
const FAQS = [
  {
    q: "¿Cuánto cuesta y qué incluye el precio?",
    a: "Las series de tinta base agua arrancan en 10.500 € y las UV en 21.500 €, según modelo y equipación. El precio incluye la máquina, el curso de formación de 8 horas en nuestro taller, los perfiles ICC iniciales, la importación con registro RII-AEE y el servicio técnico oficial en España. Sin costes ocultos de aduanas ni de puesta en marcha.",
  },
  {
    q: "¿Cuánto se tarda en recuperar la inversión?",
    a: "Depende de tu precio por m² y del volumen que factures. Con 15-30 m² mensuales a precio de mercado, la mayoría de nuestros clientes amortiza la máquina entre 12 y 24 meses. Puedes calcularlo con tus propios datos en la calculadora ROI.",
  },
  {
    q: "¿Qué pasa si la máquina se avería?",
    a: "Tienes WhatsApp directo 24/7 con nuestro equipo técnico: el 60% de las incidencias se resuelven en remoto en menos de 2 horas. Si hace falta visita, vamos a tu taller en 48-72h con las piezas. Mantenemos stock de cabezales, bombas, sensores y motores en Les Preses.",
  },
];

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="eyebrow">Antes de decidir</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Las dudas reales
              <br />
              <span className="italic text-cobalto-700">de quien va a comprar.</span>
            </h2>
            <p className="text-body text-stone text-pretty pt-4">
              Si tu pregunta no está aquí, pregúntanos sin compromiso.
              Respondemos en menos de 24h laborables.
            </p>
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/faq"
                className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
              >
                Ver las 17 preguntas técnicas →
              </Link>
              <Link
                href="/calculadora-roi"
                className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
              >
                Calcular mi ROI →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-px bg-stone/15 border border-stone/15">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-bone">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-paper transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-serif text-h5 text-ink leading-snug flex-1">
                    {faq.q}
                  </span>
                  <span
                    className={`font-mono text-h5 text-ocre-500 transition-transform shrink-0 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-body text-stone leading-relaxed text-pretty">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
