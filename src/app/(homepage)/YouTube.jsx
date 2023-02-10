"use client"

import { useRef } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

import { YTList } from '@/components/YTList'
import { Car } from '@/components/Car'
import { BrandGrid } from '@/components/BrandGrid'
import { HomepageFooter } from '@/components/Homepage-Footer'
import { HomepageTeaser } from '@/components/HomepageTeaser'
import ytList from '../../../yt-list.json'

export default function YouTube({ cars, brands }) {
  let ref = useRef(null)

  return (
    <>
      <YTList data={ytList} ref={ref} />
      <LazyMotion features={domAnimation}>
        <div className='mx-auto max-w-6xl md:max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
            {cars.map((car) => (
              <Car key={car.slug} car={car} />
            ))}
          </div>
        </div>
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
        <HomepageTeaser source='/vids/montage.mp4' ref={ref} />
      </LazyMotion>
    </>
  )
}