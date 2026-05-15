import Link from "next/link";

const YT_VIDEO_ID = "GtAMJqZG6g0";
const YT_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&showinfo=0`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-paper pt-24 md:pt-32 overflow-hidden">
      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Texto principal */}
        <div className="lg:col-span-6 space-y-8">
          <div className="badge-ocre">
            <span>Oficial en España</span>
            <span className="mx-2">·</span>
            <span>Inventores de la tecnología</span>
          </div>

          <h1 className="font-display text-h1 md:text-display lg:text-display-xl text-ink leading-[0.92] text-balance uppercase tracking-tight">
            La impresora<br />
            vertical oficial.
            <span className="block text-cobalto-700 mt-2">
              Sin vinilos.<br />Sin pintores.
            </span>
          </h1>

          <p className="text-body-lg text-stone max-w-xl text-pretty">
            Punto de gestión oficial para España. Te asesoramos en tus
            necesidades y gestionamos la orden de fabricación directamente con
            la fábrica. Somos el punto de gestión del inventor de la
            tecnología, con servicio técnico oficial en España, formación
            incluida y soporte de por vida.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contacto" className="btn-primary">
              Pedir demo en taller
            </Link>
            <Link href="/configurador" className="btn-secondary">
              Configurar serie
            </Link>
          </div>

          {/* Stats — 4 columnas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-stone/15">
            <div>
              <div className="font-display text-h2 uppercase tracking-tight text-ink">
                2020
              </div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Año fundación
              </div>
            </div>
            <div>
              <div className="font-display text-h2 uppercase tracking-tight text-ink">
                +6
              </div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Años experiencia
              </div>
            </div>
            <div>
              <div className="font-display text-h2 uppercase tracking-tight text-ink">
                6
              </div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Series
              </div>
            </div>
            <div>
              <div className="font-display text-h2 uppercase tracking-tight text-ink">
                +12
              </div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-1">
                Modelos
              </div>
            </div>
          </div>
        </div>

        {/* Visual derecha — vídeo demostración en autoplay */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-video relative overflow-hidden bg-ink border border-stone/15 shadow-xl">
            <iframe
              src={YT_EMBED_URL}
              title="Impresora Vertical I-TECH · demostración"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                Vídeo · demostración
              </div>
              <div className="font-display text-h5 uppercase tracking-tight text-ink mt-1">
                La impresora vertical en acción.
              </div>
            </div>
            <div className="font-sans text-body-sm text-stone text-right hidden md:block">
              Imprimiendo sobre pared real.<br />Sin retoques.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
