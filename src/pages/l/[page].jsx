import Head from 'next/head'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Car } from '@/components/M/Car'
import { Brands } from '@/components/M/Brands'
import { Button } from '@/components/Button'
import { getAllArticles } from '@/lib/getAllArticles'
import { getCarPhotos } from '@/lib/contentful'
import config from '../../../app.config'

const calculatePagesCount = (pageSize, totalCount) => totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize)

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

export async function getStaticProps({ params }) {
  const pageIndex = parseInt(params.page) - 1
  const startIndex = pageIndex * config.postsPerPage
  const endIndex = (pageIndex + 1) * config.postsPerPage

  const carsData = (await getAllArticles()).map(({ component, ...meta }) => meta)
  const carsWithPhoto = carsData.map(async (car) => {
    const externalSource = await getCarPhotos(car.slug)
    return {
      ...car,
      externalSource: externalSource.length ? externalSource[0].photos[1] : {}
    }
  })
  const carsFeed = await Promise.all(carsWithPhoto)

  const prevPosts = pageIndex > 0 ? pageIndex : null
  const nextPosts = endIndex >= carsFeed.length ? null : pageIndex + 2
  const numPages = calculatePagesCount(config.postsPerPage, carsFeed.length)

  const cars = carsFeed.slice(startIndex, endIndex)
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
      pageIndex,
      numPages,
    },
  }
}

export async function getStaticPaths() {
  const numPages = calculatePagesCount(config.postsPerPage, (await getAllArticles()).length)

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}
