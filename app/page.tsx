import Hero from "./components/home/Hero";
import CatalogoPreview from "./components/home/CatalogoPreview";
import Taller from "./components/home/Taller";
import FAQHome from "./components/home/FAQHome";
import CTAFinal from "./components/home/CTAFinal";

/**
 * Home — 5 secciones.
 * Qué vendemos → cómo se compra → dudas comerciales → cierre.
 * Materiales (Galeria) vive en /series; comparativa, servicio, formación,
 * ICC, industrial y tintas en /por-que-itech; colaboraciones, aplicaciones
 * y FAQ técnica en /sobre-itech.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogoPreview />
      <Taller />
      <FAQHome />
      <CTAFinal />
    </>
  );
}
