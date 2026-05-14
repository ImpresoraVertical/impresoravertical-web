"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    q: "¿Qué es una impresora vertical o de pared y cómo funciona?",
    a: "Una impresora vertical o de pared es una variedad de impresora de inyección de tinta que emplea tinta de 4 o 5 colores CMYK(W) para plasmar imágenes directamente sobre muros y otros soportes verticales.",
  },
  {
    q: "¿Cuál es la diferencia entre tinta base agua y tinta UV?",
    a: "La impresora vertical con tinta a base de agua emplea tinta de pigmento, adecuada para imprimir en materiales absorbentes como paredes de yeso y papel tapiz. La impresora UV utiliza una lámpara UV para solidificar la tinta sobre superficies de materiales como muros, metal, vidrio, acrílico, azulejos, entre otros.",
  },
  {
    q: "¿Qué tamaño puede imprimir una impresora vertical?",
    a: "La altura de impresión es de hasta 3 metros (depende del modelo) y en ancho no tiene limitación de longitud. Existe la posibilidad de usar la técnica de solapación, al unir dos imágenes, la altura puede superar los 3 metros.",
  },
  {
    q: "¿En qué superficies puede imprimir?",
    a: "La impresora vertical con LED UV puede imprimir en casi cualquier superficie: paredes, papel tapiz, azulejos, metal, vidrio, acrílico, plástico. La base agua imprime en paredes y superficies absorbentes como masilla, cal, etc.",
  },
  {
    q: "¿Cuánto dura la tinta?",
    a: "Depende de la preparación y condiciones del soporte. En condiciones buenas: 15 años en interiores y 5 años en exteriores con protección UV.",
  },
  {
    q: "¿Puedo quitar una impresión?",
    a: "Sí. Se puede repintar encima con 3 capas de pintura plástica. En cristal con espátula de cerámica. En otros materiales con chorro de arena o lijando.",
  },
];

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Las dudas reales
              <br />
              <span className="italic text-cobalto-700">de quien va a comprar.</span>
            </h2>
            <p className="text-body text-stone text-pretty pt-4">
              Si tu pregunta no está aquí, pregúntanos sin compromiso.
              Respondemos en menos de 24h laborables.
            </p>
            <div className="pt-6">
              <Link
                href="/faq"
                className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
              >
                Ver todas las FAQ →
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
