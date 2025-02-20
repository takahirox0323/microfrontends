
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  assetPrefix: "/docs-static",
 beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/docs-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
}

module.exports = nextConfig
