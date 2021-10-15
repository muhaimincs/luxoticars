import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import SearchLayout from '../../layout/search'

const makeupTitle = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')
export default function TagPage ({ tags, posts, currentTag }) {
  let title = currentTag ? currentTag.replace(/-/g, ' ') : currentTag
  title = currentTag ? makeupTitle(title.replace(/_/g, ' ')) : ''

  return (
    <>
    <Head>
      <title>{title} • Luxoticars</title>
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
  const Layout = dynamic(
    () => import('../../components/layout.homepage'),
    { ssr: false }
  )
  return (
    <>
      <Head>
        <meta property="og:locale" content="en-GB" />
        <meta property="og:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:url" content="https://luxoticars.my/search" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="#000" name="theme-color" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/e3/Skull-Icon.svg" />
      </Head>
      <Layout>
        <Header />
        {page}
      </Layout>
    </>
  )
}
