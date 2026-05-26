import ContactForm from "../components/ContactForm";
import PixelTrack from "../components/PixelTrack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto · Reserva tu demo en taller",
  description:
    "Reserva una demo gratuita en nuestro taller de Les Preses, Girona. Sin compromiso. Imprime sobre tu superficie real. +34 623 007 729.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PixelTrack event="Contact" params={{ content_name: "Contacto Page" }} />

      {/* Formulario */}
      <section className="pt-32 md:pt-40 pb-24 bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="eyebrow">Empezamos aquí</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Cuéntanos
                <span className="block text-cobalto-700">qué necesitas.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-xl text-pretty">
                Te respondemos en menos de 24h laborables. Sin compromiso.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-4 lg:col-start-9 space-y-8">
              <div className="bg-paper p-8 border border-stone/15 space-y-6">
                <div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Llamada directa
                  </div>
                  <a
                    href="tel:+34623007729"
                    className="font-display text-h3 uppercase tracking-tight text-ink mt-1 block hover:text-cobalto-700 transition-colors"
                  >
                    +34 623 007 729
                  </a>
                  <p className="text-body-sm text-stone mt-1">
                    L-V · 9:00 a 18:00
                  </p>
                </div>

                <div className="border-t border-stone/15 pt-6">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Email
                  </div>
                  <a
                    href="mailto:info@impresoravertical.com"
                    className="font-sans text-body-lg text-ink mt-1 block hover:text-cobalto-700 transition-colors break-all"
                  >
                    info@impresoravertical.com
                  </a>
                  <p className="text-body-sm text-stone mt-1">
                    Respuesta &lt; 24h laborables
                  </p>
                </div>

                <div className="border-t border-stone/15 pt-6">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Taller
                  </div>
                  <p className="font-sans text-body text-ink mt-1 leading-snug">
                    Calle del Centre d&apos;Empreses 1-7
                    <br />
                    Nave 7 · 17178 Les Preses
                    <br />
                    Girona, Cataluña · España
                  </p>
                  <p className="text-body-sm text-stone mt-2">
                    <strong>Solo con cita previa.</strong> No atendemos sin
                    reserva confirmada.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/9irgokoeBUDvCEu67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 hover:text-cobalto-800 transition-colors"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-cobalto-900 text-bone p-8 space-y-4">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                  Visita en taller
                </div>
                <p className="text-body text-bone/90 leading-relaxed">
                  Trae tu archivo y muestra de superficie. Imprimimos en vivo,
                  te llevas la impresión + propuesta económica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
