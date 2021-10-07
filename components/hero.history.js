import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import s from './hero.module.css'

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: delayRef => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current }
  })
}

function TextHero ({ delayPerPixel, i, originIndex, originOffset, children, className }) {
  const delayRef = useRef(0)
  const offset = useRef({ top: 0, left: 0 })
  const ref = useRef()

  // The measurement for all elements happens in the layoutEffect cycle
  // This ensures that when we calculate distance in the effect cycle
  // all elements have already been measured
  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    }

    if (i === originIndex) {
      originOffset.current = offset.current
    }
  }, [delayPerPixel])

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left)
    const dy = Math.abs(offset.current.top - originOffset.current.top)
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    delayRef.current = d * delayPerPixel
  }, [delayPerPixel])

  return (
    <motion.span
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
      className={className}>
      {children}
    </motion.span>)
}

const texts = [
  'A TIMELESS INTERPRETATION OF',
  'THE LUXURY AUTOMOTIVE SALES ART'
]

const Hero = () => {
  const delayPerPixel = 0.0008
  const originOffset = useRef({ top: 0, left: 0 })
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [])

  return (
    <div id="hero" className={s.hero}>
      <motion.h1 initial="hidden" animate={controls} className={s.h1} variants={{}}>
        {texts.map((text, i) => (
          <TextHero
            key={text}
            i={i}
            originIndex={26}
            originOffset={originOffset}
            delayPerPixel={delayPerPixel}
            className={i === 1 ? 'block font-semibold bg-clip-text text-transparent bg-gradient-to-l from-red-500 via-red-700 to-red-600' : ''}>
              {text}
            </TextHero>
        ))}
      </motion.h1>
      <style jsx>{`
        #hero {
          background-image: url(https://res.cloudinary.com/dkgbrdmj4/image/upload/c_crop,g_center,w_1280,x_0/fl_tiled,l_LUXOTICARS:bg-pattern_eu5ben,o_63/v1633583974/LUXOTICARS/photo_2021-10-07_13.18.45_kz9nxi.webp);
        }
      `}</style>
    </div>
  )
}

export default Hero
