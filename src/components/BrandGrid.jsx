import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'

export function Brand({ brand, className, nav = false, ...props }) {
  // const router = useRouter()
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])
  let logo = require(`@/images/brands/${brand}.svg`).default

  // if (brand === router?.query?.maker) {
  //   logo = require(`@/images/brands/colors/${brand}.svg`).default
  // }

  return (
    <figure
      className={clsx(
        'relative animate-fade-in overflow-hidden flex justify-center bg-white dark:bg-zinc-800 opacity-0 shadow-md shadow-gray-900/5',
        nav ? 'h-20 w-full lg:h-24 lg:w-24 rounded' : 'h-48 p-6 items-start rounded-3xl',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      {!nav && (
        <p className="mt-4 text-lg lg:text-xl text-center font-semibold leading-6 uppercase z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-zinc-50 backdrop-opacity-10 from-white via-zinc-200 to-transparent subpixel-antialiased">
            {brand}
          </span>
        </p>
      )}
      <Link
        href={`/s/${brand}/1`}
        className={clsx(
          "absolute top-0 left-0 right-0 opacity-60",
          !nav && 'transform scale-110 -rotate-6 translate-y-6 dark:opacity-30',
          nav && 'flex items-center justify-center'
        )}
      >
        <Image src={logo} alt={`${brand} on Luxoticars`} height={nav ? 80 : 300} />
      </Link>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function BrandColumn({
  className,
  cars,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-3 lg:space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {cars.concat(cars).map((car, carIndex) => (
        <Brand
          key={carIndex}
          aria-hidden={carIndex >= cars.length}
          className={reviewClassName(carIndex % cars.length)}
          {...car}
        />
      ))}
    </div>
  )
}

export function BrandGrid(props) {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(props.cars, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative grid h-[70vh] md:h-[90vh] max-h-[150vh] grid-cols-2 items-start gap-3 overflow-hidden px-0 lg:px-4 md:grid-cols-3 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <BrandColumn
            cars={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <BrandColumn
            cars={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <BrandColumn
            cars={columns[2].flat()}
            className="md:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-zinc-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-zinc-900" />
    </div>
  )
}
