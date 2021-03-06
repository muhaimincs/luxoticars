import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import { getCarPhotos } from '../../lib/contentful'
import WEB from '../../web.config'
import SearchLayout from '../../layout/search'

const Page = ({ postsToShow, tags, page, showNext }) => {
  return (
    <SearchLayout tags={tags} posts={postsToShow} showNext={showNext} page={page} />
  )
}

export async function getStaticProps (context) {
  const { page } = context.params // Get Current Page No.
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const withExternalSource = await Promise.all(posts.map(async (post) => {
    const externalSource = await getCarPhotos(post.slug, context.preview);
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
  const postsToShow = withExternalSource.slice(
    WEB.postsPerPage * (page - 1),
    WEB.postsPerPage * page
  )
  const totalPosts = withExternalSource.length
  const showNext = page * WEB.postsPerPage < totalPosts
  return {
    props: {
      page, // Current Page
      postsToShow,
      tags,
      showNext
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / WEB.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
  }
}

Page.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../../components/header'),
    { ssr: false }
  )
  const Layout = dynamic(
    () => import('../../components/layout.homepage'),
    { ssr: false }
  )
  const Footer = dynamic(
    () => import('../../components/footer'),
    { ssr: false }
  )
  return (
    <>
      <Head>
        <title>Stock ??? Luxoticars</title>
        <meta name="description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:locale" content="en-GB" />
        <meta property="og:title" content="Stock ??? Luxoticars" />
        <meta property="og:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:url" content="https://luxoticars.my/search" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta name="twitter:title" content="Stock ??? Luxoticars" />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
      </Head>
      <Layout>
        <Header />
        {page}
        <Footer />
      </Layout>
    </>
  )
}

export default Page
