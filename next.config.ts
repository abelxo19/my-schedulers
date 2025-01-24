import { NextConfig } from 'next'

const nextConfig:  NextConfig  = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "v0.blob.com",
      },
    ],
  },
}

module.exports = nextConfig

