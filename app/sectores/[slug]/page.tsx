import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SECTORES, getSectorBySlug } from "../../data/sectores";
import { getSeriesBySlug } from "../../data/series";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SECTORES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Sector no encontrado" };
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: { canonical: `/sectores/${slug}` },
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: `https://www.impresoravertical.com/sectores/${slug}`,
      type: "website",
    },
  };
}

const HERO_VARIANTS = {
  cobalto: {
    bg: "bg-cobalto-900",
    text: "text-bone",
    accent: "text-ocre-300",
    eyebrow: "text-ocre-200",
    body: "text-bone/80",
    cta: "bg-ocre-300 text-cobalto-900 hover:bg-ocre-200",
    ctaSecondary: "border border-bone/30 text-bone hover:bg-bone/10",
  },
  ocre: {
    bg: "bg-ocre-500",
    text: "text-cobalto-900",
    accent: "text-cobalto-900",
    eyebrow: "text-cobalto-900",
    body: "text-cobalto-900/80",
    cta: "bg-cobalto-900 text-bone hover:bg-cobalto-700",
    ctaSecondary: "border border-cobalto-900/30 text-cobalto-900 hover:bg-cobalto-900/10",
  },
  carbon: {
    bg: "bg-ink",
    text: "text-paper",
    accent: "text-ocre-300",
    eyebrow: "text-ocre-200",
    body: "text-bone/80",
    cta: "bg-ocre-300 text-ink hover:bg-ocre-200",
    ctaSecondary: "border border-bone/30 text-bone hover:bg-bone/10",
  },
} as const;

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const variant = HERO_VARIANTS[sector.heroVariant];

  // Schemas JSON-LD: BreadcrumbList + FAQPage
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
        name: "Sectores",
        item: "https://www.impresoravertical.com/sectores",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: sector.name,
        item: `https://www.impresoravertical.com/sectores/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faq.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  const recommendedSeriesData = sector.recommendedSeries
    .map((s) => getSeriesBySlug(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className={`${variant.bg} ${variant.text} pt-32 md:pt-40 pb-16 md:pb-24`}>
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9 space-y-6">
              <Link
                href="/sectores"
                className={`font-mono text-eyebrow uppercase tracking-wider ${variant.eyebrow} hover:opacity-80 transition-opacity inline-block`}
              >
                ← Todos los sectores
              </Link>
              <div className={`font-mono text-eyebrow uppercase tracking-wider ${variant.eyebrow}`}>
                {sector.eyebrow}
              </div>
              <h1 className={`font-display text-display lg:text-display-xl uppercase tracking-tight ${variant.text} text-balance leading-[0.92]`}>
                {sector.h1}
                <span className={`block ${variant.accent}`}>{sector.h1Highlight}</span>
              </h1>
              <p className={`text-body-lg ${variant.body} max-w-3xl text-pretty`}>
                {sector.hero}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contacto"
                  className={`inline-flex items-center justify-center px-10 py-5 font-mono text-sm uppercase tracking-wider transition-colors ${variant.cta}`}
                >
                  Pedir info
                </Link>
                <Link
                  href="/calculadora-roi"
                  className={`inline-flex items-center justify-center px-10 py-5 font-mono text-sm uppercase tracking-wider transition-colors ${variant.ctaSecondary}`}
                >
                  Calcular ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Casos típicos en {sector.name.toLowerCase()}</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Para quién es
                <span className="block text-cobalto-700">esta tecnología.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Tres perfiles que ya están sacando rendimiento real a la
                impresora vertical I-TECH en {sector.name.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {sector.useCases.map((uc, i) => (
              <article
                key={i}
                className="bg-paper p-8 space-y-4 hover:bg-bone transition-colors"
              >
                <div className="font-mono text-h4 text-ocre-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {uc.title}
                </h3>
                <p className="text-body-sm text-stone leading-relaxed">
                  {uc.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas / Métricas */}
      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Por qué tiene sentido</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Lo que ganas
                <span className="block text-cobalto-700">en cifras.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {sector.advantages.map((a) => (
              <article
                key={a.title}
                className="bg-bone p-8 space-y-4 hover:bg-paper transition-colors"
              >
                <div className="font-mono text-h3 text-ocre-500">{a.metric}</div>
                <h3 className="font-display text-h4 uppercase tracking-tight text-ink leading-tight">
                  {a.title}
                </h3>
                <p className="text-body-sm text-stone leading-relaxed">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Materiales */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">Superficies habituales</div>
              <h2 className="font-display text-h2 uppercase tracking-tight text-ink text-balance">
                Materiales donde
                <span className="block text-cobalto-700">imprimimos.</span>
              </h2>
              <p className="text-body text-stone mt-4 max-w-md">
                Si tu material no aparece aquí, mándanos una muestra: creamos un
                perfil ICC personalizado para tu superficie.
              </p>
              <div className="pt-4">
                <Link
                  href="/perfiles-icc"
                  className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 hover:text-cobalto-900 transition-colors inline-flex items-center gap-2"
                >
                  Ver perfiles ICC personalizados →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-px bg-stone/15 border border-stone/15">
                {sector.materials.map((m) => (
                  <li
                    key={m}
                    className="bg-paper p-5 flex items-center gap-4 hover:bg-bone transition-colors"
                  >
                    <span className="font-mono text-ocre-500">→</span>
                    <span className="font-sans text-body text-ink">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Series recomendadas */}
      {recommendedSeriesData.length > 0 && (
        <section className="section-pad bg-bone">
          <div className="container-page">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-5 space-y-4">
                <div className="eyebrow">Series recomendadas</div>
                <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                  Modelos que mejor
                  <span className="block text-cobalto-700">encajan aquí.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-body-lg text-stone text-pretty">
                  Si no tienes claro cuál te conviene, usa la calculadora ROI o
                  contacta con un agente.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
              {recommendedSeriesData.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/series/${s!.slug}`}
                  className="bg-bone p-8 space-y-3 hover:bg-paper transition-colors group block"
                >
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-500">
                    Serie {s!.code}
                  </div>
                  <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight">
                    {s!.name}
                  </h3>
                  <p className="text-body-sm text-stone leading-relaxed">
                    {s!.tagline}
                  </p>
                  <div className="pt-3 border-t border-stone/15">
                    <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Ver Serie {s!.code} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow">FAQ · {sector.name}</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Dudas frecuentes
                <span className="block text-cobalto-700">del sector.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-px bg-stone/15 border border-stone/15">
            {sector.faq.map((q, i) => (
              <article key={i} className="bg-paper p-8 space-y-3">
                <h3 className="font-display text-h5 uppercase tracking-tight text-ink leading-tight">
                  {q.q}
                </h3>
                <p className="text-body text-stone leading-relaxed">{q.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 hover:text-cobalto-900 transition-colors inline-flex items-center gap-2"
            >
              Ver FAQ completa →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance max-w-3xl mx-auto">
            ¿Tu proyecto encaja en {sector.name.toLowerCase()}?
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Ven al taller de Les Preses, trae tu archivo y tu superficie. Te
            imprimimos una muestra real y te llevas la propuesta económica con
            ROI a 12, 24 y 36 meses.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Pedir info
            </Link>
            <Link
              href="/por-que-itech"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
            >
              Por qué I-TECH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
