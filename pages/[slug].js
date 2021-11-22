/* eslint-disable @next/next/no-img-element */
import 'rc-dropdown/assets/index.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from 'next-seo'
import { NotionRenderer, Equation, Code, CollectionRow, Collection } from 'react-notion-x'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'beautiful-react-hooks'

import WEB from '../web.config'
import { getAllPosts, getPostBlocks } from '../lib/notion'
import { getCarPhotos } from '../lib/contentful'
import formatDate from '../lib/formatDate'
import Layout from '../components/layout.homepage'

const mapPageUrl = id => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

export async function getStaticProps ({ params: { slug }, preview }) {
  const posts = await getAllPosts({ includePages: false })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  const externalSource = await getCarPhotos(slug, preview)
  let exteriorPhotos = post?.['Photo Gallery'] 
    ? post?.['Photo Gallery'].split(',')
    : []
  let interiorPhotos = post?.['Interior Photos']
    ? post?.['Interior Photos'].split(',')
    : ''
  const brandName = post.tags[0]?.replace(/-/g, ' ')
  if (externalSource.length) {
    exteriorPhotos = externalSource[0].photos.map((img) => ({
      url: `https:${img?.fields?.file?.url}`,
      details: img?.fields?.file?.details,
      contentType: img?.fields?.file?.contentType
    }))
    if (externalSource[0].interiorPhotos) { 
      interiorPhotos = externalSource[0].interiorPhotos.map((img) => 
        ({ url: `https:${img?.fields?.file?.url}` })
      )
    }
  }
  return {
    props: {
      post: {
        ...post,
        brandName,
        exteriorPhotos,
        'Interior Photos': interiorPhotos,
      },
      blockMap
    },
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

const ComfortAssistance = dynamic(
  () => import('../components/comfort-assistance.car'), {
    ssr: false
  }
)
const Interior = dynamic(
  () => import('../components/interior.car'), {
    ssr: false
  }
)
const AudioCommunication = dynamic(
  () => import('../components/audio-communication.car'), {
    ssr: false
  }
)
const Wheels = dynamic(
  () => import('../components/wheels.car'), {
    ssr: false
  }
)

const PhotoBigLayout = dynamic(
  () => import('../components/cars/overview')
)
export default function CarPage ({ post, blockMap }) {
  const interiorGallery = post && post['Interior Photos'] ? post['Interior Photos'] : []
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
      return 'border-b border-red-600 border-b-2 text-white'
    }
    if (router.query.gallery === 'exterior') {
      return 'border-b border-red-600 border-b-2 text-white'
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
      return 'border-b border-red-600 border-b-2 text-white'
    }
    return ''
  }, [router.query])
  const isLarge = useMediaQuery('(min-width: 48rem)')

  return (
    <>
    <NextSeo
      title={`${post?.title} • ${WEB.name}`}
      description={post?.summary}
      canonical={`${WEB.link}/${post?.slug}`}
      openGraph={{
        url: `${WEB.link}/${post?.slug}`,
        title: post?.title,
        description: post?.summary,
        images: post?.exteriorPhotos.map(photo => ({
          url: photo?.url,
          type: photo?.contentType,
          width: photo?.details?.image?.width,
          height: photo?.details?.image?.height
        })),
        type: 'article',
        article: {
          publishedTime: post?.date?.start_date,
          section: post?.tags[0]
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
          name: post?.tags[0]?.replace(/-/g, ' ').replace(/_/g, ' '),
          item: `${WEB.link}/tag/${post?.tags[0]}`
        }
      ]}
    />
    <ProductJsonLd
      productName={post?.title}
      images={post?.exteriorPhotos.map(photo => photo?.url)}
      description={post?.summary}
      color={post?.exterior_color}
      manufacturerName={post?.tags[0]?.replace(/-/g, ' ').replace(/_/g, ' ')}
      manufacturerLogo={`${WEB.link}/brands/colors/${post?.tags[0]}.svg`}
    />
    <aside className="max-w-7xl mx-auto pt-10 px-3 flex justify-between">
      <ul className="px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)] max-w-full text-gray-400 flex space-x-3 text-xs flex-shrink">
        <li><Link href="/search"><a>Stock</a></Link></li>
        <li>&raquo;</li>
        <li><Link href={`/tag/${post?.tags[0]}`}><a className="capitalize">{post?.brandName}</a></Link></li>
      </ul>
      {interiorGallery?.length && (
        <ul className="text-gray-400 flex space-x-3 text-xs">
          <li className="text-gray-500 font-semibold">View:</li>
          <li className={renderExteriorGalleryClassname}><Link href={`/${post?.slug}?gallery=exterior`}><a>Exterior</a></Link></li>
          <li>|</li>
          <li className={renderInteriorGalleryClassname}><Link href={`/${post?.slug}?gallery=interior`}><a>Interior</a></Link></li>
        </ul>
      )}
    </aside>
    <div className="relative mt-3 mb-8">
      {(!router.query.gallery || router.query.gallery === 'exterior')
        ? (
          <PhotoBigLayout
            photos={post?.exteriorPhotos.map((photo) => {
              const url = photo?.url ? photo.url : photo
              return { 
                width: photo?.details?.image?.width,
                height: photo?.details?.image?.height,
                name: post?.title,
                url
              }
            })}
            isLarge={isLarge}
            defaultAlt={post?.title}
          />
          )
        : (
        <PhotoBigLayout
          photos={interiorGallery?.map((photo) => ({ url: photo }))}
          isLarge={isLarge}
          defaultAlt={post?.title}
        />
          )}
      <div className="absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-black max-w-7xl xl:max-w-screen-2xl mx-auto">
        <h1 className="my-5 text-white text-lg md:text-5xl text-center w-[var(--notion-max-width)] px-[2vw] xl:px-[calc(min(12px,8vw))] mx-auto max-w-full">{post?.title}</h1>
      </div>
      <details className="max-w-7xl mx-auto">
        <summary className="max-w-full py-3 bg-black text-gray-400 z-10 uppercase text-xs px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)] mx-auto">{post?.summary}</summary>
      </details>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="max-w-full mx-auto px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)]">
        <span className="text-gray-500 text-xs">Published on {formatDate(post?.date?.start_date || post?.createdTime, 'en')}</span>
        <h4 className="font-semibold uppercase font-sans text-white text-3xl">OVERVIEW</h4>
        <ul className="text-gray-400 flex space-x-3 text-xs my-6">
          <li className={renderKeyFeaturesClassname}><Link href={`/${post?.slug}?tab=key-features`} scroll={false}><a>Key Features</a></Link></li>
          <li>|</li>
          <li className={renderTrimsSpecsClassname}><Link href={`/${post?.slug}?tab=trims-specs`} scroll={false}><a>Trims & Specs</a></Link></li>
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
      <main className="max-w-7xl mx-auto">
        <article className="max-w-full mx-auto mb-10 px-[2vw] xl:px-[calc(min(12px,8vw))] w-[var(--notion-max-width)]">
          <table className="text-left border-collapse">
            <tbody className="align-baseline divide-y divide-gray-400">
              {post?.exterior_color && (
                <tr>
                  <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Exterior Color</td>
                  <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post?.exterior_color}</td>
                </tr>
              )}
              {post?.['First Registration'] && (
                <tr>
                  <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">First Registration</td>
                  <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post?.['First Registration']}</td>
                </tr>
              )}
              {post?.Mileage && (
                <tr>
                  <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Mileage</td>
                  <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right proportional-nums">{post?.Mileage || '-/-'}</td>
                </tr>
              )}
              <ComfortAssistance post={post} />
              <Interior post={post} />
              <AudioCommunication post={post} />
              <Wheels post={post} />
            </tbody>
          </table>
        </article>
      </main>
    )}
    </>
  )
}

CarPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header')
  )
  const Footer = dynamic(
    () => import('../components/footer'),
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
