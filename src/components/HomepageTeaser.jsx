import { forwardRef } from 'react'
import { useScroll, useTransform, m } from 'framer-motion'

export const HomepageTeaser = forwardRef(({ source = '/vids/montage.mp4' }, ref) => {
  let { scrollY } = useScroll({ target: ref})
  let y = useTransform(scrollY, [0, 500], ["0%", "50%"])

  return (
    <m.div style={{ y }} className="absolute inset-0 -z-20" >
      <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]">
        <div className="scale-[calc(16/9)] md:scale-100">
          <video
            muted
            playsInline
            autoPlay
            loop
            className="aspect-square h-full w-full md:aspect-video"
          >
            <source src={source} type="video/mp4" />
          </video>
        </div>
        <div className="absolute -inset-px bg-black/50" />
        <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-black lg:block" />
      </div>
    </m.div>
  )
})
