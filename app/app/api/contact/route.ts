import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validación básica
    if (!data.name || !data.email || !data.interest) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // TODO: enviar email a info@impresoravertical.com
    // Opciones recomendadas (configurar después en Vercel):
    // - Resend (gratis 100 emails/día, recomendado)
    // - Brevo (gratis 300 emails/día)
    // - SendGrid
    //
    // Mientras tanto: log estructurado
    console.log("[CONTACT FORM]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT FORM ERROR]", err);
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
