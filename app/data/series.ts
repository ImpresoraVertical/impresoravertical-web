/**
 * Catálogo de Series I-TECH España.
 * Cada serie contiene uno o varios modelos.
 * Specs detalladas pendientes de validación con Marc.
 */

export type InkType = "base-agua" | "uv" | "personalizable";

export type ModelSpec = {
  code: string;
  name: string;
  surface?: string;
  speed?: string;
  inks?: string;
  resolution?: string;
  weight?: string;
  highlights?: string[];
  image?: string;
  // Specs ampliadas
  printHead?: string;
  inkTech?: string;
  fileFormats?: string;
  laserPositioning?: string;
  axes?: string;
  maxHeight?: string;
  software?: string;
  power?: string;
  ports?: string;
  body?: string;
  mounting?: string;
  pc?: string;
  surfaceSensor?: string;
  environment?: string;
  noise?: string;
  dimensions?: string;
  pcMode?: "integrated" | "external"; // E2 vs E3
};

export type Series = {
  slug: string;
  code: string; // letra de la serie: E, K, G, T, W, FB
  name: string; // nombre comercial
  tagline: string;
  eyebrow: string;
  description: string;
  inkType: InkType;
  priceFrom: number | null; // en euros, null para "Consultar"
  priceLabel: string;
  models: ModelSpec[];
  useCases: string[];
  highlights: string[];
  image?: string;
};

