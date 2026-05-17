import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint POST /api/contact
 *
 * Variables de entorno necesarias en Vercel:
 *   - RESEND_API_KEY        (clave API de Resend, https://resend.com)
 *   - CONTACT_TO_EMAIL      (destino, ej: info@impresoravertical.com)
 *   - CONTACT_FROM_EMAIL    (remitente verificado en Resend, ej: web@impresoravertical.com
 *                            o, mientras no verifiques dominio, onboarding@resend.dev)
 *   - RECAPTCHA_SECRET_KEY  (secret del reCAPTCHA v3, opcional)
 *
 * Si RESEND_API_KEY no está, la API responde 200 + log estructurado
 * (modo "dev / sin email").
 */

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "country",
  "city",
  "interest",
  "source",
  "message",
  "privacy",
] as const;

type ContactData = Record<string, string>;

async function verifyRecaptcha(token: string): Promise<{ ok: boolean; reason: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.log("[RECAPTCHA] sin secret, validación saltada");
    return { ok: true, reason: "no-secret" };
  }
  if (!token) {
    console.log("[RECAPTCHA] sin token recibido del cliente");
    return { ok: false, reason: "no-token" };
  }

  try {
    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
      }
    );
    const data = await res.json();
    console.log("[RECAPTCHA] respuesta de Google:", JSON.stringify(data));
    const ok = Boolean(data?.success) && (data?.score ?? 1) >= 0.3;
    return {
      ok,
      reason: ok
        ? "ok"
        : `success=${data?.success}, score=${data?.score}, errors=${JSON.stringify(data?.["error-codes"] || [])}, hostname=${data?.hostname}`,
    };
  } catch (err) {
    console.error("[RECAPTCHA] excepción al llamar a Google:", err);
    return { ok: false, reason: "exception: " + String(err) };
  }
}

function buildEmailHtml(d: ContactData): string {
  const safe = (v: string) =>
    String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1a1a1a">
    <h2 style="border-bottom:2px solid #d97706;padding-bottom:8px">Nuevo contacto · impresoravertical.com</h2>
    <table style="width:100%;border-collapse:collapse;margin-top:16px">
      <tr><td style="padding:6px 0;color:#666;width:160px">Nombre y apellidos</td><td><strong>${safe(d.firstName)} ${safe(d.lastName)}</strong></td></tr>
      <tr><td style="padding:6px 0;color:#666">Email</td><td><a href="mailto:${safe(d.email)}">${safe(d.email)}</a></td></tr>
      <tr><td style="padding:6px 0;color:#666">Teléfono</td><td><a href="tel:${safe(d.phone)}">${safe(d.phone)}</a></td></tr>
      <tr><td style="padding:6px 0;color:#666">País</td><td>${safe(d.country)}</td></tr>
      <tr><td style="padding:6px 0;color:#666">Ciudad</td><td>${safe(d.city)}</td></tr>
      <tr><td style="padding:6px 0;color:#666">Interés</td><td><strong>${safe(d.interest)}</strong></td></tr>
      <tr><td style="padding:6px 0;color:#666">Nos conoció por</td><td>${safe(d.source)}</td></tr>
    </table>
    <div style="margin-top:20px;padding:16px;background:#f5f5f0;border-left:3px solid #d97706">
      <p style="margin:0 0 8px;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.05em">Mensaje</p>
      <p style="margin:0;white-space:pre-wrap">${safe(d.message)}</p>
    </div>
    <p style="margin-top:24px;font-size:12px;color:#888">Recibido el ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}</p>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactData & { recaptchaToken?: string } = await req.json();

    // 1) Validación de campos obligatorios
    for (const f of REQUIRED_FIELDS) {
      if (!data[f] || String(data[f]).trim() === "") {
        return NextResponse.json(
          { error: `Falta el campo: ${f}` },
          { status: 400 }
        );
      }
    }

    // 2) Validación reCAPTCHA (si está configurada)
    const recaptchaResult = await verifyRecaptcha(data.recaptchaToken ?? "");
    if (!recaptchaResult.ok) {
      console.log("[CONTACT FORM] reCAPTCHA fallida:", recaptchaResult.reason);
      return NextResponse.json(
        { error: "Verificación reCAPTCHA fallida", debug: recaptchaResult.reason },
        { status: 400 }
      );
    }

    // 3) Envío de email vía Resend (si hay API key)
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@impresoravertical.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (apiKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Web Impresora Vertical <${fromEmail}>`,
          to: [toEmail],
          reply_to: data.email,
          subject: `[Web] ${data.interest} — ${data.firstName} ${data.lastName}`,
          html: buildEmailHtml(data),
        }),
      });
      if (!r.ok) {
        const errBody = await r.text().catch(() => "");
        console.error("[CONTACT FORM] Resend error:", r.status, errBody);
        return NextResponse.json(
          { error: "No se pudo enviar el email. Inténtalo más tarde." },
          { status: 502 }
        );
      }
    } else {
      // Sin clave Resend → log estructurado (modo dev)
      console.log("[CONTACT FORM · dev mode · no email sent]", {
        timestamp: new Date().toISOString(),
        ...data,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT FORM ERROR]", err);
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
