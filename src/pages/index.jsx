import Head from 'next/head'
import dynamic from 'next/dynamic'
import { LazyMotion, domAnimation } from 'framer-motion'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateAlgoliaSearches } from '@/lib/generateAlgoliaSearches'
import { getAllArticles } from '@/lib/getAllArticles'

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
        <title>LUXOTICARS - Car lifestyle</title>
      </Head>
      <LazyMotion features={domAnimation}>
        {cars.map((car) => (
          <Car key={car.slug} car={car} />
        ))}
      </LazyMotion>
      <section
        className="h-screen relative snap-normal snap-center"
        id="brands"
        aria-labelledby="brands-title"
      >
        <div className='mx-auto max-w-7xl px-4 pt-28 pb-10'>
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
