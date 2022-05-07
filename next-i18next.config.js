const i18next = require('i18next') 
const path = require('path')
const HttpBackend = require('i18next-http-backend/cjs')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  defaultNS: "common",
  ns: ["common"],
  use: process.browser ? [HttpBackend] : []
}