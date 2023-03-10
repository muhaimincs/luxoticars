import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { HeroPattern } from '@/components/HeroPattern'
import kazakon from './kazakon/gallery/img1.jpeg'
import icahfa from './icahfa/gallery/img2.jpeg'
import alhumaira from './alhumaira-contemporary/gallery/img1.jpeg'

export const metadata = {
  title: 'My Clients',
  description: 'Tentang client Luxoticars',
  openGraph: {
    title: 'My Clients',
    description: 'Tentang client Luxoticars',
    url: 'https://luxoticars.cc/client',
    siteName: 'Luxoticars',
    locale: 'my-MS',
    type: 'article',
  },
};

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition text-zinc-200 hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-200 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const data = [
  {
    name: 'Kazakon',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: kazakon,
    url: 'kazakon',
  },
  {
    name: 'ICAHFA',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: icahfa,
    url: 'icahfa',
  },
  {
    name: 'Alhumaira Contemporary',
    description: 'Saya berjumpa dan berkenalan dengan En. Faizal pada tahun 2012 melalui walk-in atau walk-in customer.',
    images: alhumaira,
    url: 'alhumaira-contemporary',
  }
]

export default function ClientPage() {
  return (
    <>
      <HeroPattern />
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
          Clients
        </h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          <article className='mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg'>
            <h2 id="featured-post" className='mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl'>
              {data[0].name}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">{data[0].description}</p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <Link href={`/client/${data[0].url}`} className="text-sm font-semibold leading-6 text-red-600">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-300/10">
              {data.slice(1).map((item) => (
                <article className="py-12">
                  <div className="group relative max-w-xl">
                    <h2 className="mt-2 text-lg font-semibold text-gray-300 group-hover:text-red-600">
                      <Link href={`/client/${item.url}`}>
                        <span className='absolute inset-0' />
                        {item.name}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="py-10">
        <Footer />
      </div>
    </>
  )
}
