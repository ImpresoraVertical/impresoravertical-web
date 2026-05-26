import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de uso · dónde brilla la impresora vertical I-TECH",
  description:
    "Casos reales de uso de la impresora vertical I-TECH: barcos, museos, remolques de camión, autocaravanas, skate, persianas comerciales, escuelas, hospitales, pabellones deportivos, réplicas de cuadros.",
};

const USE_CASES = [
  {
    code: "01",
    title: "Barcos y embarcaciones",
    description:
      "Personalización del interior y exterior de barcos: camarotes, paneles decorativos, branding en yates de lujo. Tinta UV resistente a la salinidad y rayos solares con barniz protector adicional.",
    surfaces: ["Madera tratada marina", "Fibra de vidrio", "Aluminio composite"],
    serie: "Serie T · Serie W",
  },
  {
    code: "02",
    title: "Museos y espacios culturales",
    description:
      "Decoración de salas, paneles informativos, escenografías temporales. Cumplimos certificaciones para entornos culturales (tintas GREENGUARD, materiales ignífugos compatibles).",
    surfaces: ["Yeso pintado", "Panel acústico", "Vidrio templado"],
    serie: "Serie T · Serie W · Serie WF",
  },
  {
    code: "03",
    title: "Remolques de camión y autocaravanas",
    description:
      "Branding exterior y rotulación de remolques, autocaravanas, food trucks. Sustituye al vinilo tradicional con acabado directo sobre chapa, sin juntas y con durabilidad exterior probada.",
    surfaces: ["Aluminio composite", "Chapa lacada", "Fibra"],
    serie: "Serie W · Serie WF",
  },
  {
    code: "04",
    title: "Tablas de skate y deporte",
    description:
      "Producción artesanal o serie corta de tablas personalizadas. Impresión directa con curvas adaptativas del cabezal. Compatible con barnices deportivos posteriores.",
    surfaces: ["Madera de arce 7 capas", "Plástico técnico", "Fibra de carbono"],
    serie: "Serie FB · Serie K",
  },
  {
    code: "05",
    title: "Persianas y locales comerciales",
    description:
      "Rotulación de persianas metálicas de comercios, escaparates 24/7, frente publicitario. Impresión vertical sobre persiana bajada o panel desmontable.",
    surfaces: ["Persiana metálica galvanizada", "PVC", "Chapa pintada"],
    serie: "Serie T · Serie W",
  },
  {
    code: "06",
    title: "Murales en escuelas",
    description:
      "Decoración educativa, gamificación de pasillos, biblioteca, comedor, gimnasio. Tintas base agua GREENGUARD aptas para entornos infantiles sin restricciones de uso.",
    surfaces: ["Yeso pintado", "MDF lacado", "Hormigón pulido"],
    serie: "Serie E · Serie K",
  },
  {
    code: "07",
    title: "Murales en hospitales",
    description:
      "Humanización de espacios sanitarios: paritorios, plantas pediátricas, salas de espera. Tintas certificadas para entornos hospitalarios, materiales no porosos limpiables.",
    surfaces: ["Vidrio antibacteriano", "Panel sanitario", "Microcemento"],
    serie: "Serie T · Serie W",
  },
  {
    code: "08",
    title: "Pabellones deportivos",
    description:
      "Branding institucional en pabellones, polideportivos, gimnasios. Murales motivacionales, identidad de club, patrocinadores. Resistencia al impacto de pelotas y limpieza intensiva.",
    surfaces: ["Hormigón pulido", "Panel acústico deportivo", "Madera tratada"],
    serie: "Serie T · Serie W · Serie WF",
  },
  {
    code: "09",
    title: "Réplicas de cuadros y arte",
    description:
      "Reproducción de obras de arte sobre lienzo, panel rígido o pared directa. Resolución 2880 dpi y perfiles ICC museísticos para fidelidad cromática máxima.",
    surfaces: ["Lienzo imprimable", "MDF lacado", "Yeso pintado"],
    serie: "Serie T · Serie WF",
  },
];

export default function CasosUsoPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Casos de uso · aplicaciones reales</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Donde un vinilo se rinde,
                <span className="block text-cobalto-700">la impresora vertical empieza.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                9 aplicaciones reales donde nuestros clientes están imprimiendo
                ahora mismo. Desde barcos hasta pabellones deportivos, pasando
                por escuelas, hospitales y arte. Si tu caso no aparece, también
                podemos hacerlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {USE_CASES.map((c) => (
              <article
                key={c.code}
                className="bg-paper p-8 lg:p-10 space-y-4 flex flex-col hover:bg-bone transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-h4 text-ocre-500">{c.code}</span>
                  <span className="font-mono text-eyebrow uppercase tracking-wider text-stone text-right">
                    {c.serie}
                  </span>
                </div>

                <h2 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {c.title}
                </h2>

                <p className="text-body-sm text-stone leading-relaxed flex-grow">
                  {c.description}
                </p>

                <div className="pt-4 border-t border-stone/15">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-2">
                    Superficies típicas
                  </div>
                  <ul className="space-y-1">
                    {c.surfaces.map((s) => (
                      <li
                        key={s}
                        className="font-sans text-body-sm text-ink flex gap-2"
                      >
                        <span className="text-stone">─</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center max-w-3xl mx-auto">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance">
            ¿Tu caso no está aquí?
            <span className="block text-ocre-200">Probemos.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6">
            Ven a Les Preses con tu superficie y tu archivo. Hacemos una prueba
            de impresión en vivo y te decimos si encaja, qué Serie va mejor y
            qué resultado esperar.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200"
            >
              Probar mi caso en taller
            </Link>
            <Link
              href="/calculadora-roi"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-bone/10"
            >
              Calcular ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
