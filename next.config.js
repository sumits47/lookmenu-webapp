/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lookmenu.sgp1.digitaloceanspaces.com',
      'sgp1.digitaloceanspaces.com',
    ],
  },
}

module.exports = nextConfig
