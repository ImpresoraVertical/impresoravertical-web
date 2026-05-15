import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de impresoravertical.com.",
};

export default function CookiesPage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 bg-paper">
      <div className="container-text space-y-8">
        <header className="space-y-4">
          <div className="eyebrow">Legal</div>
          <h1 className="font-serif text-h1 text-ink">Política de cookies</h1>
          <p className="text-body-sm text-stone">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="font-serif text-h4 text-ink mt-12">¿Qué son las cookies?</h2>
          <p className="text-body text-stone leading-relaxed">
            Las cookies son pequeños archivos que un sitio web envía al
            navegador del usuario para almacenar información sobre la
            navegación. Las cookies pueden ser técnicas (necesarias para el
            funcionamiento del sitio) o analíticas (para entender el uso).
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">Cookies que utilizamos</h2>
          <p className="text-body text-stone leading-relaxed">
            Este sitio web utiliza exclusivamente cookies técnicas
            necesarias para el funcionamiento básico (mantenimiento de
            sesión, preferencia de idioma si aplica). No utilizamos cookies
            de terceros con fines publicitarios ni de seguimiento sin su
            consentimiento expreso.
          </p>

          <div className="border border-stone/20 mt-8">
            <div className="grid grid-cols-3 bg-bone p-4 font-mono text-eyebrow uppercase tracking-wider text-ink border-b border-stone/20">
              <div>Cookie</div>
              <div>Finalidad</div>
              <div>Duración</div>
            </div>
            {[
              { name: "next-locale", purpose: "Idioma del sitio", duration: "1 año" },
              { name: "cookie-consent", purpose: "Aceptación cookies", duration: "1 año" },
            ].map((cookie) => (
              <div key={cookie.name} className="grid grid-cols-3 p-4 border-b border-stone/15 last:border-0 text-body-sm">
                <div className="font-mono text-ink">{cookie.name}</div>
                <div className="text-stone">{cookie.purpose}</div>
                <div className="text-stone">{cookie.duration}</div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h4 text-ink mt-12">Cómo gestionar las cookies</h2>
          <p className="text-body text-stone leading-relaxed">
            Puede configurar su navegador para aceptar, rechazar o eliminar
            cookies en cualquier momento. Tenga en cuenta que deshabilitar
            ciertas cookies puede afectar al funcionamiento del sitio.
          </p>

          <h2 className="font-serif text-h4 text-ink mt-12">Más información</h2>
          <p className="text-body text-stone leading-relaxed">
            Si tiene cualquier duda sobre el uso de cookies, puede ponerse
            en contacto con nosotros en{" "}
            <a href="mailto:info@impresoravertical.com" className="text-cobalto-700 underline">
              info@impresoravertical.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
