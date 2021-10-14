/* eslint-disable @next/next/no-page-custom-font */
import Image from 'next/image'
import Head from 'next/head'
import { navigation } from './header.homepage'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'

import RedShoes from '../public/RS_002.svg'
import WEB from '../web.config'

export default function Footer ({ className }) {
  return (
    <footer className={className || 'max-w-7xl mx-auto px-4 lg:px-8 mt-10 mb-32 md:mb-10'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 box-border text-white">
        <div>
          <h3 className="uppercase text-red-800 text-xs font-bold mb-2">{'// Business'}</h3>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-600 px-3 rounded-md text-xs font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="uppercase text-red-800 text-xs font-bold mb-2">{'// Support'}</h3>
          <div className="text-xs space-y-3">
            <div className="flex space-x-3 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </div>
              <a href="tel:+60173283839">+6017 328 3839</a>
            </div>
            <div className="flex space-x-3 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p>Sun to Fri / 10AM to Midnight</p>
            </div>
            <div className="flex space-x-3 items-center">
              <div className="transform scale-x-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <address className="text-xs font-sans text-white not-italic">No 253 Jalan Ampang Hilir Off Jalan U-Thant 50450 Kuala Lumpur</address>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xs font-sans text-gray-700">FROM</span>
          <a
            className="flex items-center justify-center font-sans text-gray-500 text-sm"
            href="https://mcstech.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCS DEV RESOURCES
          </a>
          <p className="text-xs font-sans text-gray-700">&</p>
          <a className="w-28" href="https://www.youtube.com/channel/UCi2Ca9_6t9trKeJOugAbRng">
            <Image src={RedShoes} layout="intrinsic" />
          </a>
        </div>
      </div>
      <LogoJsonLd
        logo={`${WEB.link}/LUXOTICARS.svg`}
        url={WEB.link}
      />
      <SocialProfileJsonLd
        type="Person"
        name="luxoticars"
        url={WEB.link}
        sameAs={[
          'http://www.facebook.com/luxoticars',
          'http://instagram.com/luxoticars',
          'http://www.tiktok.com/@luxoticars'
        ]}
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap"
          rel="stylesheet"
        />
        {/* <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
          />
        </noscript> */}
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      </Head>
    </footer>
  )
}
