module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.alizza-ideal.com',
  exclude: ['/tags/*', '/letters/*', '/letters', '/db', '/db/*', '/projects', '/tags', '/about'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
