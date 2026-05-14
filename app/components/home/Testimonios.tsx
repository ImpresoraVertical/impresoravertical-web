import Link from "next/link";

const USE_CASES_PREVIEW = [
  {
    code: "01",
    title: "Barcos y embarcaciones",
    detail: "Camarotes · yates · paneles decorativos",
  },
  {
    code: "02",
    title: "Museos y espacios culturales",
    detail: "Decoración de salas · escenografías",
  },
  {
    code: "03",
    title: "Remolques y autocaravanas",
    detail: "Branding exterior · food trucks",
  },
  {
    code: "04",
    title: "Tablas de skate y deporte",
    detail: "Producción artesanal · series cortas",
  },
  {
    code: "05",
    title: "Persianas comerciales",
    detail: "Rotulación · escaparate 24/7",
  },
  {
    code: "06",
    title: "Escuelas y centros educativos",
    detail: "Pasillos · biblioteca · comedor",
  },
  {
    code: "07",
    title: "Hospitales y centros sanitarios",
    detail: "Pediatría · paritorios · salas espera",
  },
  {
    code: "08",
    title: "Pabellones deportivos",
    detail: "Branding institucional · murales",
  },
  {
    code: "09",
    title: "Réplicas de cuadros y arte",
    detail: "Reproducción museística · fidelidad 2880 dpi",
  },
];

export default function Testimonios() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="eyebrow">Casos de uso · 9 aplicaciones reales</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              Donde un vinilo se rinde,
              <span className="block text-cobalto-700">la impresora vertical empieza.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-stone text-pretty">
              Aplicaciones reales donde nuestros clientes imprimen ahora mismo.
              Desde barcos hasta pabellones deportivos, pasando por escuelas,
              hospitales y arte.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
          {USE_CASES_PREVIEW.map((u) => (
            <article
              key={u.code}
              className="bg-paper p-8 space-y-3 hover:bg-bone transition-colors"
            >
              <div className="font-mono text-h5 text-ocre-500">{u.code}</div>
              <h3 className="font-display text-h5 uppercase tracking-tight text-ink leading-tight">
                {u.title}
              </h3>
              <p className="font-sans text-body-sm text-stone">{u.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/casos-cliente" className="btn-primary">
            Ver casos completos
          </Link>
          <Link
            href="/contacto"
            className="font-mono text-body-sm uppercase tracking-wider text-ink link-underline"
          >
            Probar tu caso en taller →
          </Link>
        </div>
      </div>
    </section>
  );
}
