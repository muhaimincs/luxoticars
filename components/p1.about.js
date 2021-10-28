import Image from 'next/image'
import { useViewportScroll, useTransform, motion, useAnimation } from 'framer-motion'

import WEB from '../web.config'
import AboutImage from '../public/img/p1.jpeg'

export default function P1About () {
  const controls = useAnimation()
  const scrollAmount = 350
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, scrollAmount], [0, 1])
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ['blur(16px)', 'blur(0px)']
  )

  return (
    <motion.section
        className="max-w-prose mx-auto pb-3 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
        animate={controls}
        style={{
          opacity,
          filter
        }}
      >
        <div className="bg-[rgba(43,43,43,.2)] border border-[rgba(151,151,151,.16)] p-8 backdrop-filter backdrop-blur-lg">
          <p className="mt-8 text-xl text-white leading-8">
            {WEB.name} is reimagining luxory car platform to make it easier to own life long dream car.
          </p>
          <p className="mt-2 text-xs lg:text-sm text-gray-500 leading-8">
            We are driven to create on-demand buying experience and financing with transparency and nearly seamless end-to-end service.
            Founded and led by Abu Garciá, the company is renowned for its world-class
          </p>
          <div className="my-3 rounded-xl overflow-hidden">
            <Image
              src={AboutImage}
              alt={`About ${WEB.name}`}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
    </motion.section>
  )
}
