import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPosts, getAllTagsFromPosts } from '../../lib/notion'
import { getCarPhotos } from '../../lib/contentful'
import SearchLayout from '../../layout/search'
import WEB from '../../web.config'

export async function getStaticProps ({ preview }) {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const withExternalSource = await Promise.all(posts.map(async (post) => {
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
  const postsToShow = withExternalSource.slice(
    0,
    WEB.postsPerPage
  )
  const showNext = withExternalSource.length > WEB.postsPerPage
  return {
    props: {
      tags,
      posts: postsToShow,
      showNext,
    },
    revalidate: 1
  }
}

export default function SearchPage ({ tags, posts, showNext }) {
  return <SearchLayout tags={tags} posts={posts} showNext={showNext} page={1} />
}

SearchPage.getLayout = function getLayout (page) {
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
        <title>Stock • Luxoticars</title>
        <meta name="description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:locale" content="en-GB" />
        <meta property="og:title" content="Stock • Luxoticars" />
        <meta property="og:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:url" content="https://luxoticars.my/search" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta name="twitter:title" content="Stock • Luxoticars" />
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
