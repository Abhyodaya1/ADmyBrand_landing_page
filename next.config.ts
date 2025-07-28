
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config, { dev, isServer }) => {
    // Setup Alias @ → /src
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };

    // Add componentTagger plugin in development (client-side only)
    if (dev && !isServer) {
      const { componentTagger } = require('lovable-tagger');
      config.plugins.push(componentTagger());
    }

    return config;
  },
};

export default nextConfig;