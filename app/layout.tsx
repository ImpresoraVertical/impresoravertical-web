import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
  metadataBase: new URL("https://impresoravertical.com"),
  title: {
    default: "Impresora Vertical I-Tech · Oficial en España",
    template: "%s · Impresora Vertical I-Tech",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://impresoravertical.com",
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
