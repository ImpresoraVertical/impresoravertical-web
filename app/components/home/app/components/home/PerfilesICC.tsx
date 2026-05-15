import Link from "next/link";

export default function PerfilesICC() {
  return (
    <section className="section-pad bg-carbon text-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
              Perfiles ICC validados
            </div>
            <h2 className="font-serif text-h2 lg:text-h1 text-bone text-balance">
              Cada superficie, puede tener su perfil.
              <br />
              <span className="italic text-ocre-200">Color real desde el primer pase.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-body-lg text-bone/70 text-pretty">
              No imprimimos a ojo. Cada material puede tener su perfil ICC
              calibrado en nuestro taller, validado con espectrofotómetro. Te
              lo enviamos con la máquina.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/perfiles-icc"
            className="inline-flex items-center justify-center bg-bone text-carbon px-8 py-4 font-mono text-sm uppercase tracking-wider transition-all hover:bg-ocre-200"
          >
            Solicitar ICC personalizado
          </Link>
        </div>
      </div>
    </section>
  );
}
