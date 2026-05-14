import Link from "next/link";
import Hero from "./components/home/Hero";
import ConfiguradorTeaser from "./components/home/ConfiguradorTeaser";
import PerfilesICC from "./components/home/PerfilesICC";
import Comparador from "./components/home/Comparador";
import Taller from "./components/home/Taller";
import ROITeaser from "./components/home/ROITeaser";
import Galeria from "./components/home/Galeria";
import CatalogoPreview from "./components/home/CatalogoPreview";
import FAQHome from "./components/home/FAQHome";
import Testimonios from "./components/home/Testimonios";
import Colaboraciones from "./components/home/Colaboraciones";
import CTAFinal from "./components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConfiguradorTeaser />
      <PerfilesICC />
      <Comparador />
      <Taller />
      <ROITeaser />
      <Galeria />
      <CatalogoPreview />
      <FAQHome />
      <Testimonios />
      <Colaboraciones />
      <CTAFinal />
    </>
  );
}
