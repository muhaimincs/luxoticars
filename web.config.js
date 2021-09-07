const WEB = {
  link: 'https://luxoticars.my',
  postsPerPage: 7,
  sortByDate: false,
  notionPageId: process.env.NOTION_PAGE_ID,
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN,
  analytics: {
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  isProd: process.env.VERCEL_ENV === 'production'
}

module.exports = WEB
