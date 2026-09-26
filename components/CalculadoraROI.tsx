"use client";

import { useMemo, useState } from "react";
import { SERIES, PRICING_COPY } from "../data/series";

// Coste tinta + soporte por m² impreso (estimado)
const INK_COST_PER_M2 = 0.8; // €/m²

/** Precio de referencia según tipo de tinta de la serie */
function getReferencePrice(inkType: string): number | null {
  if (inkType === "base-agua") return PRICING_COPY.fromBaseAgua;
  if (inkType === "uv") return PRICING_COPY.fromUV;
  return null; // personalizable
}

// Serie de referencia fija para la simulación (T · UV 21.500€)
const REFERENCE_SLUG = "t";

export default function CalculadoraROI() {
  const [m2PerMonth, setM2PerMonth] = useState(60);
  const [pricePerM2, setPricePerM2] = useState(150);
  const [operationalCost, setOperationalCost] = useState(800);

  const selectedResult = useMemo(() => {
    const serie = SERIES.find((s) => s.slug === REFERENCE_SLUG) || SERIES[0];
    const investment = getReferencePrice(serie.inkType);
    const revenue = m2PerMonth * pricePerM2;
    const inkCost = m2PerMonth * INK_COST_PER_M2;
    const monthlyProfit = revenue - inkCost - operationalCost;
    const roiMonths =
      investment && monthlyProfit > 0
        ? Math.ceil(investment / monthlyProfit)
        : null;
    const yearProfit = monthlyProfit * 12;

    return {
      ...serie,
      investment,
      revenue,
      inkCost,
      monthlyProfit,
      roiMonths,
      yearProfit,
    };
  }, [m2PerMonth, pricePerM2, operationalCost]);

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-paper p-8 border border-stone/15 space-y-6">
          <h3 className="font-display text-h4 uppercase tracking-tight text-ink">
            Tu negocio
          </h3>

          {/* m² mensuales */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                m² impresos al mes
              </label>
              <span className="font-display text-h5 text-cobalto-700">
                {m2PerMonth} m²
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={300}
              step={5}
              value={m2PerMonth}
              onChange={(e) => setM2PerMonth(Number(e.target.value))}
              className="w-full accent-cobalto-700"
            />
            <div className="flex justify-between text-body-sm text-stone mt-1">
              <span>10</span>
              <span>300</span>
            </div>
          </div>

          {/* Precio por m² */}
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                Precio que cobras por m²
              </label>
              <span className="font-display text-h5 text-cobalto-700">
                {pricePerM2}€
              </span>
            </div>
            <p className="text-body-sm text-stone mb-2">
              Tarifa media de mercado: <strong>150 €/m²</strong>
            </p>
            <input
              type="range"
              min={100}
              max={250}
              step={5}
              value={pricePerM2}
              onChange={(e) => setPricePerM2(Number(e.target.value))}
              className="w-full accent-cobalto-700"
            />
            <div className="flex justify-between text-body-sm text-stone mt-1">
              <span>100€</span>
              <span>250€</span>
            </div>
          </div>

          {/* Coste operativo */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                Coste operativo / mes
              </label>
              <span className="font-display text-h5 text-cobalto-700">
                {operationalCost}€
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={3000}
              step={100}
              value={operationalCost}
              onChange={(e) => setOperationalCost(Number(e.target.value))}
              className="w-full accent-cobalto-700"
            />
            <div className="flex justify-between text-body-sm text-stone mt-1">
              <span>0€</span>
              <span>3.000€</span>
            </div>
            <p className="text-body-sm text-stone mt-2">
              Luz, alquiler proporcional, mantenimiento, etc.
            </p>
          </div>
        </div>

        <div className="bg-cobalto-900/5 border-l-4 border-cobalto-700 p-6">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 mb-2">
            Simulación de referencia
          </div>
          <p className="text-body-sm text-ink leading-relaxed">
            Cálculo basado en <strong>Serie T · UV 21.500 €</strong> sin IVA.
            Coste de tinta estimado en <strong>0,8 €/m²</strong>. Para comparar
            otras series o personalizar tu caso,{" "}
            <a href="/contacto" className="text-cobalto-700 underline">
              contáctanos
            </a>.
          </p>
        </div>
      </div>

      {/* Resultados */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-ink text-paper p-10 space-y-6">
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
              Serie {selectedResult.code} · {selectedResult.name}
            </div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
              {selectedResult.investment
                ? `Inversión ${selectedResult.investment.toLocaleString("es-ES")}€`
                : "Consultar precio"}
            </div>
          </div>

          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-2">
              ROI estimado
            </div>
            <div className="font-display text-display lg:text-display-xl uppercase tracking-tight text-paper leading-none">
              {selectedResult.roiMonths === null
                ? "—"
                : selectedResult.roiMonths === Infinity
                ? "∞"
                : selectedResult.roiMonths}
              <span className="text-h3 text-ocre-300 align-top ml-3">
                {selectedResult.roiMonths && selectedResult.roiMonths > 0
                  ? selectedResult.roiMonths === 1
                    ? "mes"
                    : "meses"
                  : "consultar"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-bone/20">
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Ingresos/mes
              </div>
              <div className="font-display text-h4 uppercase tracking-tight text-paper mt-1">
                {selectedResult.revenue.toLocaleString("es-ES")}€
              </div>
            </div>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Beneficio/mes
              </div>
              <div className="font-display text-h4 uppercase tracking-tight text-paper mt-1">
                {selectedResult.monthlyProfit.toLocaleString("es-ES")}€
              </div>
            </div>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Beneficio/año
              </div>
              <div className="font-display text-h4 uppercase tracking-tight text-ocre-300 mt-1">
                {selectedResult.yearProfit.toLocaleString("es-ES")}€
              </div>
            </div>
          </div>
        </div>

        {/* CTA · pedir presupuesto exacto */}
        <div className="bg-paper border border-stone/15 p-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              ¿Quieres números exactos?
            </div>
            <p className="font-serif text-h5 text-ink leading-snug">
              Te hacemos una simulación personalizada con tu serie, tu volumen
              real y los costes operativos exactos de tu taller.
            </p>
          </div>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center bg-cobalto-700 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-cobalto-900 transition-colors"
          >
            Pedir presupuesto →
          </a>
        </div>
      </div>
    </div>
  );
}
