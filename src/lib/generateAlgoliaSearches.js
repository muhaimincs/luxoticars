import algoliasearch from 'algoliasearch/lite'

import { getAllArticles } from './getAllArticles'
import { getCarPhotos } from './contentful'

async function withImage(article) {
  const externalSource = await getCarPhotos(article.slug)
  const images = externalSource.reduce((acc, item) => {
    for (const photo of item.photos) {
      acc.push({
        url: `https:${photo?.fields?.file?.url}`,
        details: photo?.fields?.file?.details,
        contentType: photo?.fields?.file?.contentType
      })
    }
    return acc
  }, [])

  return {
    objectID: article.title,
    title: article.title,
    description: article.description,
    slug: article.slug,
    brand: article.brand,
    tagsCollection: { tags: article.highlights },
    date: article.date,
    type: 'article',
    imageUrl: images.length ? images[0]?.url : ''
  }
}

async function transformPostsToSearchObjects(articles) {
  const transformed = await Promise.all(articles.map(withImage))

  return transformed
}

export async function generateAlgoliaSearches() {

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined")
  }

  if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined")
  }

  let articles = await getAllArticles()
  const transformed = await transformPostsToSearchObjects(articles)
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ADMIN_KEY,
  )
  const index = client.initIndex("dev_luxoticars")
  await index.saveObjects(transformed)

  // console.log(
  //   `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
  //       "\n",
  //   )}`,
  // )
}

export async function submitToIndexNow() {
  let articles = await getAllArticles()
  const urlList = articles.map((article) => `https://www.luxoticars.cc/m/${article.slug}`)
  // https://swimburger.net/blog/web/an-introduction-to-indexnow-and-why-you-should-care
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "host": "luxoticars.cc",
      "key": "14b32b36f7ba4cfea2421020ab92ef34",
      "keyLocation": "https://www.luxoticars.cc/14b32b36f7ba4cfea2421020ab92ef34.txt",
      urlList
    })
  }
  console.log('options for indexer')
  console.log(JSON.stringify(options))

  const indexNow = fetch(`https://api.indexnow.org/indexnow`, options)
  const bing = fetch(`https://www.bing.com/indexnow`, options)
  const yandex = fetch(`https://yandex.com/indexnow`, options)

  try {
    await Promise.all([
      indexNow,
      bing,
      yandex
    ])
  } catch (err) {
    console.error(err.message)
  }
}
