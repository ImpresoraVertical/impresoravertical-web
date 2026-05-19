"use client";

import { useEffect } from "react";
import { trackEvent, trackCustomEvent } from "../lib/metaPixel";

interface PixelTrackProps {
  /** Evento estándar de Meta (e.g. "ViewContent", "Lead", "Contact") */
  event?: string;
  /** Evento personalizado de Meta (usa trackCustom) */
  customEvent?: string;
  /** Parámetros adicionales del evento */
  params?: Record<string, unknown>;
}

/**
 * Componente sin UI que dispara un evento del Pixel al montar.
 * Úsalo en Server Components para inyectar tracking sin convertirlos a "use client".
 *
 * Ejemplo:
 *   <PixelTrack event="ViewContent" params={{ content_name: "Configurador" }} />
 */
export default function PixelTrack({ event, customEvent, params }: PixelTrackProps) {
  useEffect(() => {
    if (event) {
      trackEvent(event, params);
    }
    if (customEvent) {
      trackCustomEvent(customEvent, params);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
