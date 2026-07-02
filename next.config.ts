import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Strict Mode monta y ejecuta efectos dos veces en dev, lo que se ve como un
  // "doble render" (flash) del scrollytelling con GSAP al cargar la página.
  reactStrictMode: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
