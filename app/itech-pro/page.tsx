import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I-TECH Pro · Personalizaciones industriales",
  description:
    "Soluciones de impresión vertical personalizadas para industria. Desarrollo a medida, electrónica adaptada, cabezales custom y líneas automatizadas.",
  alternates: { canonical: "/itech-pro" },
};

type Service = {
  code: string;
  icon: string;
  title: string;
  body: string;
  list?: string[];
  imageFile: string;
  imageTitle: string;
  imageDescription: string;
};

const SERVICES: Service[] = [
  {
    code: "01",
    icon: "🔧",
    title: "Desarrollo de proyectos a medida",
    body: "Trabajamos codo a codo con cada cliente para diseñar y fabricar soluciones que se adapten exactamente a su entorno de producción. Desde la integración en líneas automatizadas hasta aplicaciones especiales para superficies complejas o condiciones extremas.",
    imageFile: "/itech-pro/servicio-01-desarrollo.jpg",
    imageTitle: "Ingeniería trabajando en proyecto a medida",
    imageDescription: "Foto de ingeniero/a junto a impresora I-TECH adaptada a línea industrial. Mejor: taller, planos en mano, integración con cinta transportadora o robot.",
  },
  {
    code: "02",
    icon: "🧠",
    title: "Electrónica adaptada a tus necesidades",
    body: "Diseñamos y fabricamos placas electrónicas personalizadas, adaptadas a los requerimientos técnicos de cada instalación o sistema. Esto permite controlar con precisión la impresora, integrar sensores específicos, automatizar procesos y asegurar una conectividad total con tu infraestructura industrial.",
    imageFile: "/itech-pro/servicio-02-electronica.jpg",
    imageTitle: "Placa electrónica personalizada I-TECH",
    imageDescription: "Foto macro de PCB / placa electrónica con componentes visibles, conectores o cables, idealmente con logo o sello I-TECH. Estilo técnico, bien iluminada.",
  },
  {
    code: "03",
    icon: "🖨️",
    title: "Opciones de cabezales personalizables",
    body: "Amplia gama de cabezales de impresión con distintas características técnicas según necesidades de tu proceso productivo.",
    list: [
      "Altas resoluciones para impresión de precisión",
      "Cabezales UV para superficies difíciles",
      "Cabezales de gran caudal para alta velocidad",
      "Opciones para tintas especiales o pigmentadas",
    ],
    imageFile: "/itech-pro/servicio-03-cabezales.jpg",
    imageTitle: "Cabezales de impresión I-TECH",
    imageDescription: "Foto de cabezales de impresión sobre superficie técnica. Detalle de las boquillas, varias opciones alineadas, o cabezal en acción sobre material industrial.",
  },
];

const SECTORS = [
  "Automoción · marcado de piezas",
  "Cerámica · personalización industrial",
  "Mobiliario · acabados decorativos",
  "Construcción · prefabricados",
  "Packaging · personalización rígida",
  "Vidrio decorativo · puertas y mamparas",
  "Aeronáutica · trazabilidad de componentes",
  "Mobiliario urbano · señalización institucional",
];

export default function ItechProPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-carbon text-bone border-b border-bone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                I-TECH Pro · Personalizaciones sector industrial
              </div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-bone text-balance leading-[0.92]">
                Cada industria <br />
                <span className="text-ocre-200">tiene necesidades únicas.</span>
              </h1>
              <p className="text-body-lg text-bone/80 max-w-2xl text-pretty">
                I-TECH Pro es nuestro servicio especializado en soluciones
                personalizadas para entornos industriales, que va mucho más
                allá de la impresión estándar.
              </p>
              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                >
                  Cuéntanos tu proyecto
                </Link>
              </div>
            </div>

            {/* Imagen de industria · ambiente productivo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] bg-bone/5 overflow-hidden">
                <Image
                  src="/itech-pro/hero-industria.jpg"
                  alt="Ambiente industrial donde aplicamos I-TECH Pro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 servicios */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6 space-y-4">
              <div className="eyebrow">Qué ofrecemos</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Tres pilares de la
                <span className="block text-cobalto-700">personalización industrial.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {SERVICES.map((service) => (
              <article
                key={service.code}
                className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-stone/15 last:border-0 items-start"
              >
                {/* Imagen al lado izquierdo */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] bg-bone overflow-hidden border border-stone/15">
                    <Image
                      src={service.imageFile}
                      alt={service.imageTitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Contenido a la derecha */}
                <div className="lg:col-span-6 lg:col-start-7 space-y-4">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                    {service.code} · Servicio I-TECH Pro
                  </div>
                  <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-body-lg text-stone leading-relaxed">
                    {service.body}
                  </p>
                  {service.list && (
                    <ul className="space-y-2 pt-4">
                      {service.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-body text-ink"
                        >
                          <span className="text-ocre-500 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Sectores donde aplicamos</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Industrias que ya
                <span className="block text-cobalto-700">imprimen con I-TECH Pro.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-3">
                {SECTORS.map((sector) => (
                  <li
                    key={sector}
                    className="flex items-start gap-3 py-3 border-b border-stone/15 text-body text-ink"
                  >
                    <span className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500 mt-1 shrink-0">
                      ─
                    </span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center max-w-3xl mx-auto">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance">
            ¿Tienes un reto <span className="block text-ocre-200">industrial?</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6">
            Cuéntanoslo. Nuestro equipo de ingeniería analiza tu caso y te
            propone una solución viable, con presupuesto y plazos reales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Hablar con ingeniería
            </Link>
            <Link
              href="/series/g"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
            >
              Ver Serie G
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
