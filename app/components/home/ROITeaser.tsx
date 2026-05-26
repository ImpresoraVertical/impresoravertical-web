import Link from "next/link";

export default function ROITeaser() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Calculadora ROI</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Hazte los números
              <br />
              <span className="italic text-cobalto-700">antes de comprarla.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Calculadora con tu tarifa, tus metros cuadrados mensuales y tus
              costes. Te enseña en cuántos meses recuperas la inversión y qué
              modelo paga más rápido.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-10 items-end">
          <div className="lg:col-span-7">
            <ul className="space-y-3 text-body text-ink">
              <li className="flex items-start gap-3">
                <span className="text-ocre-500 mt-1">→</span>
                <span>Compara las 6 series en la misma simulación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocre-500 mt-1">→</span>
                <span>Ajusta tarifa, volumen, costes operativos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocre-500 mt-1">→</span>
                <span>Exporta el PDF para tu banco o socio</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Link href="/calculadora-roi" className="btn-primary w-full text-center">
              Abrir calculadora ROI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
