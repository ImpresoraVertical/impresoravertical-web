import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrales primarios
        ink: "#0E0E0E",
        paper: "#FAFAF7",
        carbon: "#1F1F1F",
        stone: "#5F5E5A",
        bone: "#EFEDE5",
        // Cobalto (azul I-TECH)
        cobalto: {
          50: "#EBF0FB",
          100: "#D6E1F7",
          200: "#A7BEF0",
          300: "#789CE8",
          400: "#4979DD",
          500: "#2856B8",
          600: "#1F4493",
          700: "#15346F",
          800: "#0C2658",
          900: "#08193D",
        },
        // Ocre (acento)
        ocre: {
          50: "#FDF4E2",
          100: "#FCE9C5",
          200: "#FAC775",
          300: "#F4B247",
          400: "#E5A436",
          500: "#D89C2E",
          600: "#B3811F",
          700: "#8C6418",
          800: "#664910",
          900: "#3D2C0A",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: [
          "var(--font-instrument-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
      fontSize: {
        // Escala tipográfica del documento maestro
        // Body
        "body-sm": ["13px", { lineHeight: "1.5" }],
        "body": ["15px", { lineHeight: "1.6" }],
        "body-lg": ["17px", { lineHeight: "1.6" }],
        // Eyebrow / Caption
        "eyebrow": ["13px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        // Headings (Serif)
        "h6": ["18px", { lineHeight: "1.3" }],
        "h5": ["22px", { lineHeight: "1.25" }],
        "h4": ["28px", { lineHeight: "1.2" }],
        "h3": ["34px", { lineHeight: "1.15" }],
        "h2": ["42px", { lineHeight: "1.1" }],
        "h1": ["56px", { lineHeight: "1.05" }],
        "display": ["72px", { lineHeight: "1.0" }],
        "display-xl": ["96px", { lineHeight: "0.95" }],
      },
      spacing: {
        // Sistema de espaciado (base 4px)
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
        "40": "160px",
        "48": "192px",
        "64": "256px",
      },
      maxWidth: {
        container: "1320px",
        "container-narrow": "1100px",
        "container-text": "720px",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
