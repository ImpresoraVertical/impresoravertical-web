"use client";

import { useState } from "react";

const INTERESTS = [
  "Quiero adquirir una impresora para mi negocio",
  "Quiero contratar una impresión",
  "Información sobre una serie/modelo concreto",
  "Servicio técnico (cliente actual)",
  "Formación / curso",
  "Otras consultas",
];

const MODELS_OPTIONS = ["No lo sé aún", "Serie E", "Serie K", "Serie G", "Serie T", "Serie W", "Serie FB"];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch (err) {
      setError(
        "No se pudo enviar el formulario. Llámanos al +34 623 007 729 o escríbenos a info@impresoravertical.com"
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-paper p-10 border border-stone/15 space-y-4">
        <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
          Mensaje enviado
        </div>
        <h3 className="font-serif text-h3 text-ink">
          Te respondemos en menos de 24h laborables.
        </h3>
        <p className="text-body text-stone">
          Mientras tanto, si quieres adelantarnos algo más, puedes llamarnos al{" "}
          <a href="tel:+34623007729" className="text-cobalto-700 underline">
            +34 623 007 729
          </a>{" "}
          o escribirnos a{" "}
          <a
            href="mailto:info@impresoravertical.com"
            className="text-cobalto-700 underline"
          >
            info@impresoravertical.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper p-8 lg:p-10 border border-stone/15 space-y-6"
    >
      <div>
        <h2 className="font-serif text-h3 text-ink">Cuéntanos tu proyecto</h2>
        <p className="text-body-sm text-stone mt-2">
          Te contactamos en 24h laborables sin compromiso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
          >
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
          >
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
          >
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
        >
          ¿Cuál es tu interés? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {INTERESTS.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="model"
          className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
        >
          Serie de interés
        </label>
        <div className="flex flex-wrap gap-2">
          {MODELS_OPTIONS.map((m) => (
            <label
              key={m}
              className="inline-flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="model"
                value={m}
                defaultChecked={m === "No lo sé aún"}
                className="peer sr-only"
              />
              <span className="inline-flex items-center px-4 py-2 border border-stone/30 font-mono text-eyebrow uppercase tracking-wider text-stone group-hover:border-ink peer-checked:bg-ink peer-checked:text-paper peer-checked:border-ink transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Cuéntanos qué buscas, tu proyecto, dudas, presupuesto orientativo..."
          className="w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors resize-y"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-body-sm text-stone">
          Acepto la{" "}
          <a href="/privacidad" className="text-cobalto-700 underline">
            política de privacidad
          </a>{" "}
          y el tratamiento de mis datos para responder a esta consulta.
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-body-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
