import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicio técnico exclusivo",
  description:
    "Servicio técnico exclusivo para clientes de impresora vertical I-TECH en España. Stock de piezas, visita 48-72h, WhatsApp 24/7. Taller en Les Preses.",
  alternates: { canonical: "/servicio-tecnico" },
};

export default function ServicioTecnicoPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow">Servicio técnico exclusivo</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Cuando algo falla,
                <br />
                <span className="italic text-cobalto-700">no estás solo.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                Servicio técnico exclusivo para clientes I-TECH oficial en
                España. Stock de piezas en taller propio. Visita en 48-72h
                para urgencias con producción detenida.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] bg-bone overflow-hidden border border-stone/15">
                <Image
                  src="/taller/servicio-tecnico.jpg"
                  alt="Servicio técnico I-TECH España · almacén de piezas y taller"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/15 border border-stone/15">
            {[
              { title: "Stock piezas España", body: "Cabezales, bombas, sensores, motores. Las piezas críticas las tenemos en Les Preses. Envío 24-48h península.", metric: "48h" },
              { title: "Visita técnica urgente", body: "Si tu máquina está parada en producción, vamos a tu taller en 48-72h con piezas y diagnóstico previo.", metric: "72h" },
              { title: "WhatsApp 24/7", body: "Línea directa para clientes. Diagnóstico remoto, fotos, vídeo si hace falta. Resolvemos el 60% sin visita.", metric: "24/7" },
              { title: "Mantenimiento preventivo", body: "Revisión anual opcional. Cambio de consumibles, limpieza profunda, calibración. Te alargamos la vida útil.", metric: "1×año" },
              { title: "Actualizaciones software", body: "RIP siempre actualizado a última versión. Nuevos perfiles ICC liberados sin coste para clientes activos.", metric: "Auto" },
              { title: "Soporte por traspaso", body: "Si vendes tu máquina al cabo de unos años, el nuevo dueño hereda el servicio. Solo trámite administrativo.", metric: "Vital" },
            ].map((item) => (
              <article key={item.title} className="bg-bone p-8 space-y-4 hover:bg-paper transition-colors">
                <div className="font-mono text-h4 text-ocre-500">{item.metric}</div>
                <h2 className="font-serif text-h4 text-ink leading-tight">{item.title}</h2>
                <p className="text-body-sm text-stone leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-300">
                Cliente actual con incidencia
              </div>
              <h2 className="font-serif text-h1 text-paper text-balance">
                Si tu impresora <span className="italic text-ocre-300">no funciona,</span> escríbenos ahora.
              </h2>
              <p className="text-body-lg text-bone/80 max-w-xl">
                Diagnóstico remoto en menos de 2 horas. Si requiere visita,
                programamos en 48-72h con todas las piezas posibles que pueda
                necesitar tu modelo.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-3">
              <a
                href="https://wa.me/34623007729"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-ocre-300 text-cobalto-900 px-6 py-5 font-mono text-sm uppercase tracking-wider text-center hover:bg-ocre-200 transition-colors"
              >
                WhatsApp directo
              </a>
              <a
                href="tel:+34623007729"
                className="block border border-bone/30 text-bone px-6 py-5 font-mono text-sm uppercase tracking-wider text-center hover:bg-bone/10 transition-colors"
              >
                +34 623 007 729
              </a>
              <a
                href="mailto:soporte@impresoravertical.com"
                className="block border border-bone/30 text-bone px-6 py-5 font-mono text-sm uppercase tracking-wider text-center hover:bg-bone/10 transition-colors break-all"
              >
                soporte@impresoravertical.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
