export type Model = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  eyebrow: string;
  description: string;
  category: "entry" | "compact" | "standard" | "tall" | "wide" | "pro";
  inkType: "base-agua" | "uv";
  featured?: boolean;
  specs: {
    surface: string;
    speed: string;
    inks: string;
    resolution: string;
    warranty: string;
    weight: string;
    footprint?: string;
    extra?: string;
  };
  useCases: string[];
  roi: string;
  price: string;
};

export const MODELS: Model[] = [
  {
    slug: "e2",
    code: "E2",
    name: "Entry",
    tagline: "Entry, ideal para empezar.",
    eyebrow: "Modelo E2 · Entry · La impresora para empezar",
    description:
      "Ideal para freelancers y estudios pequeños que empiezan con impresión vertical. Tecnología profesional I-TECH a precio de entrada.",
    category: "entry",
    inkType: "base-agua",
    specs: {
      surface: "1,2 × 2,4 m",
      speed: "1,5 m²/h",
      inks: "CMYK + blanco opaco",
      resolution: "1440 dpi",
      warranty: "2 años (RII-AEE)",
      weight: "95 kg",
    },
    useCases: [
      "Decoración pequeñas oficinas y comercios",
      "Murales personalizados de habitaciones",
      "Producción artesanal premium",
      "Primer paso al negocio de impresión vertical",
    ],
    roi: "Inversión recuperada en 8-10 meses con uso medio.",
    price: "Desde 10.500€",
  },
  {
    slug: "k1",
    code: "K1",
    name: "Kompacta",
    tagline: "Kompacta, estudios pequeños.",
    eyebrow: "Modelo K1 · Kompacta · La versión compacta del E2",
    description:
      "La versión compacta del E2. Ideal cuando el espacio es premium. Mismo motor, footprint reducido.",
    category: "compact",
    inkType: "base-agua",
    specs: {
      surface: "0,9 × 1,8 m",
      speed: "1,2 m²/h",
      inks: "CMYK + blanco opaco",
      resolution: "1440 dpi",
      warranty: "2 años (RII-AEE)",
      weight: "75 kg",
      footprint: "1,1 × 0,8 m",
    },
    useCases: [
      "Estudios de interiorismo pequeños",
      "Tiendas con espacio reducido",
      "Talleres de freelancers",
      "Showrooms y demostraciones móviles",
    ],
    roi: "Inversión recuperada en 10-12 meses con uso medio.",
    price: "Desde 11.500€",
  },
  {
    slug: "s2",
    code: "S2",
    name: "Standard",
    tagline: "Standard, el caballo de batalla.",
    eyebrow: "Modelo S2 · Standard · El más vendido del catálogo",
    description:
      "El modelo más vendido. Balance perfecto entre superficie de impresión, velocidad y precio. Lo que el 70% de nuestros clientes elige.",
    category: "standard",
    inkType: "uv",
    featured: true,
    specs: {
      surface: "1,5 × 3 m",
      speed: "2,5 m²/h",
      inks: "CMYK + blanco opaco UV",
      resolution: "1440 dpi",
      warranty: "2 años (RII-AEE)",
      weight: "120 kg",
    },
    useCases: [
      "Estudios de decoración medianos",
      "Empresas con varios proyectos al mes",
      "Talleres de impresión multi-cliente",
      "Producción industrial pequeña-media",
    ],
    roi: "Inversión recuperada en 8-10 meses con uso medio.",
    price: "Desde 16.500€",
  },
  {
    slug: "t1",
    code: "T1",
    name: "Tall",
    tagline: "Tall, murales altos.",
    eyebrow: "Modelo T1 · Tall · Para murales hasta 4 metros",
    description:
      "Diseñada para murales hasta 4 metros de altura. Estructura reforzada y motores especiales para verticales muy altos.",
    category: "tall",
    inkType: "uv",
    specs: {
      surface: "1,5 × 4 m",
      speed: "2 m²/h",
      inks: "CMYK + blanco opaco UV",
      resolution: "1440 dpi",
      warranty: "2 años (RII-AEE)",
      weight: "145 kg",
    },
    useCases: [
      "Murales en hoteles y restaurantes",
      "Decoración escalera completa",
      "Proyectos arquitectónicos de altura",
      "Branding corporativo de gran formato",
    ],
    roi: "Inversión recuperada en 10-14 meses con uso medio-intensivo.",
    price: "Desde 22.500€",
  },
  {
    slug: "w1",
    code: "W1",
    name: "Wide",
    tagline: "Wide, formato grande.",
    eyebrow: "Modelo W1 · Wide · Murales panorámicos hasta 4m de ancho",
    description:
      "Superficie horizontal de 4 metros para murales panorámicos. Para proyectos donde el ancho importa más que la altura.",
    category: "wide",
    inkType: "uv",
    specs: {
      surface: "1,2 × 4 m",
      speed: "2,5 m²/h",
      inks: "CMYK + blanco opaco UV",
      resolution: "1440 dpi",
      warranty: "2 años (RII-AEE)",
      weight: "135 kg",
    },
    useCases: [
      "Murales panorámicos restaurantes",
      "Branding eventos y stands",
      "Decoración pasillos comerciales",
      "Producciones audiovisuales backdrop",
    ],
    roi: "Inversión recuperada en 12-15 meses con uso medio.",
    price: "Desde 24.500€",
  },
  {
    slug: "wf",
    code: "WF",
    name: "Wide Pro",
    tagline: "Wide Pro, producción intensiva.",
    eyebrow: "Modelo WF · Wide Pro · El tope de gama industrial",
    description:
      "El tope de gama. Velocidad industrial, doble cabezal, refrigeración líquida. Para producir murales todo el día sin parar.",
    category: "pro",
    inkType: "uv",
    specs: {
      surface: "1,5 × 4,5 m",
      speed: "5 m²/h (doble cabezal)",
      inks: "CMYK + blanco opaco + barniz UV",
      resolution: "2880 dpi",
      warranty: "3 años (RII-AEE)",
      weight: "220 kg",
      extra: "Refrigeración líquida integrada",
    },
    useCases: [
      "Industria gran producción",
      "Empresas con licitaciones públicas",
      "Servicios de impresión masiva",
      "Proyectos institucionales de envergadura",
    ],
    roi: "Inversión recuperada en 10-12 meses con uso intensivo.",
    price: "Desde 32.500€",
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return MODELS.find((m) => m.slug === slug);
}
