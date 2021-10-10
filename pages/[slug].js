/* eslint-disable @next/next/no-img-element */
import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

import { useMemo } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Zoom,
  Navigation,
  Pagination
} from 'swiper'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import Link from 'next/link'
import { useRouter } from 'next/router'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'
import formatDate from '../lib/formatDate'

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
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: post.title,
    brand: post.tags[0],
    description: post.summary,
    color: [post.exterior_color],
    manufacturer: {
      '@type': 'Organization',
      name: post.tags[0]
    },
    fuelType: 'Available in Petrol'
  }
  return {
    props: { post, blockMap, jsonLD: JSON.stringify(jsonLD) },
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

export default function CarPage ({ post, blockMap, jsonLD }) {
  const photoGallery = post ? post['Photo Gallery'].split(',') : []
  const firstPhoto = photoGallery[0]
  const title = post ? post.title : ''
  const summary = post ? post.summary : ''
  const slug = post ? post.slug : ''
  const tag = post ? post.tags[0].replace(/-/g, ' ') : ''
  const tagLink = post ? post.tags[0] : '#'
  const router = useRouter()
  const renderKeyFeaturesClassname = useMemo(() => {
    if (!router.query.tab) {
      return 'border-b border-red-600 border-b-4'
    }
    if (router.query.tab === 'key-features') {
      return 'border-b border-red-600 border-b-4'
    }
  }, [router.query])
  const renderTrimsSpecsClassname = useMemo(() => {
    if (router.query.tab) {
      if (router.query.tab === 'trims-specs') {
        return 'border-b border-red-600 border-b-4'
      }
    }
  }, [router.query])
  console.log(router.query.tab)
  return (
    <>
    <Head>
      <title>{title} • {WEB.name}</title>
      <meta name="title" property="og:title" content={title} />
      <meta name="twitter:title" content={`${title} • ${WEB.name}`} />
      <meta name="description" content={summary} />
      <meta property="og:locale" content={WEB.lang} />
      <meta name="shareDiscription" property="og:description" content={summary} />
      <meta
        property="og:url"
        content={`${WEB.link}/${slug}`}
      />
      <meta
        name="image"
        property="og:image"
        content={firstPhoto}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`${WEB.link}/${slug}`}
      />
      <meta name="twitter:description" content={summary} />
      <meta
        property="twitter:image"
        content={firstPhoto}
      />
      <meta
        property="article:published_time"
        content={post.createdTime}
      />
      <meta property="og:type" content="article" />
      <script type="application/ld+json">{jsonLD}</script>
      <link rel="icon" href="/LUXOTICARS_GRADIENT_SKULL.svg" />
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta property="product:category" content="Vehicle" />
    </Head>
    <ul className="max-w-7xl mx-auto px-3 text-gray-400 flex space-x-3 text-xs pt-10">
      <li><Link href="/search"><a>Stock</a></Link></li>
      <li>&raquo;</li>
      <li><Link href={`/tag/${tagLink}`}><a className="capitalize">{tag}</a></Link></li>
    </ul>
    <div className="relative mt-3 mb-8">
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        zoom={true}
        navigation={true}
        autoHeight={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        className="min-h-full h-72">
          {photoGallery.map((photo) => (
            <SwiperSlide key={photo}>
              <div className="swiper-zoom-container">
                <img src={photo} className="min-h-full" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-black">
        <h1 className="my-5 text-white text-lg md:text-5xl text-center mx-10">{title}</h1>
      </div>
      <div className="py-3 bg-black text-gray-400 z-10 px-4 md:px-24 uppercase text-xs">{summary}</div>
    </div>
    <div className="max-w-7xl mx-auto px-3">
      <span className="text-gray-500 text-xs">Published on {formatDate(post?.date?.start_date || post.createdTime, 'en')}</span>
      <h4 className="font-semibold uppercase font-sans text-white text-3xl">OVERVIEW</h4>
      <ul className="text-gray-400 flex space-x-3 text-xs my-6">
        <li className={renderKeyFeaturesClassname}><Link href={`/${post.slug}?tab=key-features`}><a>Key Features</a></Link></li>
        <li>|</li>
        <li className={renderTrimsSpecsClassname}><Link href={`/${post.slug}?tab=trims-specs`}><a>Trims & Specs</a></Link></li>
      </ul>
    </div>
    {(!router.query.tab || router.query.tab === 'key-features') && (
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
    )}
    {router.query.tab === 'trims-specs' && (
      <article className="max-w-7xl mx-auto px-3 lg:px-0 mb-10">
        <table className="w-full text-left border-collapse">
          <tbody className="align-baseline divide-y divide-gray-400">
            {post.exterior_color && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Exterior Color</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post.exterior_color}</td>
              </tr>
            )}
            {post['Leather Seat'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Leather Seat</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Leather Seat']}</td>
              </tr>
            )}
            {post['Heated Front Seat(s)'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Heated Front Seat(s)</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Heated Front Seat(s)']}</td>
              </tr>
            )}
            {post['Premium Sound System'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Premium Sound System</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Premium Sound System']}</td>
              </tr>
            )}
            {post['Bluetooth Connection'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Bluetooth Connection</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Bluetooth Connection']}</td>
              </tr>
            )}
            {post['Navigation System'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Navigation System</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Navigation System']}</td>
              </tr>
            )}
            {post['Smart Device Integration'] && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Smart Device Integration</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Smart Device Integration']}</td>
              </tr>
            )}
            {post.Mileage && (
              <tr>
                <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Mileage</td>
                <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post.Mileage}</td>
              </tr>
            )}
          </tbody>
        </table>
      </article>
    )}
    </>
  )
}

CarPage.getLayout = function getLayout (page) {
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
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  )
}
