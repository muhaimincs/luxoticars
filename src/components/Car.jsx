import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'

import { getCarPhotos } from '@/lib/contentful'

export function Car({ car }) {
  const [photo, setPhoto] = useState(undefined)

  useEffect(() => {
    if (photo === undefined) {
      async function getPhotos() {
        const externalSource = await getCarPhotos(car.slug)
        const images = externalSource.reduce((acc, item) => {
          for (const photo of item.photos) {
            acc.push({
              url: `https:${photo?.fields?.file?.url}`,
              details: photo?.fields?.file?.details,
              contentType: photo?.fields?.file?.contentType
            })
          }
          return acc
        }, [])
        setPhoto(images.length ? images[0].url : 'https://images.ctfassets.net/ijuxqf6x1pz2/7FR7gcsgPku4v5no3PTaTY/ecc0f465ed8831470c75f01427b9bfe2/photo_2022-09-18_14.16.32.jpeg')
      }
      getPhotos()
    }
  }, [photo])

  return (
    <section className="relative">
      <div className="sticky top-0 left-0 right-0 w-full h-screen max-w-7xl max-h-screen min-h-screen mx-auto">
        <div className="relative">
          <div
            className='absolute top-[40rem] md:top-[60rem] right-0 left-0'
            // initial={{ opacity: 0, translateY: 100 }}
            // whileInView={{ opacity: 1, translateY: 10 }}
            // transition={{
            //   type: "spring",
            //   stiffness: 400,
            //   damping: 40
            // }}
          >
            <div className='mx-auto max-w-7xl'>
              <h2 className="text-2xl md:text-3xl lg:text-5xl lg:text-center font-medium text-white uppercase px-4 tracking-tight">
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-b backdrop-opacity-10 from-white via-zinc-200 to-transparent`}
                >
                  {car.title}
                </span>
              </h2>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-0 overflow-hidden">
              <div className="flex justify-between items-center before:block before:absolute before:inset-0 before:bg-[length:15px_15px] before:backdrop-brightness-90 before:backdrop-blur-[20px] footer--homepage-item">
                <div className="flex-1 overflow-hidden h-[65px]">
                  <div className="animate-text-slidedown">
                    {car.highlights.map((highlight) => (
                      <div key={highlight} className="relative h-[45px] text-ellipsis overflow-hidden uppercase mt-3">
                        <div className="text-white inline-block leading-10 font-mono line-clamp-1">{highlight}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 md:hidden"></span>
                  <Link
                    href={`/m/${car.slug}#display`}
                    className="shrink-0 z-10 p-6 md:px-3 md:py-2 flex items-center justify-center rounded-full bg-white shadow-md shadow-red-800/5 ring-1 ring-red-600 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                  >
                    <div className="text-xs font-medium text-zinc-800 dark:text-zinc-100 hidden sm:block">Further Information</div>
                    <div className="font-medium text-zinc-800 dark:text-zinc-100 block sm:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <m.img
          src={photo}
          alt={car.title}
          className="w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
      <div
        className="h-[50vh]"
        id="Car Model"
        aria-labelledby="car-model"
      />
    </section>
  )
}
