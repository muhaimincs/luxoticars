/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import WEB from '../web.config'
import { getAllPosts, getAllTagsFromPosts } from '../lib/notion'
import Layout from '../components/layout.homepage'
import Header from '../components/header.homepage'
import YoutubeList from '../components/youtube-homepage'
import Pagination from '../components/pagination'
import Tags from '../components/tags'
import Cars from '../components/cars.post'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const postsToShow = posts.slice(0, WEB.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > WEB.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      tags
    },
    revalidate: 1
  }
}

export default function Home ({ postsToShow, page, showNext, tags }) {
  const router = useRouter()
  const [data, setData] = useState(() => postsToShow)
  const [currentTag, setCurrentTag] = useState('All')

  useEffect(() => {
    if (!router.isReady) return
    const query = router.query
    if (query.tag) {
      const filteredPosts = postsToShow.filter(
        post => post && post.tags && post.tags.includes(query.tag)
      )
      setData(filteredPosts)
    }
  }, [router.isReady, router.query])

  useEffect(() => {
    const query = router.query
    setCurrentTag(query.tag)
  }, [router.query])

  return (
    <>
    <div className="absolute top-0 h-3/4 w-screen overflow-hidden z-[-100]">
      <video
        autoPlay
        loop
        muted
        playsInline="playsinline"
        preload="metadata"
        className="bg-cover object-cover bg-center h-full w-full"
        poster="/img/poster.jpeg"
        data-object-fit="contain"
      >
        <source
          src="/vids/montage.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="max-w-7xl mx-auto h-[61vh] md:h-[calc(100vh-34vh)] lg:h-[64vh] w-screen flex flex-col items-center justify-center space-y-3">
      <img
        className="h-32 opacity-0 md:opacity-100"
        src="/LUXOTICARS.svg"
        alt="luxoticars"
      />
      <img
        className="w-72 max-w-xs"
        src="/LUXOTICARS_WHITE_FONT.svg"
        alt="luxoticars"
      />
      <h1 className="text-white text-xs md:text-5xl md:text-center">The Syndicate Carlifestyle Cartel</h1>
    </div>
    <YoutubeList />
    <Tags tags={tags} currentTag={currentTag} />
    <Cars currentTag={currentTag} posts={data} />
    {showNext && <Pagination page={page} showNext={showNext} />}
    <div className="max-w-7xl text-white mx-auto w-full px-3 py-6">
      <h1 className="text-3xl">Why Us?</h1>
      <p>Luxoticars, we pride ourselves through the industry’s recognition as one of the pioneer retailers of classic, rare, collectible & exotic cars. With an extensive international network & experience in sourcing, purchasing and selling vehicles to customers worldwide, our team is well prepared to provide fully tailored services for buyers on their next acquisition.</p>
    </div>
    <footer className="md:hidden flex items-center justify-center w-full h-24">
      <a
        className="flex items-center justify-center font-sans text-white"
        href="https://mcstech.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        MCS DEV RESOURCES
      </a>
    </footer>
    </>
  )
}

Home.getLayout = function getLayout (page) {
  return (
    <>
      <Head>
        <title>LUXOTICARS</title>
        <link rel="icon" href="/LUXOTICARS_GRADIENT_SKULL.svg" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
      </Head>
      <Layout>
        <Header />
        {page}
      </Layout>
    </>
  )
}
