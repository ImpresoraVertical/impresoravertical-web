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
    return [
      // /comparador se fusionó en /por-que-itech (misma intención de búsqueda,
      // evitaba canibalización SEO). 301 permanente para transferir autoridad.
      {
        source: "/comparador",
        destination: "/por-que-itech",
        permanent: true,
      },
      // /configurador se retiró: página huérfana sin enlaces entrantes.
      {
        source: "/configurador",
        destination: "/calculadora-roi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
