import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Garden page was renamed to Landscaping.
  redirects() {
    return [{ source: "/garden", destination: "/landscaping", permanent: true }];
  },
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
