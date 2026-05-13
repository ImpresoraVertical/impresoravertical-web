import Link from "next/link";
import { MODELS } from "../data/models";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos · 6 impresoras verticales I-TECH",
  description:
    "Catálogo completo de impresoras verticales I-TECH. Desde el modelo Entry E2 hasta el WF profesional. Tinta base agua y UV. Distribuidor oficial España.",
};

export default function ModelosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Catálogo · 6 modelos</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Una familia,
                <br />
                <span className="italic text-cobalto-700">seis tamaños.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Mismo motor I-TECH, mismas tintas certificadas, misma garantía
                RII-AEE. Lo que cambia es la superficie máxima, la velocidad y
                el precio. Encuentra el tuyo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter info */}
      <section className="bg-bone py-8 border-b border-stone/15">
        <div className="container-page grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Tinta base agua
            </div>
            <div className="font-serif text-body text-ink mt-1">
              E2 · K1 (entry / compact)
            </div>
          </div>
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Tinta UV
            </div>
            <div className="font-serif text-body text-ink mt-1">
              S2 · T1 · W1 · WF (estándar a pro)
            </div>
          </div>
          <div>
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
              Garantía
            </div>
            <div className="font-serif text-body text-ink mt-1">
              2-3 años · RII-AEE certificada
            </div>
          </div>
        </div>
      </section>

      {/* Modelos grid */}
      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="space-y-px bg-stone/15 border border-stone/15">
            {MODELS.map((model, i) => (
              <Link
                key={model.slug}
                href={`/modelos/${model.slug}`}
                className="block bg-paper hover:bg-bone transition-colors group"
              >
                <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12 items-start">
                  {/* Left: code + name */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-h3 text-ocre-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-h5 text-stone">
                        {model.code}
                      </span>
                      {model.featured && (
                        <span className="badge-ocre">Más vendido</span>
                      )}
                    </div>
                    <h2 className="font-serif text-h2 text-ink leading-tight">
                      {model.name}
                    </h2>
                    <p className="font-serif text-body-lg italic text-stone">
                      {model.tagline}
                    </p>
                  </div>

                  {/* Middle: specs */}
                  <div className="lg:col-span-5 space-y-3">
                    <dl className="space-y-2 text-body-sm">
                      <div className="flex justify-between border-b border-stone/15 pb-2">
                        <dt className="text-stone">Superficie máxima</dt>
                        <dd className="text-ink font-mono">
                          {model.specs.surface}
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-stone/15 pb-2">
                        <dt className="text-stone">Velocidad</dt>
                        <dd className="text-ink font-mono">{model.specs.speed}</dd>
                      </div>
                      <div className="flex justify-between border-b border-stone/15 pb-2">
                        <dt className="text-stone">Tintas</dt>
                        <dd className="text-ink font-mono text-right">
                          {model.specs.inks}
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-stone/15 pb-2">
                        <dt className="text-stone">Resolución</dt>
                        <dd className="text-ink font-mono">
                          {model.specs.resolution}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-stone">Garantía</dt>
                        <dd className="text-ink font-mono">{model.specs.warranty}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Right: price + CTA */}
                  <div className="lg:col-span-3 space-y-4 lg:text-right">
                    <div>
                      <div className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                        Precio desde
                      </div>
                      <div className="font-serif text-h3 text-ink mt-1">
                        {model.price}
                      </div>
                    </div>
                    <div className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Ver detalles
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-bone">
        <div className="container-page text-center">
          <h2 className="font-serif text-h2 text-ink text-balance">
            ¿No tienes claro cuál?
          </h2>
          <p className="text-body-lg text-stone mt-4 max-w-xl mx-auto">
            Configurador interactivo de 2 minutos. Te recomendamos el modelo
            ideal según tus necesidades.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/configurador" className="btn-primary">
              Configurador
            </Link>
            <Link href="/comparador" className="btn-secondary">
              Comparar modelos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
