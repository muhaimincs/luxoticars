import dynamic from 'next/dynamic'
import Link from 'next/link'
import { LocalBusinessJsonLd } from 'next-seo'

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
  const slice1 = Object.keys(tags).slice(0, WEB.postsPerPage)
  const slice2 = Object.keys(tags).slice(
    WEB.postsPerPage * (2 - 1),
    WEB.postsPerPage * 2
  )

  return (
    <>
    <Carousel />
    <WelcomeText />
    <YoutubeList />
    <div className="max-w-7xl lg:max-w-3xl mx-auto w-screen px-3">
      <div className="border border border-gray-600 rounded-xl bg-gray-900 overflow-hidden pb-16">
        <p className="text-sm uppercase text-gray-500 mx-6 mt-10">for enthusiast</p>
        <h4 className="text-3xl text-gray-300 mx-6 font-semibold mb-8 tracking-wide">The brands you love. From a place you can trust.</h4>
        <BrandsCarousel tags={slice1} />
        <div className="h-16 bg-transparent" />
        <BrandsCarousel tags={slice2} dur={50} />
        <Link href="/search">
          <a
            className="uppercase text-xs mt-10 mx-6 block py-3 px-5 bg-white border border-transparent rounded-md text-red-700 hover:bg-gray-50 font-semibold ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700"
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
      <LocalBusinessJsonLd
        type="Store"
        id={WEB.link}
        name={WEB.name}
        description={WEB.description}
        telephone={WEB.telephone}
        address={WEB.address}
      />
      <Layout>
        <Header />
        {page}
        <SaleSection />
        <Footer />
      </Layout>
    </>
  )
}
