import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/JOSEPH.png", destination: "/joseph.png" },
      { source: "/JOSEPH.JPG", destination: "/joseph.png" },
      { source: "/joseph.jpg", destination: "/joseph.png" },
      { source: "/JOSEPH-1.JPG", destination: "/joseph.png" },
      { source: "/joseph-1.jpg", destination: "/joseph.png" },
      { source: "/JOSEPH.heic", destination: "/joseph.png" },
      { source: "/joseph.heic", destination: "/joseph.png" },
    ];
  },
};

export default nextConfig;
