import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^react$/,
        (resource) => {
          if (
            resource.context &&
            (resource.context.toLowerCase().includes('sanity') ||
              resource.context.toLowerCase().includes('ui5'))
          ) {
            resource.request = path.resolve(__dirname, 'sanity/lib/react-compat.ts');
          }
        }
      )
    );
    return config;
  },
};

export default nextConfig;
