import { useRef, useLayoutEffect, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

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

function Tag ({ delayPerPixel, i, originIndex, originOffset, children, className }) {
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
    <motion.li
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
      className={className}>
      {children}
    </motion.li>)
}

const Tags = ({ tags, currentTag, className }) => {
  if (!tags) return null

  const delayPerPixel = 0.0008
  const originOffset = useRef({ top: 0, left: 0 })
  const controls = useAnimation()

  const ulClassName = !className
    ? 'flex space-x-3 absolute'
    : className

  useEffect(() => {
    controls.start('visible')
  }, [])

  return (
    <div className="mt-4 flow-root">
      <div className="box-content relative overflow-x-auto h-20">
        <motion.ul className={ulClassName} variants={{}} initial="hidden" animate={controls}>
          {Object.keys(tags).map((key, i) => {
            const selected = key === currentTag
            let title = key.replace(/-/g, ' ')
            title = title.replace(/_/g, ' ')
            return (
              <Tag
                key={key}
                i={i}
                originIndex={26}
                originOffset={originOffset}
                delayPerPixel={delayPerPixel}
                className={`flex-shrink-0 w-32 font-sans font-medium rounded flex flex-col justify-center items-center px-2 py-3 ${
                  selected
                    ? 'text-white bg-gradient-to-t from-gray-500 border-red-600 text-red-600'
                    : 'bg-gradient-to-t from-gray-700 text-gray-200'
                }`}
              >
                <div className="w-8 h-8">
                  <Image src={`/brands/${key}.svg`} width={64} height={64} />
                </div>
                <Link
                  key={key}
                  href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                  replace
                >
                  <a className="block capitalize text-xs text-center">
                    {title}
                  </a>
                </Link>
              </Tag>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}

export default Tags
