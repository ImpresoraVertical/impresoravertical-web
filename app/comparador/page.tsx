import Link from "next/link";
import { MODELS } from "../data/models";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparador · Oficial I-TECH vs. clónica china",
  description:
    "Comparativa real entre impresoras verticales I-TECH oficiales y clónicas. Garantía, servicio técnico, tintas, perfiles ICC y aduanas.",
};

const COMPARISON_ROWS = [
  { aspect: "Origen del fabricante", oficial: "I-TECH · inventor original de la tecnología", china: "Múltiples factorías sin trazabilidad" },
  { aspect: "Distribución en España", oficial: "Distribuidor oficial certificado", china: "Importación gris · sin representación" },
  { aspect: "Garantía", oficial: "2-3 años + extensión opcional", china: "6-12 meses · letra pequeña" },
  { aspect: "Servicio técnico", oficial: "Taller Les Preses · 24/7 WhatsApp", china: "Remoto China · horario chino" },
  { aspect: "Tiempo respuesta urgencia", oficial: "48-72h piezas en stock España", china: "3-6 semanas envío internacional" },
  { aspect: "Formación incluida", oficial: "Curso completo + a domicilio", china: "Manual PDF traducción automática" },
  { aspect: "Perfiles ICC", oficial: "Calibrados con espectrofotómetro", china: "Genéricos · ajuste manual" },
  { aspect: "Software RIP", oficial: "Caldera/ColorGate licencia oficial", china: "Software crackeado sin updates" },
  { aspect: "Tintas certificadas", oficial: "GREENGUARD + REACH + base agua opción", china: "Sin certificación EU verificable" },
  { aspect: "Documentación CE", oficial: "Declaración conformidad oficial", china: "Marcado dudoso · no aceptado licitaciones" },
  { aspect: "Importación y aduanas", oficial: "Gestionada por nosotros · documentación completa", china: "Riesgo de bloqueo aduanero · devolución o destrucción a cargo del importador" },
  { aspect: "Repuestos disponibles", oficial: "Stock España piezas críticas", china: "Pedido caso por caso a China" },
  { aspect: "Coste real 5 años", oficial: "Predecible · soporte continuo", china: "Inversión inicial baja · costes ocultos" },
];

export default function ComparadorPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Comparador · oficial vs. clónica</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Por qué pagar más cuesta
                <br />
                <span className="italic text-cobalto-700">menos a largo plazo.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Cada vez más imitaciones del modelo I-TECH llegan a España. Te
                contamos la diferencia real punto por punto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="border border-stone/20">
            <div className="grid grid-cols-12 bg-ink text-paper">
              <div className="col-span-12 md:col-span-4 p-6 font-mono text-eyebrow uppercase tracking-wider">
                Aspecto
              </div>
              <div className="col-span-12 md:col-span-4 p-6 font-mono text-eyebrow uppercase tracking-wider bg-cobalto-700 text-bone flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-ocre-300 rounded-full" />
                I-TECH Oficial
              </div>
              <div className="col-span-12 md:col-span-4 p-6 font-mono text-eyebrow uppercase tracking-wider text-bone/70">
                Clónica china
              </div>
            </div>

            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-12 border-t border-stone/20 ${
                  i % 2 === 0 ? "bg-paper" : "bg-bone/40"
                }`}
              >
                <div className="col-span-12 md:col-span-4 p-6 font-serif text-body lg:text-body-lg text-ink border-b md:border-b-0 md:border-r border-stone/20">
                  {row.aspect}
                </div>
                <div className="col-span-12 md:col-span-4 p-6 text-body-sm text-ink leading-relaxed border-b md:border-b-0 md:border-r border-stone/20 bg-cobalto-50/40">
                  <span className="flex items-start gap-2">
                    <span className="text-cobalto-700 mt-1">✓</span>
                    <span>{row.oficial}</span>
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 p-6 text-body-sm text-stone leading-relaxed">
                  <span className="flex items-start gap-2">
                    <span className="text-stone/60 mt-1">✗</span>
                    <span>{row.china}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-serif text-h1 text-bone text-balance max-w-3xl mx-auto">
            Hablemos antes de que <span className="italic text-ocre-200">cometas un error caro.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Si tienes una propuesta de clónica encima de la mesa, mándanosla y
            te hacemos un comparativo honesto con la versión oficial.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200"
            >
              Pedir análisis comparativo
            </Link>
            <Link
              href="/modelos"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-bone/10"
            >
              Ver modelos oficiales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
