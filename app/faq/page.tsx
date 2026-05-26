import FAQAccordion from "../components/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ · preguntas frecuentes impresora vertical",
  description:
    "Preguntas frecuentes sobre la impresora vertical I-TECH: superficies, tintas, resolución, formatos, velocidad, durabilidad, garantía y personalización.",
  alternates: { canonical: "/faq" },
};

const FAQ_CATEGORIES = [
  {
    title: "Tecnología y funcionamiento",
    questions: [
      {
        q: "¿Qué es una impresora vertical o de pared y cómo funciona?",
        a: "Una impresora vertical o de pared es una variedad de impresora de inyección de tinta que emplea tinta de 4 o 5 colores CMYK(W) para plasmar imágenes directamente sobre muros y otros soportes verticales.",
      },
      {
        q: "¿Cuál es la diferencia entre tinta base agua y tinta UV?",
        a: "La impresora vertical con tinta a base de agua emplea tinta de pigmento, adecuada para imprimir en materiales absorbentes como paredes de yeso y papel tapiz. La impresora UV utiliza una lámpara UV para solidificar la tinta sobre distintas superficies de materiales como muros, metal, vidrio, acrílico, azulejos, entre otros.",
      },
      {
        q: "¿Cuáles son las diferencias entre las impresoras de pared con uno, dos y cuatro cabezales?",
        a: "Las impresoras verticales con tinta a base de agua cuentan con múltiples cabezales. A medida que aumenta el número de cabezales de impresión, la velocidad de impresión se incrementa. No obstante, esto no afecta a la calidad de la impresión. Actualmente ya disponemos de impresoras verticales de doble cabezal con tinta UV.",
      },
      {
        q: "¿No sé nada de impresoras, es muy complicado?",
        a: "Es muy sencillo previa formación básica. Cualquier persona puede manejarlo sin problemas.",
      },
    ],
  },
  {
    title: "Superficies y tamaños",
    questions: [
      {
        q: "¿Qué tamaño puede imprimir una impresora vertical?",
        a: "La altura de impresión es de hasta 5 metros (depende de los diferentes modelos), y en ancho no tiene limitación de longitud. Existe la posibilidad de usar la técnica de solapación: al unir dos imágenes, la altura de impresión puede superar los 5 metros.",
      },
      {
        q: "¿En qué superficies de material puede imprimir una impresora vertical?",
        a: "La impresora vertical con LED UV puede imprimir en casi cualquier superficie de material, incluidas paredes, papel tapiz, azulejos, metal, vidrio, acrílico, plástico…",
      },
      {
        q: "¿Puede la impresora de pared imprimir en superficies irregulares como la pared de ladrillos?",
        a: "Sí, la impresora de pared puede imprimir directamente en la pared de ladrillos. Hay dos sensores en el cabezal de impresión que ayudan a la impresora a mantener 1 cm de distancia respecto a la pared en todo momento. El cabezal puede avanzar y retroceder 10 cm automáticamente para adaptar la distancia a la superficie.",
      },
      {
        q: "¿Sobre qué materiales de fondo puede imprimir una impresora vertical?",
        a: "Los modelos I-TECH con tinta base agua imprimen en cualquier pared o papel absorbente: pared de masilla, pared de cal, etc. Los modelos con tinta UV imprimen en casi cualquier material: vidrio, azulejos, hierro y otras paredes no absorbentes.",
      },
      {
        q: "¿Debo tratar las superficies antes y después de la impresión?",
        a: "No es necesario tratar la pared antes de imprimir. Sugerimos tratar las superficies no porosas como vidrio, acrílico, metal o plástico con una imprimación especial antes de imprimir.",
      },
    ],
  },
  {
    title: "Calidad, resolución y formatos",
    questions: [
      {
        q: "¿A qué resolución puede imprimir una impresora vertical?",
        a: "Resoluciones disponibles: 720×180, 720×360, 720×540, 720×720, 720×1080, 720×1440, 720×2880 ppp. También 1440×180, 1440×360, 1440×540, 1440×720, 1440×1080, 1440×1440 y 1440×2880 ppp.",
      },
      {
        q: "¿Qué formatos puede imprimir una impresora vertical?",
        a: "Soporte para JPG, BMP, TIFF, PDF, AI, PSD, CDR, etc. Recomendamos TIFF 300 dpi para la mejor calidad.",
      },
      {
        q: "¿Cuánto tarda en imprimir una impresora vertical?",
        a: "Depende del modelo y la resolución de impresión. Cuanto mayor sea la resolución, menor será la velocidad. La velocidad típica está entre 3-15 m²/h, 6-30 m²/h o 12-80 m²/h en modelos de gran caudal.",
      },
      {
        q: "¿Cuánto dura la tinta?",
        a: "Depende de la preparación y condiciones del soporte, pero en condiciones buenas: 15 años en interiores y 5 años en exteriores con protección UV.",
      },
      {
        q: "¿Puedo quitar una impresión?",
        a: "Sí, no hay problema. Se puede repintar encima con 3 capas de pintura plástica. En cristal con espátula de cerámica. En otros materiales con chorro de arena o lijando.",
      },
    ],
  },
  {
    title: "Personalización, stock y servicio",
    questions: [
      {
        q: "¿Se puede personalizar la impresora?",
        a: "Sí. Al ser fabricantes podemos personalizar la altura y el color a tu gusto. Podemos fabricar en nuestro taller la prolongación que desees. Para España recomendamos alturas no superiores a 2,40 m, ya que si no puede limitar las zonas de impresión.",
      },
      {
        q: "¿Tenéis impresoras en stock?",
        a: "Intentamos tener siempre una impresora en stock para adquisiciones rápidas. Si no, el plazo es de entre 9 y 10 semanas, con posibilidad de reducirlo a 2 semanas en casos muy urgentes mediante envío urgente con coste adicional.",
      },
      {
        q: "¿Qué tamaños puedo imprimir como referencia?",
        a: "Como ejemplo, una impresora de 3,50 cm puede imprimir una imagen de 2,8 m aproximadamente. Pero con la técnica de solapación no tendría limitación.",
      },
    ],
  },
];

// Schema.org FAQPage para Rich Snippets de Google (lista de preguntas
// expandible directamente en la SERP). Aplana todas las categorías.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Preguntas frecuentes</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Las dudas reales
                <span className="block text-cobalto-700">de quien va a comprar.</span>
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
                <h2 className="font-display text-h2 uppercase tracking-tight text-ink leading-tight">
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
