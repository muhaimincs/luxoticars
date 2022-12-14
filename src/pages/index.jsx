import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { LazyMotion, domAnimation } from 'framer-motion'

import avatarFont from '@/images/LUXOTICARS_WHITE_FONT.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateAlgoliaSearches } from '@/lib/generateAlgoliaSearches'
import { getAllArticles } from '@/lib/getAllArticles'
import { Container } from '@/components/Container'
import { YTList } from '@/components/YTList'
import ytList from '../../yt-list.json'

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
      </div>
      <YTList data={ytList} />
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
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]">
          <div className="scale-[calc(16/9)] md:scale-100">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="aspect-square h-full w-full md:aspect-video"
            >
              <source src="/vids/montage.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute -inset-px bg-gray-900/50" />
          <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-gray-900" />
          <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-gray-900 lg:block" />
        </div>
      </div>
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
