import FAQAccordion from "../components/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ · preguntas frecuentes impresora vertical I-TECH",
  description:
    "Preguntas frecuentes sobre la impresora vertical I-TECH: garantía, instalación, tintas, perfiles ICC, ROI, financiación, certificaciones.",
};

const FAQ_CATEGORIES = [
  {
    title: "Modelos y especificaciones",
    questions: [
      {
        q: "¿Cuál es la diferencia entre tinta base agua y UV?",
        a: "Base agua (modelos E2, K1): ecológica, certificación GREENGUARD, ideal para superficies porosas como yeso pintado, cartón, madera tratada. Tiempo de secado mayor pero acabado mate natural. UV (modelos S2 en adelante): curación instantánea por luz ultravioleta, compatible con prácticamente cualquier superficie incluido vidrio, metacrilato, aluminio. Mayor durabilidad exterior, acabado brillante o mate según preferencia.",
      },
      {
        q: "¿Hasta qué tamaño puedo imprimir?",
        a: "Depende del modelo: E2 hasta 1,2 × 2,4 m, K1 hasta 0,9 × 1,8 m, S2 hasta 1,5 × 3 m, T1 hasta 1,5 × 4 m de altura, W1 hasta 1,2 × 4 m de ancho, WF hasta 1,5 × 4,5 m. Para murales mayores se imprime por secciones modulares sin junta visible.",
      },
      {
        q: "¿Necesito una sala dedicada?",
        a: "No es imprescindible. Los modelos E, K y S funcionan en cualquier espacio con suelo razonablemente plano y enchufe estándar 220V. El WF por su tamaño y refrigeración líquida requiere unos 4-5 m² dedicados. El polvo y humedad sí afectan: trabajamos siempre en interior.",
      },
    ],
  },
  {
    title: "Compra, garantía y financiación",
    questions: [
      {
        q: "¿Qué garantía incluye la máquina?",
        a: "2 años de garantía sin franquicia para todos los modelos E, K, S, T y W. El modelo WF incluye 3 años por su uso intensivo. Cumplimos certificación RII-AEE: nosotros gestionamos el reciclaje al final de vida útil.",
      },
      {
        q: "¿Hay opciones de financiación?",
        a: "Sí. Trabajamos con BBVA Leasing y CaixaBank para leasing financiero a 24, 36 o 48 meses con opción de compra. También renting operativo si prefieres mantenerlo como gasto. Cuota orientativa: ~350-650€/mes según modelo y plazo.",
      },
      {
        q: "¿Cuánto tarda en llegarme la máquina?",
        a: "4-6 semanas desde confirmación de pedido. Incluye fabricación en Italia, transporte a España, customización si la pides (color, medidas), pruebas previas en taller Les Preses y entrega + instalación + formación en tu local.",
      },
      {
        q: "¿Aceptáis empresas con licitación pública?",
        a: "Sí. Tenemos toda la documentación CE, RII-AEE, fichas técnicas y declaraciones de conformidad listas para pliegos. Hemos trabajado con ayuntamientos, museos y proyectos institucionales (Fundación ONCE, entre otros).",
      },
    ],
  },
  {
    title: "Tintas, perfiles y materiales",
    questions: [
      {
        q: "¿Las tintas son ecológicas?",
        a: "Las tintas base agua del E y K son GREENGUARD certificadas para entornos interiores sin restricciones (hospitales, escuelas, hoteles). Las UV cumplen normativa REACH y son compatibles con espacios públicos. Sin disolventes pesados, sin VOCs significativos.",
      },
      {
        q: "¿Cuánto cuesta un set completo de tintas?",
        a: "Set CMYK + blanco para base agua: ~480€ (rendimiento ~150-200 m²). Set UV CMYK + WW: ~750€ (rendimiento ~200-250 m²). Coste real por m² impreso: 5-10€ según cobertura.",
      },
      {
        q: "¿Y si tengo un material que no está en vuestra lista de perfiles ICC?",
        a: "Mándanos una muestra de 30×30 cm. La calibramos en taller con espectrofotómetro y te enviamos el perfil ICC personalizado en 3-5 días laborables. Servicio gratuito para clientes activos.",
      },
    ],
  },
  {
    title: "Instalación, formación y soporte",
    questions: [
      {
        q: "¿Cuánto tarda la instalación en mi taller?",
        a: "La instalación completa, calibración y formación inicial ocupa entre 1 y 2 días según modelo. Trabajamos con tu equipo en tu local — no necesitas espacio dedicado, solo enchufe estándar 220V y conexión a internet.",
      },
      {
        q: "¿Es compatible con mi software RIP actual?",
        a: "Sí. Suministramos licencia oficial de Caldera o ColorGate (a elegir). Si ya trabajas con otro RIP profesional (Onyx, Wasatch), confirmamos compatibilidad antes de la entrega.",
      },
      {
        q: "¿Qué pasa si se rompe una pieza?",
        a: "Tenemos stock de las piezas más comunes en nuestro taller de Les Preses. Envío 24-48h a península. Para casos urgentes con coste de producción detenido, organizamos visita técnica en 48-72h.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Preguntas frecuentes</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Las dudas reales
                <br />
                <span className="italic text-cobalto-700">de quien va a comprar.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Si tu pregunta no está aquí, escríbenos sin compromiso.
                Respondemos en menos de 24h laborables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page space-y-20">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title} className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-2">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                  Categoría
                </div>
                <h2 className="font-serif text-h2 text-ink leading-tight">
                  {category.title}
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <FAQAccordion questions={category.questions} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
