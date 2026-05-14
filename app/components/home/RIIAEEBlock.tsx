import Link from "next/link";

export default function RIIAEEBlock() {
  return (
    <section className="section-pad bg-cobalto-900 text-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
              Registro y certificación
            </div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-bone text-balance">
              Estamos registrados y
              <span className="block text-ocre-200">certificados RII-AEE.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-bone/80 text-pretty">
              No es un detalle decorativo. Es la diferencia entre tener tu
              impresora trabajando en tu taller o verla parada en aduanas.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-bone/15 border border-bone/15">
          <div className="bg-cobalto-900 p-8 lg:p-10 lg:col-span-4 space-y-4">
            <div className="font-mono text-h4 text-ocre-200">01</div>
            <h3 className="font-display text-h4 uppercase tracking-tight text-bone leading-tight">
              Reciclaje incluido
            </h3>
            <p className="font-sans text-body-sm text-bone/80 leading-relaxed">
              Nos encargamos del reciclaje al final de vida útil de la
              máquina. Tú no gestionas residuos.
            </p>
          </div>

          <div className="bg-cobalto-900 p-8 lg:p-10 lg:col-span-4 space-y-4">
            <div className="font-mono text-h4 text-ocre-200">02</div>
            <h3 className="font-display text-h4 uppercase tracking-tight text-bone leading-tight">
              Documentación para licitaciones
            </h3>
            <p className="font-sans text-body-sm text-bone/80 leading-relaxed">
              Cumplimiento oficial para licitaciones públicas, ayuntamientos,
              museos y proyectos institucionales.
            </p>
          </div>

          <div className="bg-cobalto-900 p-8 lg:p-10 lg:col-span-4 space-y-4">
            <div className="font-mono text-h4 text-ocre-200">03</div>
            <h3 className="font-display text-h4 uppercase tracking-tight text-bone leading-tight">
              Tu impresora no se queda en aduanas
            </h3>
            <p className="font-sans text-body-sm text-bone/80 leading-relaxed">
              Importar sin este registro = bloqueo aduanero. Con nosotros, ya
              está resuelto.
            </p>
          </div>
        </div>

        {/* Alerta importante */}
        <div className="mt-16 bg-bone/5 border-l-4 border-ocre-200 p-8 lg:p-10 space-y-4">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
            Importante · si te lo estás planteando importar tú mismo
          </div>
          <h3 className="font-display text-h3 uppercase tracking-tight text-bone leading-tight max-w-3xl">
            Comprar una impresora sin registro RII-AEE
            <span className="block text-ocre-200">tiene consecuencias reales.</span>
          </h3>
          <div className="text-body text-bone/85 space-y-4 max-w-4xl leading-relaxed">
            <p>
              En Europa, cualquier empresa o particular que quiera importar
              una máquina de impresión desde otro país tiene la{" "}
              <strong>obligación legal</strong> de estar registrado en{" "}
              <strong>RII-AEE</strong> (Registro Integrado Industrial · Aparatos
              Eléctricos y Electrónicos). Es la normativa europea de gestión de
              residuos para equipos electrónicos.
            </p>
            <p>
              Su falta puede provocar el{" "}
              <strong>bloqueo de la máquina en aduanas</strong>, su devolución
              al país de origen o, en casos graves, su{" "}
              <strong>destrucción</strong> con coste a cargo del importador.
            </p>
            <p>
              Cada año recibimos llamadas de particulares y empresas que se
              han aventurado a importar por su cuenta para ahorrar y se
              encuentran con la máquina bloqueada en aduana, pidiéndonos
              ayuda. Queremos aclarar que, en ese punto, en I-TECH España{" "}
              <strong>no es que no queramos ayudar — es que no podemos</strong>.
              La certificación RII-AEE va asociada a quien gestionó la
              importación: si no fuimos nosotros, no podemos demostrar nada
              ante aduanas.
            </p>
            <p className="text-ocre-200">
              <strong>
                Cuando compras a través de I-TECH España, esto ya está resuelto.
                La importación, la documentación y el cumplimiento están a
                nuestro cargo.
              </strong>
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors"
            >
              Habla con nosotros antes de comprar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
