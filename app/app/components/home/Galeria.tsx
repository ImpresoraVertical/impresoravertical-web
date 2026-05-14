const APPLICATIONS = [
  { label: "Residencial", detail: "Murales habitación, salón, escalera" },
  { label: "Hostelería", detail: "Hoteles, restaurantes, bares temáticos" },
  { label: "Retail", detail: "Tiendas, escaparates, branding interior" },
  { label: "Oficinas", detail: "Decoración corporativa, salas reuniones" },
  { label: "Eventos", detail: "Stands, backdrops, photocalls efímeros" },
  { label: "Institucional", detail: "Museos, espacios públicos, mobiliario urbano" },
];

const SURFACES = [
  "Yeso pintado",
  "Hormigón pulido",
  "Madera lacada",
  "Vidrio templado",
  "Panel acústico",
  "Lona PVC",
  "Metacrilato",
  "Microcemento",
];

export default function Galeria() {
  return (
    <section className="section-pad bg-ink text-paper">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
              Aplicaciones y superficies
            </div>
            <h2 className="font-serif text-h2 lg:text-h1 text-paper text-balance">
              Donde un vinilo se rinde,
              <br />
              <span className="italic text-ocre-300">la impresora vertical empieza.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body-lg text-bone/80 text-pretty">
              Trabajamos con clientes que decoran desde habitaciones de hotel
              hasta fachadas de museo. Cada superficie tiene su perfil ICC y su
              tinta óptima.
            </p>
          </div>
        </div>

        {/* Grid de aplicaciones */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/15 mb-12">
          {APPLICATIONS.map((app) => (
            <div
              key={app.label}
              className="bg-ink p-8 lg:p-10 space-y-2 hover:bg-cobalto-900 transition-colors"
            >
              <h3 className="font-serif text-h4 text-paper">{app.label}</h3>
              <p className="text-body-sm text-bone/70">{app.detail}</p>
            </div>
          ))}
        </div>

        {/* Tags de superficies */}
        <div>
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-4">
            Superficies validadas
          </div>
          <div className="flex flex-wrap gap-3">
            {SURFACES.map((surface) => (
              <span
                key={surface}
                className="inline-flex items-center bg-bone/10 border border-bone/20 text-bone px-4 py-2 font-mono text-eyebrow uppercase tracking-wider"
              >
                {surface}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
