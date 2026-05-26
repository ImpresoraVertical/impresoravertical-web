import Link from "next/link";
import Image from "next/image";
import { SERIES, PRICING_COPY } from "../data/series";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series · catálogo impresoras verticales",
  description:
    "Catálogo completo de Series I-TECH España: Serie E y K base agua, Serie T y W UV, Serie G industrial, Serie FB suelos. 12+ modelos disponibles.",
  alternates: { canonical: "/series" },
};

export default function SeriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Catálogo · 6 Series · +12 modelos</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Seis series.
                <span className="block text-cobalto-700">Una tecnología.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Series E y K con tinta base agua. Series T y W con tinta UV.
                Serie G personalizable para industria. Serie FB para suelos.
                Mismo motor I-TECH, misma garantía, mismo servicio técnico
                oficial en España.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtro info */}
      <section className="bg-bone py-8 border-b border-stone/15">
        <div className="container-page grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Tinta base agua
            </div>
            <div className="font-display text-h5 uppercase tracking-tight text-ink mt-1">
              Serie E · Serie K
            </div>
          </div>
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Tinta UV
            </div>
            <div className="font-display text-h5 uppercase tracking-tight text-ink mt-1">
              Serie T · Serie W · Serie FB
            </div>
          </div>
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Industrial personalizable
            </div>
            <div className="font-display text-h5 uppercase tracking-tight text-ink mt-1">
              Serie G
            </div>
          </div>
        </div>
      </section>

      {/* Series listing */}
      <section className="section-pad bg-paper">
        <div className="container-page space-y-px bg-stone/15 border border-stone/15">
          {SERIES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/series/${s.slug}`}
              className="block bg-paper hover:bg-bone transition-colors group"
            >
              <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12 items-start">
                {/* Imagen (primera foto del primer modelo) */}
                <div className="lg:col-span-3">
                  <div className="relative aspect-square bg-white overflow-hidden">
                    {s.models[0]?.image && (
                      <Image
                        src={s.models[0].image}
                        alt={`${s.name} · ${s.tagline}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>

                {/* Left: code + name */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-h3 text-ocre-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-h5 text-stone">
                      Serie {s.code}
                    </span>
                  </div>
                  <h2 className="font-display text-h2 uppercase tracking-tight text-ink leading-none">
                    {s.name}
                  </h2>
                  <p className="font-sans text-body text-stone">{s.tagline}</p>

                  <ul className="space-y-1 pt-4 border-t border-stone/15">
                    {s.models.map((m) => (
                      <li
                        key={m.code}
                        className="font-mono text-body-sm text-ink"
                      >
                        ─ {m.code} {m.name !== m.code ? `· ${m.name}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: highlights */}
                <div className="lg:col-span-4 lg:col-start-9 space-y-3">
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                    Características
                  </div>
                  <ul className="space-y-2 text-body-sm">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-ink">
                        <span className="text-ocre-500 mt-1">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-stone/15">
                    <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Ver Serie {s.code} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bloque precios genérico */}
      <section className="section-pad bg-bone">
        <div className="container-page max-w-3xl">
          <div className="eyebrow mb-4">Precios</div>
          <h2 className="font-display text-h1 uppercase tracking-tight text-ink mb-6">
            Pide presupuesto
            <span className="block text-cobalto-700">sin compromiso.</span>
          </h2>
          <p className="text-body-lg text-stone leading-relaxed">
            {PRICING_COPY.body}
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">
              {PRICING_COPY.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance">
            ¿No tienes claro cuál?
          </h2>
          <p className="text-body-lg text-bone/80 mt-4 max-w-xl mx-auto">
            Calcula el retorno de inversión con tus datos reales y compara
            las 6 series para ver qué modelo paga más rápido.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/calculadora-roi"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200"
            >
              Calcular ROI
            </Link>
            <Link
              href="/comparador"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-bone/10"
            >
              Comparar series
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
