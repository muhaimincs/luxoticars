const WEB = {
  name: 'LUXOTICARS',
  lang: 'en-US',
  link: 'https://luxoticars.cc',
  description: 'The Syndicate Carlifestyle Cartel',
  telephone: '+6017 328 3839',
  address: {
    streetAddress: 'No 253 Jalan Ampang Hilir Off Jalan U-Thant 50450 Kuala Lumpur',
    addressLocality: 'Kuala Lumpur',
    addressRegion: 'KL',
    postalCode: '50450',
    addressCountry: 'MY'
  },
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
