import Link from "next/link";
import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Series", href: "/series" },
      { label: "I-TECH Pro · Industrial", href: "/itech-pro" },
      { label: "Calculadora ROI", href: "/calculadora-roi" },
      { label: "Perfiles ICC", href: "/perfiles-icc" },
      { label: "Sectores", href: "/sectores" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Servicio técnico", href: "/servicio-tecnico" },
      { label: "Formación", href: "/formacion" },
      { label: "Pedir info", href: "/contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre I-Tech", href: "/sobre-itech" },
      { label: "Por qué I-TECH", href: "/por-que-itech" },
      { label: "Casos de cliente", href: "/casos-cliente" },
      { label: "Contacto", href: "/contacto" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cobalto-900 text-bone">
      <div className="container-page py-16 lg:py-24">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Image
              src="/logo/logo-itech-full.png"
              alt="Impresora Vertical · I-TECH España"
              width={1200}
              height={271}
              className="h-14 w-auto invert"
            />
            <p className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
              España · Distribuidor oficial
            </p>
            <div className="font-sans text-body-sm text-bone/70 space-y-1">
              <p>Les Preses, Girona</p>
              <p>
                <a href="mailto:info@impresoravertical.com" className="hover:text-ocre-200 transition-colors">
                  info@impresoravertical.com
                </a>
              </p>
              <p>
                <a href="tel:+34623007729" className="hover:text-ocre-200 transition-colors">
                  +34 623 007 729
                </a>
              </p>
            </div>
            <div className="pt-2 inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-wider text-ocre-200 border-t border-bone/20 pt-4 mt-4">
              <span>Distribuidor oficial</span>
              <span className="text-bone/40">·</span>
              <span>Servicio técnico en España</span>
            </div>
          </div>

          {/* 4 column links */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-mono text-eyebrow uppercase tracking-wider text-ocre-200">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-body-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: copyright */}
        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-body-sm text-bone/60">
            © {new Date().getFullYear()} Impresora Vertical · I-TECH España ·
            Les Preses, Girona · Distribuidor oficial
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/Impresoravertical"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-eyebrow uppercase tracking-wider text-bone/60 hover:text-bone transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/impresoravertical/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-eyebrow uppercase tracking-wider text-bone/60 hover:text-bone transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
