import Image from 'next/image'
import { navigation } from './header.homepage'

import RedShoes from '../public/redshoes.jpeg'

export default function Footer () {
  return (
    <footer className="max-w-7xl mx-auto px-4 lg:px-8 mt-10 mb-32 md:mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 box-border text-white">
        <div>
          <h3 className="uppercase text-red-800 text-xs font-bold mb-2">{'// Business'}</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1">
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
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <span className="text-xs font-sans text-gray-700">FROM</span>
        <a href="https://www.youtube.com/channel/UCi2Ca9_6t9trKeJOugAbRng">
          <Image src={RedShoes} />
        </a>
        <a
          className="flex items-center justify-center font-sans text-gray-500 text-sm"
          href="https://mcstech.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          MCS DEV RESOURCES
        </a>
      </div>
    </footer>
  )
}
