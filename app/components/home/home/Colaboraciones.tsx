import Image from "next/image";
import Link from "next/link";
import { WIX_IMAGES } from "../../data/images";
import MediaPlaceholder from "../MediaPlaceholder";

/* SVG inline del logo Museo del Prado (estilo oficial) */
const LogoMuseoPrado = () => (
  <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
    <text
      x="100"
      y="20"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="serif"
      fontSize="14"
      letterSpacing="0.05em"
    >
      MUSEO NACIONAL
    </text>
    <text
      x="100"
      y="40"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="serif"
      fontSize="16"
      fontWeight="700"
      letterSpacing="0.08em"
    >
      DEL PRADO
    </text>
  </svg>
);

export default function Colaboraciones() {
  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Colaboraciones</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              Más allá de la venta.
              <span className="block text-cobalto-700">Colaboramos.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Trabajamos con instituciones y organizaciones que entienden la
              tecnología de impresión vertical como una herramienta para
              transformar sectores enteros.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-stone/15 border border-stone/15">
          {/* CARD 01 — Fundación ONCE */}
          <article className="bg-paper flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden bg-bone">
              <Image
                src={WIX_IMAGES.formacionONCE}
                alt="Fundación ONCE · Inserta Innovación · formación impresión vertical"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-cover object-center"
              />
            </div>
            <div className="p-8 space-y-4 flex-grow flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="font-mono text-h4 text-ocre-500">01</div>
                <div className="bg-bone p-2 border border-stone/15 max-w-[140px]">
                  <Image
                    src={WIX_IMAGES.insertaInnovacionLogo}
                    alt="Inserta Innovación · Fundación ONCE"
                    width={140}
                    height={80}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                  Inserta Innovación
                </div>
                <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight mt-1">
                  Fundación ONCE
                </h3>
              </div>
              <p className="font-sans text-body text-stone leading-relaxed flex-grow">
                Formamos a jóvenes con discapacidad en impresión vertical e IA
                dentro del programa Vertical Print Tandem. T1 instaladas en
                Barcelona y Madrid para que aprendan a operar la tecnología y
                crear servicios y proyectos reales de cara a su incorporación
                laboral.
              </p>
              <div className="pt-4 border-t border-stone/15">
                <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700">
                  30 jóvenes formados
                </span>
              </div>
            </div>
          </article>

          {/* CARD 02 — Museo del Prado */}
          <article className="bg-paper flex flex-col">
            <MediaPlaceholder
              type="image"
              title="Imagen del mural en Museo del Prado"
              description="Foto del proyecto colaborativo en el Museo del Prado. Descárgala del Instagram (post C9nfa4bt_jF) y guárdala en /public/colaboraciones/prado.jpg"
              dimensions="1600×1000 px · ratio 16:10"
              filename="/colaboraciones/prado.jpg"
              aspect="aspect-[16/10]"
            />
            <div className="p-8 space-y-4 flex-grow flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="font-mono text-h4 text-ocre-500">02</div>
                <div className="bg-ink text-paper px-4 py-3 max-w-[180px]">
                  <LogoMuseoPrado />
                </div>
              </div>
              <div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                  Colaboración institucional
                </div>
                <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight mt-1">
                  Museo del Prado
                </h3>
              </div>
              <p className="font-sans text-body text-stone leading-relaxed flex-grow">
                Colaboración con una de las instituciones culturales más
                prestigiosas de España. Aplicación de impresión vertical en
                contextos museísticos donde la calidad de reproducción, la
                durabilidad y el cumplimiento normativo son críticos.
              </p>
              <div className="pt-4 border-t border-stone/15">
                <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700">
                  Institución de referencia
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/contacto" className="btn-primary">
            ¿Tu organización quiere colaborar?
          </Link>
        </div>
      </div>
    </section>
  );
}
