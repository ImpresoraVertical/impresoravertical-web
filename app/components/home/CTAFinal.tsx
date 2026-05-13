import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="bg-cobalto-900 text-bone overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(216,156,46,0.15),transparent_50%)]" />

      <div className="container-page relative section-pad">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
            Demo gratuita · Les Preses, Girona
          </div>

          <h2 className="font-serif text-h1 lg:text-display text-bone text-balance leading-[1.05]">
            Ven al taller, imprime sobre tu superficie y
            <span className="italic text-ocre-200"> decide sin presión.</span>
          </h2>

          <p className="text-body-lg text-bone/80 max-w-2xl mx-auto text-pretty">
            Sin contrato previo, sin formulario obligatorio, sin compromiso. Tú
            traes el archivo y la superficie. Nosotros, el taller, las máquinas
            y el café.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider transition-all hover:bg-ocre-200 hover:translate-y-[-1px]"
            >
              Reservar demo
            </Link>
            <a
              href="tel:+34623007729"
              className="inline-flex items-center justify-center border border-bone/30 text-bone px-10 py-5 font-mono text-sm uppercase tracking-wider transition-all hover:bg-bone/10"
            >
              +34 623 007 729
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-eyebrow font-mono uppercase tracking-wider text-bone/60">
            <span>info@impresoravertical.com</span>
            <span className="text-bone/30">·</span>
            <span>L-V · 9:00-18:00</span>
            <span className="text-bone/30">·</span>
            <span>Distribuidor oficial RII-AEE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
