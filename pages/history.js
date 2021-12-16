import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import WEB from '../web.config'

const Mission = dynamic(
  () => import('../components/mission.about'),
  { ssr: false }
)
const P1 = dynamic(
  () => import('../components/p1.about'),
  { ssr: false }
)
const Parallex = dynamic(
  () => import('../components/parallex.about'),
  { ssr: false }
)
export default function HistoryPage() {
  return (
    <>
      <Mission />
      <P1 />
      <Parallex />
      {/* <div className="mt-6 prose prose-indigo prose-lg text-gray-300 mx-auto">
        <blockquote>
          <p>
          Sale is an important position across a variety of fields. It is generally recognized that sales promotion is not a noble job and that it will be badly affected by routines, cheating of money, etc. I’ve noticed that just because a single poisonous thought permeates the public's knowledge about the sales world. Frankly, I am very proud as a salesman in my current field of the automobile business, as the founder of two of my companies- Luxuticars and Motorsports Signature.
          </p>
        </blockquote>
        <blockquote>
          <p>
          I firmly believe that the sales profession is very worthy of the hard work and effort to achieve sales success. Therefore, I hope that through my experience, stories, and online media promotional videos, I can guide everyone to change this conservative idea. Remember, every industry can be the champion and create talents. Negative attitudes can be toxic and contagious. It is essential to keep us in a positive environment-both internally and externally
          </p>
        </blockquote>
        <blockquote>
          <p>
          I don't believe in luck nor if you're gifted; There are no secrets to success. It is the result of preparation, hard work, learning from failure to achieve your goal in life.
          </p>
        </blockquote>
      </div> */}
    </>
  )
}

HistoryPage.getLayout = function getLayout(page) {
  const Header = dynamic(
    () => import('../components/header'),
    { ssr: false }
  )
  const Hero = dynamic(
    () => import('../components/hero.about'),
    { ssr: false }
  )
  return (
    <>
      <NextSeo
        title={`History • ${WEB.name}`}
        description="LUXOTICARS is centre of record-breaking mega and hyper cars, based in Kuala Lumpur, MY"
        canonical={`${WEB.link}/history/`}
        openGraph={{
          url: `${WEB.link}/history/`,
          title: `History • ${WEB.name}`,
          description: 'LUXOTICARS is centre of record-breaking mega and hyper cars, based in Kuala Lumpur, MY'
        }}
      />
      <Header />
      <Hero />
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <section
          className="relative py-36 lg:pt-96"
          aria-labelledby="about-heading"
        >
          {page}
        </section>
      </div>
    </>
  )
}
