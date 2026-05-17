import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfiles ICC personalizados · I-TECH España",
  description:
    "Creamos perfiles ICC personalizados para tu soporte y tinta. Calibración con espectrofotómetro en taller. Solicita el tuyo sin compromiso.",
};

export default function PerfilesICCPage() {
  return (
    <>
      <section className="min-h-screen flex items-center bg-carbon text-bone">
        <div className="container-page py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                Perfiles ICC personalizados
              </div>

              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-bone text-balance leading-[0.92]">
                Creamos perfiles ICC
                <span className="block text-ocre-200">a tu medida.</span>
              </h1>

              <p className="text-body-lg text-bone/80 max-w-2xl text-pretty">
                Podemos crear un perfil ICC personalizado para tu soporte
                especial y tinta. Mándanos una muestra de tu superficie y, con
                espectrofotómetro en nuestro taller, te entregamos un perfil
                calibrado específico para tu material.
              </p>

              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
                >
                  Solicitar ICC personalizado
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-4">
              <div className="relative aspect-square bg-bone/5 overflow-hidden">
                <Image
                  src="/perfiles-icc/espectrofotometro.jpg"
                  alt="Espectrofotómetro X-Rite midiendo un test chart sobre muestra de cliente"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-bone/5 border border-bone/15 p-8 space-y-4">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                  Proceso
                </div>
                <ol className="space-y-3 text-body text-bone">
                  <li className="flex gap-3">
                    <span className="font-mono text-ocre-200">01</span>
                    <span>Nos mandas una muestra de tu superficie</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-ocre-200">02</span>
                    <span>Imprimimos test chart en tu material</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-ocre-200">03</span>
                    <span>Medimos cada parche con espectrofotómetro</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-ocre-200">04</span>
                    <span>Generamos perfil ICC + validación visual</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-ocre-200">05</span>
                    <span>Te enviamos el perfil + muestra impresa</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
