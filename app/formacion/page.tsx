import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formación · curso completo impresora vertical I-TECH",
  description:
    "Curso de formación de 8 horas dividido en 10 módulos. In situ en nuestro taller de Les Preses. Almuerzo y material incluidos. Opción a domicilio con suplemento.",
};

const MODULES = [
  { code: "01", title: "Partes de la impresora I-TECH", duration: "30 min" },
  { code: "02", title: "Montaje", duration: "45 min" },
  { code: "03", title: "Encendido", duration: "30 min" },
  { code: "04", title: "Software de control", duration: "1 h" },
  { code: "05", title: "Funcionamiento general", duration: "1 h" },
  { code: "06", title: "Conceptos básicos", duration: "45 min" },
  { code: "07", title: "Tinta UV", duration: "45 min" },
  { code: "08", title: "Mantenimientos", duration: "1 h" },
  { code: "09", title: "Preparación RIP", duration: "1 h" },
  { code: "10", title: "Modos de impresión", duration: "45 min" },
];

export default function FormacionPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Formación · incluida con la máquina</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                No vendemos hierro.
                <span className="block text-cobalto-700">Te enseñamos a usarlo.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Curso completo de <strong>8 horas</strong> dividido en{" "}
                <strong>10 módulos</strong>. In situ en nuestras instalaciones
                de Les Preses. Almuerzo incluido. Material de estudio para
                futuras consultas. Posibilidad de formación a domicilio con la
                impresora adquirida con suplemento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">10 módulos · 8 horas</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Lo que aprenderás
                <span className="block text-cobalto-700">paso a paso.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Programa estructurado para que salgas operando la máquina con
                soltura. De cero a producción real.
              </p>
            </div>
          </div>

          <div className="space-y-px bg-stone/15 border border-stone/15">
            {MODULES.map((mod) => (
              <article
                key={mod.code}
                className="bg-paper p-6 lg:p-8 grid lg:grid-cols-12 gap-6 items-center hover:bg-bone transition-colors"
              >
                <div className="lg:col-span-2">
                  <div className="font-mono text-h3 text-ocre-500">{mod.code}</div>
                </div>
                <div className="lg:col-span-7 lg:col-start-4">
                  <h2 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                    {mod.title}
                  </h2>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                    Duración
                  </div>
                  <div className="font-display text-h5 uppercase tracking-tight text-ink mt-1">
                    {mod.duration}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-paper p-10 border border-stone/15 space-y-4">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                Modalidad estándar · incluida
              </div>
              <h3 className="font-display text-h3 uppercase tracking-tight text-ink">
                En nuestro taller
              </h3>
              <p className="text-body text-stone leading-relaxed">
                Curso de 8 horas en nuestras instalaciones de Les Preses,
                Girona. Acceso a todos los modelos para pruebas. Comida
                incluida. Material de estudio físico y digital para futuras
                consultas.
              </p>
              <ul className="space-y-2 text-body-sm text-ink pt-4 border-t border-stone/15">
                <li>→ 8 horas · 10 módulos</li>
                <li>→ Acceso al taller completo</li>
                <li>→ Almuerzo grupal incluido</li>
                <li>→ Material físico y digital</li>
                <li>→ Soporte WhatsApp 90 días post-formación</li>
              </ul>
            </div>

            <div className="bg-paper p-10 border border-stone/15 space-y-4">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                Modalidad domicilio · suplemento
              </div>
              <h3 className="font-display text-h3 uppercase tracking-tight text-ink">
                En tu taller
              </h3>
              <p className="text-body text-stone leading-relaxed">
                Vamos a tu local con la impresora ya instalada. Mismo programa
                de 10 módulos adaptado a tu equipo y entorno de producción
                real. Con suplemento por desplazamiento dentro de España.
              </p>
              <ul className="space-y-2 text-body-sm text-ink pt-4 border-t border-stone/15">
                <li>→ 8 horas formación práctica in situ</li>
                <li>→ Hasta 3 personas formadas</li>
                <li>→ Material de estudio físico + digital</li>
                <li>→ Soporte WhatsApp 90 días post-formación</li>
                <li>→ Coste suplementario según ubicación</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-ink text-balance max-w-3xl mx-auto">
            La formación está <span className="block text-cobalto-700">incluida con cualquier modelo nuevo.</span>
          </h2>
          <p className="text-body-lg text-stone mt-6 max-w-xl mx-auto">
            Si eres cliente actual y quieres una formación avanzada o de
            actualización, contacta para presupuesto específico.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contacto" className="btn-primary">
              Solicitar formación
            </Link>
            <Link href="/series" className="btn-secondary">
              Ver Series
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
