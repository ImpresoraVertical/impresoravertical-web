"use client";

import Link from "next/link";
import { useState } from "react";
import { SERIES } from "../data/series";

type Answer = string | null;

const QUESTIONS = [
  {
    id: "surface",
    title: "¿Sobre qué superficie quieres imprimir principalmente?",
    options: [
      {
        value: "smooth",
        label: "Pared lisa (yeso, microcemento, papel pintado)",
        weight: { e: 3, k: 3, g: 1, t: 2, w: 2, fb: 0 },
      },
      {
        value: "rough",
        label: "Texturada/porosa (panel acústico, hormigón)",
        weight: { e: 2, k: 2, g: 2, t: 3, w: 3, fb: 0 },
      },
      {
        value: "rigid",
        label: "Rígida no porosa (vidrio, metacrilato, madera, metal)",
        weight: { e: 0, k: 0, g: 2, t: 3, w: 3, fb: 1 },
      },
      {
        value: "floor",
        label: "Suelo / superficie horizontal",
        weight: { e: 0, k: 0, g: 1, t: 0, w: 0, fb: 3 },
      },
      {
        value: "industrial",
        label: "Producto industrial / pieza serie",
        weight: { e: 0, k: 0, g: 3, t: 1, w: 1, fb: 1 },
      },
    ],
  },
  {
    id: "size",
    title: "¿Qué tamaño máximo de mural sueles imprimir?",
    options: [
      {
        value: "small",
        label: "Hasta 1,5 × 2 m (habitaciones, comercios)",
        weight: { e: 3, k: 3, g: 1, t: 1, w: 1, fb: 1 },
      },
      {
        value: "medium",
        label: "Hasta 1,5 × 3 m (locales medianos)",
        weight: { e: 2, k: 3, g: 1, t: 2, w: 2, fb: 0 },
      },
      {
        value: "tall",
        label: "Más altos que anchos (escaleras, fachadas hasta 4m)",
        weight: { e: 0, k: 0, g: 1, t: 3, w: 1, fb: 0 },
      },
      {
        value: "wide",
        label: "Panorámicos (hasta 4,5m de ancho)",
        weight: { e: 0, k: 0, g: 1, t: 1, w: 3, fb: 0 },
      },
    ],
  },
  {
    id: "volume",
    title: "¿Qué volumen estimas imprimir al mes?",
    options: [
      {
        value: "low",
        label: "Menos de 20 m² / mes (artesanal)",
        weight: { e: 3, k: 1, g: 0, t: 1, w: 1, fb: 1 },
      },
      {
        value: "medium",
        label: "20-80 m² / mes (estudio pequeño)",
        weight: { e: 2, k: 3, g: 1, t: 2, w: 2, fb: 1 },
      },
      {
        value: "high",
        label: "80-200 m² / mes (taller con clientes)",
        weight: { e: 1, k: 3, g: 2, t: 2, w: 2, fb: 0 },
      },
      {
        value: "industrial",
        label: "+200 m² / mes (producción industrial)",
        weight: { e: 0, k: 2, g: 3, t: 2, w: 3, fb: 0 },
      },
    ],
  },
  {
    id: "ink",
    title: "¿Qué tipo de tinta prefieres?",
    options: [
      {
        value: "agua",
        label: "Base agua (ecológica, paredes absorbentes)",
        weight: { e: 3, k: 3, g: 1, t: 0, w: 0, fb: 0 },
      },
      {
        value: "uv",
        label: "UV (multi-superficie, durabilidad alta)",
        weight: { e: 0, k: 0, g: 2, t: 3, w: 3, fb: 3 },
      },
      {
        value: "either",
        label: "Indiferente / no sé",
        weight: { e: 2, k: 2, g: 2, t: 2, w: 2, fb: 1 },
      },
    ],
  },
];

