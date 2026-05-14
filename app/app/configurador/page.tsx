import Configurador from "../components/Configurador";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configurador · qué modelo necesitas",
  description:
    "Configurador interactivo de 2 minutos. Te recomendamos el modelo I-TECH ideal según tu superficie, tamaño, volumen y presupuesto.",
};

export default function ConfiguradorPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Configurador · 2 minutos</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                ¿Qué impresora necesitas?
                <br />
                <span className="italic text-cobalto-700">Te lo decimos.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                4 preguntas, una recomendación basada en datos reales de 15 años
                de instalaciones I-TECH.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <Configurador />
        </div>
      </section>
    </>
  );
}
