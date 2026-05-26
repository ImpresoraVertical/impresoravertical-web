import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERIES, getSeriesBySlug, PRICING_COPY } from "../../data/series";
import PixelTrack from "../../components/PixelTrack";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serie = getSeriesBySlug(slug);
  if (!serie) return { title: "Serie no encontrada" };
  // Description recortada a ~155 chars para evitar truncado en SERPs
  const fullDesc = serie.description;
  const desc =
    fullDesc.length > 155 ? fullDesc.substring(0, 152).trimEnd() + "…" : fullDesc;
  return {
    title: `${serie.name} · ${serie.tagline}`,
    description: desc,
    alternates: { canonical: `/series/${slug}` },
    openGraph: {
      title: `${serie.name} · ${serie.tagline}`,
      description: desc,
      url: `https://www.impresoravertical.com/series/${slug}`,
      type: "website",
    },
  };
}

export default async function SeriePage({ params }: PageProps) {
  const { slug } = await params;
  const serie = getSeriesBySlug(slug);
  if (!serie) notFound();

  const currentIndex = SERIES.findIndex((s) => s.slug === slug);
  const prev =
    currentIndex > 0 ? SERIES[currentIndex - 1] : SERIES[SERIES.length - 1];
  const next =
    currentIndex < SERIES.length - 1
      ? SERIES[currentIndex + 1]
      : SERIES[0];

  // JSON-LD Schema.org: Product + BreadcrumbList para Rich Results
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: serie.name,
    description: serie.description,
    brand: {
      "@type": "Brand",
      name: "I-TECH",
    },
    manufacturer: {
      "@type": "Organization",
      name: "I-TECH",
    },
    category: "Impresoras verticales",
    image: serie.models[0]?.image
      ? `https://www.impresoravertical.com${serie.models[0].image}`
      : "https://www.impresoravertical.com/opengraph-image",
    url: `https://www.impresoravertical.com/series/${slug}`,
    offers: serie.priceFrom
      ? {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: serie.priceFrom,
          offerCount: serie.models.length,
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://www.impresoravertical.com/#organization" },
        }
      : {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "0",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://www.impresoravertical.com/#organization" },
          description: "Precio bajo consulta",
        },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.impresoravertical.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Series",
        item: "https://www.impresoravertical.com/series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serie.name,
        item: `https://www.impresoravertical.com/series/${slug}`,
      },
    ],
  };

  // VideoObject schema para cada vídeo (solo si la serie tiene vídeos)
  const videoSchemas =
    serie.videos && serie.videos.length > 0
      ? serie.videos.map((v) => ({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: `${serie.name} · ${v.title}`,
          description: `${v.title} — demostración de la ${serie.name}, impresora vertical I-TECH oficial en España.`,
          thumbnailUrl: serie.models[0]?.image
            ? `https://www.impresoravertical.com${serie.models[0].image}`
            : "https://www.impresoravertical.com/opengraph-image",
          contentUrl: `https://www.impresoravertical.com${v.src}`,
          uploadDate: "2025-01-01T09:00:00+01:00",
          publisher: { "@id": "https://www.impresoravertical.com/#organization" },
        }))
      : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {videoSchemas.map((vs, i) => (
        <script
          key={`video-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vs) }}
        />
      ))}
      <PixelTrack
        event="ViewContent"
        params={{ content_name: serie.name, content_category: "Product Series", content_ids: [serie.slug] }}
      />
      {/* Hero de la serie */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <Link
                href="/series"
                className="font-mono text-eyebrow uppercase tracking-wider text-stone hover:text-ink transition-colors"
              >
                ← Volver al catálogo
              </Link>

              <div className="eyebrow-ocre">{serie.eyebrow}</div>

              <div className="flex items-baseline gap-6">
                <span className="font-mono text-h2 text-ocre-500">
                  Serie {serie.code}
                </span>
              </div>

              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                {serie.name}
                <span className="block text-cobalto-700 mt-1">
                  {serie.tagline.split(".")[0]}.
                </span>
              </h1>

              <p className="text-body-lg text-stone max-w-xl text-pretty">
                {serie.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contacto" className="btn-primary">
                  Pedir presupuesto Serie {serie.code}
                </Link>
                <Link href="/calculadora-roi" className="btn-secondary">
                  Calcular ROI
                </Link>
              </div>
            </div>

            {/* Right: imagen (primera foto de la serie) */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="relative aspect-square bg-white overflow-hidden">
                {serie.models[0]?.image && (
                  <Image
                    src={serie.models[0].image}
                    alt={`${serie.name} · ${serie.tagline}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla comparativa modelos */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Modelos de la Serie {serie.code}</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                {serie.models.length === 1 ? "Configuración" : "Modelos disponibles"}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                {serie.models.length === 1
                  ? "Configuración a medida según tu proyecto."
                  : `${serie.models.length} modelos dentro de la serie ${serie.code}, diferenciados por superficie máxima, número de cabezales y velocidad.`}
              </p>
            </div>
          </div>

          {/* Tabla comparativa */}
          <div className="overflow-x-auto bg-paper border border-stone/15">
            <table className="w-full">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider w-32">
                    Foto
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Modelo
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Superficie máx.
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Velocidad
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Tintas
                  </th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">
                    Resolución
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/15">
                {serie.models.map((m) => (
                  <tr key={m.code} className="hover:bg-bone transition-colors">
                    <td className="p-4 align-middle">
                      {m.image ? (
                        <div className="relative w-24 h-24 bg-white overflow-hidden">
                          <Image
                            src={m.image}
                            alt={`Modelo ${m.code}`}
                            fill
                            sizes="96px"
                            className="object-cover object-center"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-bone border border-stone/15 flex items-center justify-center">
                          <span className="font-mono text-eyebrow text-stone">—</span>
                        </div>
                      )}
                    </td>
                    <td className="p-6">
                      <div className="font-display text-h4 uppercase tracking-tight text-ink leading-none">
                        {m.code}
                      </div>
                      {m.name !== m.code && (
                        <div className="font-sans text-body-sm text-stone mt-1">
                          {m.name}
                        </div>
                      )}
                      {m.highlights && (
                        <ul className="mt-2 space-y-0.5">
                          {m.highlights.map((h) => (
                            <li
                              key={h}
                              className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                    <td className="p-6 font-mono text-body-sm text-ink">
                      {m.surface || "—"}
                    </td>
                    <td className="p-6 font-mono text-body-sm text-ink">
                      {m.speed || "—"}
                    </td>
                    <td className="p-6 font-mono text-body-sm text-ink">
                      {m.inks || "—"}
                    </td>
                    <td className="p-6 font-mono text-body-sm text-ink">
                      {m.resolution || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-sans text-body-sm text-stone mt-6">
            Specs detalladas marcadas como &ldquo;Pendiente&rdquo; se actualizarán próximamente. Para datos completos, contacta con un agente.
          </p>
        </div>
      </section>

      {/* Specs técnicas detalladas */}
      {serie.models.some((m) => m.printHead || m.axes || m.pc) && (
        <section className="section-pad bg-paper">
          <div className="container-page">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-5 space-y-4">
                <div className="eyebrow">Ficha técnica completa</div>
                <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                  Specs detalladas
                  <span className="block text-cobalto-700">por modelo.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-body-lg text-stone text-pretty">
                  Toda la información técnica de cada modelo de la Serie{" "}
                  {serie.code}: cabezales, ejes, sensores, software, alimentación
                  y dimensiones.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {serie.models.map((m) => {
                const rows: { label: string; value?: string }[] = [
                  { label: "Cabezal de impresión", value: m.printHead },
                  { label: "Resolución", value: m.resolution },
                  { label: "Tinta", value: m.inks },
                  { label: "Tecnología de impresión", value: m.inkTech },
                  { label: "Formatos de imagen", value: m.fileFormats },
                  { label: "Tamaño de impresión", value: m.surface },
                  { label: "Velocidad", value: m.speed },
                  { label: "Altura máxima", value: m.maxHeight },
                  { label: "Posicionamiento láser", value: m.laserPositioning },
                  { label: "Ejes X / Y / Z", value: m.axes },
                  { label: "Software RIP", value: m.software },
                  { label: "Fuente de alimentación", value: m.power },
                  { label: "Puertos", value: m.ports },
                  { label: "Cuerpo de la máquina", value: m.body },
                  { label: "Métodos de montaje", value: m.mounting },
                  { label: "PC interna", value: m.pc },
                  { label: "Sensor de superficie", value: m.surfaceSensor },
                  { label: "Entorno operativo", value: m.environment },
                  { label: "Nivel de ruido", value: m.noise },
                  { label: "Peso", value: m.weight },
                  { label: "Dimensiones máquina", value: m.dimensions },
                ];
                const visibleRows = rows.filter((r) => r.value);
                if (visibleRows.length === 0) return null;

                return (
                  <div
                    key={m.code}
                    className="bg-bone border border-stone/15 p-8 lg:p-10"
                  >
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-3 space-y-4">
                        {m.image && (
                          <div className="relative aspect-square bg-white overflow-hidden">
                            <Image
                              src={m.image}
                              alt={`Modelo ${m.code}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 25vw"
                              className="object-cover object-center"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                            Modelo
                          </div>
                          <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-none mt-1">
                            {m.code}
                          </h3>
                          {m.name !== m.code && (
                            <p className="font-sans text-body-sm text-stone mt-1">
                              {m.name}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="lg:col-span-9">
                        <dl className="divide-y divide-stone/15">
                          {visibleRows.map((r) => (
                            <div
                              key={r.label}
                              className="grid grid-cols-12 gap-4 py-3"
                            >
                              <dt className="col-span-12 md:col-span-4 font-mono text-eyebrow uppercase tracking-wider text-stone">
                                {r.label}
                              </dt>
                              <dd className="col-span-12 md:col-span-8 font-sans text-body-sm text-ink">
                                {r.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Vídeos de la serie */}
      {serie.videos && serie.videos.length > 0 && (
        <section className="section-pad bg-ink text-paper">
          <div className="container-page">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-5 space-y-4">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
                  Serie {serie.code} en vídeo
                </div>
                <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-paper text-balance">
                  Míralas en
                  <span className="block text-ocre-300">funcionamiento.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-body-lg text-bone/80 text-pretty">
                  Demostraciones reales de la Serie {serie.code}: transporte,
                  montaje e impresión sobre superficie.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {serie.videos.map((v) => (
                <figure key={v.src} className="space-y-3">
                  <div className="relative aspect-video bg-carbon overflow-hidden border border-bone/15">
                    <video
                      src={v.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="font-mono text-eyebrow uppercase tracking-wider text-bone/60">
                    {v.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Casos de uso */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="eyebrow">Casos de uso recomendados</div>
              <h2 className="font-display text-h2 uppercase tracking-tight text-ink text-balance">
                Para qué proyectos <span className="block text-cobalto-700">brilla esta serie.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-4">
              {serie.useCases.map((useCase, i) => (
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

      {/* Bloque precios genérico */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                Precios Serie {serie.code}
              </div>
              <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance">
                {serie.priceLabel}
                <span className="block text-ocre-200 mt-2">
                  según equipación.
                </span>
              </h2>
              <p className="text-body-lg text-bone/80 max-w-xl">
                {PRICING_COPY.body}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <div className="space-y-3 w-full">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center w-full bg-ocre-300 text-cobalto-900 px-8 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                >
                  {PRICING_COPY.cta}
                </Link>
                <Link
                  href="/calculadora-roi"
                  className="inline-flex items-center justify-center w-full border border-bone/30 text-bone px-8 py-5 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
                >
                  Calcular ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nav serie anterior / siguiente */}
      <section className="bg-paper border-t border-stone/15">
        <div className="container-page grid md:grid-cols-2 gap-px bg-stone/15">
          <Link
            href={`/series/${prev.slug}`}
            className="bg-paper p-8 hover:bg-bone transition-colors group flex items-center gap-6"
          >
            <span className="font-mono text-eyebrow uppercase tracking-wider text-stone group-hover:-translate-x-1 transition-transform">
              ← Anterior
            </span>
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                Serie {prev.code}
              </div>
              <div className="font-display text-h5 uppercase tracking-tight text-ink">
                {prev.name}
              </div>
            </div>
          </Link>

          <Link
            href={`/series/${next.slug}`}
            className="bg-paper p-8 hover:bg-bone transition-colors group flex items-center justify-end gap-6 text-right"
          >
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                Serie {next.code}
              </div>
              <div className="font-display text-h5 uppercase tracking-tight text-ink">
                {next.name}
              </div>
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
