import Link from "next/link";
import Image from "next/image";

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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-stone/15">
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

        {/* Visual derecha — imagen real del modelo T1 del catálogo oficial */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] relative overflow-hidden bg-paper border border-stone/15">
            <Image
              src="/catalogo/img-01.png"
              alt="Modelo T1 · Impresora vertical I-TECH"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-center"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 bg-paper/95 backdrop-blur-md p-6 border border-stone/15">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-2">
                Modelo destacado
              </div>
              <div className="font-display text-h4 uppercase tracking-tight text-ink">
                Serie T · T1
              </div>
              <div className="font-sans text-body-sm text-stone mt-1">
                UV · pantalla integrada · murales hasta 4m
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
