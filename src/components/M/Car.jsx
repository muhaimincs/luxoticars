import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'

export function Car({ car }) {
  const router = useRouter()
  const { externalSource } = car
  const coverImage = useMemo(() => {
    if (!Object.keys(externalSource).length) {
      return null
    }

    const imgurl = externalSource?.fields?.file?.url
    const imgW = externalSource?.fields?.file?.details?.image?.width
    const imgH = externalSource?.fields?.file?.details?.image?.height
    return (
      <div className="relative w-full h-full overflow-hidden">
        <Image src={`https:${imgurl}`} alt={`${car.title} on Luxoticars`} width={imgW} height={imgH} />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
      </div>
    )
  }, [externalSource])

  if (!router?.query?.brand) {
    return (
      <car className="relative">
        {coverImage}        
        <Card className="md:col-span-3">
          <h2 className="relative text-xl">
            <Link href={`/m/${car.slug}#display`} className="bg-clip-text text-transparent bg-gradient-to-b dark:from-zinc-50 from-zinc-900 dark:to-zinc-300 to-zinc-100 subpixel-antialiased">
              {car.title}
            </Link>
          </h2>
          <Card.Eyebrow
            as="time"
            dateTime={car.date}
            className="md:hidden mb-0 z-0"
            decorate
          >
            {formatDate(car.date)}
          </Card.Eyebrow>
        </Card>
      </car>
    )
  }

  if (router?.query?.brand !== car?.brand) {
    return null
  }

  return (
    <article className="relative">
      {coverImage}        
      <Card className="md:col-span-3">
        <h2 className="relative text-xl">
          <Link href={`/m/${car.slug}#display`} className="bg-clip-text text-transparent bg-gradient-to-b dark:from-zinc-50 from-zinc-900 dark:to-zinc-300 to-zinc-100 subpixel-antialiased">
            {car.title}
          </Link>
        </h2>
        <Card.Eyebrow
          as="time"
          dateTime={car.date}
          className="md:hidden mb-0"
          decorate
        >
          {formatDate(car.date)}
        </Card.Eyebrow>
      </Card>
    </article>
  )
}
