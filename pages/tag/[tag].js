import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import { getCarPhotos } from '../../lib/contentful'
import SearchLayout from '../../layout/search'
import Layout from '../../components/layout.homepage'
import WEB from '../../web.config'

const makeupTitle = ([first, ...rest], locale = 'en-GB') =>
  first.toLocaleUpperCase(locale) + rest.join('')

export default function TagPage ({ tags, posts, currentTag, coverImg }) {
  let title = currentTag ? currentTag.replace(/-/g, ' ') : currentTag
  title = currentTag ? makeupTitle(title.replace(/_/g, ' ')) : ''
  return (
    <>
    <NextSeo
      title={`${title} on ${WEB.name}`}
      description={`${WEB.name} has a decade of experience selling reconditioned ${title} cars.`}
      canonical={`${WEB.link}/tag/${currentTag}`}
      openGraph={{
        url: `${WEB.link}/tag/${currentTag}`,
        title,
        description: `${WEB.name} has a decade of experience selling reconditioned ${title} cars.`,
        images: [{
          url: `${WEB.link}/brands/cover/${currentTag}.jpeg`,
          type: 'image/jpeg',
          width: coverImg?.width,
          height: coverImg?.height
        }],
        type: 'article',
      }}
    />
    <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
    </>
  )
}

export async function getStaticProps ({ params, preview }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ includePages: false })
  const coverImg = require(`../../public/brands/cover/${currentTag}.jpeg`).default
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  const withExternalSource = await Promise.all(filteredPosts.map(async (post) => {
    const externalSource = await getCarPhotos(post.slug, preview);
    return {
      ...post,
      externalSource: externalSource.reduce((acc, item) => {
        for (const photo of item.photos) {
          acc.push({
            url: `https:${photo?.fields?.file?.url}`,
            details: photo?.fields?.file?.details,
            contentType: photo?.fields?.file?.contentType
          })
        }
        return acc
      }, [])
    }
  }));
  return {
    props: {
      tags,
      posts: withExternalSource,
      currentTag,
      coverImg
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}

TagPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../../components/header'),
  )
  const Footer = dynamic(
    () => import('../../components/footer'),
    { ssr: false }
  )
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  )
}
