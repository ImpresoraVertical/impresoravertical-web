import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-paper pt-24 md:pt-32 overflow-hidden">
      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Texto principal */}
        <div className="lg:col-span-7 space-y-8">
          <div className="badge-ocre">
            <span>Distribuidor oficial en España</span>
            <span className="mx-2">·</span>
            <span>Certificado RII-AEE</span>
          </div>

          <h1 className="font-serif text-h1 md:text-display lg:text-display-xl text-ink leading-[1.02] text-balance">
            La impresora vertical oficial.
            <br />
            <span className="italic text-cobalto-700">Sin vinilos. Sin pintores.</span>
          </h1>

          <p className="text-body-lg text-stone max-w-xl text-pretty">
            Las únicas impresoras verticales del fabricante original e inventor
            de la tecnología, con servicio técnico oficial en España, formación
            incluida y soporte de por vida.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contacto" className="btn-primary">
              Pedir demo en taller
            </Link>
            <Link href="/configurador" className="btn-secondary">
              Configurar modelo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-stone/15">
            <div>
              <div className="font-serif text-h2 text-ink">2008</div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Año fundación
              </div>
            </div>
            <div>
              <div className="font-serif text-h2 text-ink">+15</div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Años experiencia
              </div>
            </div>
            <div>
              <div className="font-serif text-h2 text-ink">6</div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Modelos disponibles
              </div>
            </div>
          </div>
        </div>

        {/* Visual derecha — placeholder con animación gradient */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-gradient-to-br from-cobalto-100 via-ocre-100 to-bone rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(40,86,184,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,156,46,0.2),transparent_60%)]" />
            <div className="absolute bottom-6 left-6 right-6 bg-paper/90 backdrop-blur-md p-6 border border-stone/15">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-2">
                Modelo destacado
              </div>
              <div className="font-serif text-h4 text-ink">Serie T1 · Tall</div>
              <div className="font-sans text-body-sm text-stone mt-1">
                Murales hasta 4m de altura
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
