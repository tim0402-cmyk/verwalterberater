import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export für Hostinger-Shared-Hosting
  trailingSlash: true,     // /impressum/ statt /impressum — Hostinger-kompatibel
  images: {
    unoptimized: true,     // Pflicht bei static export (kein Next.js Image-Server)
  },
};

export default nextConfig;
