import Image from "next/image";
import Link from "next/link";
import { WIX_IMAGES } from "../../data/images";

const COLLABORATIONS = [
  {
    code: "01",
    org: "Fundación ONCE",
    project: "Inserta Innovación",
    description:
      "Formamos a jóvenes con discapacidad en impresión vertical e IA dentro del programa Vertical Print Tandem. T1 instaladas en Barcelona y Madrid para que aprendan a operar la tecnología y crear servicios y proyectos reales de cara a su incorporación laboral.",
    image: WIX_IMAGES.formacionONCE,
    logo: WIX_IMAGES.insertaInnovacionLogo,
    metric: "30 jóvenes formados",
  },
  {
    code: "02",
    org: "Museo del Prado",
    project: "Colaboración institucional",
    description:
      "Colaboración con una de las instituciones culturales más prestigiosas de España. Aplicación de impresión vertical en contextos museísticos donde la calidad de reproducción, la durabilidad y el cumplimiento normativo son críticos.",
    image: WIX_IMAGES.muralBanner,
    metric: "Institución de referencia",
  },
];

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
          {COLLABORATIONS.map((collab) => (
            <article key={collab.code} className="bg-paper flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-bone">
                <Image
                  src={collab.image}
                  alt={`${collab.org} · ${collab.project}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="font-mono text-h4 text-ocre-500">
                  {collab.code}
                </div>
                <div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                    {collab.project}
                  </div>
                  <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight mt-1">
                    {collab.org}
                  </h3>
                </div>
                <p className="font-sans text-body text-stone leading-relaxed flex-grow">
                  {collab.description}
                </p>
                <div className="pt-4 border-t border-stone/15">
                  <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700">
                    {collab.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
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
