const WEB = require('./web.config')

module.exports = {
  siteUrl: WEB.link,
  generateRobotsTxt: true,
  sitemapSize: 7000
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
