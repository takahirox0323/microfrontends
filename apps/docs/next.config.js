/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/docs/_next/:path*',
        destination: `${process.env.DOCS_URL}/docs/_next/:path*`,
      },
      {
        source: '/docs-static/:path*',
        destination: `${process.env.DOCS_URL}/docs/:path*`,
      },
      {
        source: '/docs/:path*',
        destination: `${process.env.DOCS_URL}/docs/:path*`,
      },
      {
        source: '/docs',
        destination: `${process.env.DOCS_URL}/docs`,
      },
    ]
  }
}

module.exports = nextConfig
