import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TintasBlock from "../components/home/TintasBlock";

export const metadata: Metadata = {
  title: "Por qué I-TECH · servicio, formación y garantía en España",
  description:
    "Comparativa I-TECH España vs. importación. Servicio técnico propio, formación de 8 h incluida, perfiles ICC personalizados, RII-AEE y personalización industrial.",
  alternates: { canonical: "/por-que-itech" },
};

/* ── Comparativa ─────────────────────────────────────────────── */
const COMPARISON_ROWS = [
  { aspect: "Servicio técnico en España", itech: "Taller propio en Les Preses, Girona. Stock de piezas. Visita 48-72h.", importacion: "Inexistente. Piezas desde China en 3-6 semanas." },
  { aspect: "Formación incluida", itech: "Curso completo de 8 horas en taller. Almuerzo y material incluidos.", importacion: "PDF en inglés. Sin soporte humano." },
  { aspect: "Registro RII-AEE y aduanas", itech: "Registro propio. Importación legal, entrega operativa, reciclaje incluido.", importacion: "Riesgo de bloqueo aduanero, devolución o destrucción a tu cargo." },
  { aspect: "Factura y garantía", itech: "Factura española con IVA. 2 años + extensión. Válida en licitaciones.", importacion: "Factura no válida en España. Sin garantía real." },
  { aspect: "Perfiles ICC", itech: "Calibrados con espectrofotómetro para tu material.", importacion: "Genéricos. Ajuste por prueba y error." },
  { aspect: "Demo antes de comprar", itech: "Sí. Vienes a Les Preses con tu archivo y tu superficie.", importacion: "Compras a ciegas." },
  { aspect: "Software RIP", itech: "Licencia oficial actualizada. Castellano e inglés.", importacion: "Crackeado. Sin actualizaciones." },
  { aspect: "Tintas", itech: "Certificadas GREENGUARD y REACH. Aptas para hospitales y escuelas.", importacion: "Sin certificación europea verificable." },
  { aspect: "Coste real a 5 años", itech: "Predecible. Piezas, soporte y actualizaciones a precio cerrado.", importacion: "Inicial bajo, ocultos altos: piezas, paradas, viajes técnicos." },
];

const SUBNAV = [
  { href: "#comparativa", label: "Comparativa" },
  { href: "#servicio-tecnico", label: "Servicio técnico" },
  { href: "#formacion", label: "Formación" },
  { href: "#perfiles-icc", label: "Perfiles ICC" },
  { href: "#industrial", label: "Industrial" },
  { href: "#tintas", label: "Tintas" },
];

/* ── Servicio técnico ────────────────────────────────────────── */
const SERVICIO = [
  { metric: "48h", title: "Stock de piezas en España", body: "Cabezales, bombas, sensores, motores. Las piezas críticas están en Les Preses. Envío 24-48h península." },
  { metric: "72h", title: "Visita técnica urgente", body: "Si tu máquina está parada en producción, vamos a tu taller en 48-72h con piezas y diagnóstico previo." },
  { metric: "24/7", title: "WhatsApp directo", body: "Línea para clientes. Diagnóstico remoto con fotos y vídeo. Resolvemos el 60% sin visita." },
  { metric: "1×año", title: "Mantenimiento preventivo", body: "Revisión anual opcional: consumibles, limpieza profunda, calibración." },
  { metric: "Auto", title: "Actualizaciones", body: "RIP siempre en última versión. Nuevos perfiles ICC sin coste para clientes activos." },
  { metric: "Vital", title: "Soporte por traspaso", body: "Si vendes la máquina, el nuevo dueño hereda el servicio. Solo trámite administrativo." },
];

/* ── Formación ───────────────────────────────────────────────── */
const MODULES = [
  "Partes de la impresora", "Montaje", "Encendido", "Software de control", "Funcionamiento general",
  "Conceptos básicos", "Tinta UV", "Mantenimientos", "Preparación RIP", "Modos de impresión",
];

