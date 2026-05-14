import Link from "next/link";

const ICC_PROFILES = [
  {
    surface: "Pared lisa pintada",
    technical: "Profile · CMYK · DPI 1440",
    description:
      "Yeso pintado mate o satinado. El estándar más común en residencial y comercial.",
  },
  {
    surface: "Panel acústico",
    technical: "Profile · CMYK+W · DPI 1440",
    description:
      "Fonoabsorbente con textura. Requiere blanco opaco base + ajuste densidad.",
  },
  {
    surface: "Madera tratada",
    technical: "Profile · CMYK+W · DPI 2880",
    description:
      "MDF lacado, contrachapado sellado, paneles fenólicos. Acabado premium.",
  },
  {
    surface: "Vidrio templado",
    technical: "Profile · CMYK+W+B · DPI 2880",
    description:
      "Front-side o back-side print. Capa blanca + barniz protector incluido.",
  },
  {
    surface: "Hormigón pulido",
    technical: "Profile · CMYK+W · DPI 1440",
    description:
      "Microcemento, pulido o decorativo. Imprimación previa según absorción.",
  },
  {
    surface: "Lona / textil",
    technical: "Profile · CMYK · DPI 720",
    description:
      "PVC, mesh, blackout. Tintas eco-solventes o UV según tipo de lona.",
  },
];

export default function PerfilesICC() {
  return (
    <section className="section-pad bg-carbon text-bone">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
              Perfiles ICC validados
            </div>
            <h2 className="font-serif text-h2 lg:text-h1 text-bone text-balance">
              Cada superficie, su perfil.
              <br />
              <span className="italic text-ocre-200">Color real desde el primer pase.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-body-lg text-bone/70 text-pretty">
              No imprimimos a ojo. Cada material tiene su perfil ICC calibrado
              en nuestro taller, validado con espectrofotómetro. Te lo enviamos
              con la máquina.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {ICC_PROFILES.map((profile) => (
            <div
              key={profile.surface}
              className="bg-carbon p-8 lg:p-10 space-y-3 hover:bg-cobalto-900 transition-colors"
            >
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                {profile.technical}
              </div>
              <h3 className="font-serif text-h4 text-bone leading-tight">
                {profile.surface}
              </h3>
              <p className="text-body-sm text-bone/70 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/perfiles-icc"
            className="inline-flex items-center justify-center bg-bone text-carbon px-8 py-4 font-mono text-sm uppercase tracking-wider transition-all hover:bg-ocre-200"
          >
            Ver todos los perfiles ICC
          </Link>
        </div>
      </div>
    </section>
  );
}
