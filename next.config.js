/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  basePath: '/twa-demo',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
