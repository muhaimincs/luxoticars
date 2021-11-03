import dynamic from 'next/dynamic'
import { LocalBusinessJsonLd } from 'next-seo'

import WEB from '../web.config'
import { getAllPosts, getAllTagsFromPosts } from '../lib/notion'
import { getCarPhotos } from '../lib/contentful'
import WelcomeText from '../components/welcomeText'
import Header from '../components/header.homepage'
import Layout from '../components/layout.homepage'

export async function getStaticProps ({ preview = false }) {
  function arraySort (f) {
    for (let i = this.length; i;) {
      const o = this[--i]
      this[i] = [].concat(f.call(o, o, i), o)
    }
    this.sort(function (a, b) {
      for (let i = 0, len = a.length; i < len; ++i) {
        if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1
      }
      return 0
    })
    for (let i = this.length; i;) {
      this[--i] = this[i][this[i].length - 1]
    }
    return this
  }

  if (typeof Object.defineProperty === 'function') {
    try {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Array.prototype, 'sortBy', { value: arraySort })
    } catch (e) {

    }
  }
  if (!Array.prototype.sortBy) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.sortBy = arraySort
  }

  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const post = posts.sortBy((o) => -new Date(o.date.start_date))[0]
  const externalSource = await getCarPhotos(post.slug, preview);
  return {
    props: {
      tags,
      post: {
        ...post,
        externalSource: externalSource
      }
    },
    revalidate: 1
  }
}

export default function Home ({ tags, post }) {
  const Carousel = dynamic(
    () => import('../components/carousel.homepage'),
    { ssr: false }
  )
  const BrandsCarousel = dynamic(
    () => import('../components/brands.homepage'),
    { ssr: false }
  )
  const LatestPublish = dynamic(
    () => import('../components/latest-publish.homepage'),
    { ssr: false }
  )
  const SocialLife = dynamic(
    () => import('../components/clients.homepage'),
    { ssr: false }
  )
  const YoutubeList = dynamic(
    () => import('../components/youtube-homepage'),
    { ssr: false }
  )

  return (
    <>
    <Carousel />
    <WelcomeText />
    <YoutubeList />
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
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
