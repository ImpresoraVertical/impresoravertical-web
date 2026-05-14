const APPLICATIONS = [
  { label: "Residencial", detail: "Murales habitación, salón, escalera" },
  { label: "Hostelería", detail: "Hoteles, restaurantes, bares temáticos" },
  { label: "Retail", detail: "Tiendas, escaparates, branding interior" },
  { label: "Oficinas", detail: "Decoración corporativa, salas reuniones" },
  { label: "Eventos", detail: "Stands, backdrops, photocalls efímeros" },
  { label: "Institucional", detail: "Museos, espacios públicos, mobiliario urbano" },
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
              hasta fachadas de museo.
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

        {/* Nota técnica altura/ancho */}
        <div className="bg-bone/5 border-l-4 border-ocre-300 p-8 lg:p-10 max-w-4xl">
          <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300 mb-3">
            Dimensiones de impresión
          </div>
          <p className="text-body text-bone/85 leading-relaxed">
            La altura de impresión es de hasta <strong className="text-paper">5 metros</strong>{" "}
            (depende del modelo) y en ancho{" "}
            <strong className="text-paper">no tiene limitación de longitud</strong>.
            Existe la posibilidad de usar la técnica de solapación: al unir dos
            imágenes, la altura puede superar los 5 metros.
          </p>
        </div>
      </div>
    </section>
  );
}
