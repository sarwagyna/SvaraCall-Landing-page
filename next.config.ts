import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the local site from a phone on the same Wi‑Fi
  // (e.g. http://192.168.1.57:3000) without blocking HMR/dev assets.
  allowedDevOrigins: ["192.168.1.57", "localhost", "127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
