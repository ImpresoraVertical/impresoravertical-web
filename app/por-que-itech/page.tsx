import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Por qué I-TECH · vs. otras impresoras verticales",
  description:
    "Comparativa real: I-TECH España vs. importación directa de China vs. competencia europea. Servicio técnico, RII-AEE, garantía, formación. Sin humo.",
  alternates: { canonical: "/por-que-itech" },
};

// Comparativa en formato tabla. Cada fila = aspecto crítico para el cliente.
const COMPARISON_ROWS = [
  {
    aspect: "Servicio técnico en España",
    itech: "Taller propio en Les Preses, Girona. Stock de piezas. Visita 48-72h.",
    importacion: "Inexistente. Tendrás que repararla tú o esperar piezas desde China (3-6 semanas).",
    europa: "Variable. Mayoría revende sin taller. Dependen de proveedor original.",
    itechWin: true,
  },
  {
    aspect: "Formación incluida",
    itech: "Curso completo de 8 horas en 10 módulos, in situ en taller. Almuerzo incluido. Material físico y digital.",
    importacion: "PDF en inglés o chino. Sin soporte humano.",
    europa: "Suele ser de pago aparte (300-800 €).",
    itechWin: true,
  },
  {
    aspect: "Certificación RII-AEE",
    itech: "Sí. Cumplimos normativa europea de residuos electrónicos. Tu empresa también la cumple.",
    importacion: "No. Asumes tú el coste y la responsabilidad legal del reciclaje.",
    europa: "Algunas sí, otras no. Pregunta siempre antes de comprar.",
    itechWin: true,
  },
  {
    aspect: "Factura con IVA y garantía legal",
    itech: "Factura española con IVA. Garantía legal de 3 años (consumidor) / 1 año comercial.",
    importacion: "Factura no válida en España. Aduanas, aranceles y sin garantía real.",
    europa: "Factura europea válida. Garantía variable.",
    itechWin: true,
  },
  {
    aspect: "Perfiles ICC personalizados",
    itech: "Creamos perfiles ICC a medida para tu soporte y tinta, en taller con espectrofotómetro X-Rite.",
    importacion: "Perfiles genéricos. Te tocará calibrar por tu cuenta.",
    europa: "Algunos ofrecen, mayoría no.",
    itechWin: true,
  },
  {
    aspect: "Soporte en castellano y catalán",
    itech: "WhatsApp directo, llamada, email, presencial. Equipo hispanohablante nativo.",
    importacion: "Email en inglés mal traducido. Diferencia horaria 6-8 h.",
    europa: "Inglés / idioma del país de origen.",
    itechWin: true,
  },
  {
    aspect: "Idioma del software RIP",
    itech: "Castellano / inglés. Manual técnico en castellano.",
    importacion: "Chino o inglés. Sin manual castellano.",
    europa: "Inglés mayoritariamente.",
    itechWin: true,
  },
  {
    aspect: "Demo presencial antes de comprar",
    itech: "Sí. Vienes a Les Preses, traes tu archivo y superficie, te llevas la muestra impresa.",
    importacion: "Imposible. Compras a ciegas.",
    europa: "A veces. Suele requerir viajar al país.",
    itechWin: true,
  },
  {
    aspect: "Personalización industrial (Serie G)",
    itech: "Personalizable en altura y color desde fábrica. Para integradores industriales.",
    importacion: "Solo configuraciones estándar.",
    europa: "Limitado a catálogo.",
    itechWin: true,
  },
  {
    aspect: "Continuidad por traspaso",
    itech: "Si vendes la máquina, el nuevo dueño hereda servicio técnico. Solo trámite administrativo.",
    importacion: "Sin continuidad. El comprador se queda sin soporte.",
    europa: "Variable según proveedor.",
    itechWin: true,
  },
];

