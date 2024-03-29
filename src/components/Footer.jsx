"use client"

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { navigation } from './Header'
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '@/components/SocialIcons'
import logoFacebook from '@/images/logos/facebook.svg'
import RedShoes from '@/images/RS_002.svg'
import Mudah from '@/images/mudah.gif'
import Telegram from '@/images/telegram.svg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 lg:px-8 mb-32 md:mb-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container.Outer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 box-border text-white">
          <div>
            <h3 className="uppercase text-red-800 text-xs font-bold mb-2">{'// Business'}</h3>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-700 dark:text-zinc-300 hover:text-red-600 px-3 rounded-md text-xs font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/client"
                className="text-zinc-700 dark:text-zinc-300 hover:text-red-600 px-3 rounded-md text-xs font-medium"
              >
                Client
              </Link>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-red-800 text-xs font-bold mb-2">{'// Support'}</h3>
            <div className="text-xs text-zinc-700 dark:text-zinc-300 space-y-3">
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
                <address className="text-xs font-sans not-italic">No 253 Jalan Ampang Hilir Off Jalan U-Thant 50450 Kuala Lumpur</address>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs font-sans text-gray-700">FROM</span>
            <a className="w-28" href="https://www.youtube.com/channel/UCi2Ca9_6t9trKeJOugAbRng">
              <Image src={RedShoes} alt="Redshoes" unoptimized />
            </a>
          </div>
          <div className="flex space-x-3 justify-center md:justify-start lg:pl-3">
            <SocialLink className="w-6 h-6" href="https://youtube.com/luxoticars" icon={YoutubeIcon} />
            <SocialLink className="w-6 h-6" href="https://facebook.com/luxoticars" icon={FacebookIcon} />
            <SocialLink className="w-6 h-6" href="https://instagram.com/luxoticars" icon={InstagramIcon} />
            <a href="https://www.tiktok.com/@luxoticars">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 39" className="fill-current">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <path d="M14,15.5986129 L14,14.1133768 C13.4492134,14.040368 12.8937601,14.0024884 12.3374825,14 C5.53458031,14 0,19.1804477 0,25.5469912 C0,29.4523859 2.08560208,32.9095062 5.26712374,35 C3.13682443,32.8679456 1.95248926,30.057585 1.95420355,27.138627 C1.95420355,20.862785 7.33129202,15.7451306 14,15.5986129" id="路径" fill="#00F2EA"></path>
                    <path d="M14.3270124,32 C17.2025642,32 19.5483859,29.7265698 19.6552148,26.893337 L19.6649265,1.60131615 L24.3141914,1.60131615 C24.2149367,1.07323659 24.1646956,0.537213101 24.1641012,0 L17.8144025,0 L17.8038079,25.2928983 C17.6978619,28.1252536 15.3511573,30.3978064 12.4764884,30.3978064 C11.6134296,30.3981458 10.7633314,30.1891169 10,29.7888676 C10.9999544,31.1753424 12.6105704,31.998378 14.3270124,32 M32.9991171,10.1861256 L32.9991171,8.7804771 C31.2904862,8.78205509 29.6185303,8.28804731 28.1882845,7.35903482 C29.4422255,8.79389849 31.1305958,9.78588899 33,10.1861256" id="形状" fill="#00F2EA"></path>
                    <path d="M28,7.71784336 C26.6016465,6.13450916 25.8314253,4.10280973 25.8323547,2 L24.1350558,2 C24.579153,4.34872233 25.9758497,6.41501163 28,7.71784336 M12.3253083,20.0652472 C9.38563022,20.0686094 7.00339763,22.426024 7,25.3350766 C7.00190968,27.2938688 8.10083201,29.0902144 9.85378743,30 C9.1988984,29.1062913 8.84622242,28.0306091 8.84615385,26.9266592 C8.84906616,24.0172662 11.2314406,21.6593213 14.1714621,21.6559582 C14.7201996,21.6559582 15.2460364,21.7457353 15.7428068,21.9000125 L15.7428068,15.4996887 C15.2222255,15.4267223 14.6972334,15.3888647 14.1714621,15.3863778 C14.0789783,15.3863778 13.988256,15.3916075 13.896653,15.3933508 L13.896653,20.3093015 C13.388489,20.1492295 12.8585935,20.0669285 12.3253083,20.0652472" id="形状" fill="#FF004F"></path>
                    <path d="M32.1532084,11.0008735 L32.1532084,15.8838834 C28.868262,15.8838834 25.8255034,14.841767 23.3402168,13.072877 L23.3402168,25.8412053 C23.3402168,32.2179445 18.1107231,37.4058149 11.6817395,37.4058149 C9.19733366,37.4058149 6.89346776,36.6283768 5,35.3093527 C7.2006955,37.6633081 10.2910883,39.0007866 13.5276504,39 C19.956634,39 25.1870084,33.8121292 25.1870084,27.4362636 L25.1870084,14.6679353 C27.7544407,16.4991162 30.8377082,17.4825603 34,17.4789417 L34,11.1947963 C33.3659085,11.1947963 32.7494306,11.1266613 32.1532084,11" id="路径" fill="#FF004F"></path>
                    <path d="M23.9786547,25.4190568 L23.9786547,12.6326996 C26.6066739,14.4666805 29.7629082,15.4515361 33,15.4476752 L33,10.5577705 C31.0913787,10.1583421 29.3677274,9.16907377 28.0877076,7.7384212 C26.0159757,6.43090073 24.5864469,4.3571751 24.1319103,2 L19.384593,2 L19.3746765,27.2149377 C19.2655946,30.0386608 16.8702998,32.3051622 13.934103,32.3051622 C12.1814976,32.3034007 10.5369778,31.4829054 9.51583447,30.1007687 C7.7213232,29.1879457 6.59619217,27.3850884 6.59406171,25.4190568 C6.59753921,22.4995348 9.03577081,20.1336362 12.0445517,20.1302619 C12.6052869,20.1302619 13.1434845,20.2194873 13.6528339,20.3751945 L13.6528339,15.4415519 C7.20167505,15.5885114 2,20.7215992 2,27.0163673 C2,30.0605298 3.2188327,32.8317673 5.20484485,34.9014479 C7.20695433,36.2690564 9.59610241,37.0020908 12.0445517,37 C18.6255271,37 23.9786547,31.8047999 23.9786547,25.4190568" id="路径" fill="currentColor"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://www.mudah.my/luxoticars">
              <Image src={Mudah} width={33} height={28} alt={`Luxoticars on Mudah.my`} />
            </a>
            <a href="https://t.me/luxoticars">
              <Image width={28} height={28} src={Telegram} alt={`Join Luxoticars on Telegram`} />
            </a>
          </div>
        </div>
      </Container.Outer>
    </footer>
  )
}
