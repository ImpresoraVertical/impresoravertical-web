import Link from "next/link";

export default function ROITeaser() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            {/* Card minimalista con icono finanzas + dato destacado */}
            <div className="relative bg-bone p-8 lg:p-10 border border-stone/15 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                Punto de equilibrio
              </div>

              {/* Icono ROI · símbolo € + flecha ascendente */}
              <div className="flex items-center justify-center py-4">
                <svg
                  viewBox="0 0 160 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-40 h-auto"
                  aria-hidden="true"
                >
                  {/* Símbolo € grande en círculo cobalto */}
                  <circle cx="50" cy="60" r="36" fill="#2856b8" />
                  <text
                    x="50"
                    y="76"
                    textAnchor="middle"
                    fill="#f5f3ec"
                    fontFamily="ui-serif, Georgia, serif"
                    fontSize="56"
                    fontWeight="700"
                  >
                    €
                  </text>

                  {/* Flecha ascendente · línea zigzag a la derecha */}
                  <polyline
                    points="98,90 118,72 132,80 148,50"
                    fill="none"
                    stroke="#d99a2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Cabeza de flecha */}
                  <polyline
                    points="140,50 148,50 148,58"
                    fill="none"
                    stroke="#d99a2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Stat principal */}
              <div className="text-center">
                <div className="font-display text-display lg:text-display-xl text-cobalto-700 leading-none">
                  3-5
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-2">
                  meses para recuperar la inversión
                </div>
              </div>

              <div className="pt-4 border-t border-stone/15">
                <p className="text-body-sm text-stone leading-relaxed">
                  Estimación con uso medio:{" "}
                  <strong className="text-ink">25 m²/mes</strong> a{" "}
                  <strong className="text-ink">150 €/m²</strong>. Serie T con
                  inversión 21.500 €. Datos reales clientes 2022-2024.
                </p>
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
