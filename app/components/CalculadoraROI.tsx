"use client";

import { useMemo, useState } from "react";
import { SERIES, PRICING_COPY } from "../data/series";

// Coste tinta + soporte por m² impreso (estimado)
const INK_COST_PER_M2 = 8; // €/m²

/** Precio de referencia según tipo de tinta de la serie */
function getReferencePrice(inkType: string): number | null {
  if (inkType === "base-agua") return PRICING_COPY.fromBaseAgua;
  if (inkType === "uv") return PRICING_COPY.fromUV;
  return null; // personalizable
}

export default function CalculadoraROI() {
  const [m2PerMonth, setM2PerMonth] = useState(60);
  const [pricePerM2, setPricePerM2] = useState(150);
  const [operationalCost, setOperationalCost] = useState(800);
  const [selectedSerie, setSelectedSerie] = useState("t"); // por defecto T (UV)

  const results = useMemo(() => {
    return SERIES.map((serie) => {
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
        isSelected: serie.slug === selectedSerie,
      };
    });
  }, [m2PerMonth, pricePerM2, operationalCost, selectedSerie]);

  const selectedResult = results.find((r) => r.isSelected)!;

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

        <div className="bg-paper p-8 border border-stone/15">
          <h3 className="font-display text-h5 uppercase tracking-tight text-ink mb-4">
            Serie a simular
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {SERIES.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSelectedSerie(s.slug)}
                className={`p-3 font-mono text-eyebrow uppercase tracking-wider border transition-colors ${
                  selectedSerie === s.slug
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-stone border-stone/30 hover:border-ink"
                }`}
              >
                Serie {s.code}
              </button>
            ))}
          </div>
          <p className="text-body-sm text-stone mt-3">
            Precios base <strong>sin IVA</strong>: <strong>base agua 10.500€</strong>{" "}
            (E, K) · <strong>UV 21.500€</strong> (T, W, FB) ·{" "}
            <strong>Serie G consultar</strong>
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

        {/* Tabla comparativa */}
        <div className="bg-paper border border-stone/15">
          <div className="p-6 border-b border-stone/15">
            <h3 className="font-display text-h5 uppercase tracking-tight text-ink">
              Comparativa todas las series
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
                    Serie {r.code}
                  </div>
                  <div className="font-sans text-body text-ink">{r.name}</div>
                </div>
                <div className="col-span-3 text-body-sm text-stone font-mono">
                  {r.investment
                    ? `${r.investment.toLocaleString("es-ES")}€`
                    : "Consultar"}
                </div>
                <div className="col-span-3 text-body-sm font-mono">
                  <span className="text-stone">ROI: </span>
                  <span className="text-ink">
                    {r.roiMonths === null
                      ? "—"
                      : r.roiMonths === Infinity
                      ? "∞"
                      : `${r.roiMonths} meses`}
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
          Precios base orientativos: <strong>10.500€</strong> tinta base agua,{" "}
          <strong>21.500€</strong> tinta UV. Serie G consultar. Coste de tinta
          calculado a 8€/m² (orientativo). Para presupuesto exacto{" "}
          <a href="/contacto" className="text-cobalto-700 underline">
            contáctanos
          </a>
          .
        </p>
      </div>
    </div>
  );
}
