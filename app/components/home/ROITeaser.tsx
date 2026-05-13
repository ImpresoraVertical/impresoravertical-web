import Link from "next/link";

export default function ROITeaser() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="bg-ink text-paper p-10 lg:p-16 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
                ROI estimado · modelo S2
              </div>
              <div className="font-serif text-display lg:text-display-xl text-paper leading-none">
                8-10
                <span className="text-h2 text-ocre-300 align-top ml-2">meses</span>
              </div>
              <p className="text-body-sm text-bone/80 leading-relaxed">
                Inversión recuperada con uso medio (60 m² impresos/mes ·
                facturación 90€/m²). Datos reales clientes 2022-2024.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-bone/20">
                <div>
                  <div className="font-serif text-h4 text-paper">23</div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                    Clientes ROI &lt;1 año
                  </div>
                </div>
                <div>
                  <div className="font-serif text-h4 text-paper">90€</div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                    Tarifa media/m²
                  </div>
                </div>
                <div>
                  <div className="font-serif text-h4 text-paper">60</div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                    m²/mes uso medio
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="eyebrow">Calculadora ROI</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Hazte los números
              <br />
              <span className="italic text-cobalto-700">antes de comprarla.</span>
            </h2>
            <p className="text-body-lg text-stone text-pretty">
              Calculadora con tu tarifa, tus metros cuadrados mensuales y tus
              costes. Te enseña en cuántos meses recuperas la inversión y qué
              modelo paga más rápido.
            </p>

            <ul className="space-y-3 pt-4 text-body text-ink">
              <li className="flex items-start gap-3">
                <span className="text-ocre-500 mt-1">→</span>
                <span>Compara los 6 modelos en la misma simulación</span>
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

            <div className="pt-4">
              <Link href="/calculadora-roi" className="btn-primary">
                Abrir calculadora ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
