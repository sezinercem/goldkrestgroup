import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photo hosts. Remove once real photos live in /public.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
