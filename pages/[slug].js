/* eslint-disable @next/next/no-img-element */
import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Zoom,
  Navigation,
  Pagination
} from 'swiper'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'beautiful-react-hooks'

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
  return {
    props: { post, blockMap },
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

export default function CarPage ({ post, blockMap }) {
  const photoGallery = post ? post['Photo Gallery'].split(',') : []
  const interiorGallery = post ? post['Interior Photos'].split(',') : []
  const title = post ? post.title : 'Loading'
  const summary = post ? post.summary : 'Loading'
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
  const renderExteriorGalleryClassname = useMemo(() => {
    if (!router.query.gallery) {
      return 'border-b border-red-600 border-b-2'
    }
    if (router.query.gallery === 'exterior') {
      return 'border-b border-red-600 border-b-2'
    }
  }, [router.query])
  const renderTrimsSpecsClassname = useMemo(() => {
    if (router.query.tab) {
      if (router.query.tab === 'trims-specs') {
        return 'border-b border-red-600 border-b-4'
      }
    }
  }, [router.query])
  const renderInteriorGalleryClassname = useMemo(() => {
    if (router.query.gallery === 'interior') {
      return 'border-b border-red-600 border-b-2'
    }
  }, [router.query])
  const isLarge = useMediaQuery('(min-width: 48rem)')

  return (
    <>
    <NextSeo
      title={`${post.title} • ${WEB.name}`}
      description={summary}
      canonical={`${WEB.link}/${slug}`}
      openGraph={{
        url: `${WEB.link}/${slug}`,
        title,
        description: summary,
        images: photoGallery.map(photo => ({
          url: photo,
          type: 'image/jpeg'
        })),
        type: 'article',
        article: {
          publishedTime: post.createdTime,
          section: post.tags[0]
        }
      }}
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Stocks',
          item: `${WEB.link}/search`
        },
        {
          position: 2,
          name: post.tags[0].replace(/-/g, ' ').replace(/_/g, ' '),
          item: `${WEB.link}/tag/${post.tags[0]}`
        }
      ]}
    />
    <ProductJsonLd
      productName={title}
      images={photoGallery.map(photo => photo)}
      description={summary}
      color={post.exterior_color}
      manufacturerName={post.tags[0].replace(/-/g, ' ').replace(/_/g, ' ')}
      manufacturerLogo={`${WEB.link}/brands/colors/${post.tags[0]}.svg`}
    />
    <div className="max-w-7xl mx-auto pt-10 px-3">
      <ul className="px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)] max-w-full text-gray-400 flex space-x-3 text-xs">
        <li><Link href="/search"><a>Stock</a></Link></li>
        <li>&raquo;</li>
        <li><Link href={`/tag/${tagLink}`}><a className="capitalize">{tag}</a></Link></li>
      </ul>
    </div>
    <div className="max-w-7xl mx-auto px-3 flex items-center justify-center">
      {post['Interior Photos'] && (
        <ul className="text-gray-400 flex space-x-3 text-xs">
          <li className="text-gray-500 font-semibold">View:</li>
          <li className={renderExteriorGalleryClassname}><Link href={`/${post.slug}?gallery=exterior`}><a>Exterior</a></Link></li>
          <li>|</li>
          <li className={renderInteriorGalleryClassname}><Link href={`/${post.slug}?gallery=interior`}><a>Interior</a></Link></li>
        </ul>
      )}
    </div>
    <div className="relative mt-3 mb-8">
      {(!router.query.gallery || router.query.gallery === 'exterior') && (
        <Swiper
          style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
          zoom={true}
          navigation={true}
          autoHeight={true}
          slidesPerView={isLarge ? 'auto' : 1}
          centeredSlides={true}
          // spaceBetween={}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          className="min-h-full h-72">
            {photoGallery.map((photo) => (
              <SwiperSlide key={photo}>
                <div className="swiper-zoom-container">
                  <img src={photo} className="min-h-full" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      {(router.query.gallery || router.query.gallery === 'interior') && (
        <Swiper
          style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
          zoom={true}
          navigation={true}
          // autoHeight={true}
          slidesPerView={isLarge ? 2 : 'auto'}
          centeredSlides={true}
          // spaceBetween={}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          className="min-h-full h-72">
            {interiorGallery.map((photo) => (
              <SwiperSlide key={photo}>
                <div className="swiper-zoom-container">
                  <img src={photo} className="min-h-full" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <div className="absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-black max-w-7xl xl:max-w-screen-2xl mx-auto">
        <h1 className="my-5 text-white text-lg md:text-5xl text-center w-[var(--notion-max-width)] px-[2vw] xl:px-[calc(min(12px,8vw))] mx-auto max-w-full">{title}</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-full py-3 bg-black text-gray-400 z-10 uppercase text-xs px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)] mx-auto">{summary}</div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="max-w-full mx-auto px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)]">
        <span className="text-gray-500 text-xs">Published on {formatDate(post?.date?.start_date || post.createdTime, 'en')}</span>
        <h4 className="font-semibold uppercase font-sans text-white text-3xl">OVERVIEW</h4>
        <ul className="text-gray-400 flex space-x-3 text-xs my-6">
          <li className={renderKeyFeaturesClassname}><Link href={`/${post.slug}?tab=key-features`}><a>Key Features</a></Link></li>
          <li>|</li>
          <li className={renderTrimsSpecsClassname}><Link href={`/${post.slug}?tab=trims-specs`}><a>Trims & Specs</a></Link></li>
        </ul>
      </div>
    </div>
    {(!router.query.tab || router.query.tab === 'key-features') && (
      <article className="max-w-7xl mx-auto mb-10">
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
      <div className="max-w-7xl mx-auto">
        <article className="max-w-full mx-auto mb-10 px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)]">
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
      </div>
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
