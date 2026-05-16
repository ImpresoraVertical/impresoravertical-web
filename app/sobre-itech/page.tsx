import Link from "next/link";
import type { Metadata } from "next";
import MediaPlaceholder from "../components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Sobre I-TECH España · Punto de gestión oficial",
  description:
    "I-TECH España es el punto de gestión oficial de impresoras verticales I-TECH en España, con taller propio en Les Preses, Girona.",
};

export default function SobreITechPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow">Sobre I-TECH España</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Quien está detrás de la
                <br />
                <span className="italic text-cobalto-700">impresora vertical oficial.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                I-TECH España opera desde Les Preses,
                Girona. Somos el único distribuidor oficial certificado en
                España para la marca I-TECH, inventora de la tecnología
                de impresión vertical sobre pared.
              </p>
            </div>
            <div className="lg:col-span-5">
              <MediaPlaceholder
                type="image"
                title="Foto del equipo en el taller"
                description="Equipo de I-TECH España (2-4 personas) en el taller, con una máquina detrás. Plano horizontal, gente mirando a cámara o en acción técnica."
                dimensions="1600×1200 px · ratio 4:3"
                filename="/taller/equipo.jpg"
                aspect="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                metric: "2020",
                label: "Año fundación I-TECH España",
                desc: "Punto de gestión oficial en España para la impresora vertical inventada por I-TECH.",
              },
              {
                metric: "+6",
                label: "Años de experiencia",
                desc: "Asesoramiento, importación, instalación, formación y servicio técnico desde Les Preses.",
              },
              {
                metric: "ES",
                label: "Punto de gestión oficial",
                desc: "Único punto de gestión en España para venta, formación, servicio técnico y reciclaje.",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-4">
                <div className="font-serif text-display text-ink leading-none">
                  {item.metric}
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                  {item.label}
                </div>
                <p className="text-body text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Qué hacemos</div>
              <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
                Mucho más que <span className="italic text-cobalto-700">vender máquinas.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  title: "Venta directa de fábrica",
                  body: "Gestionamos la compra directo de fábrica con personalizaciones de medidas, colores y adaptaciones. Sin intermediarios, sin sobreprecio de re-venta.",
                },
                {
                  title: "Formación in situ",
                  body: "Curso completo de calibración, RIP, perfiles ICC e instalación. Vamos a tu taller o lo hacemos en Les Preses con almuerzo incluido.",
                },
                {
                  title: "Servicio técnico exclusivo",
                  body: "Stock de piezas de recambio en España. Visita técnica 48-72h para casos urgentes. Atención 24/7 vía WhatsApp para clientes.",
                },
                {
                  title: "Gestión de reciclaje certificada",
                  body: "Nos encargamos del reciclaje al final de la vida útil de la máquina. Documentación oficial para licitaciones públicas.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border-l-2 border-ocre-300 pl-6 py-2"
                >
                  <h3 className="font-serif text-h4 text-ink">{service.title}</h3>
                  <p className="text-body text-stone mt-2 leading-relaxed">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-serif text-h1 text-bone text-balance max-w-3xl mx-auto">
            Visítanos en Les Preses, <span className="italic text-ocre-200">Girona.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Calle del Centre d&apos;Empreses 1-7, Nave 7 · 17178 Les Preses
            <br />
            +34 623 007 729 · info@impresoravertical.com
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200"
            >
              Reservar visita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