// Mitos sobre importación directa que conviene desmontar
const MITOS = [
  {
    mito: "“Importando de China me ahorro un 40%.”",
    realidad:
      "Tras aranceles (10-12%), IVA (21%), transporte marítimo (1.500-3.000 €), aduanas y certificación CE, el ahorro real ronda el 5-10%. A cambio: cero soporte, cero formación, cero garantía. La primera avería te cuesta más que el ahorro.",
  },
  {
    mito: "“Es la misma máquina, da igual a quién la compre.”",
    realidad:
      "Falso. Los fabricantes producen lotes diferenciados según destino. Las máquinas que entran en España vía I-TECH llevan firmware adaptado, perfiles ICC validados y componentes europeos donde aplica.",
  },
  {
    mito: "“Si se rompe, llamo a un técnico local.”",
    realidad:
      "El técnico local no tiene piezas, no conoce el firmware, no tiene perfiles ICC de tu modelo. Una reparación puede tardar 4-8 semanas con producción parada.",
  },
  {
    mito: "“La garantía del fabricante chino vale igual.”",
    realidad:
      "Legalmente no opera en España. Reclamar implica derecho internacional y devolución a origen (a tu cargo). En la práctica, no existe.",
  },
];

export default function PorQueITechPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Por qué I-TECH · sin humo</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Comprar barato
                <span className="block text-cobalto-700">sale caro.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Comparativa real entre comprar una impresora vertical I-TECH en
                España, importarla directamente desde China o ir a otro
                distribuidor europeo. Sin marketing. Con datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Comparativa real</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                10 puntos donde
                <span className="block text-cobalto-700">marcamos la diferencia.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Antes de firmar, mira esta tabla. Te ahorrarás más de un
                disgusto.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto bg-paper border border-stone/15">
            <table className="w-full">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider w-48">
                    Aspecto
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider bg-cobalto-700">
                    I-TECH España
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Importación China
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Distribuidor europeo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/15">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.aspect} className="hover:bg-bone transition-colors">
                    <td className="p-6 font-display text-h6 uppercase tracking-tight text-ink align-top">
                      {row.aspect}
                    </td>
                    <td className="p-6 text-body-sm text-ink bg-cobalto-50 align-top border-l-2 border-cobalto-700">
                      <span className="font-mono text-eyebrow text-cobalto-700 block mb-1">
                        ✓ I-TECH
                      </span>
                      {row.itech}
                    </td>
                    <td className="p-6 text-body-sm text-stone align-top">
                      <span className="font-mono text-eyebrow text-stone block mb-1">
                        Importación
                      </span>
                      {row.importacion}
                    </td>
                    <td className="p-6 text-body-sm text-stone align-top">
                      <span className="font-mono text-eyebrow text-stone block mb-1">
                        Europa
                      </span>
                      {row.europa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mitos vs realidad */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">4 mitos sobre importar</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Lo que te cuentan
                <span className="block text-cobalto-700">vs. lo que pasa.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Frases que escuchamos cada semana en el taller. Las
                desmontamos con números.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-stone/15 border border-stone/15">
            {MITOS.map((m, i) => (
              <article
                key={i}
                className="bg-bone p-8 lg:p-10 space-y-4 hover:bg-paper transition-colors"
              >
                <div className="font-mono text-h4 text-ocre-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {m.mito}
                </h3>
                <div className="pt-4 border-t border-stone/15">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 mb-2">
                    Realidad
                  </div>
                  <p className="text-body-sm text-stone leading-relaxed">
                    {m.realidad}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas resumen */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-8 space-y-4">
              <div className="eyebrow">Resumen ejecutivo</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Lo que ganas
                <span className="block text-cobalto-700">comprando en I-TECH España.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {[
              {
                title: "Tranquilidad técnica",
                body: "Taller propio, stock de piezas, WhatsApp 24/7 para clientes. Si tu máquina para, no estás solo.",
              },
              {
                title: "Cumplimiento legal",
                body: "Factura española, IVA, RII-AEE, CE, garantía. Tu empresa no asume riesgos administrativos.",
              },
              {
                title: "Producción real desde día 1",
                body: "Formación incluida + perfiles ICC + soporte por traspaso. Salen rentables desde el primer mes.",
              },
            ].map((b) => (
              <article
                key={b.title}
                className="bg-paper p-8 lg:p-10 space-y-4 hover:bg-bone transition-colors"
              >
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                  Ventaja
                </div>
                <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {b.title}
                </h3>
                <p className="text-body-sm text-stone leading-relaxed">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance max-w-3xl mx-auto">
            Antes de comparar precio,
            <span className="block text-ocre-300">compara servicio.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Ven al taller de Les Preses. Sin compromiso. Tomamos un café y te
            enseñamos cada serie funcionando.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Reservar demo
            </Link>
            <Link
              href="/calculadora-roi"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
            >
              Calcular ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
