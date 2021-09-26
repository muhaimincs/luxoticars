/* eslint-disable @next/next/no-img-element */
import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Zoom,
  Navigation,
  Pagination
} from 'swiper'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import Link from 'next/link'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'
import Layout from '../components/layout.homepage'
import Header from '../components/header.homepage'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Zoom, Navigation, Pagination])

const mapPageUrl = id => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: false })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  const crypto = require('crypto')
  const emailHash = crypto.createHash('md5')
    .update('enquiry@luxoticars.my')
    .digest('hex')
    .trim()
    .toLowerCase()
  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  return {
    paths: posts.map(row => `/${row.slug}`),
    fallback: true
  }
}

export default function CarPage ({ post, blockMap, emailHash }) {
  const photoGallery = post ? post['Photo Gallery'].split(',') : []
  const firstPhoto = photoGallery[0]
  const title = post ? post.title : ''
  const summary = post ? post.summary : ''
  const slug = post ? post.slug : ''
  const date = post ? post.date : new Date()
  const tag = post ? post.tags[0].replace(/-/g, ' ') : ''
  const tagLink = post ? post.tags[0] : '#'
  return (
    <>
    <Head>
      <title>{title} • {WEB.name}</title>
      <meta name="description" content={summary} />
      <meta property="og:locale" content={WEB.lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta
        property="og:url"
        content={`${WEB.link}/${slug}`}
      />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      <meta
        property="og:image"
        content={firstPhoto}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:title" content={`${title} • ${WEB.name}`} />
      <meta
        property="twitter:image"
        content={firstPhoto}
      />
    </Head>
    <div className="relative my-8">
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        zoom={true}
        navigation={true}
        autoHeight={true}
        spaceBetween={20}
        pagination={{
          clickable: true
        }} className="bg-gradient-to-t from-black">
          {photoGallery.map((photo) => (
            <SwiperSlide key={photo}>
              <div className='swiper-zoom-container'>
                <img src={photo} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black h-32">
        <ul className="max-w-7xl mx-auto px-3 text-gray-400 flex space-x-3 text-xs">
          <li><Link href="/search"><a>Stock</a></Link></li>
          <li>&raquo; <Link href={`/tag/${tagLink}`}><a className="capitalize">{tag}</a></Link></li>
        </ul>
        <h1 className="my-5 text-white text-lg md:text-5xl text-center">{title}</h1>
      </div>
    </div>
    <article className="max-w-7xl mx-auto px-3 lg:px-0 mb-10">
      {blockMap && (
        <NotionRenderer
          recordMap={blockMap}
          components={{
            equation: Equation,
            code: Code,
            collectionRow: CollectionRow,
            Collection: Collection
          }}
          mapPageUrl={mapPageUrl}
        />
      )}
    </article>
    <footer className="md:hidden flex items-center justify-center w-full h-24 text-white">
      <a
        className="flex items-center justify-center font-sans"
        href="https://mcstech.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        MCS DEV RESOURCES
      </a>
    </footer>
    </>
  )
}

CarPage.getLayout = function getLayout (page) {
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
      </Layout>
    </>
  )
}
