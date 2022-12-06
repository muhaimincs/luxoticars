import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, m, useAnimation } from 'framer-motion'

import { Merchandise } from '@/components/Merchandise'
import { Footer } from '@/components/Footer'
import Shopee from '@/images/shopee.svg'
import Img1 from '@/images/merch/img5.jpeg'

export function HomepageFooter() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })
  const [position, setPosition] = useState({
    scrollYProgress,
    opacity: 1,
    filter: 'blur(0px)'
  })
  const controls = useAnimation()
  
  const opacityVal = useTransform(position?.scrollYProgress, [0.5, 0.3], [1, 0.3])
  const filterVal = useTransform(
    position?.scrollYProgress,
    [0.5, 0.3],
    ['blur(0px)', 'blur(4px)']
  )

  useEffect(() => {
    function updatePosition() {
      setPosition({
        opacity: opacityVal,
        filter: filterVal,
        scrollYProgress,
      })
    }
    window.addEventListener("scroll", updatePosition)
    return () => window.removeEventListener("scroll", updatePosition)
  }, [scrollYProgress, opacityVal, filterVal])

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto">
          <m.div
            animate={controls}
            className="blur-0"
            style={{
              '--tw-blur': position.filter.current,
              opacity: position.opacity.current,
            }}
          >
            <Image src={Img1} className="h-screen object-cover object-center" alt="Luxoticars Wear and Style" />
          </m.div>
        </div>
      </div>
      <section
        className="pb-10"
        id="brands"
        aria-labelledby="brands-title"
      >
        <div className='pt-10 pb-16'>
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex justify-between items-end">
              <p className="dark:text-zinc-300">The Luxoticars Collection</p>
              <a href="https://shp.ee/i6sjx9t" target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-3">
                <span>Visit</span><Image src={Shopee} width={16} height={16} />
              </a>
            </div>
            <h2
              id="reviews-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-zinc-50 from-zinc-900 dark:to-zinc-300 to-zinc-100 subpixel-antialiased">
                Wear &amp; Style
              </span>
            </h2>
          </div>
          <Merchandise />
        </div>
        <div className="mx-auto max-w-6xl px-4">
        <Footer />
        </div>
      </section>
    </div>
  )
}