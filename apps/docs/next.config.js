
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/docs",
  basePath: "/docs",
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/docs',
        destination: `${process.env.DOCS_URL}/docs`,
      },
      {
        source: '/docs/:path*',
        destination: `${process.env.DOCS_URL}/docs/:path*`,
      },
      {
        source: '/docs-static/:path*',
        destination: `${process.env.DOCS_URL}/docs-static/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
