/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/layout.homepage'
export default function HistoryPage () {
  const History = dynamic(
    () => import('../components/history'),
    { ssr: false }
  )
  return (
    <>
    <History />
    </>
  )
}

HistoryPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header.homepage'),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>History • Luxoticars</title>
        <meta name="description" content="A TIMELESS INTERPRETATION OF THE AUTOMOTIVE SALES ART" />
        <meta property="og:locale" content="en-GB" />
        <meta property="og:title" content="Luxoticars History" />
        <meta property="og:description" content="A TIMELESS INTERPRETATION OF THE AUTOMOTIVE SALES ART" />
        <meta property="og:url" content="https://luxoticars.my/history" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="A TIMELESS INTERPRETATION OF THE AUTOMOTIVE SALES ART" />
        <meta name="twitter:title" content="Luxoticars History" />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
        />
      </Head>
      <Layout>
        <Header />
        {page}
      </Layout>
    </>
  )
}
