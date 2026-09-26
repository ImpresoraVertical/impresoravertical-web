import Hero from "./components/home/Hero";
import CatalogoPreview from "./components/home/CatalogoPreview";
import CasosInstagram from "./components/home/CasosInstagram";
import Taller from "./components/home/Taller";
import FAQHome from "./components/home/FAQHome";
import CTAFinal from "./components/home/CTAFinal";

/**
 * Home — 6 secciones.
 * Qué vendemos → ejemplos reales → cómo se compra → dudas → cierre.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogoPreview />
      <CasosInstagram />
      <Taller />
      <FAQHome />
      <CTAFinal />
    </>
  );
}