export default function Configurador() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  function handleAnswer(value: string) {
    const questionId = QUESTIONS[step].id;
    setAnswers({ ...answers, [questionId]: value });
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStep(QUESTIONS.length);
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  function getRecommendation() {
    const scores: Record<string, number> = {
      e: 0,
      k: 0,
      g: 0,
      t: 0,
      w: 0,
      fb: 0,
    };
    QUESTIONS.forEach((q) => {
      const ans = answers[q.id];
      if (!ans) return;
      const option = q.options.find((o) => o.value === ans);
      if (!option) return;
      Object.entries(option.weight).forEach(([s, points]) => {
        scores[s] += points;
      });
    });
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return { top: sorted[0][0], second: sorted[1][0], scores };
  }

  if (step >= QUESTIONS.length) {
    const { top, second } = getRecommendation();
    const topSerie = SERIES.find((s) => s.slug === top)!;
    const secondSerie = SERIES.find((s) => s.slug === second)!;

    return (
      <div className="space-y-12">
        <div className="bg-ink text-paper p-10 lg:p-16 space-y-8">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
            Tu recomendación
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-h2 text-ocre-300">
                  Serie {topSerie.code}
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                  Mejor encaje
                </span>
              </div>
              <h2 className="font-display text-display uppercase tracking-tight text-paper leading-[0.95]">
                {topSerie.name}
              </h2>
              <p className="font-sans text-h5 text-bone/80">{topSerie.tagline}</p>
              <p className="text-body-lg text-bone/80 max-w-xl">
                {topSerie.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/series/${topSerie.slug}`}
                  className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                >
                  Ver Serie {topSerie.code}
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center border border-bone/30 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
                >
                  Reservar demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 space-y-4 lg:border-l lg:border-bone/20 lg:pl-8">
              <div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                  Precio
                </div>
                <div className="font-display text-h3 uppercase tracking-tight text-paper">
                  {topSerie.priceLabel}
                </div>
              </div>
              <div className="border-t border-bone/20 pt-4 space-y-2 text-body-sm">
                <div className="flex justify-between">
                  <span className="text-bone/70">Modelos</span>
                  <span className="text-paper font-mono">
                    {topSerie.models.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bone/70">Tinta</span>
                  <span className="text-paper font-mono">
                    {topSerie.inkType === "uv"
                      ? "UV"
                      : topSerie.inkType === "base-agua"
                      ? "Base agua"
                      : "Personalizable"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-paper border border-stone/15 p-8">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-2">
              Segunda opción
            </div>
            <h3 className="font-display text-h4 uppercase tracking-tight text-ink">
              Serie {secondSerie.code} · {secondSerie.name}
            </h3>
            <p className="text-body-sm text-stone mt-2">
              {secondSerie.description.split(".")[0]}.
            </p>
            <Link
              href={`/series/${secondSerie.slug}`}
              className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 mt-4 inline-block link-underline"
            >
              Ver Serie {secondSerie.code} →
            </Link>
          </div>

          <div className="bg-paper border border-stone/15 p-8">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-2">
              ¿No lo tienes claro?
            </div>
            <h3 className="font-display text-h4 uppercase tracking-tight text-ink">
              Ven al taller a probarlo
            </h3>
            <p className="text-body-sm text-stone mt-2">
              Imprimimos en tu superficie real con la Serie {topSerie.code}.
              Sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 mt-4 inline-block link-underline"
            >
              Reservar demo →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={reset}
            className="font-mono text-eyebrow uppercase tracking-wider text-stone hover:text-ink transition-colors"
          >
            ↻ Reiniciar configurador
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[step];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-body-sm">
          <span className="font-mono uppercase tracking-wider text-stone">
            Pregunta {step + 1} de {QUESTIONS.length}
          </span>
          <span className="font-mono text-stone">
            {Math.round(((step + 1) / QUESTIONS.length) * 100)}%
          </span>
        </div>
        <div className="h-1 bg-stone/15 overflow-hidden">
          <div
            className="h-full bg-cobalto-700 transition-all duration-500"
            style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance leading-tight">
          {currentQuestion.title}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-left p-6 border transition-all flex items-center justify-between gap-6 group ${
                currentAnswer === option.value
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-ink border-stone/30 hover:border-ink"
              }`}
            >
              <span className="font-sans text-body-lg">{option.label}</span>
              <span
                className={`font-mono text-eyebrow uppercase tracking-wider transition-transform ${
                  currentAnswer === option.value
                    ? "text-ocre-300"
                    : "text-stone group-hover:translate-x-1"
                }`}
              >
                →
              </span>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="font-mono text-eyebrow uppercase tracking-wider text-stone hover:text-ink transition-colors"
          >
            ← Pregunta anterior
          </button>
        )}
      </div>
    </div>
  );
}
