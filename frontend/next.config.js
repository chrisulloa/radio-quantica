/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@babel/preset-react",
]);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'
      },
      {
        protocol: 'https',
        hostname: "cdn.particle.fm",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "radioquantica.com",
        port: '',
      }
    ],
  },
  reactStrictMode: true,
  experimental: {}
}

module.exports = withTM(nextConfig)
