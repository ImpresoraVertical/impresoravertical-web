"use client";

import Link from "next/link";
import { useState } from "react";
import { MODELS } from "../data/models";

type Answer = string | null;

const QUESTIONS = [
  {
    id: "surface",
    title: "¿Sobre qué superficie quieres imprimir principalmente?",
    options: [
      { value: "smooth", label: "Pared lisa (yeso, microcemento)", weight: { e2: 3, k1: 3, s2: 3, t1: 3, w1: 3, wf: 3 } },
      { value: "rough", label: "Texturada o porosa (panel acústico, hormigón)", weight: { e2: 1, k1: 1, s2: 3, t1: 3, w1: 3, wf: 3 } },
      { value: "rigid", label: "Rígida no porosa (vidrio, metacrilato, madera)", weight: { e2: 0, k1: 0, s2: 3, t1: 3, w1: 3, wf: 3 } },
      { value: "mixed", label: "Varias / no lo tengo claro", weight: { e2: 2, k1: 2, s2: 3, t1: 3, w1: 3, wf: 2 } },
    ],
  },
  {
    id: "size",
    title: "¿Qué tamaño máximo de mural sueles imprimir?",
    options: [
      { value: "small", label: "Hasta 1 × 2 m (habitaciones, comercios)", weight: { e2: 3, k1: 3, s2: 2, t1: 1, w1: 1, wf: 1 } },
      { value: "medium", label: "Hasta 1,5 × 3 m (locales medianos)", weight: { e2: 1, k1: 1, s2: 3, t1: 2, w1: 2, wf: 2 } },
      { value: "tall", label: "Más altos que anchos (escaleras, fachadas)", weight: { e2: 0, k1: 0, s2: 1, t1: 3, w1: 1, wf: 2 } },
      { value: "wide", label: "Panorámicos (4m de ancho)", weight: { e2: 0, k1: 0, s2: 1, t1: 1, w1: 3, wf: 3 } },
    ],
  },
  {
    id: "volume",
    title: "¿Qué volumen estimas imprimir al mes?",
    options: [
      { value: "low", label: "Menos de 20 m² / mes (artesanal)", weight: { e2: 3, k1: 3, s2: 1, t1: 1, w1: 1, wf: 0 } },
      { value: "medium", label: "20-80 m² / mes (estudio pequeño)", weight: { e2: 2, k1: 2, s2: 3, t1: 2, w1: 2, wf: 1 } },
      { value: "high", label: "80-200 m² / mes (taller con clientes)", weight: { e2: 1, k1: 1, s2: 3, t1: 2, w1: 2, wf: 3 } },
      { value: "industrial", label: "+200 m² / mes (producción industrial)", weight: { e2: 0, k1: 0, s2: 1, t1: 2, w1: 2, wf: 3 } },
    ],
  },
  {
    id: "budget",
    title: "¿Cuál es tu presupuesto orientativo?",
    options: [
      { value: "low", label: "Hasta 12.000€", weight: { e2: 3, k1: 3, s2: 0, t1: 0, w1: 0, wf: 0 } },
      { value: "medium", label: "12.000-20.000€", weight: { e2: 2, k1: 2, s2: 3, t1: 1, w1: 1, wf: 0 } },
      { value: "high", label: "20.000-28.000€", weight: { e2: 1, k1: 1, s2: 3, t1: 3, w1: 3, wf: 1 } },
      { value: "premium", label: "+28.000€ (sin restricción)", weight: { e2: 1, k1: 1, s2: 2, t1: 3, w1: 3, wf: 3 } },
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
      setStep(QUESTIONS.length); // resultado
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  // Calcular recomendación
  function getRecommendation() {
    const scores: Record<string, number> = { e2: 0, k1: 0, s2: 0, t1: 0, w1: 0, wf: 0 };
    QUESTIONS.forEach((q) => {
      const ans = answers[q.id];
      if (!ans) return;
      const option = q.options.find((o) => o.value === ans);
      if (!option) return;
      Object.entries(option.weight).forEach(([model, points]) => {
        scores[model] += points;
      });
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top = sorted[0][0];
    const second = sorted[1][0];
    return { top, second, scores };
  }

  // Pantalla de resultado
  if (step >= QUESTIONS.length) {
    const { top, second } = getRecommendation();
    const topModel = MODELS.find((m) => m.slug === top)!;
    const secondModel = MODELS.find((m) => m.slug === second)!;

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
                  {topModel.code}
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                  Mejor encaje
                </span>
              </div>
              <h2 className="font-serif text-display text-paper leading-[1.05]">
                {topModel.name}
              </h2>
              <p className="font-serif text-h5 italic text-bone/80">
                {topModel.tagline}
              </p>
              <p className="text-body-lg text-bone/80 max-w-xl">
                {topModel.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/modelos/${topModel.slug}`}
                  className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                >
                  Ver ficha completa {topModel.code}
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
                <div className="font-serif text-h3 text-paper">
                  {topModel.price}
                </div>
              </div>
              <div className="border-t border-bone/20 pt-4 space-y-2 text-body-sm">
                <div className="flex justify-between">
                  <span className="text-bone/70">Superficie</span>
                  <span className="text-paper font-mono">
                    {topModel.specs.surface}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bone/70">Velocidad</span>
                  <span className="text-paper font-mono">
                    {topModel.specs.speed}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bone/70">Tinta</span>
                  <span className="text-paper font-mono">
                    {topModel.inkType === "uv" ? "UV" : "Base agua"}
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
            <h3 className="font-serif text-h4 text-ink">
              {secondModel.code} {secondModel.name}
            </h3>
            <p className="text-body-sm text-stone mt-2">
              {secondModel.description.split(".")[0]}.
            </p>
            <Link
              href={`/modelos/${secondModel.slug}`}
              className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 mt-4 inline-block link-underline"
            >
              Ver {secondModel.code} →
            </Link>
          </div>

          <div className="bg-paper border border-stone/15 p-8">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-2">
              ¿No lo tienes claro?
            </div>
            <h3 className="font-serif text-h4 text-ink">
              Ven al taller a probarlo
            </h3>
            <p className="text-body-sm text-stone mt-2">
              Imprimimos en tu superficie real con la {topModel.code}.
              Sin compromiso, café incluido.
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

  // Pantalla de pregunta
  const currentQuestion = QUESTIONS[step];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* Progress */}
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

      {/* Pregunta */}
      <div className="space-y-8">
        <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance leading-tight">
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
              <span className="font-serif text-body-lg">{option.label}</span>
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
