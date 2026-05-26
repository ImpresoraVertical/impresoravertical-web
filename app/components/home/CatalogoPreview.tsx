import Link from "next/link";
import Image from "next/image";
import { SERIES } from "../../data/series";

export default function CatalogoPreview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Catálogo · 6 Series · +12 modelos</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              Una familia, seis series.
              <span className="block text-cobalto-700 mt-2">La que se ajusta a ti.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Series E y K con tinta base agua. Series T, W y FB con tinta UV.
              Serie G industrial personalizable. Mismo motor, misma garantía,
              mismo servicio técnico oficial.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
          {SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`/series/${s.slug}`}
              className="group relative bg-paper p-8 space-y-6 hover:bg-bone transition-colors flex flex-col"
            >
              {/* Imagen del modelo representativo (primero de la serie) */}
              <div className="relative aspect-square -mx-8 -mt-8 mb-2 overflow-hidden bg-white">
                {s.models[0]?.image && (
                  <Image
                    src={s.models[0].image}
                    alt={`${s.name} · ${s.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-h6 text-ocre-500">{s.code}</span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-stone">
                  {s.models.length === 1
                    ? "1 modelo"
                    : `${s.models.length} modelos`}
                </span>
              </div>

              <div>
                <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-none">
                  {s.name}
                </h3>
                <p className="font-sans text-body text-stone mt-2">{s.tagline}</p>
              </div>

              <ul className="space-y-1 pt-4 border-t border-stone/15 text-body-sm text-stone flex-grow">
                {s.models.map((m) => (
                  <li key={m.code} className="flex justify-between">
                    <span className="text-ink font-mono">{m.code}</span>
                    <span>{m.surface && m.surface !== "Pendiente" ? m.surface : "—"}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone/15 flex items-baseline justify-between">
                <span className="font-mono text-body-sm text-stone">
                  {s.inkType === "base-agua"
                    ? "Tinta base agua"
                    : s.inkType === "uv"
                    ? "Tinta UV"
                    : "Personalizable"}
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 group-hover:translate-x-1 transition-transform">
                  Ver →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/series" className="btn-primary">
            Ver catálogo completo
          </Link>
          <Link
            href="/calculadora-roi"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            ¿Cuál te conviene? Calcular ROI →
          </Link>
        </div>
      </div>
    </section>
  );
}
