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
    <section className="relative lg:mb-10">
      <div className="lg:rounded-md lg:overflow-hidden sticky top-0 left-0 right-0 w-full h-screen max-w-6xl max-h-screen min-h-screen mx-auto">
        <div className="relative">
          <div
            className='absolute top-[26rem] md:top-[38rem] lg:top-[30rem] right-0 left-0'
          >
            <div className='mx-auto max-w-sm md:max-w-7xl mb-2'>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-white uppercase px-4 tracking-tight">
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-b backdrop-opacity-10 from-white via-zinc-200 to-transparent`}
                >
                  {car.title}
                </span>
              </h2>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-0">
              <div className="before:mt-3 before:md:mt-0 before:h-10 before:block before:absolute before:inset-0 before:bg-[length:15px_15px] before:backdrop-brightness-90 before:backdrop-blur-[20px]">
                <div className="flex justify-between items-center">
                  <div className="grow overflow-hidden h-[30px]">
                    <div className="animate-text-slidedown">
                      {car.highlights.map((highlight) => (
                        <div key={highlight} className="relative text-white text-base font-bold uppercase tracking-widest line-clamp-1">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-none z-10 relative">
                    <Link
                      href={`/m/${car.slug}#display`}
                      className="p-6 md:px-3 md:py-2 flex items-center justify-center rounded-full shadow-md shadow-red-800/5 ring-slate-300 transition border border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
                    >
                      <div className="text-xs font-medium text-zinc-100 hidden sm:block">Further Information</div>
                      <div className="font-medium text-zinc-100 block sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mt-10">
                <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-zinc-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
              <p className="text-center text-xs uppercase text-zinc-300 italic">Scroll to explore</p>
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
        className="h-[70vh]"
        id="Car Model"
        aria-labelledby="car-model"
      />
    </section>
  )
}
