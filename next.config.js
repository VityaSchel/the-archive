// const { i18n } = require('./next-i18next.config')
const { I18NextHMRPlugin } = require('i18next-hmr/plugin')
// const { nextI18NextRewrites } = require('next-i18next/rewrites')
const path = require('path')
const localesDir = path.resolve('public/locales')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n,

  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
  // webpack(config, options) {
  //   if (!options.isServer && config.mode === 'development') {
  //     const { I18NextHMRPlugin } = require('i18next-hmr/plugin')
  //     config.plugins.push(
  //       new I18NextHMRPlugin({
  //         localesDir: path.resolve(__dirname, 'public/locales')
  //       })
  //     )
  //   }

  //   return config
  // }

  webpack(config, context) {
    if (!context.isServer && context.dev) {
      config.plugins.push(new I18NextHMRPlugin({ localesDir }))
    }

    return config
  }
}

module.exports = nextConfig