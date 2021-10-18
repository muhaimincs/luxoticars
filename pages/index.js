/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import WEB from '../web.config'
import { getAllPosts, getAllTagsFromPosts } from '../lib/notion'
import YoutubeList from '../components/youtube-homepage'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags
    },
    revalidate: 1
  }
}

export default function Home ({ tags }) {
  const Carousel = dynamic(
    () => import('../components/carousel.homepage'),
    { ssr: false }
  )

  const BrandsCarousel = dynamic(
    () => import('../components/brands.carousel'),
    { ssr: false }
  )
  const WelcomeText = dynamic(
    () => import('../components/welcomeText'),
    { ssr: false }
  )
  const tags2 = Object.keys(tags).sort().reduce(
    (obj, key) => {
      obj[key] = tags[key]
      return obj
    },
    {}
  )

  return (
    <>
    <Carousel />
    <WelcomeText />
    <YoutubeList />
    <div className="max-w-7xl mx-auto w-screen px-3">
      <div className="border border border-gray-600 rounded-xl bg-gray-900 overflow-hidden pb-16">
        <p className="text-sm uppercase text-gray-500 mx-6 mt-10">for enthusiast</p>
        <h4 className="text-3xl text-gray-300 mx-6 font-semibold mb-8 tracking-wide">The brands you love. From a place you can trust.</h4>
        <BrandsCarousel tags={tags} />
        <div className="h-16 bg-transparent" />
        <BrandsCarousel tags={tags2} dur={50} />
        <Link href="/search">
          <a
            className="mt-10 mx-6 block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-red-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
          >
            Explore &rarr;
          </a>
        </Link>
      </div>
    </div>
    <div className="max-w-7xl mx-auto bg-white w-28 h-1 rounded-xl my-6" />
    {/* <h3
      className="uppercase text-xl text-gray-400 px-3 font-semibold py-6 flex items-center justify-center text-center before:border-4 before:w-[10%] before:border-red-600 before:flex-grow before:transform before:-skew-x-12 before:mr-10 after:border-4 after:w-[10%] after:border-red-600 after:flex-grow after:transform after:skew-x-12 after:ml-10"
    >
      Features
    </h3> */}
    <div className="max-w-7xl text-white mx-auto w-full px-3 py-6">
      <h1 className="text-3xl mb-3">Why Us?</h1>
      <p className="text-xs">Luxoticars, we pride ourselves through the industry’s recognition as one of the pioneer retailers of classic, rare, collectible & exotic cars. With an extensive international network & experience in sourcing, purchasing and selling vehicles to customers worldwide, our team is well prepared to provide fully tailored services for buyers on their next acquisition.</p>
    </div>
    </>
  )
}

Home.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header.homepage'),
    { ssr: false }
  )
  const Footer = dynamic(
    () => import('../components/footer'),
    { ssr: false }
  )
  const Layout = dynamic(
    () => import('../components/layout.homepage'),
    { ssr: false }
  )
  const SaleSection = dynamic(
    () => import('../components/sale-section'),
    { ssr: false }
  )
  return (
    <>
      <Head>
        <title>LUXOTICARS</title>
        <meta name="description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta property="og:locale" content={WEB.lang} />
        <meta property="og:title" content="LUXOTICARS" />
        <meta property="og:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta
          property="og:url"
          content={`${WEB.link}/gallery`}
        />
        <meta
          property="og:image"
          content="https://ipfs.fleek.co/ipfs/bafybeiefqbyugqurya5gqqlk6ez2hbbu7xxidj3vugmhvqhjsz2fml6f3y"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Luxoticars has a decade of experience selling reconditioned cars. An influencer of luxury and exotic cars" />
        <meta name="twitter:title" content="LUXOTICARS" />
        <meta
          property="twitter:image"
          content="https://ipfs.fleek.co/ipfs/bafybeiefqbyugqurya5gqqlk6ez2hbbu7xxidj3vugmhvqhjsz2fml6f3y"
        />
        <meta property="business:contact_data:street_address" content="No 253 Jalan Ampang Hilir Off Jalan U-Thant 50450 Kuala Lumpur" />
        <meta property="business:contact_data:locality" content="Kuala Lumpur" />
        <meta property="business:contact_data:region" content="Kuala Lumpur" />
        <meta property="business:contact_data:country_name" content="Malaysia" />
        <link rel="icon" href="/LUXOTICARS_GRADIENT_SKULL.svg" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
      </Head>
      <Layout>
        <Header />
        {page}
        <SaleSection />
        <Footer />
      </Layout>
    </>
  )
}