export const SERIES: Series[] = [
  // ─────────────────── SERIE E ───────────────────
  {
    slug: "e",
    code: "E",
    name: "Serie E",
    tagline: "Tinta base agua. Para empezar bien.",
    eyebrow: "Serie E · Base agua · Entry",
    description:
      "Impresoras verticales con tinta a base de agua, ideales para paredes pintadas, papel tapiz y superficies absorbentes. Tecnología profesional I-TECH a precio de entrada, perfecta para estudios que arrancan.",
    inkType: "base-agua",
    priceFrom: 10500,
    priceLabel: "Desde 10.500€",
    models: [
      {
        code: "E2",
        name: "E2 · PC integrado",
        surface: "Altura 1,7 m · Ancho ilimitado · Con extensión 1 m: altura 2,7 m · Costura disponible",
        resolution: "720×540 / 720×720 / 720×1080 / 720×1440 / 720×2880 dpi",
        inks: "CMYK · Tinta base agua con sistema termostato",
        printHead: "1 cabezal EPSON",
        inkTech: "VSDT (gota variable) · Difuminado tolerancia a fallos · Recuperación automática",
        fileFormats: "PDF, PNG, JPG, TIFF",
        laserPositioning: "Sí",
        axes: "X 43 cm · Y 240 cm · Z 15 cm",
        maxHeight: "2,7 metros",
        software: "MainTop RIP",
        power: "110V~380V · 20W standby · 120W en uso",
        ports: "2 × USB",
        pcMode: "integrated",
        highlights: ["1 cabezal EPSON", "PC integrado", "Posicionamiento láser"],
        image: "/modelos/e2.jpg",
      },
      {
        code: "E3",
        name: "E3 · Control externo",
        surface: "Altura 1,7 m · Ancho ilimitado · Con extensión 1 m: altura 2,7 m · Costura disponible",
        resolution: "720×540 / 720×720 / 720×1080 / 720×1440 / 720×2880 dpi",
        inks: "CMYK · Tinta base agua con sistema termostato",
        printHead: "1 cabezal EPSON",
        inkTech: "VSDT (gota variable) · Difuminado tolerancia a fallos · Recuperación automática",
        fileFormats: "PDF, PNG, JPG, TIFF",
        laserPositioning: "Sí",
        axes: "X 43 cm · Y 240 cm · Z 15 cm",
        maxHeight: "2,7 metros",
        software: "MainTop RIP",
        power: "110V~380V · 20W standby · 120W en uso",
        ports: "2 × USB",
        pcMode: "external",
        highlights: ["1 cabezal EPSON", "Control con portátil/tablet", "Sin PC integrado"],
        image: "/modelos/e3.jpg",
      },
    ],
    useCases: [
      "Decoración residencial e interiorismo",
      "Estudios de pintura mural",
      "Comercios y oficinas medianas",
      "Murales sobre yeso, papel pintado y superficies absorbentes",
    ],
    highlights: [
      "Tinta base agua certificada (interiores sin restricciones)",
      "Bajo mantenimiento",
      "Acabado mate natural",
    ],
  },

  // ─────────────────── SERIE K ───────────────────
  {
    slug: "k",
    code: "K",
    name: "Serie K",
    tagline: "Las más rápidas. Tinta base agua, multi-cabezal.",
    eyebrow: "Serie K · Base agua · Velocidad",
    description:
      "Impresoras verticales con tinta a base de agua disponibles con 1, 2 o 4 cabezales. Las más rápidas del mercado en su categoría. Pensadas para estudios con volumen alto que necesitan producción ágil.",
    inkType: "base-agua",
    priceFrom: 10500,
    priceLabel: "Desde 10.500€",
    models: [
      {
        code: "K1",
        name: "K1 · 1 cabezal",
        surface: "Altura 1,95 m · Ancho ilimitado · Con extensión 1,1 m: altura 3 m · Costura disponible",
        resolution: "720×540 / 720×720 / 720×1080 / 720×1440 / 720×2880 dpi",
        inks: "CMYK · Tinta pigmentada base agua con sistema termostato",
        printHead: "1 cabezal EPSON · Configurable e independiente",
        inkTech: "VSDT (gota variable) · Difuminado tolerancia a fallos · Recuperación automática",
        fileFormats: "PDF, PNG, JPG, TIFF",
        laserPositioning: "Sí",
        axes: "X 100 cm · Y 240 cm · Z 15 cm",
        maxHeight: "3 metros",
        software: "MainTop RIP",
        power: "110V~380V · 20W standby · 120W en uso",
        ports: "2 × USB",
        body: "Perfil aleación aluminio-magnesio · Estructura bastidor",
        mounting: "Polea móvil · Tobogán autopropulsado · Montaje rápido",
        pc: "Pantalla capacitiva 12,4\" (800×600) · Celeron J1800 dual-core · 4 GB RAM · SSD 128 GB · Windows 10 64-bit · WiFi",
        surfaceSensor: "Sensor Hyperbolic Banner bidireccional + 2 sensores ultrasónicos (USA)",
        environment: "-10 °C a 60 °C · 10-80% HR sin condensación",
        noise: "<20 dBA standby · <50 dBA en uso",
        weight: "Estructura 56 kg · Oruga 12,5 kg/unidad",
        dimensions: "Largo 100 cm (vía) · Ancho 60 cm · Alto 255 cm",
        highlights: ["1 cabezal EPSON", "Hasta 3 m de altura", "PC integrado 12,4\""],
        image: "/modelos/k1.jpg",
      },
      {
        code: "K2",
        name: "K2 · 2 cabezales",
        surface: "Altura 1,95 m · Ancho ilimitado · Con extensión 1,1 m: altura 3 m · Costura disponible",
        resolution: "720×540 / 720×720 / 720×1080 / 720×1440 / 720×2880 dpi",
        inks: "CMYK · Tinta pigmentada base agua con sistema termostato",
        printHead: "2 cabezales EPSON · Cada uno configurable e independiente",
        inkTech: "VSDT (gota variable) · Difuminado tolerancia a fallos · Recuperación automática",
        fileFormats: "PDF, PNG, JPG, TIFF",
        laserPositioning: "Sí",
        axes: "X 100 cm · Y 240 cm · Z 15 cm",
        maxHeight: "3 metros",
        software: "MainTop RIP",
        power: "110V~380V · 20W standby · 120W en uso",
        ports: "2 × USB",
        body: "Perfil aleación aluminio-magnesio · Estructura bastidor",
        mounting: "Polea móvil · Tobogán autopropulsado · Montaje rápido",
        pc: "Pantalla capacitiva 12,4\" (800×600) · Celeron J1800 dual-core · 4 GB RAM · SSD 128 GB · Windows 10 64-bit · WiFi",
        surfaceSensor: "Sensor Hyperbolic Banner bidireccional + 2 sensores ultrasónicos (USA)",
        environment: "-10 °C a 60 °C · 10-80% HR sin condensación",
        noise: "<20 dBA standby · <50 dBA en uso",
        weight: "Estructura 56 kg · Oruga 12,5 kg/unidad",
        dimensions: "Largo 100 cm (vía) · Ancho 60 cm · Alto 255 cm",
        highlights: ["2 cabezales EPSON", "Velocidad ×2", "Si uno falla, el otro sigue"],
        image: "/modelos/k2.jpg",
      },
      {
        code: "K3",
        name: "K3 · 4 cabezales",
        surface: "Altura 1,95 m · Ancho ilimitado · Con extensión 1,1 m: altura 3 m · Costura disponible",
        speed: "Hasta 12 m²/h a 1440 dpi",
        resolution: "720×540 / 720×720 / 720×1080 / 720×1440 / 720×2880 dpi",
        inks: "CMYK · Tinta pigmentada base agua con sistema termostato",
        printHead: "4 cabezales EPSON · Cada uno configurable e independiente",
        inkTech: "VSDT (gota variable) · Difuminado tolerancia a fallos · Recuperación automática",
        fileFormats: "PDF, PNG, JPG, TIFF",
        laserPositioning: "Sí",
        axes: "X 100 cm · Y 240 cm · Z 15 cm",
        maxHeight: "3 metros",
        software: "MainTop RIP",
        power: "110V~380V · 20W standby · 120W en uso",
        ports: "2 × USB",
        body: "Perfil aleación aluminio-magnesio · Estructura bastidor",
        mounting: "Polea móvil · Tobogán autopropulsado · Montaje rápido",
        pc: "Pantalla capacitiva 12,4\" (800×600) · Celeron J1800 dual-core · 4 GB RAM · SSD 128 GB · Windows 10 64-bit · WiFi",
        surfaceSensor: "Sensor Hyperbolic Banner bidireccional + 2 sensores ultrasónicos (USA)",
        environment: "-10 °C a 60 °C · 10-80% HR sin condensación",
        noise: "<20 dBA standby · <50 dBA en uso",
        weight: "Estructura 56 kg · Oruga 12,5 kg/unidad",
        dimensions: "Largo 100 cm (vía) · Ancho 60 cm · Alto 255 cm",
        highlights: ["4 cabezales EPSON", "Hasta 12 m²/h", "Máxima velocidad base agua"],
        image: "/modelos/k3.jpg",
      },
    ],
    useCases: [
      "Talleres de impresión multi-cliente",
      "Producción industrial pequeña-media",
      "Estudios con volumen alto mensual",
      "Empresas que necesitan respuesta rápida a pedidos",
    ],
    highlights: [
      "1, 2 o 4 cabezales según volumen",
      "Tinta base agua certificada",
      "Las más rápidas en su categoría",
    ],
  },

  // ─────────────────── SERIE G ───────────────────
  {
    slug: "g",
    code: "G",
    name: "Serie G",
    tagline: "Industrial personalizable. A tu medida.",
    eyebrow: "Serie G · Industrial · Custom",
    description:
      "Diseñada y fabricada a medida según las necesidades de tu industria. Desde la integración en líneas automatizadas hasta aplicaciones especiales para superficies complejas o condiciones extremas. Electrónica, cabezales y software adaptados a tu proceso.",
    inkType: "personalizable",
    priceFrom: null,
    priceLabel: "Consultar",
    models: [
      {
        code: "G",
        name: "Configuración a medida",
        surface: "A definir según proyecto",
        speed: "A definir según volumen",
        inks: "Base agua, UV o tintas especiales",
        resolution: "Hasta 2880 dpi",
        weight: "A definir según chasis",
        highlights: [
          "Integración en línea de producción",
          "Sensores y automatización",
          "Cabezales custom",
          "Conectividad industrial",
        ],
        image: "/modelos/g.jpg",
      },
    ],
    useCases: [
      "Líneas de producción automatizadas",
      "Marcado y trazabilidad industrial",
      "Superficies complejas o condiciones extremas",
      "Tintas especiales pigmentadas o de seguridad",
    ],
    highlights: [
      "Proyectos a medida codo a codo con el cliente",
      "Electrónica y placas custom",
      "Cabezales y software adaptados",
    ],
  },

  // ─────────────────── SERIE T ───────────────────
  {
    slug: "t",
    code: "T",
    name: "Serie T",
    tagline: "Tinta UV. Murales altos hasta 4m.",
    eyebrow: "Serie T · UV · Tall",
    description:
      "Diseñadas para murales hasta 4 metros de altura. Tinta UV de curación instantánea, compatible con prácticamente cualquier superficie incluido vidrio, metacrilato, aluminio. Estructura reforzada y motores especiales para verticales muy altos.",
    inkType: "uv",
    priceFrom: 21500,
    priceLabel: "Desde 21.500€",
    models: [
      {
        code: "T1",
        name: "T1",
        surface: "1,5 × 4 m",
        speed: "2 m²/h",
        inks: "CMYK + W UV",
        resolution: "1440 dpi",
        weight: "145 kg",
        highlights: ["Pantalla integrada", "Desplazamiento rueda o cremallera"],
        image: "/modelos/t1.jpg",
      },
      {
        code: "T2",
        name: "T2",
        surface: "Pendiente",
        speed: "Pendiente",
        inks: "CMYK + W UV",
        resolution: "Pendiente",
        weight: "Pendiente",
        highlights: ["Specs detalladas próximamente"],
        image: "/modelos/t1.jpg",
      },
      {
        code: "T3",
        name: "T3",
        surface: "Pendiente",
        speed: "Pendiente",
        inks: "CMYK + W UV",
        resolution: "Pendiente",
        weight: "Pendiente",
        highlights: ["Specs detalladas próximamente"],
        image: "/modelos/t1.jpg",
      },
    ],
    useCases: [
      "Murales en hoteles y restaurantes",
      "Decoración escalera completa",
      "Proyectos arquitectónicos de altura",
      "Branding corporativo de gran formato",
    ],
    highlights: [
      "Hasta 4m de altura sin juntas",
      "Tinta UV multi-superficie",
      "Cuerpo de 6cm de grosor (T1)",
    ],
  },

  // ─────────────────── SERIE W ───────────────────
  {
    slug: "w",
    code: "W",
    name: "Serie W",
    tagline: "Tinta UV. Formato ancho. Producción intensiva.",
    eyebrow: "Serie W · UV · Wide",
    description:
      "La nueva generación de impresoras verticales I-TECH. Cabezal EPSON i3200 Made in Japan, tinta UV de curación LED, sensores ultrasónicos para ajuste automático de distancia a pared, transporte en maletas de aviación. W1 y W2 con un cabezal, WF con doble cabezal para producción intensiva.",
    inkType: "uv",
    priceFrom: 21500,
    priceLabel: "Desde 21.500€",
    models: [
      {
        code: "W1",
        name: "W1",
        surface: "Ancho ilimitado · 2,7 m alto (hasta 5 m personalizable)",
        speed: "4-8 m²/h según resolución",
        inks: "UV · CMYK + W · 260 ml/color",
        resolution: "720×600 / 720×1200 / 720×1800 / 720×2400 DPI",
        weight: "96 kg",
        highlights: [
          "Cabezal EPSON i3200 Made in Japan",
          "2 sensores ultrasónicos top/bottom",
          "Maleta de aviación + set completo",
          "Posicionamiento láser",
        ],
        image: "/modelos/w1.jpg",
      },
      {
        code: "W2",
        name: "W2",
        surface: "Ancho ilimitado · 2,7 m alto (hasta 5 m personalizable)",
        speed: "4-8 m²/h según resolución",
        inks: "UV · CMYK + W · 260 ml/color",
        resolution: "720×600 / 720×1200 / 720×1800 / 720×2400 DPI",
        weight: "96 kg",
        highlights: [
          "Cabezal EPSON i3200 Made in Japan",
          "Auto-limpieza + modo vacaciones",
          "Conexión Gigabit",
          "Personalizable a doble cabezal",
        ],
        image: "/modelos/w2.jpg",
      },
      {
        code: "WF",
        name: "WF · Wall + Floor",
        surface: "Modo W: ancho ilimitado · alto 2,7 m / Modo F: alto ilimitado · 2,7 m ancho",
        speed: "5-9 m²/h según resolución (doble cabezal)",
        inks: "UV · CMYK + W · 260 ml/color",
        resolution: "720×600 / 720×1200 / 720×1800 / 720×2400 DPI",
        weight: "270 kg",
        highlights: [
          "Doble cabezal EPSON i3200",
          "Modo dual pared + suelo",
          "Montaje/desmontaje en 10 minutos",
          "Producción industrial",
        ],
        image: "/modelos/wf.jpg",
      },
    ],
    useCases: [
      "Murales panorámicos restaurantes y hoteles",
      "Branding eventos y stands",
      "Decoración pasillos comerciales",
      "Producción industrial alta",
      "Licitaciones públicas (WF)",
    ],
    highlights: [
      "Cabezal EPSON i3200 Made in Japan",
      "Sensores ultrasónicos para detectar y ajustar la pared",
      "Tinta UV CMYK + Blanco (260 ml/color)",
      "Transporte en maleta de aviación",
      "Curado UV-LED con refrigeración aire",
      "Tecnología White-skip y posicionamiento láser",
      "Documentación CE · LVD · MD según normas UE",
    ],
  },

  // ─────────────────── SERIE FB ───────────────────
  {
    slug: "fb",
    code: "FB",
    name: "Serie FB",
    tagline: "Impresora horizontal para suelos.",
    eyebrow: "Serie FB · UV · Suelos",
    description:
      "Impresora horizontal diseñada específicamente para impresión sobre suelos. Tinta UV para acabados resistentes en cerámica, hormigón pulido, microcemento y superficies horizontales.",
    inkType: "uv",
    priceFrom: 21500,
    priceLabel: "Desde 21.500€",
    models: [
      {
        code: "FB",
        name: "FB · Suelo",
        surface: "Pendiente",
        speed: "Pendiente",
        inks: "CMYK + W UV",
        resolution: "Pendiente",
        weight: "Pendiente",
        highlights: [
          "Impresión horizontal",
          "Tinta UV resistente",
          "Específico para suelos",
        ],
        image: "/modelos/fb.jpg",
      },
    ],
    useCases: [
      "Decoración de suelos comerciales",
      "Branding en pavimentos",
      "Señalización temporal indoor",
      "Eventos y stands con suelo personalizado",
    ],
    highlights: [
      "Único formato horizontal del catálogo",
      "Tinta UV para máxima resistencia al pisado",
      "Compatible con suelos cerámicos, hormigón, microcemento",
    ],
  },
];

export function getSeriesBySlug(slug: string): Series | undefined {
  return SERIES.find((s) => s.slug === slug);
}

/** Mensaje genérico de precios — usar en CTAs y bloques de precio */
export const PRICING_COPY = {
  headline: "Precios",
  body: "Los precios varían dependiendo de la equipación y personalización. Consigue tu impresora vertical de tinta base agua desde 10.500€ o las de tinta UV desde 21.500€. Ponte en contacto con nosotros y uno de nuestros agentes te informará más detalladamente.",
  cta: "Pide presupuesto sin compromiso",
  fromBaseAgua: 10500,
  fromUV: 21500,
} as const;
