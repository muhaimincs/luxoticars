import Link from 'next/link'

import WEB from '../web.config'
import Brands from './brands.carousel'

export default function BrandsHomepage ({ tags }) {
  const slice1 = Object.keys(tags).slice(0, WEB.postsPerPage)
  const slice2 = Object.keys(tags).slice(
    WEB.postsPerPage * (2 - 1),
    WEB.postsPerPage * 2
  )
  return (
    <div className="border border border-gray-600 rounded-xl bg-gray-900 overflow-hidden pb-16">
      <p className="text-sm uppercase text-gray-500 mx-6 mt-10">for enthusiast</p>
      <h4 className="text-3xl text-gray-300 mx-6 font-semibold mb-8 tracking-wide">The brands you love. From a place you can trust.</h4>
      <Brands tags={slice1} />
      <div className="h-16 bg-transparent" />
      <Brands tags={slice2} dur={50} />
      <Link href="/search">
        <a
          className="uppercase text-xs mt-10 mx-6 block py-3 px-5 bg-white border border-transparent rounded-md text-red-700 hover:bg-gray-50 font-semibold ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700"
        >
          Explore &rarr;
        </a>
      </Link>
    </div>
  )
}
