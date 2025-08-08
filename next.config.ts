import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every 1000ms (1 second)
        aggregateTimeout: 300, // Debounce time for multiple changes
      };
    }
    return config;
  },
};

export default nextConfig;
