import Link from "next/link";

export default function Taller() {
  return (
    <section className="section-pad bg-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="eyebrow">El taller · Les Preses, Girona</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              Vienes, ves, imprimes.
              <br />
              <span className="italic text-cobalto-700">Después decides.</span>
            </h2>
            <p className="text-body-lg text-stone text-pretty max-w-xl">
              No te vamos a vender una impresora por catálogo. Ven a Les Preses,
              prueba el modelo que te interese sobre tu propia superficie y
              archivo. Café incluido.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <span className="font-mono text-h4 text-ocre-500 leading-none">01</span>
                <div>
                  <h3 className="font-serif text-h5 text-ink">
                    Trae tu archivo y superficie
                  </h3>
                  <p className="text-body-sm text-stone mt-1">
                    Si tienes muestra de la pared o panel, mejor. Imprimimos en
                    tu material real.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-h4 text-ocre-500 leading-none">02</span>
                <div>
                  <h3 className="font-serif text-h5 text-ink">
                    Demo en vivo · 1 hora
                  </h3>
                  <p className="text-body-sm text-stone mt-1">
                    Te enseñamos calibración, RIP, instalación. Sin presión
                    comercial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-h4 text-ocre-500 leading-none">03</span>
                <div>
                  <h3 className="font-serif text-h5 text-ink">
                    Te llevas la muestra impresa
                  </h3>
                  <p className="text-body-sm text-stone mt-1">
                    Y la propuesta económica con ROI a 12, 24 y 36 meses.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contacto" className="btn-primary">
                Reservar demo
              </Link>
              <a
                href="tel:+34623007729"
                className="btn-secondary"
              >
                +34 623 007 729
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-gradient-to-br from-ocre-100 via-bone to-cobalto-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(40,86,184,0.15),transparent_50%)]" />
              <div className="absolute top-6 left-6 right-6 bg-paper/90 backdrop-blur-md p-6 border border-stone/15">
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600 mb-2">
                  Dirección
                </div>
                <div className="font-serif text-h5 text-ink leading-tight">
                  Calle del Centre d&apos;Empreses, 1-7
                  <br />
                  Nave 7 · 17178 Les Preses
                </div>
                <div className="font-sans text-body-sm text-stone mt-2">
                  Girona, Cataluña · España
                </div>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-4 pt-4 border-t border-stone/15">
                  L-V · 9:00 a 18:00 · cita previa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
