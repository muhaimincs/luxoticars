import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import SearchLayout from '../../layout/search'
import Layout from '../../components/layout.homepage'

const makeupTitle = ([first, ...rest], locale = 'en-GB') =>
  first.toLocaleUpperCase(locale) + rest.join('')

export default function TagPage ({ tags, posts, currentTag }) {
  let title = currentTag ? currentTag.replace(/-/g, ' ') : currentTag
  title = currentTag ? makeupTitle(title.replace(/_/g, ' ')) : ''

  return (
    <>
    <Head>
      <title>{title} on Luxoticars</title>
      <meta property="og:title" content={`${title} on Luxoticars`} />
      <meta name="og:description" content={`Luxoticars has a decade of experience selling reconditioned ${title} cars.`} />
      <meta name="description" content={`Luxoticars has a decade of experience selling reconditioned ${title} cars.`} />
      <meta
        property="og:image"
        content={`/brands/cover/${currentTag}.jpeg`}
      />
      <meta name="twitter:description" content={`Luxoticars has a decade of experience selling reconditioned ${title} cars.`} />
      <meta name="twitter:title" content={`${title} on Luxoticars`} />
      <meta
        name="twitter:image"
        content={`/brands/colors/${currentTag}.svg`}
      />
    </Head>
    <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
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
    () => import('../../components/header.homepage'),
    { ssr: false }
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
