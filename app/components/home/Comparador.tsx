import Link from "next/link";
import Image from "next/image";

const ROWS = [
  {
    aspect: "Origen",
    oficial: "Fabricante original I-TECH · inventor de la tecnología",
    china: "Clones sin licencia · trazabilidad nula",
  },
  {
    aspect: "Garantía",
    oficial: "2 años + extensión · piezas en stock España",
    china: "6-12 meses · piezas con envío 3-6 semanas",
  },
  {
    aspect: "Servicio técnico",
    oficial: "Taller propio en Les Preses · 24/7",
    china: "Soporte remoto en horario China · sin presencia ES",
  },
  {
    aspect: "Formación",
    oficial: "Curso completo en taller + a domicilio con suplemento",
    china: "Manual PDF traducido",
  },
  {
    aspect: "Perfiles ICC",
    oficial: "Calibrados con espectrofotómetro · superficie específica",
    china: "Perfiles genéricos · ajuste por prueba/error",
  },
  {
    aspect: "Importación y aduanas",
    oficial: "Registro RII-AEE propio · importación legal · entrega operativa",
    china: "Riesgo de bloqueo aduanero · devolución o destrucción a tu cargo",
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
            <div className="eyebrow">Oficial vs. imitación</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Por qué pagar más
              <br />
              <span className="italic text-cobalto-700">cuesta menos a largo plazo.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              En esta tecnología China es líder indiscutible e I-TECH líder
              destacado, pero cada vez más imitaciones llegan a España. Te
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
              Imitación
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

        {/* RII-AEE — antes era una sección completa aparte (RIIAEEBlock).
            Resumido aquí: el argumento de aduanas ya está en la fila 6. */}
        <div className="mt-12 bg-cobalto-900 text-bone p-8 lg:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="bg-bone p-3 inline-block shrink-0">
                <Image
                  src="/tintas/RII-AEE .jpg"
                  alt="Logo oficial RII-AEE"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                Registro RII-AEE · certificado
              </div>
              <h3 className="font-display text-h4 uppercase tracking-tight text-bone leading-tight">
                Importar sin este registro
                <span className="text-ocre-200"> bloquea tu máquina en aduanas.</span>
              </h3>
              <p className="text-body-sm text-bone/80 leading-relaxed">
                Es obligación legal europea para importar equipos electrónicos.
                Sin él, la máquina puede quedar retenida, devolverse a origen o
                destruirse a tu cargo. Comprando en I-TECH España, la
                importación, la documentación y el reciclaje final ya están
                resueltos.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/por-que-itech"
                className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors text-center"
              >
                Ver comparativa completa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
