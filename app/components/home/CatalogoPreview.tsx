import Link from "next/link";
import Image from "next/image";
import { MODEL_IMAGES } from "../../data/images";

const MODELS = [
  {
    code: "E2",
    name: "Entry",
    tagline: "Ideal para empezar.",
    surface: "1,2 × 2,4 m",
    speed: "1,5 m²/h",
    price: "Desde 10.500€",
    ink: "Base agua · CMYK + W",
    slug: "/modelos/e2",
  },
  {
    code: "K1",
    name: "Kompacta",
    tagline: "Estudios pequeños.",
    surface: "0,9 × 1,8 m",
    speed: "1,2 m²/h",
    price: "Desde 11.500€",
    ink: "Base agua · CMYK + W",
    slug: "/modelos/k1",
  },
  {
    code: "S2",
    name: "Standard",
    tagline: "El caballo de batalla.",
    surface: "1,5 × 3 m",
    speed: "2,5 m²/h",
    price: "Desde 16.500€",
    ink: "UV · CMYK + WW",
    slug: "/modelos/s2",
    featured: true,
  },
  {
    code: "T1",
    name: "Tall",
    tagline: "Murales hasta 4m.",
    surface: "1,5 × 4 m",
    speed: "2 m²/h",
    price: "Desde 22.500€",
    ink: "UV · CMYK + WW",
    slug: "/modelos/t1",
  },
  {
    code: "W1",
    name: "Wide",
    tagline: "Formato grande.",
    surface: "1,2 × 4 m",
    speed: "2,5 m²/h",
    price: "Desde 24.500€",
    ink: "UV · CMYK + WW",
    slug: "/modelos/w1",
  },
  {
    code: "WF",
    name: "Wide Pro",
    tagline: "Producción intensiva.",
    surface: "1,5 × 4,5 m",
    speed: "5 m²/h",
    price: "Desde 32.500€",
    ink: "UV · CMYK + WW + Barniz",
    slug: "/modelos/wf",
  },
];

export default function CatalogoPreview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Catálogo · 6 modelos</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Una familia, seis tamaños.
              <br />
              <span className="italic text-cobalto-700">El que se ajusta a ti.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Mismo motor, mismas tintas, misma garantía. Lo que cambia es la
              superficie máxima, la velocidad y el precio.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
          {MODELS.map((model) => {
            const slug = model.slug.replace("/modelos/", "");
            const img = MODEL_IMAGES[slug];
            return (
            <Link
              key={model.code}
              href={model.slug}
              className={`group relative bg-paper p-8 space-y-6 hover:bg-bone transition-colors flex flex-col`}
            >
              {model.featured && (
                <span className="absolute top-6 right-6 badge-ocre z-10">
                  Más vendido
                </span>
              )}

              {/* Imagen del modelo */}
              {img && (
                <div className="relative aspect-square -mx-8 -mt-8 mb-2 overflow-hidden bg-bone">
                  <Image
                    src={img}
                    alt={`Modelo ${model.code} ${model.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-h6 text-ocre-500">
                  {model.code}
                </span>
              </div>

              <div>
                <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-none">
                  {model.name}
                </h3>
                <p className="font-sans text-body text-stone mt-2">
                  {model.tagline}
                </p>
              </div>

              <dl className="space-y-2 pt-4 border-t border-stone/15">
                <div className="flex justify-between text-body-sm">
                  <dt className="text-stone">Superficie</dt>
                  <dd className="text-ink font-mono">{model.surface}</dd>
                </div>
                <div className="flex justify-between text-body-sm">
                  <dt className="text-stone">Velocidad</dt>
                  <dd className="text-ink font-mono">{model.speed}</dd>
                </div>
                <div className="flex justify-between text-body-sm">
                  <dt className="text-stone">Tinta</dt>
                  <dd className="text-ink font-mono text-right">{model.ink}</dd>
                </div>
              </dl>

              <div className="pt-4 border-t border-stone/15 flex items-baseline justify-between">
                <span className="font-mono text-body text-ink">
                  {model.price}
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 group-hover:translate-x-1 transition-transform">
                  Ver →
                </span>
              </div>
            </Link>
          );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/modelos" className="btn-primary">
            Ver catálogo completo
          </Link>
          <Link
            href="/comparador"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            Comparar modelos →
          </Link>
        </div>
      </div>
    </section>
  );
}
