/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async redirects() {
    // Simplificación a 5 páginas: las rutas fusionadas redirigen (301) a la
    // sección correspondiente para conservar autoridad SEO y enlaces externos.
    return [
      { source: "/comparador", destination: "/por-que-itech#comparativa", permanent: true },
      { source: "/servicio-tecnico", destination: "/por-que-itech#servicio-tecnico", permanent: true },
      { source: "/formacion", destination: "/por-que-itech#formacion", permanent: true },
      { source: "/perfiles-icc", destination: "/por-que-itech#perfiles-icc", permanent: true },
      { source: "/itech-pro", destination: "/por-que-itech#industrial", permanent: true },
      { source: "/faq", destination: "/sobre-itech#faq", permanent: true },
      { source: "/casos-cliente", destination: "/sobre-itech#aplicaciones", permanent: true },
      { source: "/configurador", destination: "/calculadora-roi", permanent: true },
    ];
  },
};

export default nextConfig;
