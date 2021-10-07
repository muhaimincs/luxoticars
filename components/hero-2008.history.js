import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import photo2008 from '../public/img/history/2008.jpeg'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Hero2008 = () => {
  const [show, setIsShow] = useState(false)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (!entry.isIntersecting && entry !== undefined) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  }

  useEffect(() => {
    if (window) {
      const observer = new window.IntersectionObserver(handler)
      observer.observe(sentinalRef.current)
    }
  }, [sentinalRef])

  return (
    <div className="grid md:grid-cols-2 gap-4" ref={sentinalRef}>
      <motion.div
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        variants={container}
      >
        <motion.p variants={item} className="text-gray-400 text-xs">2008</motion.p>
        <motion.h2 variants={item} className="text-2xl text-white mb-3 font-sans">The Dream</motion.h2>
        <motion.p variants={item} className="text-sm text-white">From an early age, Abu was able to carve out its own intimate place in which he could focus on reading car magazines, inspired by what he read: just from one of these magazines, he was able to learn on how to connect people to their dream car as well as about the live and businesses of automotives world.</motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        variants={item}
        className="rounded overflow-hidden">
        <Image src={photo2008} height={550} objectPosition="50% 60%" objectFit="cover" />
      </motion.div>
    </div>
  )
}

export default Hero2008
