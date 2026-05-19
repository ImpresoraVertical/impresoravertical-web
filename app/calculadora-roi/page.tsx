import CalculadoraROI from "../components/CalculadoraROI";
import PixelTrack from "../components/PixelTrack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora ROI · cuánto tarda en pagar la impresora",
  description:
    "Calcula en cuántos meses recuperas la inversión de tu impresora vertical I-TECH. Compara los 6 modelos. Datos reales de clientes 2022-2024.",
};

export default function CalculadoraROIPage() {
  return (
    <>
      <PixelTrack event="ViewContent" params={{ content_name: "Calculadora ROI", content_category: "Tool" }} />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Calculadora ROI</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Hazte los números
                <br />
                <span className="italic text-cobalto-700">antes de comprarla.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Calculadora real con tus metros cuadrados, tu tarifa, tus
                costes. Te enseña en cuántos meses recuperas la inversión y qué
                modelo paga más rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <CalculadoraROI />
        </div>
      </section>
    </>
  );
}
