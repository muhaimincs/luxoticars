const WEB = {
  name: 'LUXOTICARS',
  lang: 'en-US',
  link: 'https://luxoticars.cc',
  postsPerPage: 6,
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
