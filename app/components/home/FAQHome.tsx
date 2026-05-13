"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    q: "¿Cuánto tarda la instalación en mi taller?",
    a: "La instalación completa, calibración y formación inicial ocupa entre 1 y 2 días según modelo. Trabajamos con tu equipo en tu local — no necesitas espacio dedicado, solo enchufe estándar 220V y conexión a internet.",
  },
  {
    q: "¿Qué garantía incluye la máquina?",
    a: "2 años de garantía sin franquicia para todos los modelos E, K, S, T y W. El modelo WF incluye 3 años por su uso intensivo. Cumplimos certificación RII-AEE: nosotros gestionamos el reciclaje al final de vida útil.",
  },
  {
    q: "¿Es compatible con mi software RIP actual?",
    a: "Sí. Suministramos licencia oficial de Caldera o ColorGate (a elegir). Si ya trabajas con otro RIP profesional (Onyx, Wasatch), confirmamos compatibilidad antes de la entrega.",
  },
  {
    q: "¿Las tintas son ecológicas?",
    a: "Las tintas base agua del E y K son GREENGUARD certificadas para entornos interiores sin restricciones (hospitales, escuelas, hoteles). Las UV cumplen normativa REACH y son compatibles con espacios públicos.",
  },
  {
    q: "¿Qué pasa si se rompe una pieza?",
    a: "Tenemos stock de las piezas más comunes en nuestro taller de Les Preses. Envío 24-48h a península. Para casos urgentes con coste de producción detenido, organizamos visita técnica en 48-72h.",
  },
  {
    q: "¿Aceptáis empresas con licitación pública?",
    a: "Sí. Tenemos toda la documentación CE, RII-AEE, fichas técnicas y declaraciones de conformidad listas para pliegos. Hemos trabajado con ayuntamientos, museos y proyectos institucionales (Fundación ONCE, entre otros).",
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
