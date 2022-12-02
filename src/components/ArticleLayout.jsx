import { useState, useEffect, Suspense, useCallback } from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { renderToString } from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from './MDXComponents'
import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { getCarPhotos } from '@/lib/contentful'
import { Footer } from '@/components/Footer'

const Gallery = dynamic(() => import('./Gallery').then((mod) => mod.Gallery), {
  ssr: true
})
const CarPhotos = dynamic(() => import('./car-photos').then((mod) => mod.CarPhotos), {
  ssr: true
})
const ArticleNavBar = dynamic(() => import('./ArticleNavBar').then((mod) => mod.ArticleNavBar), {
  ssr: false,
  // suspense: true
})

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const getHeadings = (source) => {
  const regex = /<h2>(.*?)<\/h2>/g;

  if (source.match(regex)) {
    return source.match(regex).map((heading) => {
      const headingText = heading.replace("<h2>", "").replace("</h2>", "");

      const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

      return {
        text: headingText,
        link,
      };
    });
  }

  return [];
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  const [source, sourceSet] = useState(undefined)
  const [photo, setPhoto] = useState(undefined)
  const [isExternalView, isExternalViewSet] = useState(true)
  const toggleExternalView = useCallback(
    () => isExternalViewSet((state) => !state),
    []
  )
  const pathname = usePathname()
  const contentString = renderToString(children)
  const sections = getHeadings(contentString)

  useEffect(() => {
    if (!isRssFeed) {
      async function getPhotos() {
        const filename = pathname.substring(pathname?.lastIndexOf('/') + 1)
        const externalSource = await getCarPhotos(filename)
        sourceSet(externalSource)
      }
      if (source === undefined) {
        getPhotos()
      }
    }
  }, [isRssFeed, source, pathname])

  useEffect(() => {
    if (source) {
      const images = source.reduce((acc, item) => {
        if (isExternalView) {
          for (const photo of item.photos) {
            acc.push({
              url: `https:${photo?.fields?.file?.url}`,
              details: photo?.fields?.file?.details,
              contentType: photo?.fields?.file?.contentType
            })
          }
        } else {
          for (const photo of item.interiorPhotos) {
            acc.push({
              url: `https:${photo?.fields?.file?.url}`,
              details: photo?.fields?.file?.details,
              contentType: photo?.fields?.file?.contentType
            })
          }
        }
        return acc
      }, [])
      setPhoto(images)
    }
  },[source, isExternalView])

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - LUXOTICARS`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      
      <div className="mx-auto max-w-5xl px-3">
        <div className="mt-10 flex justify-between">
          {previousPathname && (
            <Link
              href={previousPathname}
              aria-label="Go back to car gallery"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:left-10 lg:mb-0 lg:-mt-2 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>
          )}
          <div className='mb-3 flex space-x-3 lg:absolute lg:right-5 lg:-mt-2 xl:right-0 lg:mb-0 xl:mt-0'>
            <button
              type="button"
              onClick={toggleExternalView}
              aria-label="Go back to car gallery"
              className="group flex items-center justify-center rounded-full px-3 bg-white dark:bg-zinc-800 text-zinc-500 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              {isExternalView && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 text-zinc-700 dark:text-zinc-50 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>              
              )}
              Exterior
            </button>
            <button
              type="button"
              onClick={toggleExternalView}
              aria-label="Go back to car gallery"
              className="group flex items-center justify-center rounded-full px-3 bg-white dark:bg-zinc-800 text-zinc-500 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              {!isExternalView && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 text-zinc-700 dark:text-zinc-50 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>              
              )}
              Interior
            </button>
          </div>
        </div>
      </div>
      <div id="display" className="relative mt-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            {photo && (
              <div className="absolute inset-0 overflow-hidden">
                <Gallery
                  photos={photo}
                  title={meta.title}
                />
                {/* <div className="absolute inset-0 bg-white mix-blend-multiply" /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-600 mix-blend-multiply" aria-hidden="true" />
              </div>
            )}
            <CarPhotos
              photos={photo}
              title={meta.title}
            />
          </div>
        </div>
      </div>
      <Container className="mt-16">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              {sections.length > 1 && (
                <Suspense fallback={`Loading...`}>
                  <ArticleNavBar sections={sections} />
                </Suspense>
              )}
              <MDXProvider components={MDXComponents}>
                <Prose className="mt-8">{children}</Prose>
              </MDXProvider>
            </article>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
