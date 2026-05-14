import Link from "next/link";
import Image from "next/image";
import { WIX_IMAGES } from "../../data/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-paper">
      {/* Fondo de imagen — dunas/paisaje del Wix actual */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WIX_IMAGES.heroBackground}
          alt=""
          fill
          sizes="100vw"
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Overlay paper para legibilidad */}
        <div className="absolute inset-0 bg-paper/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-paper/40 via-transparent to-paper/60" />
      </div>

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Texto principal */}
        <div className="lg:col-span-9 space-y-8">
          <div className="badge-ocre">
            <span>Distribuidor oficial en España</span>
            <span className="mx-2">·</span>
            <span>Certificado RII-AEE</span>
          </div>

          <h1 className="font-display text-h1 md:text-display lg:text-display-xl text-ink leading-[0.92] text-balance uppercase tracking-tight">
            La impresora<br />
            vertical oficial.
            <span className="block text-cobalto-700 mt-2">
              Sin vinilos.<br />Sin pintores.
            </span>
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
              Configurar serie
            </Link>
          </div>

          {/* Stats actualizados */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-stone/15 max-w-2xl">
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
                Series · +12 modelos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
