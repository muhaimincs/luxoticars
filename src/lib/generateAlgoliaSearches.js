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

  console.log(article)
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
  const algoliaResponse = await index.saveObjects(transformed)

  console.log(
    `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n",
    )}`,
  )
}
