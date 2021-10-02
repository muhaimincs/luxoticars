import Head from 'next/head'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import dynamic from 'next/dynamic'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'

import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === 'client')
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
    revalidate: 1
  }
}

export default function ClientPage ({ post, blockMap }) {
  return (
    <>
      <Head>
        <title>{post.title} • {WEB.name}</title>
        <meta name="description" content="Clients of LUXOTICARS" />
        <meta property="og:locale" content={WEB.lang} />
        <meta property="og:title" content={`Client • ${WEB.name}`} />
        <meta property="og:description" content="Clients of LUXOTICARS" />
        <meta
          property="og:url"
          content={`${WEB.link}/client`}
        />
        <meta
          property="og:image"
          content="https://ipfs.fleek.co/ipfs/bafybeiefqbyugqurya5gqqlk6ez2hbbu7xxidj3vugmhvqhjsz2fml6f3y"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Clients of LUXOTICARS" />
        <meta name="twitter:title" content={`Clients • ${WEB.name}`} />
        <meta
          property="twitter:image"
          content="https://ipfs.fleek.co/ipfs/bafybeiefqbyugqurya5gqqlk6ez2hbbu7xxidj3vugmhvqhjsz2fml6f3y"
        />
      </Head>
      <article className="max-w-7xl mx-auto">
        {blockMap && (
          <NotionRenderer
            recordMap={blockMap}
            components={{
              equation: Equation,
              code: Code,
              collectionRow: CollectionRow,
              collection: Collection
            }}
            // mapPageUrl={mapPageUrl}
            fullPage={true} darkMode={true}
            className="bg-black"
          />
        )}
      </article>
    </>
  )
}

ClientPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header.homepage'),
    { ssr: false }
  )
  const Footer = dynamic(
    () => import('../components/footer'),
    { ssr: false }
  )
  const Layout = dynamic(
    () => import('../components/layout.homepage'),
    { ssr: false }
  )
  return (
    <>
      <Head>
        <link rel="icon" href="/LUXOTICARS_GRADIENT_SKULL.svg" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
      </Head>
      <Layout>
        <Header />
        {page}
        <Footer />
      </Layout>
    </>
  )
}