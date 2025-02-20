
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  assetPrefix: "/docs-static",
  async rewrites() {
    return [ {
      source: '/docs-static/_next/:path*',
      destination: '/_next/:path*',
    },]
}
}

module.exports = nextConfig
