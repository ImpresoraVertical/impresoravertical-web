import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FAQAccordion from "../components/FAQAccordion";
import Colaboraciones from "../components/home/Colaboraciones";
import { FAQ_CATEGORIES } from "../data/faq";

export const metadata: Metadata = {
  title: "Sobre I-TECH España · quiénes somos y preguntas frecuentes",
  description:
    "I-TECH España es el punto de gestión oficial de impresoras verticales I-TECH, con taller en Les Preses, Girona. Colaboraciones, aplicaciones reales y FAQ.",
  alternates: { canonical: "/sobre-itech" },
};

// Schema FAQPage (antes vivía en /faq, ahora redirigida aquí)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    }))
  ),
};

const APLICACIONES = [
  { title: "Barcos y embarcaciones", url: "https://www.instagram.com/impresoravertical/" },
  { title: "Remolques y autocaravanas", url: "https://www.instagram.com/reel/C6OixKyNxnB/" },
  { title: "Escaparates comerciales", url: "https://www.instagram.com/reel/ClFLlpTDU2f/" },
  { title: "Oficinas corporativas", url: "https://www.instagram.com/p/CnNPQT6LQCz/" },
  { title: "Escuelas", url: "https://www.instagram.com/p/CM49krsItKG/" },
  { title: "Hospitales", url: "https://www.instagram.com/impresoravertical/" },
  { title: "Pabellones deportivos", url: "https://www.instagram.com/reel/CRJdkmuoyIo/" },
  { title: "Murales urbanos", url: "https://www.instagram.com/reel/DO6VUVIDML8/" },
  { title: "Persianas comerciales", url: "https://www.instagram.com/p/CECnCRNgfLO/" },
  { title: "Réplicas de arte", url: "https://www.instagram.com/impresoravertical/" },
];

export default function SobreITechPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-paper border-b border-stone/15">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow">Sobre I-TECH España</div>
              <h1 className="font-serif text-display lg:text-display-xl text-ink text-balance leading-[1.02]">
                Quien está detrás de la
                <br />
                <span className="italic text-cobalto-700">impresora vertical oficial.</span>
              </h1>
              <p className="text-body-lg text-stone max-w-2xl text-pretty">
                I-TECH España opera desde Les Preses, Girona. Somos el único
                distribuidor oficial certificado en España para la marca I-TECH,
                inventora de la tecnología de impresión vertical sobre pared.
              </p>
              <div className="border-l-2 border-ocre-500 pl-6 py-2 max-w-2xl">
                <p className="font-serif text-h5 text-ink italic leading-snug">
                  &ldquo;Hola, soy Marc Takahashi, apasionado y experto en el mundo de la impresión vertical.&rdquo;
                </p>
                <div className="font-mono text-eyebrow uppercase tracking-wider text-stone mt-3">
                  Marc Takahashi · Fundador I-TECH España
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] bg-bone overflow-hidden border border-stone/15">
                <Image src="/taller/equipo.jpg" alt="Equipo de I-TECH España en el taller de Les Preses" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          {[
            { metric: "2020", label: "Año fundación", desc: "Punto de gestión oficial en España para la impresora vertical inventada por I-TECH." },
            { metric: "+6", label: "Años de experiencia", desc: "Asesoramiento, importación, instalación, formación y servicio técnico desde Les Preses." },
            { metric: "ES", label: "Punto de gestión oficial", desc: "Único punto en España para venta, formación, servicio técnico y reciclaje." },
          ].map((item) => (
            <div key={item.label} className="space-y-4">
              <div className="font-serif text-display text-ink leading-none">{item.metric}</div>
              <div className="font-mono text-eyebrow uppercase tracking-wider text-ocre-600">{item.label}</div>
              <p className="text-body text-stone leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Colaboraciones />

      {/* Aplicaciones reales */}
      <section id="aplicaciones" className="section-pad bg-paper scroll-mt-28">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="eyebrow">Aplicaciones reales</div>
            <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
              De barcos a hospitales, <span className="italic text-cobalto-700">en Instagram.</span>
            </h2>
            <p className="text-body text-stone text-pretty">
              Lo que nuestros clientes están imprimiendo ahora mismo. Si tu caso no aparece, tráelo al taller y lo probamos.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-wrap gap-2 pt-2">
            {APLICACIONES.map((a) => (
              <a key={a.title} href={a.url} target="_blank" rel="noopener noreferrer" className="font-mono text-eyebrow uppercase tracking-wider border border-stone/30 px-4 py-3 hover:border-cobalto-700 hover:text-cobalto-700 transition-colors">
                {a.title} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ completa */}
      <section id="faq" className="section-pad bg-bone scroll-mt-28">
        <div className="container-page space-y-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-4">
              <div className="eyebrow">Preguntas frecuentes</div>
              <h2 className="font-serif text-h2 lg:text-h1 text-ink text-balance">
                Las dudas técnicas, <span className="italic text-cobalto-700">todas aquí.</span>
              </h2>
              <p className="text-body-lg text-stone max-w-2xl">Si la tuya no está, escríbenos. Respondemos en menos de 24h laborables.</p>
            </div>
          </div>
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title} className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <h3 className="font-display text-h3 uppercase tracking-tight text-ink leading-tight">{category.title}</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <FAQAccordion questions={category.questions} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cobalto-900 text-bone">
        <div className="container-page text-center">
          <h2 className="font-serif text-h1 text-bone text-balance max-w-3xl mx-auto">
            Visítanos en Les Preses, <span className="italic text-ocre-200">Girona.</span>
          </h2>
          <p className="text-body-lg text-bone/80 mt-6 max-w-xl mx-auto">
            Calle del Centre d&apos;Empreses 1-7, Nave 7 · 17178 Les Preses
            <br />
            +34 623 007 729 · info@impresoravertical.com
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contacto" className="inline-flex items-center justify-center bg-ocre-300 text-cobalto-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-ocre-200">Pedir info</Link>
          </div>
        </div>
      </section>
    </>
  );
}
