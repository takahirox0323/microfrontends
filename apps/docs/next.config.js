
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/docs',
  basePath: "/docs",
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/docs/_next/:path*',
        destination: '/_next/:path*',
      }
    ]
  },
}

module.exports = nextConfig
