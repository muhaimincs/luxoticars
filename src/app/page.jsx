import Image from 'next/image'

import { getAllArticles } from '@/lib/getAllArticles'
import { Container } from '@/components/Container'
import YouTube from './(homepage)/YouTube'
import avatarFont from '@/images/LUXOTICARS_WHITE_FONT.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateAlgoliaSearches } from '@/lib/generateAlgoliaSearches'

export default async function Page() {
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
  const cars = (await getAllArticles())
    .slice(0, 4)
    .map(({ component, ...meta }) => meta)

  return (
    <>
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
      <YouTube brands={brands} cars={cars} />
    </>
  )
}