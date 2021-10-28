import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
  visible: { scale: 1 },
  hidden: {
    scale: 0.95
  }
}

export default function MissionAbout () {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  return (
    <motion.section
      className="max-w-prose mx-auto mb-10 p-8"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2 }}
      initial="hidden"
      exit="hidden"
      ref={ref}
    >
      <h1 className="font-sans">
        <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
          Our Mission
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
          Malaysian&apos;s go-to personal luxury car platform
        </span>
      </h1>
    </motion.section>
  )
}
