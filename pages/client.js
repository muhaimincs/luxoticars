import Head from 'next/head'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'
import Layout from '../components/layout.homepage'

import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

export async function getStaticProps() {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === 'client')
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
    revalidate: 1
  }
}

export default function ClientPage({ post, blockMap }) {
  return (
    <>
      <NextSeo
        title={`${post?.title} • ${WEB.name}`}
        description="Photo gallery of LUXOTICARS"
        canonical={`${WEB.link}/client/`}
        openGraph={{
          url: `${WEB.link}/gallery`,
          title: `${post?.title} • ${WEB.name}`,
          description: 'Photo gallery of LUXOTICARS'
        }}
      />
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

ClientPage.getLayout = function getLayout(page) {
  const Header = dynamic(
    () => import('../components/header'),
    { ssr: false }
  )
  const Footer = dynamic(
    () => import('../components/footer'),
    { ssr: false }
  )
  return (
    <>
      <Layout>
        <Header />
        {page}
        <Footer />
      </Layout>
    </>
  )
}
