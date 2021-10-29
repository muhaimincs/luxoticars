import Image from 'next/image'
import { useViewportScroll, useTransform, motion, useAnimation } from 'framer-motion'

import WEB from '../web.config'
import AboutImage from '../public/img/about.jpeg'

export default function HeroAbout () {
  const controls = useAnimation()
  const scrollAmount = 150
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0.75])
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ['blur(0px)', 'blur(16px)']
  )
  const opacityBottom = useTransform(scrollY, [0, scrollAmount], [1, 0])

  return (
    <>
    <div className="fixed inset-0 z-[-10]">
      <motion.div
        className="relative w-[48rem] lg:w-[90rem] h-[48rem] lg:h-screen transform translate-x-[-13.5rem] md:translate-x-0"
        animate={controls}
        style={{
          opacity,
          filter
        }}>
        <Image
          src={AboutImage}
          alt={`About ${WEB.name}`}
          objectFit="cover"
          layout="fill"
        />
      </motion.div>
    </div>
    <motion.div
      animate={controls}
      style={{ opacity: opacityBottom, filter }}
      className="absolute bottom-0 py-10 inset-x-0 max-w-7xl mx-auto flex flex-col items-center justify-center bg-gradient-to-t from-black">
      <span className="text-center text-gray-400">Scroll down</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
    </>
  )
}
