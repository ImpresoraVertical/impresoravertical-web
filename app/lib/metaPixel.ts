/**
 * Meta Pixel · Utilidades de tracking
 * Pixel ID: configurado via NEXT_PUBLIC_META_PIXEL_ID
 */

// Declaración global de fbq para TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

/** Dispara un evento estándar del pixel (Track) */
export function trackEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

/** Dispara un evento personalizado del pixel (trackCustom) */
export function trackCustomEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("trackCustom", event, params);
}

/**
 * Eventos estándar listos para usar:
 *
 * trackEvent("Lead")                          → formulario enviado
 * trackEvent("ViewContent", { content_name }) → página de producto vista
 * trackEvent("Contact")                       → intención de contacto
 * trackEvent("InitiateCheckout")              → inicio proceso compra/demo
 * trackEvent("CompleteRegistration")          → demo reservada / confirmada
 */
