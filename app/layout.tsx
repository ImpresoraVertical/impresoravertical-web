import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleAdsTag from "./components/GoogleAdsTag";
import MetaPixel from "./components/MetaPixel";
import "./globals.css";

// Display / Headlines — geometric condensed, ecos del logo I-TECH
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Body / Texto general — neutral, moderna, legible
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Mono — eyebrows y texto técnico
const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.impresoravertical.com"),
  title: {
    default: "Impresora Vertical I-Tech · Oficial en España",
    template: "%s · I-TECH España",
  },
  description:
    "Punto de gestión oficial en España de las impresoras verticales del inventor de la tecnología. Servicio técnico, formación y soporte de por vida.",
  keywords: [
    "impresora vertical",
    "impresión vertical",
    "I-Tech",
    "decoración pared",
    "mural impresión",
    "impresora pared",
    "vertical printer",
    "España",
  ],
  authors: [{ name: "Impresora Vertical · I-TECH España" }],
  creator: "Impresora Vertical · I-TECH España",
  publisher: "Impresora Vertical · I-TECH España",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.impresoravertical.com",
    title: "Impresora Vertical I-Tech · Oficial en España",
    description:
      "La impresora vertical oficial. Sin vinilos. Sin pintores. Servicio técnico, formación y soporte de por vida.",
    siteName: "Impresora Vertical I-Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impresora Vertical I-Tech",
    description:
      "Punto de gestión oficial en España. Impresoras verticales directo del fabricante inventor de la tecnología.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "I12d1UZoNgLC6KA8bLpEFyFkWhMq7v5uzmEyVG_F9BU",
  },
};

/**
 * Schema.org JSON-LD para Organization + LocalBusiness.
 * Aporta Rich Results en Google y permite que Maps/Knowledge Graph
 * entiendan que I-TECH España es un negocio físico en Les Preses.
 */
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.impresoravertical.com/#organization",
      name: "Impresora Vertical · I-TECH España",
      alternateName: "I-TECH España",
      url: "https://www.impresoravertical.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.impresoravertical.com/logo/logo-itech-full.png",
      },
      image: "https://www.impresoravertical.com/opengraph-image",
      description:
        "Punto de gestión oficial en España de las impresoras verticales I-TECH, inventor de la tecnología. Servicio técnico, formación y soporte de por vida.",
      telephone: "+34 623 007 729",
      email: "info@impresoravertical.com",
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle del Centre d'Empreses 1-7, Nave 7",
        addressLocality: "Les Preses",
        addressRegion: "Girona",
        postalCode: "17178",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.155,
        longitude: 2.555,
      },
      areaServed: [
        { "@type": "Country", name: "España" },
        { "@type": "Place", name: "Europa" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.instagram.com/impresoravertical/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.impresoravertical.com/#website",
      url: "https://www.impresoravertical.com",
      name: "Impresora Vertical · I-TECH España",
      publisher: { "@id": "https://www.impresoravertical.com/#organization" },
      inLanguage: "es-ES",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <GoogleAdsTag />
        <MetaPixel />
      </body>
    </html>
  );
}
