import dynamic from 'next/dynamic'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import { NextSeo } from 'next-seo'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'

import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === 'gallery')
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
    revalidate: 1
  }
}

export default function GalleryPage ({ post, blockMap }) {
  return (
    <>
      <NextSeo
        title={`${post?.title} • ${WEB.name}`}
        description="Photo gallery of LUXOTICARS"
        canonical={`${WEB.link}/gallery`}
        openGraph={{
          url: `${WEB.link}/gallery`,
          title: `${post?.title} • ${WEB.name}`,
          description: 'Photo gallery of LUXOTICARS'
        }}
      />
      <div className="absolute top-0 overflow-hidden z-[-100] inset-x-0">
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
        <div className="pb-52 max-w-sm mx-auto px-3">
          <div className="flex items-center rounded-md shadow">
            <a
              href="https://www.youtube.com/luxoticars"
              className="inline-flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Subscribe to our Youtube Channel
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

GalleryPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header.homepage'),
    { ssr: false }
  )
  const Layout = dynamic(
    () => import('../components/layout.homepage'),
    { ssr: false }
  )
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  )
}
