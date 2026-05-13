import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formación · curso completo impresora vertical I-TECH",
  description:
    "Formación in situ o en taller Les Preses para clientes nuevos y avanzados. Calibración, RIP, perfiles ICC, instalación. Incluida con cada máquina.",
};

const MODULES = [
  {
    code: "01",
    title: "Setup inicial y conexión",
    duration: "2 horas",
    body: "Desembalaje, instalación física, conexión eléctrica y red. Configuración del PC integrado o externo según modelo.",
  },
  {
    code: "02",
    title: "Software RIP profesional",
    duration: "4 horas",
    body: "Caldera Print o ColorGate (a elegir). Flujo de trabajo desde archivo Illustrator/PDF hasta impresión. Gestión de colas.",
  },
  {
    code: "03",
    title: "Perfiles ICC y calibración",
    duration: "3 horas",
    body: "Uso de espectrofotómetro X-Rite, generación de perfiles personalizados, validación visual y técnica. Mantenimiento.",
  },
  {
    code: "04",
    title: "Preparación de superficies",
    duration: "2 horas",
    body: "Diagnóstico de pared, imprimaciones según tipo de superficie, ajustes finos por absorción y textura.",
  },
  {
    code: "05",
    title: "Producción real",
    duration: "4 horas",
    body: "3-4 instalaciones reales sobre superficie de pruebas. Resolución de problemas comunes. Mantenimiento preventivo.",
  },
  {
    code: "06",
    title: "Negocio y comercial",
    duration: "2 horas",
    body: "Pricing por m², presupuestos tipo, gestión de demos a cliente final, marketing local. Plantillas listas.",
  },
];

export default function FormacionPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Formación · incluida con la máquina</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                No vendemos hierro.
                <br />
                <span className="italic text-cobalto-700">Vendemos un negocio que funciona.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Curso completo de 17 horas dividido en 6 módulos. In situ en
                tu taller o en nuestras instalaciones de Les Preses. Almuerzo
                incluido. Material de estudio para futuras consultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="space-y-px bg-stone/15 border border-stone/15">
            {MODULES.map((mod) => (
              <article
                key={mod.code}
                className="bg-paper p-8 lg:p-10 grid lg:grid-cols-12 gap-6 items-start hover:bg-bone transition-colors"
              >
                <div className="lg:col-span-2">
                  <div className="font-mono text-h3 text-ocre-500">{mod.code}</div>
                </div>
                <div className="lg:col-span-7 space-y-2">
                  <h2 className="font-serif text-h4 text-ink leading-tight">{mod.title}</h2>
                  <p className="text-body text-stone leading-relaxed">{mod.body}</p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">Duración</div>
                  <div className="font-serif text-h5 text-ink mt-1">{mod.duration}</div>
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
                En tu taller
              </div>
              <h3 className="font-serif text-h3 text-ink">Formación a domicilio</h3>
              <p className="text-body text-stone leading-relaxed">
                Vamos a tu taller con la máquina ya instalada. 2-3 días de
                trabajo intensivo con tu equipo en tu entorno real. Incluido
                desplazamiento dentro de España.
              </p>
              <ul className="space-y-2 text-body-sm text-ink pt-4 border-t border-stone/15">
                <li>→ 17 horas de formación práctica</li>
                <li>→ Hasta 3 personas formadas</li>
                <li>→ Material de estudio físico + digital</li>
                <li>→ Soporte WhatsApp 90 días post-formación</li>
              </ul>
            </div>

            <div className="bg-paper p-10 border border-stone/15 space-y-4">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                En Les Preses
              </div>
              <h3 className="font-serif text-h3 text-ink">Formación en taller</h3>
              <p className="text-body text-stone leading-relaxed">
                3 días en nuestras instalaciones de Les Preses, Girona. Acceso
                a todos los modelos para pruebas. Comida y alojamiento
                gestionados con descuento hotel partner.
              </p>
              <ul className="space-y-2 text-body-sm text-ink pt-4 border-t border-stone/15">
                <li>→ Acceso al taller completo</li>
                <li>→ Prueba todos los modelos del catálogo</li>
                <li>→ Hotel partner con descuento</li>
                <li>→ Comida grupal día central incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page text-center">
          <h2 className="font-serif text-h1 text-ink text-balance max-w-3xl mx-auto">
            La formación está <span className="italic text-cobalto-700">incluida</span> con cualquier modelo nuevo.
          </h2>
          <p className="text-body-lg text-stone mt-6 max-w-xl mx-auto">
            Si eres cliente actual y quieres una formación avanzada o
            actualización, contacta para presupuesto.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contacto" className="btn-primary">Solicitar formación</Link>
            <Link href="/modelos" className="btn-secondary">Ver modelos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
