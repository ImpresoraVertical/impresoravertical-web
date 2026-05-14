import Link from "next/link";

const ROWS = [
  {
    aspect: "Origen",
    oficial: "Fabricante original I-TECH · inventor de la tecnología",
    china: "Clones sin licencia · trazabilidad nula",
  },
  {
    aspect: "Garantía",
    oficial: "2-3 años + extensión · piezas en stock España",
    china: "6-12 meses · piezas con envío 3-6 semanas",
  },
  {
    aspect: "Servicio técnico",
    oficial: "Taller propio en Les Preses · 24/7",
    china: "Soporte remoto en horario China · sin presencia ES",
  },
  {
    aspect: "Formación",
    oficial: "Curso completo en taller + a domicilio",
    china: "Manual PDF traducido por motor automático",
  },
  {
    aspect: "Perfiles ICC",
    oficial: "Calibrados con espectrofotómetro · superficie específica",
    china: "Perfiles genéricos · ajuste por prueba/error",
  },
  {
    aspect: "Reciclaje (RII-AEE)",
    oficial: "Cumplimiento RII-AEE certificado · gestión incluida",
    china: "Sin certificación · responsabilidad del usuario",
  },
  {
    aspect: "Software RIP",
    oficial: "Licencia oficial actualizada · soporte inglés/español",
    china: "Software crackeado · sin actualizaciones",
  },
];

export default function Comparador() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Oficial vs. clónica china</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Por qué pagar más
              <br />
              <span className="italic text-cobalto-700">cuesta menos a largo plazo.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Cada vez más imitaciones del modelo I-TECH llegan a España. Te
              contamos la diferencia real, no la teórica.
            </p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="border border-stone/20">
          {/* Header */}
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

          {/* Rows */}
          {ROWS.map((row, i) => (
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

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/comparador" className="btn-oficial">
            Ver comparador completo
          </Link>
          <Link
            href="/sobre-itech"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            Conoce I-TECH España →
          </Link>
        </div>
      </div>
    </section>
  );
}
