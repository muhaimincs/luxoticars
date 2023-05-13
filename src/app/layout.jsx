import Script from 'next/script'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

export const metadata = {
  title: {
    template: '%s | LUXOTICARS',
  },
  description: 'The Syndicate Carlifestyle Cartel',
  image: 'https://www.luxoticars.cc/og-image.png',
  url: 'https://www.luxoticars.cc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.luxoticars.cc',
    title: {
      template: '%s | LUXOTICARS',
    },
    description: 'The Syndicate Carlifestyle Cartel',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 670,
      },
    ],
    site_name: 'LUXOTICARS',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'LUXOTICARS',
      template: '%s | LUXOTICARS',
    },
    description: 'The Syndicate Carlifestyle Cartel',
    // siteId: '1467726470533754880',
    creator: '@luxoticars_',
    // creatorId: '1467726470533754880',
    images: ['https://www.luxoticars.cc/opengraph-image.png'],
  },
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#7c1f07' },
  ],
  msApplicationTileColor: '#000000',
  metadataBase: new URL('https://www.luxoticars.cc'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  bookmarks: ['https://www.luxoticars.cc'],
}

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function RootLayout({ children }) {
  return (
    <html className="h-full antialiased" lang="en">
      <head>
        <link rel="preconnect" href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`} crossOrigin="true" />
        <Script dangerouslySetInnerHTML={{ __html: modeScript }} strategy="afterInteractive" />
      </head>
      <body className="bg-black m-0 p-0 scroll-smooth">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}