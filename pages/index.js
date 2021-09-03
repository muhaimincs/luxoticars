import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/layout.homepage';
import Header from '../components/header.homepage';
import YoutubeList from '../components/youtube-homepage';

import WelcomeImg from '../public/img/welcome.jpeg';

export default function Home() {
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
      {/* <Image
        alt="Luxoticars"
        src={WelcomeImg}
        layout="fill"
        objectFit="contain"
        quality={100}
      /> */}
    </div>
    <div className="max-w-7xl mx-auto w-full sm:px-6 lg:px-8 px-3 py-6">
      <h1 className="text-white text-3xl md:text-center font-sans">Importer for Rare, Classic & Exotic Vehicle</h1>
    </div>
    <YoutubeList />
    <div className="max-w-7xl w-full px-3 py-6">
      <h1 className="text-white text-3xl">Why Us?</h1>
      <p>Luxoticars, we pride ourselves through the industry’s recognition as one of the pioneer retailers of classic, rare, collectible & exotic cars. With an extensive international network & experience in sourcing, purchasing and selling vehicles to customers worldwide, our team is well prepared to provide fully tailored services for buyers on their next acquisition.</p>
    </div>
    <footer className="flex items-center justify-center w-full h-24">
      <a
        className="flex items-center justify-center font-sans"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Luxoticars</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/e3/Skull-Icon.svg" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Header />
        {page}
      </Layout>
    </>
  )
}
