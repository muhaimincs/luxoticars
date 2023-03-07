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
        <h1 className="hidden xl:block text-xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
          Clients
        </h1>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item, index) => (
            <article key={index} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <Image src={item.images} alt={item.name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
              <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                <Link href={item.url}>
                  {item.name}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </Container>
      <div className="py-10">
        <Footer />
      </div>
    </>
  )
}
