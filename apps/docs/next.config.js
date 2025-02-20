
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  async rewrites() {
    return [ {
      source: '/docs/_next/:path*',
      destination: '/_next/:path*',
    },]
}
}

module.exports = nextConfig
