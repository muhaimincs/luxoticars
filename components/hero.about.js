import Image from 'next/image'
import { useViewportScroll, useTransform, motion, useAnimation } from 'framer-motion'

import WEB from '../web.config'
import AboutImage from '../public/img/about.jpeg'

export default function HeroAbout () {
  const controls = useAnimation()
  const scrollAmount = 350
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0])
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ['blur(0px)', 'blur(16px)']
  )

  return (
    <div className="fixed inset-0 h-[75vh] w-full z-[-10] transform scale-150 origin-top-left">
      <motion.div
        className="relative w-screen h-full filter"
        animate={controls}
        style={{
          opacity,
          filter
        }}>
        <Image
          src={AboutImage}
          alt={`About ${WEB.name}`}
          objectFit="cover"
          objectPosition="center"
        />
      </motion.div>
    </div>
  )
}
