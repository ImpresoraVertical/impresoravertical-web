import Link from "next/link";
import { notFound } from "next/navigation";
import { MODELS, getModelBySlug } from "../../data/models";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return { title: "Modelo no encontrado" };
  return {
    title: `Modelo ${model.code} ${model.name} · ${model.tagline}`,
    description: model.description,
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  // Modelo siguiente y anterior
  const currentIndex = MODELS.findIndex((m) => m.slug === slug);
  const prev = currentIndex > 0 ? MODELS[currentIndex - 1] : MODELS[MODELS.length - 1];
  const next = currentIndex < MODELS.length - 1 ? MODELS[currentIndex + 1] : MODELS[0];

  return (
    <>
      {/* Hero del modelo */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <Link
                href="/modelos"
                className="font-mono text-eyebrow uppercase tracking-wider text-stone hover:text-ink transition-colors"
              >
                ← Volver al catálogo
              </Link>

              <div className="eyebrow-ocre">{model.eyebrow}</div>

              <div className="flex items-baseline gap-6">
                <span className="font-mono text-h2 text-ocre-500">{model.code}</span>
                {model.featured && (
                  <span className="badge-ocre">Más vendido</span>
                )}
              </div>

              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                {model.name}
                <br />
                <span className="italic text-cobalto-700">{model.tagline.split(",").slice(1).join(",").trim()}</span>
              </h1>

              <p className="text-body-lg text-stone max-w-xl text-pretty">
                {model.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contacto" className="btn-primary">
                  Reservar demo {model.code}
                </Link>
                <Link href="/calculadora-roi" className="btn-secondary">
                  Calcular ROI
                </Link>
              </div>
            </div>

            {/* Right column: price card */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-ink text-paper p-8 space-y-6">
                <div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
                    Precio
                  </div>
                  <div className="font-serif text-h2 text-paper mt-1">
                    {model.price}
                  </div>
                  <p className="text-body-sm text-bone/70 mt-2">
                    IVA no incluido · Financiación disponible 12-36 meses
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-bone/20">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-bone/70">Garantía</span>
                    <span className="text-paper font-mono">{model.specs.warranty}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-bone/70">Entrega</span>
                    <span className="text-paper font-mono">4-6 semanas</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-bone/70">Instalación</span>
                    <span className="text-paper font-mono">Incluida</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-bone/20">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center w-full bg-ocre-300 text-cobalto-900 px-6 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                  >
                    Pedir presupuesto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs detalladas */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="eyebrow">Especificaciones técnicas</div>
              <h2 className="font-serif text-h2 text-ink text-balance">
                Lo que hay <span className="italic text-cobalto-700">dentro.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <dl className="space-y-px bg-stone/15 border border-stone/15">
                {[
                  ["Superficie máxima de impresión", model.specs.surface],
                  ["Velocidad de impresión", model.specs.speed],
                  ["Tintas compatibles", model.specs.inks],
                  ["Resolución máxima", model.specs.resolution],
                  ["Garantía", model.specs.warranty],
                  ["Peso", model.specs.weight],
                  ...(model.specs.footprint ? [["Footprint físico", model.specs.footprint] as [string, string]] : []),
                  ...(model.specs.extra ? [["Adicional", model.specs.extra] as [string, string]] : []),
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-2 bg-bone p-6 gap-4"
                  >
                    <dt className="text-body text-stone">{label}</dt>
                    <dd className="text-body text-ink font-mono text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="eyebrow">Casos de uso recomendados</div>
              <h2 className="font-serif text-h2 text-ink text-balance">
                Para qué proyectos <span className="italic text-cobalto-700">brilla.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-4">
              {model.useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 pb-4 border-b border-stone/15 last:border-0"
                >
                  <span className="font-mono text-h5 text-ocre-500 leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body-lg text-ink">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                ROI estimado
              </div>
              <h2 className="font-serif text-h1 text-bone text-balance">
                {model.roi.split(".")[0]}
                <span className="italic text-ocre-200">.</span>
              </h2>
              <p className="text-body-lg text-bone/80">
                {model.roi.split(".").slice(1).join(".").trim() ||
                  "Datos basados en clientes reales 2022-2024 con uso medio (60 m²/mes a 90€/m²)."}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Link
                href="/calculadora-roi"
                className="inline-flex items-center justify-center w-full bg-bone text-cobalto-900 px-8 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
              >
                Calcula tu ROI {model.code}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nav modelo anterior / siguiente */}
      <section className="bg-paper border-t border-stone/15">
        <div className="container-page grid md:grid-cols-2 gap-px bg-stone/15">
          <Link
            href={`/modelos/${prev.slug}`}
            className="bg-paper p-8 hover:bg-bone transition-colors group flex items-center gap-6"
          >
            <span className="font-mono text-eyebrow uppercase tracking-wider text-stone group-hover:-translate-x-1 transition-transform">
              ← Anterior
            </span>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                {prev.code}
              </div>
              <div className="font-serif text-h5 text-ink">{prev.name}</div>
            </div>
          </Link>

          <Link
            href={`/modelos/${next.slug}`}
            className="bg-paper p-8 hover:bg-bone transition-colors group flex items-center justify-end gap-6 text-right"
          >
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                {next.code}
              </div>
              <div className="font-serif text-h5 text-ink">{next.name}</div>
            </div>
            <span className="font-mono text-eyebrow uppercase tracking-wider text-stone group-hover:translate-x-1 transition-transform">
              Siguiente →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
