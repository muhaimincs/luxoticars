import { useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  // Menu,
  Popover
} from '@headlessui/react'
import Image from 'next/image'
import { useMediaQuery } from 'beautiful-react-hooks'
import dynamic from 'next/dynamic'

import s from './index.module.css'
import LuxoticarsLogo from '../../public/LUXOTICARS.svg'
import LuxoticarsWhiteFont from '../../public/LUXOTICARS_WHITE_FONT.svg'

const BottomNav = dynamic(() => import('./bottom-nav'))
const MobileNav = dynamic(() => import('./mobile-nav'))

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
  const router = useRouter()
  const isSmall = useMediaQuery('(max-width: 48rem)')
  const logoClassName = useMemo(() => {
    if (['/', '/gallery'].includes(router.pathname)) {
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

  return (
    <>
    <div className={`observer-element ${s.sentinel}`} ref={sentinalRef} />
    <Popover className={s.nav}>
      <div ref={mainNav} className={s['main-nav']}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden pl-2 pr-5">
              {/* Mobile menu button */}
              <Popover.Button className="bg-gray-700/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={s['svg-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex items-center space-x-4">
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
        {isSmall && <BottomNav />}
      </div>
      {isSmall && <MobileNav navigation={navigation} />}
    </Popover>
    </>
  )
}
