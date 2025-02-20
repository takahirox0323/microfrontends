
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'https://develop-docs.d1n4gq1r6iigwu.amplifyapp.com/docs',
  basePath: "/docs",
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/docs/_next/:path*',
        destination: 'https://develop-docs.d1n4gq1r6iigwu.amplifyapp.com/_next/:path*',
      }
    ]
  },
}

module.exports = nextConfig
