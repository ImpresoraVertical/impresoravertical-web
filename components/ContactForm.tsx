"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../lib/metaPixel";

const INTERESTS = [
  "Quiero adquirir una impresora para iniciar un negocio",
  "Servicio técnico (cliente actual)",
  "Quiero contratar una impresión",
  "Otras consultas",
];

const COUNTRIES_EU = [
  "Alemania", "Andorra", "Austria", "Bélgica", "Bulgaria", "Chipre",
  "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia",
  "Finlandia", "Francia", "Grecia", "Hungría", "Irlanda", "Islandia",
  "Italia", "Letonia", "Liechtenstein", "Lituania", "Luxemburgo", "Malta",
  "Mónaco", "Noruega", "Países Bajos", "Polonia", "Portugal", "Reino Unido",
  "República Checa", "Rumanía", "San Marino", "Suecia", "Suiza", "Vaticano",
];

const SOURCES = [
  "Google / buscador",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "YouTube",
  "Recomendación de un cliente",
  "Feria / evento",
  "Email / newsletter",
  "Otro",
];

// reCAPTCHA helper — se carga sólo si hay site key configurada
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const recaptchaLoaded = useRef(false);

  // Carga del script reCAPTCHA v3 (solo si hay site key)
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || recaptchaLoaded.current) return;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
    recaptchaLoaded.current = true;
  }, []);

  async function getRecaptchaToken(): Promise<string> {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";
    return new Promise((resolve) => {
      window.grecaptcha!.ready(async () => {
        const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, {
          action: "contact_form",
        });
        resolve(token);
      });
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Error al enviar");
      }
      setSubmitted(true);
      // Meta Pixel: Lead event
      trackEvent("Lead", {
        content_name: "Contact Form",
        content_category: String(data.interest ?? ""),
        source: String(data.source ?? ""),
      });
    } catch (err) {
      setError(
        "No se pudo enviar el formulario. Llámanos al +34 623 007 729 o escríbenos directamente a info@impresoravertical.com"
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
        <h3 className="font-display text-h3 uppercase tracking-tight text-ink">
          Te respondemos en menos de 24h laborables.
        </h3>
        <p className="text-body text-stone">
          <strong>Importante:</strong> nuestro taller en Les Preses no atiende
          sin cita previa. Te confirmaremos día y hora por email o teléfono.
        </p>
        <p className="text-body text-stone">
          Si necesitas adelantar algo, llámanos al{" "}
          <a href="tel:+34623007729" className="text-cobalto-700 underline">
            +34 623 007 729
          </a>{" "}
          o escríbenos a{" "}
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

  const inputClass =
    "w-full bg-bone border border-stone/30 px-4 py-3 font-sans text-body text-ink focus:outline-none focus:border-cobalto-700 transition-colors";
  const labelClass =
    "font-mono text-eyebrow uppercase tracking-wider text-ink mb-2 block";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper p-8 lg:p-10 border border-stone/15 space-y-6"
    >
      <div>
        <h2 className="font-display text-h3 uppercase tracking-tight text-ink">
          Cuéntanos tu proyecto
        </h2>
        <p className="text-body-sm text-stone mt-2">
          Te contactamos en 24h laborables. Todos los campos son obligatorios.
        </p>
      </div>

      {/* Aviso cita previa */}
      <div className="bg-bone/60 border-l-4 border-ocre-300 p-4">
        <p className="text-body-sm text-ink">
          <strong>Visitas al taller solo con cita previa.</strong> No atendemos
          sin reserva. Confirmamos día y hora tras tu consulta.
        </p>
      </div>

      {/* Nombre + Apellidos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            Nombre *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Apellidos *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Teléfono */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+34 ..."
            className={inputClass}
          />
        </div>
      </div>

      {/* País + Ciudad */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="country" className={labelClass}>
            País * <span className="normal-case text-stone">(solo Europa)</span>
          </label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Selecciona país
            </option>
            {COUNTRIES_EU.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <p className="text-body-sm text-stone mt-1">
            Solo ofrecemos servicio dentro de Europa.
          </p>
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            Ciudad *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            className={inputClass}
          />
        </div>
      </div>

      {/* Interés */}
      <div>
        <label htmlFor="interest" className={labelClass}>
          ¿Cuál es tu interés? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Dónde nos ha conocido */}
      <div>
        <label htmlFor="source" className={labelClass}>
          ¿Dónde nos ha conocido? *
        </label>
        <select
          id="source"
          name="source"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {SOURCES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Cuéntanos qué buscas, tu proyecto, superficie, volumen estimado..."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Privacidad */}
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
          y el tratamiento de mis datos para responder a esta consulta. *
        </label>
      </div>

      {/* reCAPTCHA badge nota */}
      {RECAPTCHA_SITE_KEY && (
        <p className="text-body-sm text-stone">
          Este formulario está protegido por reCAPTCHA. Aplican la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalto-700 underline"
          >
            política de privacidad
          </a>{" "}
          y los{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalto-700 underline"
          >
            términos de Google
          </a>
          .
        </p>
      )}

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
