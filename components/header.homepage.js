import { Fragment, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  // Menu,
  Transition,
  Popover
} from '@headlessui/react'
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll
} from 'body-scroll-lock'
import Image from 'next/image'

import s from './header.homepage.module.css'
import WEB from '../web.config'
import LuxoticarsLogo from '../public/LUXOTICARS.svg'
import LuxoticarsWhiteFont from '../public/LUXOTICARS_WHITE_FONT.svg'
import Mudah from '../public/img/props/mudah.gif'
import Telegram from '../public/img/props/telegram.svg'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const navigation = [
  { name: 'About', href: '/history', current: false },
  { name: 'Stock', href: '/search', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Client', href: '/client', current: false },
  { name: 'Lifestyle', href: 'https://shop.luxoticars.my', current: false }
]

export default function Example () {
  const sentinalRef = useRef([])
  const navRef = useRef(null)
  const mainNav = useRef(null)
  const contentRef = useRef()
  const router = useRouter()
  const logoClassName = useMemo(() => {
    if (router.pathname === '/gallery') {
      return 'hidden md:block lg:hidden'
    }
    return 'block lg:hidden'
  }, [router.pathname])
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add(s.glass)
        navRef.current.classList.add(s['navref-glass'])
        navRef.current.classList.add('translate-y-0')
        navRef.current.classList.remove('translate-y-full')

        mainNav.current.classList.add(s.glass)
      } else {
        navRef.current.classList.remove(s.glass)
        navRef.current.classList.remove(s['navref-glass'])
        navRef.current.classList.remove('translate-y-0')
        navRef.current.classList.add('translate-y-full')

        mainNav.current.classList.remove(s.glass)
      }
    }
  }

  useEffect(() => {
    if (window) {
      const observer = new window.IntersectionObserver(handler)
      observer.observe(sentinalRef.current)
    }
  }, [sentinalRef])

  useEffect(() => {
    const contentElement = contentRef.current
    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true })
    }

    return () => {
      if (contentElement) enableBodyScroll(contentElement)
      clearAllBodyScrollLocks()
      contentRef.current = null
    }
  }, [contentRef.current])

  return (
    <>
    <div className={`observer-element ${s.sentinel}`} ref={sentinalRef} />
    <Popover className={s.nav}>
      {({ open }) => (
        <>
          <div ref={mainNav} className={s['main-nav']}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden pl-2 pr-5">
                  {/* Mobile menu button */}
                  <Popover.Button className="bg-gray-700/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </Popover.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <a className={logoClassName}>
                        <Image src={LuxoticarsLogo} alt="Luxoticars" height={52} width={34} />
                      </a>
                    </Link>
                    <div className="hidden lg:block w-auto">
                      <Link href="/">
                        <a className="flex items-center text-white space-x-4">
                          <Image src={LuxoticarsLogo} alt="Luxoticars" height={52} width={34} />
                          <div className="relative">
                            <Image src={LuxoticarsWhiteFont} alt="Luxoticars" height={19} width={300} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button> */}

                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-500 px-3 py-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="hidden lg:block self-center ml-2">Media Partner</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>
          </div>
          <div id="bottom" ref={navRef} className={s['bottom-nav']}>
            <div className="relative flex items-center justify-between h-16 sm:px-6 lg:px-8">
              <div className="bg-transparent flex items-center pl-2 pr-5">
                {/* Mobile menu button */}
                <Popover.Button className={s['popover-button']}>
                  <span className="sr-only">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </Popover.Button>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                <Image src={LuxoticarsLogo} alt="Luxoticars" height={52} width={34} />
                <div className="relative">
                  <Image src={LuxoticarsWhiteFont} alt="Luxoticars" height={10} width={158} />
                </div>
              </div>
            </div>
            <div className={s.copyright}>
              Copyright © 2021 Luxoticars Sdn. Bhd. All rights reserved.
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="bg-black fixed inset-0 md:hidden z-50">
              <div className="flex flex-col justify-between h-screen" ref={contentRef}>
                <div className="pt-5 px-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Link href="/">
                        <a className="mx-3 w-10">
                          <Image src={LuxoticarsLogo} alt="Luxoticars" height={150} width={98} />
                        </a>
                      </Link>
                      <Image src={LuxoticarsWhiteFont} alt="Luxoticars" width={140} layout="intrinsic" />
                    </div>
                    <div>
                      <Popover.Button className={s['popover-button']}>
                        <span className="sr-only">Close menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                        <a
                          className="-my-3 py-3 flex items-center rounded-md hover:bg-gray-900"
                        >
                          <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                        </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-3 pt-4 pb-28">
                  <p className="font-sans font-semibold text-white">Visit us:</p>
                  <address className="text-xs font-sans text-white pb-3">No 253 Jalan Ampang Hilir Off Jalan U-Thant 50450 Kuala Lumpur</address>
                  <p className="text-white text-xs">Copyright © 2021 Luxoticars Sdn. Bhd. All rights reserved.</p>
                  <ul className="text-white text-xs flex items-center space-x-2 pt-0 py-6">
                    <li className={s['flex-items-center']}>
                      <a>Terms & Conditions</a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-4 h-5 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </li>
                    <li className={s['flex-items-center']}>
                      <a>Privacy</a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-4 h-5 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </li>
                    <li className={s['flex-items-center']}>
                      <a>Cookie Preference</a>
                    </li>
                  </ul>
                  <div className="flex space-x-3">
                    <a href="https://youtube.com/luxoticars">
                      <svg viewBox="0 0 24 24" className="fill-current text-white h-6 w-6">
                        <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
                      </svg>
                    </a>
                    <a href="https://facebook.com/luxoticars">
                      <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 text-white" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="https://instagram.com/luxoticars">
                      <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
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
                      <Image src={Mudah} width={33} height={28} alt={`${WEB.name} on Mudah.my`} />
                    </a>
                    <a href="https://t.me/luxoticars">
                      <Image width={28} height={28} src={Telegram} alt={`Join ${WEB.name} on Telegram`} />
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
    </>
  )
}
