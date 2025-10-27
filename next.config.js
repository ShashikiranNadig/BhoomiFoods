/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'pixabay.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig
