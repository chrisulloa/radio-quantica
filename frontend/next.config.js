/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/core",
  "@fullcalendar/daygrid",
  "@fullcalendar/luxon",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
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
      }
    ],
  },
  reactStrictMode: true,
  experimental: {}
}

module.exports = withTM(nextConfig)
