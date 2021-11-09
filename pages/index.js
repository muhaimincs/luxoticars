import dynamic from 'next/dynamic'
import { LocalBusinessJsonLd } from 'next-seo'

import WEB from '../web.config'
import { getAllPosts, getAllTagsFromPosts } from '../lib/notion'
import { getCarPhotos } from '../lib/contentful'
import WelcomeText from '../components/welcomeText'
import Header from '../components/header'
import Layout from '../components/layout.homepage'

export async function getStaticProps ({ preview = false }) {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const externalSource = await getCarPhotos(posts[0].slug, preview);
  return {
    props: {
      tags,
      post: {
        ...posts[0],
        externalSource: externalSource
      }
    },
    revalidate: 1
  }
}

const Carousel = dynamic(
  () => import('../components/carousel.homepage'),
)
const BrandsCarousel = dynamic(
  () => import('../components/brands.homepage'),
)
const LatestPublish = dynamic(
  () => import('../components/latest-publish.homepage'),
)
const SocialLife = dynamic(
  () => import('../components/clients.homepage'),
)
const YoutubeList = dynamic(
  () => import('../components/youtube-homepage'),
)

export default function Home ({ tags, post }) {
  return (
    <>
    <Carousel />
    <WelcomeText />
    <YoutubeList />
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start min-h-full">
      <LatestPublish post={post} />
      <div className="px-3 mt-3 md:px-0 md:mt-0">
        <BrandsCarousel tags={tags} />
      </div>
    </div>
    <SocialLife />
    <div className="max-w-7xl text-white mx-auto w-full px-3 py-6">
      <h1 className="text-3xl mb-3">Why Us?</h1>
      <p className="text-xs">Luxoticars, we pride ourselves through the industry’s recognition as one of the pioneer retailers of classic, rare, collectible & exotic cars. With an extensive international network & experience in sourcing, purchasing and selling vehicles to customers worldwide, our team is well prepared to provide fully tailored services for buyers on their next acquisition.</p>
    </div>
    <LocalBusinessJsonLd
      type="Store"
      id={WEB.link}
      name={WEB.name}
      description={WEB.description}
      telephone={WEB.telephone}
      address={WEB.address}
    />
    </>
  )
}

Home.getLayout = function getLayout (page) {
  const Footer = dynamic(
    () => import('../components/footer'),
    { ssr: false }
  )
  const SaleSection = dynamic(
    () => import('../components/sale-section'),
    { ssr: false }
  )
  return (
    <Layout>
      <Header />
      {page}
      <SaleSection />
      <Footer />
    </Layout>
  )
}
