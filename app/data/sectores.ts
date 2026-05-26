// Landings sectoriales — datos centralizados para SEO long-tail
// Cada sector tiene su propia URL /sectores/[slug] con copy específico
// orientado a la intención de búsqueda de ese cliente.

export interface Sector {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  h1Highlight: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  // Casos típicos en ese sector
  useCases: { title: string; body: string }[];
  // Series recomendadas (slugs de /series/[slug])
  recommendedSeries: string[];
  // Materiales habituales en el sector
  materials: string[];
  // Ventajas competitivas para ese sector
  advantages: { metric: string; title: string; body: string }[];
  // FAQ específico
  faq: { q: string; a: string }[];
  // Color de marca de hero
  heroVariant: "cobalto" | "ocre" | "carbon";
}

export const SECTORES: Sector[] = [
  {
    slug: "decoracion-interiorismo",
    name: "Decoración e interiorismo",
    eyebrow: "Sector · decoración e interiorismo",
    h1: "Murales personalizados",
    h1Highlight: "directos a pared.",
    metaTitle: "Impresora vertical para decoración e interiorismo",
    metaDescription:
      "Impresión directa sobre paredes para estudios de interiorismo, decoradores y reformas. Murales personalizados de alta resolución sin vinilo. Demo en taller.",
    hero: "Sin vinilo, sin papel pintado, sin coste de mano de obra extra. Imprimes directamente sobre la pared con resolución fotográfica y la decoración queda integrada en el material, no pegada encima.",
    useCases: [
      {
        title: "Viviendas particulares de alto standing",
        body: "Murales artísticos en dormitorios, salones, cabeceros y pasillos. Acabado mate o satinado según pintura base.",
      },
      {
        title: "Hoteles boutique y apartamentos turísticos",
        body: "Personalización por habitación o planta. Permite renovar la estética sin obra. Tiempo de instalación: horas.",
      },
      {
        title: "Estudios de interiorismo y arquitectura",
        body: "Diferenciación visual de proyectos. Posibilidad de ofrecer arte original digital o reproducciones licenciadas.",
      },
    ],
    recommendedSeries: ["e", "k", "t"],
    materials: [
      "Pared de yeso pintada",
      "Papel pintado liso",
      "Pladur con imprimación",
      "Pared de gotelé suave",
      "Estuco fino",
    ],
    advantages: [
      {
        metric: "0 €",
        title: "Sin coste de vinilo",
        body: "Eliminas el material intermedio. Imprimes con tinta directamente sobre el muro.",
      },
      {
        metric: "5 m",
        title: "Hasta 5 metros de altura",
        body: "Murales completos de suelo a techo sin solapes visibles. Con técnica de solapación, sin límite.",
      },
      {
        metric: "15 años",
        title: "Durabilidad interior",
        body: "La tinta de pigmento aguanta 15 años en interior sin desvanecerse en condiciones normales.",
      },
    ],
    faq: [
      {
        q: "¿La impresión se ve mejor que un vinilo?",
        a: "Sí. El vinilo añade una capa con brillo distinto al de la pared. La impresión directa queda integrada en la textura del muro, sin reflejos ni bordes visibles.",
      },
      {
        q: "¿Se puede tapar si el cliente se cansa?",
        a: "Sí. 2-3 capas de pintura plástica del color base cubren la impresión perfectamente. Es totalmente reversible.",
      },
      {
        q: "¿Imprime sobre gotelé o pared con textura?",
        a: "Sí. Los sensores adaptan la distancia automáticamente. Texturas suaves no son problema. Texturas muy marcadas pueden requerir lijado previo.",
      },
    ],
    heroVariant: "cobalto",
  },
  {
    slug: "retail-comercio",
    name: "Retail y comercio",
    eyebrow: "Sector · retail y comercio",
    h1: "Escaparates que",
    h1Highlight: "se cambian solos.",
    metaTitle: "Impresora vertical para retail · escaparates y tiendas",
    metaDescription:
      "Personalización de escaparates, paredes interiores y zonas de espera para retail. Cambio de campaña en horas, sin imprenta externa. ROI rápido para franquicias.",
    hero: "Cada campaña, cada lanzamiento, cada Black Friday: en vez de pedir vinilos a imprenta y esperar 5 días, lo imprimes tú in situ en horas. Para franquicias, autonomía total por tienda.",
    useCases: [
      {
        title: "Cadenas de moda y zapatería",
        body: "Cambio de escaparate por temporada o colección sin esperar a proveedor de rotulación.",
      },
      {
        title: "Centros comerciales y franquicias",
        body: "Cada local imprime su campaña local manteniendo identidad de marca. Reduce coste y tiempo de gestión central.",
      },
      {
        title: "Tiendas pop-up y eventos efímeros",
        body: "Decoración de espacio en pocas horas. Al cerrar, se repinta y la pared queda lista para el siguiente.",
      },
    ],
    recommendedSeries: ["e", "k", "t"],
    materials: [
      "Cristal de escaparate",
      "Vinilo de fondo blanco",
      "Pared de pladur pintada",
      "Paneles MDF lacados",
      "Madera natural sellada",
    ],
    advantages: [
      {
        metric: "<24h",
        title: "Cambio de campaña en horas",
        body: "Desde el archivo aprobado hasta el escaparate impreso: menos de un día. Sin esperar a imprenta externa.",
      },
      {
        metric: "70%",
        title: "Ahorro vs. vinilo y montaje",
        body: "Solo pagas tinta y mano de obra interna. Sin coste de material laminado ni de instalador externo.",
      },
      {
        metric: "Multi",
        title: "Multi-superficie con UV",
        body: "Con la Serie T o W (tinta UV) imprimes en cristal, madera, metal y plástico sin tratamiento previo.",
      },
    ],
    faq: [
      {
        q: "¿Puedo imprimir en el cristal del escaparate?",
        a: "Sí, con tinta UV (Serie T o W). Sobre cristal sin imprimación. Para mejor adherencia recomendamos imprimación específica que suministramos.",
      },
      {
        q: "¿Cuánto se tarda en imprimir un escaparate de 4×2,5 m?",
        a: "Depende del modelo y resolución. En calidad estándar, entre 30 y 90 minutos para esa superficie.",
      },
      {
        q: "¿Vale la pena para una tienda sola?",
        a: "Depende del volumen de campañas. Si cambias decoración 4+ veces al año, la inversión se recupera en menos de 12 meses. Calcúlalo en nuestra calculadora ROI.",
      },
    ],
    heroVariant: "ocre",
  },
  {
    slug: "hosteleria-restauracion",
    name: "Hostelería y restauración",
    eyebrow: "Sector · hostelería y restauración",
    h1: "Ambientes que se",
    h1Highlight: "transforman.",
    metaTitle: "Impresora vertical para hostelería y restauración",
    metaDescription:
      "Murales, identidad visual y decoración para bares, restaurantes y hoteles. Cambio de concepto sin obra. Personalización por sala, planta o temporada.",
    hero: "El cliente entra, ve un mural personalizado del barrio, una ilustración de la carta, una fotografía del fundador. La hostelería vende experiencia: la pared deja de ser pintura plana y pasa a contar tu historia.",
    useCases: [
      {
        title: "Restaurantes con identidad visual fuerte",
        body: "Murales que refuerzan el concepto: ilustración del menú, mapa del territorio, foto histórica. Renovable cada temporada.",
      },
      {
        title: "Hoteles boutique y casas rurales",
        body: "Personalización por habitación. Cada estancia con su propia obra visual. Sin necesidad de cuadros enmarcados.",
      },
      {
        title: "Cafeterías y coworkings",
        body: "Decoración que cambia con la programación del local. Eventos, exposiciones, colaboraciones con artistas locales.",
      },
    ],
    recommendedSeries: ["e", "k", "t"],
    materials: [
      "Pared de yeso pintada",
      "Azulejo cerámico (UV)",
      "Madera lacada",
      "Hormigón pulido",
      "Microcemento",
    ],
    advantages: [
      {
        metric: "0 obra",
        title: "Renovación sin cerrar el local",
        body: "Imprime fuera de horario de servicio. El local sigue operando al día siguiente sin polvo ni escombros.",
      },
      {
        metric: "Local",
        title: "Identidad hiperlocal",
        body: "Murales únicos de tu barrio, tu producto, tu historia. Diferenciación real frente a la cadena de al lado.",
      },
      {
        metric: "Foto",
        title: "Resolución fotográfica",
        body: "Hasta 1440×2880 ppp. Reproduce fotografía artística, no solo gráficos planos.",
      },
    ],
    faq: [
      {
        q: "¿Aguanta humedad de cocina o baños?",
        a: "Con tinta UV sobre superficie sellada (azulejo, microcemento, cristal) sí. Con tinta base agua sobre yeso, en zonas húmedas conviene aplicar barniz transparente final.",
      },
      {
        q: "¿Se puede imprimir sobre azulejos existentes del local?",
        a: "Sí, con tinta UV (Serie T o W). No hace falta arrancar ni cambiar el azulejo. Imprimimos encima.",
      },
      {
        q: "¿Cuánto cuesta personalizar un comedor entero?",
        a: "Depende de m² y de si es un trabajo único o lo haces tú con tu impresora. Compra puntual: presupuesto a medida. Para grupos con varios locales, comprar la máquina suele rentabilizar en 12-18 meses.",
      },
    ],
    heroVariant: "carbon",
  },
  {
    slug: "publicidad-rotulacion",
    name: "Publicidad y rotulación",
    eyebrow: "Sector · publicidad y rotulación",
    h1: "Nuevo servicio,",
    h1Highlight: "mismo cliente.",
    metaTitle: "Impresora vertical para empresas de rotulación y publicidad",
    metaDescription:
      "Añade un nuevo servicio a tu rotulación: impresión directa sobre paredes y cristales. Diferenciación real frente a la competencia. ROI rápido por margen alto.",
    hero: "Si ya haces vinilos, lonas y rotulación, la impresora vertical es la próxima diferenciación. Tu cliente actual te pide más: dásela tú antes que la competencia.",
    useCases: [
      {
        title: "Empresas de rotulación y serigrafía",
        body: "Servicio premium para clientes que ya confían en ti. Margen alto por m² frente a vinilo. Sin competencia local en la mayoría de zonas.",
      },
      {
        title: "Agencias de eventos y stands de feria",
        body: "Personalización rápida en el propio recinto ferial. Sin transportar lonas montadas. Cambio entre días.",
      },
      {
        title: "Productoras audiovisuales y decorados",
        body: "Sets de cine y TV con paredes impresas. Decorado terminado en horas. Reversible para el siguiente rodaje.",
      },
    ],
    recommendedSeries: ["k", "t", "w", "g"],
    materials: [
      "Cualquier pared interior",
      "Cristal y vidrio (UV)",
      "PVC y plásticos rígidos",
      "Madera natural y MDF",
      "Metal lacado",
    ],
    advantages: [
      {
        metric: "+30%",
        title: "Margen superior a vinilo",
        body: "Coste de tinta inferior al coste de vinilo + laminado + montaje. Precio percibido por el cliente es premium.",
      },
      {
        metric: "Único",
        title: "Diferenciación local",
        body: "En la mayoría de provincias españolas no hay otro proveedor con impresora vertical. Captas mercado nuevo.",
      },
      {
        metric: "Formación",
        title: "Curso de 8h incluido",
        body: "Tus operarios actuales pueden manejarla tras nuestra formación. No necesitas personal nuevo.",
      },
    ],
    faq: [
      {
        q: "¿Me compite con mi propio servicio de vinilo?",
        a: "No. Son productos distintos. El vinilo sigue siendo más rápido y barato para tirajes grandes en superficies pequeñas. La impresora vertical es para murales grandes y superficies donde el vinilo no funciona o queda peor.",
      },
      {
        q: "¿Cuántos m² al mes necesito facturar para que sea rentable?",
        a: "Depende del modelo y de tu precio por m². En general, con 15-30 m² mensuales facturados a precio de mercado, la máquina se paga en 18-24 meses. Calcúlalo con tus datos en la calculadora ROI.",
      },
      {
        q: "¿Tenéis acuerdos con empresas de rotulación?",
        a: "Sí, ofrecemos condiciones especiales para empresas con flota o que adquieren varias unidades. Contáctanos.",
      },
    ],
    heroVariant: "cobalto",
  },
  {
    slug: "industria-personalizacion",
    name: "Industria y personalización",
    eyebrow: "Sector · industrial y OEM",
    h1: "Decoración",
    h1Highlight: "industrial a medida.",
    metaTitle: "Impresora vertical industrial · personalización OEM",
    metaDescription:
      "Personalización industrial sobre paneles, vidrio, metal y cerámica. Serie G personalizable en altura y color para integradores OEM. Producción seriada.",
    hero: "Si tu fábrica produce paneles, mobiliario, puertas, mamparas o cualquier superficie que vende decorada, la impresora vertical industrial te permite personalizar por unidad sin parar línea.",
    useCases: [
      {
        title: "Fabricantes de mobiliario y carpintería",
        body: "Personalización de puertas, frentes de armario, mesas y paneles. Pedidos cortos rentables.",
      },
      {
        title: "Fabricantes de cerámica y azulejo",
        body: "Diseños bajo demanda sobre azulejo terminado. Series cortas sin cambio de matriz.",
      },
      {
        title: "Integradores OEM y maquinaria especial",
        body: "Serie G personalizable en altura, color y configuración. Integración en líneas existentes.",
      },
    ],
    recommendedSeries: ["g", "w", "fb"],
    materials: [
      "Vidrio templado",
      "Cerámica y azulejo",
      "Metal lacado y aluminio",
      "Madera, MDF y melamina",
      "Plásticos rígidos (PVC, ABS, acrílico)",
    ],
    advantages: [
      {
        metric: "Custom",
        title: "Fabricación a medida",
        body: "Serie G personalizable en altura y color desde nuestro taller. Adaptamos a tu línea de producción.",
      },
      {
        metric: "1+",
        title: "Lote mínimo 1 unidad",
        body: "Sin matrices ni serigrafía. Cada pieza puede ser distinta. Rentable desde la primera unidad.",
      },
      {
        metric: "RII-AEE",
        title: "Cumplimiento normativo",
        body: "Certificación europea de residuos electrónicos. Factura, garantía y soporte técnico oficial en España.",
      },
    ],
    faq: [
      {
        q: "¿Podéis integrar la máquina en mi línea de producción?",
        a: "Sí. La Serie G se diseña a medida del entorno. Personalizamos altura, color, configuración de ejes y software según tu integración. Contáctanos con specs.",
      },
      {
        q: "¿Velocidad de producción industrial?",
        a: "Depende del modelo. La Serie W llega hasta 80 m²/h en alta velocidad. Para producción seriada estable, recomendamos modelos doble cabezal UV.",
      },
      {
        q: "¿Garantía y servicio para uso intensivo industrial?",
        a: "Sí. Para uso industrial 24/7 ofrecemos planes de mantenimiento preventivo y stock de piezas dedicado. Visita técnica en 48-72h en toda España.",
      },
    ],
    heroVariant: "ocre",
  },
  {
    slug: "museos-cultura",
    name: "Museos y cultura",
    eyebrow: "Sector · museos, galerías y cultura",
    h1: "Exposiciones que",
    h1Highlight: "se montan rápido.",
    metaTitle: "Impresora vertical para museos, galerías y exposiciones",
    metaDescription:
      "Montaje de exposiciones temporales con impresión directa en pared. Sin vinilos pegados ni montaje complejo. Reversible al final de la muestra.",
    hero: "Cada exposición temporal supone vinilos cortados a medida, instaladores y horas de montaje. Con impresora vertical, el muralista digital imprime directamente sobre la pared del museo. Al desmontar la muestra, una mano de pintura y listo para la siguiente.",
    useCases: [
      {
        title: "Museos con programación temporal",
        body: "Cartelas grandes, paneles introductorios y murales contextuales impresos in situ. Sin transporte ni almacenamiento.",
      },
      {
        title: "Galerías de arte contemporáneo",
        body: "Reproducciones de gran formato como parte del montaje. Diálogo con la obra física sin desplazar piezas frágiles.",
      },
      {
        title: "Ferias y bienales itinerantes",
        body: "Producción local en cada sede de la itinerancia. Reduce transporte, peso y coste logístico.",
      },
    ],
    recommendedSeries: ["e", "k", "t"],
    materials: [
      "Pared blanca de museo",
      "Pladur con imprimación",
      "Trasdosado expositivo",
      "Cristal de vitrina (UV)",
      "Paneles MDF temporales",
    ],
    advantages: [
      {
        metric: "0 vinilo",
        title: "Sin material intermedio",
        body: "Solo tinta sobre pared. Cero residuo de soporte. Más sostenible y más limpio en desmontaje.",
      },
      {
        metric: "Reversible",
        title: "Repintado tras la muestra",
        body: "2-3 capas de pintura plástica del color base eliminan completamente la impresión. Listo para la siguiente expo.",
      },
      {
        metric: "Foto",
        title: "Calidad museística",
        body: "Hasta 1440×2880 ppp con gestión de color ICC personalizada por soporte. Reproducción fiel al original.",
      },
    ],
    faq: [
      {
        q: "¿Calidad suficiente para reproducir obra de arte?",
        a: "Sí, con gestión de color profesional. Creamos perfil ICC personalizado para tu pared y tinta, calibrado con espectrofotómetro. Más información en /perfiles-icc.",
      },
      {
        q: "¿Se puede imprimir sobre superficies históricas?",
        a: "Depende. Recomendamos imprimir sobre trasdosado temporal o panel desmontable que se coloca delante. Así el muro histórico no se ve afectado.",
      },
      {
        q: "¿Olor o emisiones en sala?",
        a: "La tinta base agua I-TECH es prácticamente inodora. La tinta UV emite muy poco olor y se cura instantáneamente con luz UV. Apta para entornos públicos con ventilación normal.",
      },
    ],
    heroVariant: "carbon",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return SECTORES.find((s) => s.slug === slug);
}
