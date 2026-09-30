import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Wikimedia's servers rate-limit Next's server-side image-optimization
    // proxy fairly aggressively for bursts of concurrent requests, so we
    // let the browser fetch these hotlinked photos directly instead.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumb.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
