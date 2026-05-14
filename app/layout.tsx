import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    default: "Impresora Vertical I-Tech · Distribuidor oficial en España",
    template: "%s · Impresora Vertical I-Tech",
  },
  description:
    "Las únicas impresoras verticales del fabricante original e inventor de la tecnología. Distribuidor oficial certificado RII-AEE para España. Servicio técnico, formación y soporte de por vida.",
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
    title: "Impresora Vertical I-Tech · Distribuidor oficial en España",
    description:
      "La impresora vertical oficial. Sin vinilos. Sin pintores. Servicio técnico, formación y soporte de por vida.",
    siteName: "Impresora Vertical I-Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impresora Vertical I-Tech",
    description:
      "Distribuidor oficial certificado RII-AEE. Impresoras verticales directo de fábrica.",
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
      </body>
    </html>
  );
}
