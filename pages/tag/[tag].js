import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import SearchLayout from '../../layout/search'

export default function TagPage ({ tags, posts, currentTag }) {
  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
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
        <title>Stock • Luxoticars</title>
        <meta name="description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:locale" content="en-GB" />
        <meta property="og:title" content="Luxoticars Stock" />
        <meta property="og:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:url" content="https://luxoticars.my/stock" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta name="twitter:title" content="Luxoticars Stock" />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
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