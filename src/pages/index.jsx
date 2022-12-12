import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { LazyMotion, domAnimation } from 'framer-motion'

import avatarFont from '@/images/LUXOTICARS_WHITE_FONT.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateAlgoliaSearches } from '@/lib/generateAlgoliaSearches'
import { getAllArticles } from '@/lib/getAllArticles'
import { Container } from '@/components/Container'

const BrandGrid = dynamic(() => import('@/components/BrandGrid').then((mod) => mod.BrandGrid), {
  ssr: false
})
const Car = dynamic(() => import('@/components/Car').then((mod) => mod.Car), {
  ssr: false
})
const HomepageFooter = dynamic(() => import('@/components/Homepage-Footer').then((mod) => mod.HomepageFooter), {
  ssr: false
})

export default function Home({ cars, brands }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Syndicate Carlifestyle Cartel"
        />
        <meta
          key="og:title"
          property="og:title"
          content="LUXOTICARS - Car lifestyle"
        />
        <meta
          property="og:image"
          content="https://luxoticars.cc/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://luxoticars.cc/og-image.png"
        />
        <title>LUXOTICARS - The Syndicate Carlifestyle Cartel</title>
      </Head>
      <div className="relative pt-16">
        <Container className="mt-0 mb-5">
          <div className="max-w-sm flex justify-center pl-24 md:pl-20">
            <Image src={avatarFont} alt="Luxoticars" className=" w-64 md:w-84" priority />
          </div>
        </Container>
        <Container className="mt-0 mb-10">
          <div className="max-w-sm flex justify-center pl-24 md:pl-20">
            <h2 className=" w-64 md:w-64 text-white uppercase tracking-tighter font-mono">The Syndicate Carlifestyle Cartel</h2>
          </div>
        </Container>
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-zinc-900" /> */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-zinc-900" /> */}
      </div>
      <div className="relative mt-10 mb-30">
        <div className="bg-white rounded mx-3 md:mx-auto md:max-w-2xl lg:max-w-5xl overflow-hidden aspect-w-9 md:aspect-w-16 aspect-h-16 md:aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lkvNgMepNbE?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="mx-3 md:mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="mt-3">
            <a href="https://youtu.be/lkvNgMepNbE" className="inline-flex items-center rounded-full bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 text-xs xl:text-base">
              <span className="flex md:block rounded-full bg-red-600 p-0.5 md:px-3 md:py-0.5 font-semibold leading-5 md:line-clamp-1">
                <span className="hidden md:block">Just released</span>
                <span className="inline-block md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </span>
              </span>
              <span className="ml-4 line-clamp-1">DTC CARLIFESTYLE X URBAN AUTOMOTIVE BIG NEWS / SHORT TUESDAY</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-5 w-5 text-gray-500 hidden lg:inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <LazyMotion features={domAnimation}>
        <div className='mx-auto max-w-6xl md:max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
            {cars.map((car) => (
              <Car key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </LazyMotion>
      <section
        className="h-screen relative snap-normal snap-center"
        id="brands"
        aria-labelledby="brands-title"
      >
        <div className='mx-auto max-w-7xl px-4 pt-10 pb-10'>
          <h2
            id="reviews-title"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-zinc-50 from-zinc-900 dark:to-zinc-300 to-zinc-100 subpixel-antialiased">
            World famous cars line up here
            </span>
          </h2>
        </div>
        <div className='mx-auto max-w-xs md:max-w-2xl lg:max-w-5xl'>
          <BrandGrid cars={brands} />
        </div>
      </section>
      <HomepageFooter />
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
    await generateAlgoliaSearches()
  }

  const uniqueBrand = new Set()
  const brands = (await getAllArticles())
    .map(({ component, ...meta }) => meta)
    .filter((item) => {
      const isDuplicate = uniqueBrand.has(item.brand)

      uniqueBrand.add(item.brand)

      if (!isDuplicate) {
        return true
      }
    
      return false
    })

  return {
    props: {
      cars: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
      brands,
    },
  }
}
