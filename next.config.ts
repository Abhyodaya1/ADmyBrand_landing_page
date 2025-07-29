// C:\Users\ASUS\Desktop\admybrand-app\next.config.ts
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lovable.dev'],
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: ['http://10.177.33.169:8080'],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;