/* ── Industrial ──────────────────────────────────────────────── */
const PRO = [
  { title: "Desarrollo de proyectos a medida", body: "Diseñamos y fabricamos soluciones adaptadas a tu entorno: integración en líneas automatizadas, superficies complejas, condiciones extremas." },
  { title: "Electrónica adaptada", body: "Placas personalizadas para integrar sensores, automatizar procesos y conectar con tu infraestructura industrial." },
  { title: "Cabezales personalizables", body: "Alta resolución, UV para superficies difíciles, gran caudal para velocidad, tintas especiales o pigmentadas." },
];
const PRO_SECTORS = [
  "Automoción", "Cerámica", "Mobiliario", "Construcción", "Packaging", "Vidrio decorativo", "Aeronáutica", "Mobiliario urbano",
];

export default function PorQueITechPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Por qué I-TECH · sin humo</div>
              <h1 className="font-display text-display lg:text-display-xl uppercase tracking-tight text-ink text-balance leading-[0.92]">
                Comprar barato
                <span className="block text-cobalto-700">sale caro.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                La máquina es la misma que puedes importar tú. Lo que cambia es
                todo lo que viene con ella: servicio técnico en España,
                formación, perfiles ICC, garantía y un taller donde probarla
                antes de pagar.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SUBNAV.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="font-mono text-eyebrow uppercase tracking-wider border border-stone/30 px-4 py-2 hover:border-cobalto-700 hover:text-cobalto-700 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section id="comparativa" className="section-pad bg-paper scroll-mt-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="eyebrow">Oficial vs. importación directa</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Nueve puntos donde
                <span className="block text-cobalto-700">se nota la diferencia.</span>
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto bg-paper border border-stone/15">
            <table className="w-full">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider w-56">Aspecto</th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider bg-cobalto-700">I-TECH España</th>
                  <th className="text-left p-6 font-mono text-eyebrow uppercase tracking-wider">Importación directa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/15">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.aspect} className="hover:bg-bone transition-colors">
                    <td className="p-6 font-display text-h6 uppercase tracking-tight text-ink align-top">{row.aspect}</td>
                    <td className="p-6 text-body-sm text-ink bg-cobalto-50 align-top border-l-2 border-cobalto-700">
                      <span className="text-cobalto-700 mr-2">✓</span>{row.itech}
                    </td>
                    <td className="p-6 text-body-sm text-stone align-top">
                      <span className="text-stone/50 mr-2">✗</span>{row.importacion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-cobalto-900 text-bone p-8 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="bg-bone p-3 inline-block">
                <Image src="/tintas/RII-AEE .jpg" alt="Logo oficial RII-AEE" width={80} height={80} unoptimized className="w-16 h-16 object-contain" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200 mb-2">Registro RII-AEE · certificado</div>
              <p className="text-body-sm text-bone/85 leading-relaxed">
                Es obligación legal europea para importar equipos electrónicos. Sin él, la máquina puede quedar retenida en aduanas, devolverse a origen o destruirse a tu cargo. Comprando en I-TECH España, la importación, la documentación y el reciclaje final ya están resueltos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio técnico */}
      <section id="servicio-tecnico" className="section-pad bg-bone scroll-mt-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12 items-end">
            <div className="lg:col-span-7 space-y-4">
              <div className="eyebrow">Servicio técnico exclusivo</div>
              <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance leading-[1.02]">
                Cuando algo falla, <span className="italic text-cobalto-700">no estás solo.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] bg-paper overflow-hidden border border-stone/15">
                <Image src="/taller/servicio-tecnico.jpg" alt="Servicio técnico I-TECH España · almacén de piezas" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {SERVICIO.map((s) => (
              <article key={s.title} className="bg-bone p-8 space-y-3 hover:bg-paper transition-colors">
                <div className="font-mono text-h4 text-ocre-500">{s.metric}</div>
                <h3 className="font-serif text-h4 text-ink leading-tight">{s.title}</h3>
                <p className="text-body-sm text-stone leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="text-body-sm text-stone mt-6">
            Cliente con incidencia: WhatsApp <a href="https://wa.me/34623007729" className="underline underline-offset-4">+34 623 007 729</a> · <a href="mailto:soporte@impresoravertical.com" className="underline underline-offset-4">soporte@impresoravertical.com</a>
          </p>
        </div>
      </section>

      {/* Formación */}
      <section id="formacion" className="section-pad bg-paper scroll-mt-28">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="eyebrow">Formación · incluida con la máquina</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
              No vendemos hierro.
              <span className="block text-cobalto-700">Te enseñamos a usarlo.</span>
            </h2>
            <p className="text-body-lg text-stone text-pretty">
              Curso completo de <strong>8 horas</strong> en <strong>10 módulos</strong>, en
              nuestro taller de Les Preses. Almuerzo y material de estudio
              incluidos. Soporte WhatsApp 90 días post-formación. Opción a
              domicilio con suplemento por desplazamiento.
            </p>
            <div className="relative aspect-[4/3] bg-bone overflow-hidden border border-stone/15">
              <Image src="/taller/formacion.jpg" alt="Curso de formación I-TECH en el taller de Les Preses" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mb-4">Los 10 módulos</div>
            <ol className="space-y-px bg-stone/15 border border-stone/15">
              {MODULES.map((m, i) => (
                <li key={m} className="bg-paper p-4 flex items-center gap-4">
                  <span className="font-mono text-h6 text-ocre-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-h6 uppercase tracking-tight text-ink">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Perfiles ICC */}
      <section id="perfiles-icc" className="section-pad bg-carbon text-bone scroll-mt-28">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square bg-bone/5 overflow-hidden">
              <Image src="/perfiles-icc/espectrofotometro.jpg" alt="Espectrofotómetro midiendo un test chart sobre muestra de cliente" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">Perfiles ICC personalizados</div>
            <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-bone text-balance">
              Color real
              <span className="block text-ocre-200">desde el primer pase.</span>
            </h2>
            <p className="text-body-lg text-bone/80 text-pretty">
              Nos mandas una muestra de tu superficie. Imprimimos un test chart,
              medimos cada parche con espectrofotómetro y te enviamos el perfil
              ICC calibrado junto con la muestra impresa.
            </p>
            <ol className="grid grid-cols-5 gap-2 pt-2">
              {["Muestra", "Test chart", "Medición", "Perfil", "Envío"].map((s, i) => (
                <li key={s} className="border border-bone/20 p-3 text-center">
                  <div className="font-mono text-eyebrow text-ocre-200">0{i + 1}</div>
                  <div className="font-mono text-eyebrow uppercase tracking-wider text-bone/80 mt-1">{s}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industrial */}
      <section id="industrial" className="section-pad bg-paper scroll-mt-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="eyebrow">I-TECH Pro · industrial</div>
              <h2 className="font-display text-h2 lg:text-h1 uppercase tracking-tight text-ink text-balance">
                Personalización
                <span className="block text-cobalto-700">a medida de tu línea.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-body-lg text-stone text-pretty">
                Serie G configurable en altura, color, ejes y software. Para
                fabricantes de mobiliario, cerámica, vidrio e integradores OEM.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {PRO.map((p, i) => (
              <article key={p.title} className="bg-paper p-8 space-y-3 hover:bg-bone transition-colors">
                <div className="font-mono text-h4 text-ocre-500">0{i + 1}</div>
                <h3 className="font-display text-h5 uppercase tracking-tight text-ink leading-tight">{p.title}</h3>
                <p className="text-body-sm text-stone leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {PRO_SECTORS.map((s) => (
              <span key={s} className="font-mono text-eyebrow uppercase tracking-wider border border-stone/30 px-3 py-2 text-stone">{s}</span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/series/g" className="font-mono text-eyebrow uppercase tracking-wider text-cobalto-700 hover:text-cobalto-900">Ver Serie G →</Link>
          </div>
        </div>
      </section>

      {/* Tintas */}
      <div id="tintas" className="scroll-mt-28">
        <TintasBlock />
      </div>

      {/* CTA */}
      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-display text-h1 uppercase tracking-tight text-bone text-balance max-w-3xl mx-auto">
            Antes de comparar precio,
            <span className="block text-ocre-300">compara servicio.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Ven al taller de Les Preses. Sin compromiso. Te enseñamos cada serie funcionando.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contacto" className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200 transition-colors">Pedir info</Link>
            <Link href="/series" className="inline-flex items-center justify-center border border-bone/30 text-bone px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-bone/10 transition-colors">Ver series</Link>
          </div>
        </div>
      </section>
    </>
  );
}
