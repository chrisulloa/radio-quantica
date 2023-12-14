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
  async redirects() {
    return [
      {
        source: '/schedule',
        destination: '/calendar',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.particle.fm',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {}
}

module.exports = withTM(nextConfig)
