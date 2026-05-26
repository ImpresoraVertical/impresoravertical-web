import type { MetadataRoute } from "next";
import { SECTORES } from "./data/sectores";

const BASE_URL = "https://www.impresoravertical.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sectorRoutes = SECTORES.map((s) => ({
    url: `/sectores/${s.slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/sobre-itech", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/series", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/series/e", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/series/k", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/series/g", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/series/t", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/series/w", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/series/fb", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/calculadora-roi", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/casos-cliente", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/perfiles-icc", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/itech-pro", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/por-que-itech", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/servicio-tecnico", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/formacion", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contacto", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/comparador", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/sectores", priority: 0.85, changeFrequency: "monthly" as const },
    ...sectorRoutes,
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
