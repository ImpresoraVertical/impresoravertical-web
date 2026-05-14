import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad y protección de datos de impresoravertical.com.",
};

export default function PrivacidadPage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 bg-paper">
      <div className="container-text space-y-8">
        <header className="space-y-4">
          <div className="eyebrow">Legal</div>
          <h1 className="font-serif text-h1 text-ink">Política de privacidad</h1>
          <p className="text-body-sm text-stone">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="font-serif text-h4 text-ink mt-12">1. Responsable del tratamiento</h2>
          <ul className="text-body text-stone space-y-2 list-none border-l-2 border-ocre-300 pl-6">
            <li><strong>Razón social:</strong> Impresora Vertical · I-TECH España</li>
            <li><strong>Domicilio:</strong> Calle del Centre d&apos;Empreses 1-7, Nave 7, 17178 Les Preses, Girona</li>
            <li><strong>Email contacto datos:</strong> info@impresoravertical.com</li>
          </ul>

          <h2 className="font-serif text-h4 text-ink mt-12">2. Finalidad del tratamiento</h2>
          <p className="text-body text-stone leading-relaxed">
            Los datos personales que nos proporcione a través de los
            formularios de contacto se tratarán para:
          </p>
          <ul className="text-body text-stone space-y-2 list-disc pl-6">
            <li>Responder a su consulta o solicitud de presupuesto</li>
            <li>Gestionar la relación comercial y el seguimiento post-venta</li>
            <li>Enviar información técnica o comercial relacionada con I-TECH si lo autoriza expresamente</li>
            <li>Cumplir con obligaciones legales y fiscales</li>
          </ul>

          <h2 className="font-serif text-h4 text-ink mt-12">3. Base legitimadora</h2>
          <p className="text-body text-stone leading-relaxed">
            El tratamiento se basa en el consentimiento del interesado al
            remitir su consulta (art. 6.1.a RGPD) y, en su caso, en la
            ejecución de un contrato (art. 6.1.b RGPD).
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">4. Plazo de conservación</h2>
          <p className="text-body text-stone leading-relaxed">
            Los datos se conservarán durante el tiempo necesario para la
            finalidad para la que fueron recabados y, en cualquier caso,
            durante los plazos legalmente exigibles (mínimo 6 años para
            facturación según normativa fiscal española).
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">5. Destinatarios</h2>
          <p className="text-body text-stone leading-relaxed">
            Sus datos no serán cedidos a terceros, salvo obligación legal o
            cuando sea necesario para la prestación del servicio
            (transportistas, leasing, gestoría). En estos casos se requerirá
            el correspondiente contrato de encargado de tratamiento.
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">6. Sus derechos</h2>
          <p className="text-body text-stone leading-relaxed">
            Puede ejercer en cualquier momento los derechos de acceso,
            rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad enviando un email a{" "}
            <a href="mailto:info@impresoravertical.com" className="text-cobalto-700 underline">
              info@impresoravertical.com
            </a>{" "}
            con la referencia &ldquo;PROTECCIÓN DE DATOS&rdquo; y copia del DNI.
          </p>
          <p className="text-body text-stone leading-relaxed">
            Asimismo, le informamos que tiene derecho a presentar una
            reclamación ante la Agencia Española de Protección de Datos
            (www.aepd.es).
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">7. Medidas de seguridad</h2>
          <p className="text-body text-stone leading-relaxed">
            Impresora Vertical · I-TECH España ha adoptado las medidas técnicas y
            organizativas necesarias para garantizar la seguridad e integridad
            de los datos de carácter personal así como para evitar su
            alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </section>
      </div>
    </article>
  );
}
