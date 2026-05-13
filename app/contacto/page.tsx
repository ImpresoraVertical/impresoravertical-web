import Link from "next/link";
import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto · Reserva tu demo en taller",
  description:
    "Reserva una demo gratuita en nuestro taller de Les Preses, Girona. Sin compromiso. Imprime sobre tu superficie real. +34 623 007 729.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Contacto · demo en taller</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Habla con nosotros
                <br />
                <span className="italic text-cobalto-700">sin compromiso.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Llámanos, escríbenos, o ven a Les Preses. La demo en taller es
                gratuita y sin compromiso. Trae tu archivo y tu superficie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info lateral */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-8">
              <div className="bg-paper p-8 border border-stone/15 space-y-6">
                <div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                    Llamada directa
                  </div>
                  <a
                    href="tel:+34623007729"
                    className="font-serif text-h3 text-ink mt-1 block hover:text-cobalto-700 transition-colors"
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
                    className="font-serif text-body-lg text-ink mt-1 block hover:text-cobalto-700 transition-colors break-all"
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
                  <p className="font-serif text-body text-ink mt-1 leading-snug">
                    Calle del Centre d&apos;Empreses 1-7
                    <br />
                    Nave 7 · 17178 Les Preses
                    <br />
                    Girona, Cataluña · España
                  </p>
                  <p className="text-body-sm text-stone mt-2">
                    Demos con cita previa
                  </p>
                </div>
              </div>

              <div className="bg-cobalto-900 text-bone p-8 space-y-4">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                  Demo en taller · gratis
                </div>
                <p className="text-body text-bone/90 leading-relaxed">
                  Trae tu archivo y muestra de superficie. Imprimimos en vivo,
                  te llevas la impresión + propuesta económica + ROI estimado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
