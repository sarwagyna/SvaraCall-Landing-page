import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the local site from a phone on the same Wi‑Fi
  // (e.g. http://192.168.1.57:3000) without blocking HMR/dev assets.
  allowedDevOrigins: ["192.168.1.57", "localhost", "127.0.0.1"],
  trailingSlash: false,
  // Middleware handles trailing-slash → no-slash with an absolute Location.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    // Assets are crawlable for favicons/OG previews, but should never be
    // treated as indexable "pages" in Search Console.
    const noindex = [
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
    ];
    return [
      { source: "/favicon.ico", headers: noindex },
      { source: "/favicon-:size.png", headers: noindex },
      { source: "/apple-touch-icon.png", headers: noindex },
      { source: "/android-chrome-:size.png", headers: noindex },
      { source: "/opengraph-image", headers: noindex },
      { source: "/opengraph-image/:path*", headers: noindex },
      { source: "/twitter-image", headers: noindex },
      { source: "/twitter-image/:path*", headers: noindex },
      { source: "/icon", headers: noindex },
      { source: "/icon/:path*", headers: noindex },
    ];
  },
};

export default nextConfig;
