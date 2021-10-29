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
    <section
        className="max-w-7xl lg:max-w-prose mx-auto"
        aria-labelledby="contact-heading"
      >
        <motion.div
          animate={controls}
          style={{
            opacity
          }}
          className="bg-[rgba(43,43,43,.2)] border border-[rgba(151,151,151,.16)] backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
          <p className="px-3 py-10  text-xs lg:text-sm text-gray-300 leading-snug md:leading-8">
            We are driven to create on-demand buying experience and financing with transparency and nearly seamless end-to-end service.
            Founded and led by Abu Garciá, the company is renowned for its world-class
          </p>
          <div className="rounded-b-xl overflow-hidden">
            <Image
              src={AboutImage}
              alt={`About ${WEB.name}`}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </motion.div>
        <motion.p
          className="text-xl text-white leading-8 my-10 text-center"
          animate={controls}
          style={{
            opacity,
            filter
          }}>
          {WEB.name} is reimagining luxory car platform to make it easier to own life long dream car.
        </motion.p>
    </section>
  )
}
