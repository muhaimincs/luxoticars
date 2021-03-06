import { useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CarouselJsonLd, NewsArticleJsonLd } from 'next-seo'
import { useDimensions } from 'react-hook-dimensions'

import formatDate from '../lib/formatDate'
import WEB from '../web.config'

export default function LatestPublish({ post }) {
  const brand = require(`../public/brands/colors/${post?.tags[0]}.svg`)
  const name = `${post?.Year} ${post?.title}`
  const photos = useMemo(() => {
    if (post?.externalSource) {
      if (post.externalSource.length) {
        const images = post.externalSource[0].photos.map((photo) => {
          return `https:${photo.fields.file.url}?fm=webp`
        })
        return images
      }
    }
    return post?.['Photo Gallery'].split(',')
  }, [post])
  const mileage = post?.Mileage || '- / -'
  const exteriorColor = post?.exterior_color || '-'
  const renderSubPhotosClassnames = useMemo(() => {
    if (photos[3]) {
      return 'grid grid-cols-3 gap-0'
    }
    return 'grid grid-cols-2 gap-0'
  }, [photos])
  const [elementRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
    defaults: {
      height: 300,
      scrollY: 150
    },
    layoutEffect: true
  })

  useEffect(() => {
    updateElementDimensions()
  }, [])

  return (
    <div className="relative sm:py-16 lg:py-0">
      <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
        <div className="absolute inset-y-0 right-1/2 w-full bg-gray-900/70 rounded-r-3xl lg:right-72" />
        <svg
          className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
          width={404}
          height={392}
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
        <div className="relative rounded-t-xl overflow-hidden">
          <div className="relative h-64 w-auto" ref={elementRef}>
            <Image
              src={photos[0]}
              alt={`Latest car on ${WEB.name}`}
              objectFit="cover"
              width={elementDimensions.width}
              height={elementDimensions.height}
            />
          </div>
          <div className="absolute bottom-[5px] left-0 m-3 overflow-hidden">
            <div className="max-w-[9rem] relative flex items-center justify-center filter drop-shadow-lg contrast-125">
              <Image
                src={brand}
                alt={post?.tags[0]}
              // width={80}
              // height={80}
              />
            </div>
          </div>
        </div>
        <div className={renderSubPhotosClassnames}>
          <div className="relative h-32 w-auto">
            <Image
              src={photos[1]}
              alt={`Latest car on ${WEB.name}`}
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
          <div className="relative h-32 w-auto">
            <Image
              src={photos[2]}
              alt={`Latest car on ${WEB.name}`}
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
          {photos[3] && (
            <div className="relative h-32 w-auto">
              <Image
                src={photos[3]}
                alt={`Latest car on ${WEB.name}`}
                objectFit="cover"
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
        <div className="relative py-8 px-3 bg-[rgba(25,26,26,1)] rounded-b-xl">
          <blockquote>
            <p className="relative text-xl font-medium text-white md:flex-grow border-b box-content pb-5">{name}</p>
          </blockquote>
          <div className="my-3 grid grid-cols-3 gap-2">
            <p className="text-white tabular-nums box-content border-b pb-3 text-xs">
              {formatDate(post?.date?.start_date || post?.createdTime, 'en')}
            </p>
            <p className="text-white tabular-nums box-content border-b pb-3 text-xs">
              {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {post?.Mileage && <span className="text-gray-600">km</span>}
            </p>
            <p className="text-white box-content border-b pb-3 text-xs">
              {exteriorColor}
            </p>
          </div>
          <div className="my-8 px-2">
            <Link href={`${post?.slug}`} prefetch={false}>
              <a className="bg-white text-gray-800 py-4 text-lg px-3 ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700">&rsaquo; Show Details</a>
            </Link>
          </div>
        </div>
      </div>
      <NewsArticleJsonLd
        url={`${WEB.link}/${post?.slug}`}
        title={post?.title}
        images={photos}
        section="stock"
        datePublished={post?.date?.start_date || post.createdTime}
        dateModified={post?.date?.start_date || post.createdTime}
        authorName="Abu Garci??"
        publisherName="Luxoticars"
        publisherLogo="https://ipfs.fleek.co/ipfs/bafybeiefqbyugqurya5gqqlk6ez2hbbu7xxidj3vugmhvqhjsz2fml6f3y"
        description={post?.summary}
        body={post?.summary}
      />
      <CarouselJsonLd
        type="default"
        data={[
          { url: `${WEB.link}/${post?.slug}` },
        ]}
      />
    </div>
  )
}
