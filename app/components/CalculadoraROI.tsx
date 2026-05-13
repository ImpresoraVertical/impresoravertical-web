"use client";

import { useMemo, useState } from "react";
import { MODELS } from "../data/models";

// Precios base por modelo (€)
const PRICES: Record<string, number> = {
  e2: 10500,
  k1: 11500,
  s2: 16500,
  t1: 22500,
  w1: 24500,
  wf: 32500,
};

// Coste tinta + soporte por m² impreso (estimado)
const INK_COST_PER_M2 = 8; // €/m²

export default function CalculadoraROI() {
  const [m2PerMonth, setM2PerMonth] = useState(60);
  const [pricePerM2, setPricePerM2] = useState(90);
  const [operationalCost, setOperationalCost] = useState(800); // €/mes (luz, etc.)
  const [selectedModel, setSelectedModel] = useState("s2");

  const results = useMemo(() => {
    return MODELS.map((model) => {
      const investment = PRICES[model.slug];
      const revenue = m2PerMonth * pricePerM2;
      const inkCost = m2PerMonth * INK_COST_PER_M2;
      const monthlyProfit = revenue - inkCost - operationalCost;
      const roiMonths =
        monthlyProfit > 0 ? Math.ceil(investment / monthlyProfit) : Infinity;
      const yearRevenue = revenue * 12;
      const yearProfit = monthlyProfit * 12;

      return {
        ...model,
        investment,
        revenue,
        inkCost,
        monthlyProfit,
        roiMonths,
        yearRevenue,
        yearProfit,
        isSelected: model.slug === selectedModel,
      };
    });
  }, [m2PerMonth, pricePerM2, operationalCost, selectedModel]);

  const selectedResult = results.find((r) => r.isSelected)!;

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-paper p-8 border border-stone/15 space-y-6">
          <h3 className="font-serif text-h4 text-ink">Tu negocio</h3>

          {/* m² mensuales */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                m² impresos al mes
              </label>
              <span className="font-mono text-h5 text-cobalto-700">
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
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                Precio que cobras por m²
              </label>
              <span className="font-mono text-h5 text-cobalto-700">
                {pricePerM2}€
              </span>
            </div>
            <input
              type="range"
              min={40}
              max={200}
              step={5}
              value={pricePerM2}
              onChange={(e) => setPricePerM2(Number(e.target.value))}
              className="w-full accent-cobalto-700"
            />
            <div className="flex justify-between text-body-sm text-stone mt-1">
              <span>40€</span>
              <span>200€</span>
            </div>
          </div>

          {/* Coste operativo */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-mono text-eyebrow uppercase tracking-wider text-ink">
                Coste operativo / mes
              </label>
              <span className="font-mono text-h5 text-cobalto-700">
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

        <div className="bg-paper p-8 border border-stone/15">
          <h3 className="font-serif text-h5 text-ink mb-4">Modelo a comparar</h3>
          <div className="grid grid-cols-3 gap-2">
            {MODELS.map((m) => (
              <button
                key={m.slug}
                onClick={() => setSelectedModel(m.slug)}
                className={`p-3 font-mono text-eyebrow uppercase tracking-wider border transition-colors ${
                  selectedModel === m.slug
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-stone border-stone/30 hover:border-ink"
                }`}
              >
                {m.code}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="lg:col-span-7 space-y-6">
        {/* Card resultado destacado */}
        <div className="bg-ink text-paper p-10 space-y-6">
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
              Modelo {selectedResult.code}
            </div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
              Inversión {selectedResult.investment.toLocaleString("es-ES")}€
            </div>
          </div>

          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-2">
              ROI estimado
            </div>
            <div className="font-serif text-display lg:text-display-xl text-paper leading-none">
              {selectedResult.roiMonths === Infinity
                ? "∞"
                : selectedResult.roiMonths}
              <span className="text-h3 text-ocre-300 align-top ml-3">
                {selectedResult.roiMonths === 1 ? "mes" : "meses"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-bone/20">
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Ingresos/mes
              </div>
              <div className="font-serif text-h4 text-paper mt-1">
                {selectedResult.revenue.toLocaleString("es-ES")}€
              </div>
            </div>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Beneficio/mes
              </div>
              <div className="font-serif text-h4 text-paper mt-1">
                {selectedResult.monthlyProfit.toLocaleString("es-ES")}€
              </div>
            </div>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                Beneficio/año
              </div>
              <div className="font-serif text-h4 text-ocre-300 mt-1">
                {selectedResult.yearProfit.toLocaleString("es-ES")}€
              </div>
            </div>
          </div>
        </div>

        {/* Tabla comparativa todos los modelos */}
        <div className="bg-paper border border-stone/15">
          <div className="p-6 border-b border-stone/15">
            <h3 className="font-serif text-h5 text-ink">
              Comparativa todos los modelos
            </h3>
            <p className="text-body-sm text-stone mt-1">
              Con los datos que has introducido
            </p>
          </div>
          <div className="divide-y divide-stone/15">
            {results.map((r) => (
              <div
                key={r.slug}
                className={`grid grid-cols-12 gap-4 p-4 items-center ${
                  r.isSelected ? "bg-bone" : ""
                }`}
              >
                <div className="col-span-3">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                    {r.code}
                  </div>
                  <div className="font-serif text-body text-ink">{r.name}</div>
                </div>
                <div className="col-span-3 text-body-sm text-stone font-mono">
                  {r.investment.toLocaleString("es-ES")}€
                </div>
                <div className="col-span-3 text-body-sm font-mono">
                  <span className="text-stone">ROI: </span>
                  <span className="text-ink">
                    {r.roiMonths === Infinity ? "∞" : `${r.roiMonths} meses`}
                  </span>
                </div>
                <div className="col-span-3 text-body-sm font-mono text-right">
                  <span className="text-stone">Año 1: </span>
                  <span
                    className={`font-medium ${
                      r.yearProfit > 0 ? "text-cobalto-700" : "text-stone"
                    }`}
                  >
                    {r.yearProfit > 0 ? "+" : ""}
                    {r.yearProfit.toLocaleString("es-ES")}€
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-body-sm text-stone leading-relaxed">
          Estimación basada en datos reales de clientes I-TECH España 2022-2024.
          Precios base orientativos sin IVA. Coste de tinta calculado a 8€/m²
          (CMYK base agua). Para presupuesto exacto y financiación{" "}
          <a href="/contacto" className="text-cobalto-700 underline">
            contáctanos
          </a>
          .
        </p>
      </div>
    </div>
  );
}
