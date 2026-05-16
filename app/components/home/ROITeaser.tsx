import Link from "next/link";

export default function ROITeaser() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            {/* Infografía SVG · curva de ROI 0→24 meses */}
            <div className="relative bg-bone p-6 border border-stone/15">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-4">
                Curva de retorno · 24 meses
              </div>
              <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Grid suave */}
                <g stroke="#e5e3da" strokeWidth="0.5">
                  <line x1="40" y1="40" x2="380" y2="40" />
                  <line x1="40" y1="100" x2="380" y2="100" />
                  <line x1="40" y1="160" x2="380" y2="160" />
                  <line x1="40" y1="220" x2="380" y2="220" />
                </g>

                {/* Ejes */}
                <line x1="40" y1="40" x2="40" y2="220" stroke="#a4a191" strokeWidth="1" />
                <line x1="40" y1="220" x2="380" y2="220" stroke="#a4a191" strokeWidth="1" />

                {/* Etiquetas eje Y */}
                <text x="32" y="44" textAnchor="end" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">+€</text>
                <text x="32" y="164" textAnchor="end" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">0</text>
                <text x="32" y="224" textAnchor="end" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">−€</text>

                {/* Etiquetas eje X */}
                <text x="40" y="245" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">0</text>
                <text x="125" y="245" textAnchor="middle" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">6m</text>
                <text x="210" y="245" textAnchor="middle" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">12m</text>
                <text x="295" y="245" textAnchor="middle" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">18m</text>
                <text x="380" y="245" textAnchor="middle" fontSize="10" fill="#7a7766" fontFamily="ui-monospace,monospace">24m</text>

                {/* Línea inversión inicial · 21.500€ (descenso recto) */}
                <line x1="40" y1="220" x2="40" y2="60" stroke="#2856b8" strokeWidth="2" />

                {/* Curva ingresos acumulados (sube y supera la inversión) */}
                <path
                  d="M 40 220 Q 130 200 170 160 T 380 50"
                  fill="none"
                  stroke="#d99a2a"
                  strokeWidth="3"
                />

                {/* Línea de break-even (inversión recuperada) */}
                <line x1="40" y1="160" x2="380" y2="160" strokeDasharray="3 3" stroke="#2856b8" strokeWidth="1" opacity="0.6" />

                {/* Punto break-even (mes 8-10) */}
                <circle cx="165" cy="160" r="6" fill="#d99a2a" stroke="#1a1a1a" strokeWidth="2" />
                <text x="175" y="148" fontSize="11" fill="#1a1a1a" fontFamily="ui-monospace,monospace" fontWeight="600">
                  ROI: mes 8-10
                </text>

                {/* Leyenda */}
                <g fontSize="10" fontFamily="ui-monospace,monospace">
                  <rect x="220" y="55" width="12" height="3" fill="#2856b8" />
                  <text x="238" y="60" fill="#1a1a1a">Inversión 21.500€</text>
                  <rect x="220" y="73" width="12" height="3" fill="#d99a2a" />
                  <text x="238" y="78" fill="#1a1a1a">Ingresos acumulados</text>
                </g>
              </svg>

              <div className="mt-4 pt-4 border-t border-stone/15">
                <p className="text-body-sm text-stone leading-relaxed">
                  Estimación con uso medio:{" "}
                  <strong className="text-ink">25 m²/mes</strong> a{" "}
                  <strong className="text-ink">150 €/m²</strong>. Serie T con
                  inversión 21.500€. Datos reales clientes 2022-2024.
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
