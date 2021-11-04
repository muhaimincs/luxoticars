import Link from 'next/link'

import Brands from './brands.carousel'

const perRow = 6

export default function BrandsHomepage ({ tags }) {
  const slice1 = Object.keys(tags).slice(0, perRow)
  const slice2 = Object.keys(tags).slice(
    perRow * (2 - 1),
    perRow * 2
  )
  return (
    <div className="border border border-gray-600 rounded-xl bg-gray-900 overflow-hidden pb-16">
      <p className="text-sm uppercase text-gray-500 mx-6 mt-10">for enthusiast</p>
      <h4 className="text-3xl text-gray-300 mx-6 font-semibold mb-8 tracking-wide">The brands you love. From a place you can trust.</h4>
      <Brands tags={slice1} />
      <div className="h-16 bg-transparent" />
      <Brands tags={slice2} dur={50} />
      <div className="my-12 mx-6">
        <Link href="/search" prefetch={false}>
          <a className="bg-white text-gray-800 py-4 text-lg px-3 ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700">&rsaquo; Explore</a>
        </Link>
      </div>
    </div>
  )
}
