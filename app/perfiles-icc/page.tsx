import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfiles ICC · Cada superficie su perfil calibrado",
  description:
    "Perfiles ICC calibrados con espectrofotómetro para cada superficie: pared lisa, panel acústico, madera, vidrio, hormigón, lona. Color real desde el primer pase.",
};

const ICC_PROFILES = [
  { surface: "Pared lisa pintada", profile: "Profile · CMYK · DPI 1440", description: "Yeso pintado mate o satinado. El estándar más común en residencial y comercial. Sin imprimación previa." },
  { surface: "Panel acústico", profile: "Profile · CMYK+W · DPI 1440", description: "Fonoabsorbente con textura. Requiere capa blanca base + ajuste densidad +15%. Compatible Topakustik, Heradesign, Vicoustic." },
  { surface: "Madera tratada", profile: "Profile · CMYK+W · DPI 2880", description: "MDF lacado mate/brillo, contrachapado sellado, paneles fenólicos. Acabado premium. Adhesión 24h curado." },
  { surface: "Vidrio templado", profile: "Profile · CMYK+W+B · DPI 2880", description: "Front-side print directo o back-side print invertido. Capa blanca opaca + barniz protector incluido. Templado o laminado." },
  { surface: "Hormigón pulido", profile: "Profile · CMYK+W · DPI 1440", description: "Microcemento decorativo, hormigón pulido, terrazo. Imprimación previa según absorción real medida con higrómetro." },
  { surface: "Lona / textil PVC", profile: "Profile · CMYK · DPI 720", description: "PVC frontlit/backlit, mesh perforado, blackout. Tintas eco-solventes (no incluidas) o UV directa según tipo de lona." },
  { surface: "Metacrilato / acrílico", profile: "Profile · CMYK+W · DPI 2880", description: "PMMA fundido o extrusionado 3-10mm. Print directo cara A o cara B. Recomendado primer adherente PolyTec." },
  { surface: "Aluminio composite", profile: "Profile · CMYK+W · DPI 1440", description: "Dibond, Alucobond, Alpolic. Cara mate o brillo. Sin imprimación si limpieza con isopropanol previo." },
  { surface: "Cerámica / azulejo", profile: "Profile · CMYK+W · DPI 2880", description: "Gres porcelánico, baldosa esmaltada. Acabado decorativo no apto contacto alimentario sin barniz UV." },
];

export default function PerfilesICCPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-carbon text-bone border-b border-bone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                Perfiles ICC validados
              </div>
              <h1 className="font-serif text-display lg:text-display-xl text-bone text-balance leading-[1.02]">
                Cada superficie, su perfil.
                <br />
                <span className="italic text-ocre-200">Color real desde el primer pase.</span>
              </h1>
              <p className="text-body-lg text-bone/80 max-w-2xl text-pretty">
                No imprimimos a ojo. Cada material tiene su perfil ICC
                calibrado en nuestro taller con espectrofotómetro X-Rite
                i1Studio, validado contra muestra física. Te lo enviamos con
                la máquina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-carbon text-bone">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
            {ICC_PROFILES.map((profile) => (
              <article
                key={profile.surface}
                className="bg-carbon p-8 lg:p-10 space-y-3 hover:bg-cobalto-900 transition-colors"
              >
                <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                  {profile.profile}
                </div>
                <h2 className="font-serif text-h4 text-bone leading-tight">
                  {profile.surface}
                </h2>
                <p className="text-body-sm text-bone/70 leading-relaxed">
                  {profile.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="eyebrow">Calibración custom</div>
              <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
                ¿Tienes un material <span className="italic text-cobalto-700">no listado?</span>
              </h2>
              <p className="text-body-lg text-stone max-w-xl">
                Mándanos una muestra de 30×30 cm de tu superficie. La
                calibramos en taller con espectrofotómetro y te enviamos el
                perfil ICC personalizado en 3-5 días.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 bg-bone p-8 space-y-4">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">
                Proceso de calibración
              </div>
              <ol className="space-y-3 text-body text-ink">
                <li className="flex gap-3"><span className="text-ocre-500 font-mono">01</span><span>Envías muestra física</span></li>
                <li className="flex gap-3"><span className="text-ocre-500 font-mono">02</span><span>Imprimimos test chart en tu material</span></li>
                <li className="flex gap-3"><span className="text-ocre-500 font-mono">03</span><span>Medimos cada parche con X-Rite</span></li>
                <li className="flex gap-3"><span className="text-ocre-500 font-mono">04</span><span>Generamos perfil ICC + validación</span></li>
                <li className="flex gap-3"><span className="text-ocre-500 font-mono">05</span><span>Te enviamos perfil + muestra</span></li>
              </ol>
              <div className="pt-4 border-t border-stone/15">
                <Link href="/contacto" className="btn-primary text-eyebrow">
                  Solicitar calibración
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
