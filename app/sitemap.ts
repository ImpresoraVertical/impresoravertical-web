import type { MetadataRoute } from "next";

const BASE_URL = "https://impresoravertical.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
    { url: "/configurador", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/calculadora-roi", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/casos-cliente", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/perfiles-icc", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/itech-pro", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/servicio-tecnico", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/formacion", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contacto", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
