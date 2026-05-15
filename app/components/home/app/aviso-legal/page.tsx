import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de impresoravertical.com · Impresora Vertical · I-TECH España",
};

export default function AvisoLegalPage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 bg-paper">
      <div className="container-text space-y-8">
        <header className="space-y-4">
          <div className="eyebrow">Legal</div>
          <h1 className="font-serif text-h1 text-ink">Aviso legal</h1>
          <p className="text-body-sm text-stone">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
          </p>
        </header>

        <section className="space-y-4 prose-content">
          <h2 className="font-serif text-h4 text-ink mt-12">1. Identificación del titular</h2>
          <p className="text-body text-stone leading-relaxed">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE):
          </p>
          <ul className="text-body text-stone space-y-2 list-none border-l-2 border-ocre-300 pl-6">
            <li><strong>Titular:</strong> Impresora Vertical · I-TECH España</li>
            <li><strong>Domicilio:</strong> Calle del Centre d&apos;Empreses 1-7, Nave 7, 17178 Les Preses, Girona, España</li>
            <li><strong>Email:</strong> info@impresoravertical.com</li>
            <li><strong>Teléfono:</strong> +34 623 007 729</li>
            <li><strong>Actividad:</strong> Distribución oficial certificada de impresoras verticales I-TECH en España</li>
          </ul>

          <h2 className="font-serif text-h4 text-ink mt-12">2. Objeto</h2>
          <p className="text-body text-stone leading-relaxed">
            El presente sitio web tiene por objeto facilitar al público en
            general el conocimiento por parte de Impresora Vertical · I-TECH España de las
            actividades que esta empresa realiza y de los productos y
            servicios que ofrece. Impresora Vertical · I-TECH España se reserva la facultad
            de efectuar, en cualquier momento y sin necesidad de previo aviso,
            modificaciones de la información contenida en su sitio web.
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">3. Propiedad intelectual</h2>
          <p className="text-body text-stone leading-relaxed">
            Todos los contenidos del sitio web (textos, imágenes, sonidos,
            vídeos, código fuente, etc.) son titularidad exclusiva de
            Impresora Vertical · I-TECH España o de sus licenciantes. El usuario reconoce
            que la reproducción, distribución, comercialización,
            transformación, y en general, cualquier otra forma de explotación,
            por cualquier procedimiento, total o parcial, de los contenidos
            requerirá el consentimiento previo y por escrito del titular.
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">4. Responsabilidad</h2>
          <p className="text-body text-stone leading-relaxed">
            Impresora Vertical · I-TECH España no se hace responsable de la información y
            contenidos almacenados en foros, redes sociales o cualquier otro
            medio que permita a terceros publicar contenidos de forma
            independiente. En cumplimiento del art. 17 de la LSSI-CE,
            Impresora Vertical · I-TECH España se compromete a retirar o, en su caso,
            bloquear los contenidos que pudieran afectar o contravenir la
            legislación nacional o internacional, derechos de terceros o la
            moral y el orden público.
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">5. Legislación aplicable</h2>
          <p className="text-body text-stone leading-relaxed">
            La relación entre Impresora Vertical · I-TECH España y el usuario se regirá
            por la normativa española vigente. Cualquier controversia se
            someterá a los Juzgados y Tribunales de Girona, salvo cuando la
            ley imperativamente disponga otra cosa.
          </p>
        </section>
      </div>
    </article>
  );
}
