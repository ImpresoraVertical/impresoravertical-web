import Hero from "./components/home/Hero";
import CatalogoPreview from "./components/home/CatalogoPreview";
import Galeria from "./components/home/Galeria";
import Comparador from "./components/home/Comparador";
import Taller from "./components/home/Taller";
import TintasBlock from "./components/home/TintasBlock";
import Colaboraciones from "./components/home/Colaboraciones";
import FAQHome from "./components/home/FAQHome";
import CTAFinal from "./components/home/CTAFinal";

/**
 * Home — 9 secciones (antes 13).
 *
 * Orden: qué vendemos → sobre qué imprime → por qué nosotros →
 * cómo se compra → consumibles → prueba social → dudas → cierre.
 *
 * Retirados de la home:
 * - PerfilesICC  → ya tiene página propia en /perfiles-icc
 * - ROITeaser    → el CTA de ROI ya está en Hero, CatalogoPreview y FAQHome
 * - ProcesoCompra → fusionado dentro de Taller
 * - RIIAEEBlock  → fusionado dentro de Comparador
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogoPreview />
      <Galeria />
      <Comparador />
      <Taller />
      <TintasBlock />
      <Colaboraciones />
      <FAQHome />
      <CTAFinal />
    </>
  );
}
