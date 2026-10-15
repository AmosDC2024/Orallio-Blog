import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/admin',
        permanent: true,
      },
      {
        source: '/studio/:path*',
        destination: '/admin/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;