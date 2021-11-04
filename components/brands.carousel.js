import { useEffect, useState } from 'react'
import { motion, useTransform, animate, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

function Tags ({ tag, base, index, total }) {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    ['0%', `${(index + 1) * -100}%`, `${total * 100 - (index + 1) * 100}%`, '0%']
  )
  const logo = require(`../public/brands/colors/${tag}.svg`).default

  return (
    <motion.li
      className="flex-none"
      style={{ x }}
    >
      <Link href={`/tag/${tag}`} prefetch={false}>
        <a
          className="flex-none"
          initial={false}
        >
          <div className="bg-white p-3 w-32 h-32 rounded-xl flex items-center justify-center mx-3">
            <Image src={logo} />
          </div>
        </a>
      </Link>
    </motion.li>
  )
}

export default function Brands ({ tags, dur = 150 }) {
  const x = useMotionValue(0)
  const { inView, ref: inViewRef } = useInView({ threshold: 0, rootMargin: '100px' })
  const [duration, setDuration] = useState(dur)

  useEffect(() => {
    if (!inView) return

    const controls = animate(x, 100, {
      type: 'tween',
      duration,
      ease: 'linear',
      loop: Infinity
    })

    return controls.stop
  }, [inView, x, duration])

  return (
    <div
      ref={inViewRef}
      className="relative"
      onMouseEnter={() => setDuration(250)}
      onMouseLeave={() => setDuration(150)}
    >
      <div
        className="absolute right-0 bottom-1/2 left-0 pointer-events-none"
        style={{ height: 607, maxHeight: '50vh' }}
      />
      <div className="flex overflow-hidden -my-8">
        <ul className="flex items-center w-full py-8">
          {tags.map((tag, i) => (
            <Tags
              key={i}
              tag={tag}
              base={x}
              index={i}
              total={tags.length}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
