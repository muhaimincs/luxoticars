import Head from 'next/head'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Car } from '@/components/M/Car'
import { Brands } from '@/components/M/Brands'
import { Button } from '@/components/Button'
import { getAllArticles } from '@/lib/getAllArticles'
import { getCarPhotos } from '@/lib/contentful'
import config from '../../../app.config'

export default function CarsIndex({ cars, brands, prevPosts, nextPosts }) {
  return (
    <>
      <Head>
        <title>Cars - LUXOTICARS</title>
        <meta
          name="description"
          content="Search luxoticars listings in your area. See the most popular used cars for sale, car-buying advice & our loan calculator. Find your perfect car or SUV at luxoticars.cc"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:row-span-2">
            <div className="mx-3 md:mx-auto md:max-w-2xl lg:max-w-5xl">
              <div className="mt-3">
                <a href="https://youtu.be/lkvNgMepNbE" className="inline-flex items-center rounded-full bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 text-xs xl:text-base">
                  <span className="flex md:block rounded-full bg-red-600 p-0.5 md:px-3 md:py-0.5 font-semibold leading-5 md:line-clamp-1">
                    <span className="hidden md:block">NEW</span>
                    <span className="inline-block md:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                    </span>
                  </span>
                  <span className="ml-4 line-clamp-1">DTC CARLIFESTYLE X URBAN AUTOMOTIVE BIG NEWS / SHORT TUESDAY</span>
                </a>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Drive In Style Your Dream Car
            </h1>
            <div className="mt-6 mb-10 text-base text-zinc-600 dark:text-zinc-400">
              <p>Luxoticars is proud to offer wide array of brands. Iconic luxury cars from top brands</p>
            </div>
            <div className="flex max-w-3xl flex-col space-y-4">
              {cars.map((car) => (
                <Car key={car.slug} car={car} />
              ))}
            </div>
            <div className="flex justify-between mt-10">
              {prevPosts && <Button href={`/l/${prevPosts}`}>Prev</Button>}
              {nextPosts && <Button href={`/l/${nextPosts}`}>Next</Button>}
            </div>
          </div>
          <Brands brands={brands} />
        </div>
      </Container>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const startIndex = 0
  const endIndex = config.postsPerPage

  const carsData = (await getAllArticles()).map(({ component, ...meta }) => meta)
  const carsWithPhoto = carsData.map(async (car) => {
    const externalSource = await getCarPhotos(car.slug)
    return {
      ...car,
      externalSource: externalSource.length ? externalSource[0].photos[1] : {}
    }
  })
  const carsFeed = await Promise.all(carsWithPhoto)
  const cars = carsFeed.slice(startIndex, endIndex)
  const prevPosts = null
  const nextPosts = endIndex >= carsFeed.length ? null : 2
  const uniqueBrand = new Set()
  const brands = (await getAllArticles())
    .map(({ component, ...meta }) => ({ brand: meta.brand || null }))
    .filter((item) => {
      const isDuplicate = uniqueBrand.has(item.brand)

      uniqueBrand.add(item.brand)

      if (!isDuplicate) {
        return true;
      }
    
      return false
    })

  return {
    props: {
      cars,
      brands,
      prevPosts,
      nextPosts,
    },
  }
}
