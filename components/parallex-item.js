import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import _throttle from 'lodash.throttle'

export const handleScroll = cb => _throttle(cb, 100)
const applyParallax = (scroll, y, amount) => {
  if (scroll > y) {
    const value = (scroll - y) * amount
    return value
  }

  return 0
}

const ParallaxItem = props => {
  const { scroll, ...rest } = props

  const speed = props.speed || -0.02

  const [y, setY] = useState()
  const el = useRef()

  useEffect(() => {
    if (el) {
      window.addEventListener(
        'scroll',
        handleScroll(() => {
          setY(el.current.getBoundingClientRect().top)
        })
      )
    }
  }, [el])

  return (
    <motion.div
      ref={el}
      initial={{ opacity: 1 }}
      animate={{
        opacity: scroll > y ? 1 : 0,
        y: applyParallax(scroll, y, speed)
      }}
      transition={{ duration: 0.5 }}
      {...rest}
    />
  )
}

export default ParallaxItem
