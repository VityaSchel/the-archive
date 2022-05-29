const { i18n, localePath } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n, localePath,
  images: {
    domains: ['ik.imagekit.io']
  },
  runtime: 'nodejs'
}

module.exports = nextConfig