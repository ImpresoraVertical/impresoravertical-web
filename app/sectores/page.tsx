import Link from "next/link";
import type { Metadata } from "next";
import { SECTORES } from "../data/sectores";

export const metadata: Metadata = {
  title: "Sectores · soluciones por industria",
  description:
    "Impresora vertical I-TECH para decoración, retail, hostelería, publicidad, industria y museos. Casos de uso, materiales y series recomendadas por sector.",
  alternates: { canonical: "/sectores" },
};

export default function SectoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Soluciones por sector</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Una tecnología.
                <span className="block text-cobalto-700">Seis sectores.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Cada industria tiene su flujo, sus materiales y su margen.
                Hemos preparado una guía específica para cada uno con casos
                reales, series recomendadas y FAQ del sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listado */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {SECTORES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/sectores/${s.slug}`}
                className="bg-paper p-8 lg:p-10 space-y-4 hover:bg-bone transition-colors group block"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-h3 text-ocre-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-eyebrow uppercase tracking-wider text-stone group-hover:text-cobalto-700 transition-colors">
                    →
                  </span>
                </div>
                <h2 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight">
                  {s.name}
                </h2>
                <p className="text-body-sm text-stone leading-relaxed">
                  {s.metaDescription}
                </p>
                <div className="pt-3 border-t border-stone/15">
                  <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Ver sector →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance max-w-3xl mx-auto">
            ¿No ves tu sector aquí?
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Llámanos. La impresora vertical funciona en muchos más sectores
            que estos seis. Te decimos rápido si tu caso encaja.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Contactar
            </Link>
            <a
              href="tel:+34623007729"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors"
            >
              +34 623 007 729
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
