
/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: `${process.env.DOCS_URL}/docs/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
