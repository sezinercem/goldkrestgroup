import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // The Garden page was renamed to Landscaping.
      { source: "/garden", destination: "/landscaping", permanent: true },
      // Pressure washing is no longer offered.
      { source: "/pressure-washing", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
