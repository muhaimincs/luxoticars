import 'tailwindcss/tailwind.css'
import '../styles/notion.css'
import 'swiper/css/bundle'
import 'swiper/css'

import { useEffect } from 'react'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

import WEB from '../web.config'
import { GTM_ID, pageview } from '../lib/gtm'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return getLayout(
    <>
      <DefaultSeo
        title={WEB.name}
        description={WEB.description}
        openGraph={{
          type: 'website',
          locale: WEB.lang,
          url: WEB.link,
          site_name: WEB.name,
          images: [{
            url: `${WEB.link}/img/default.png`,
            width: 1024,
            height: 512,
            alt: WEB.name
          }]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[{
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        }, {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        }]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/LUXOTICARS_GRADIENT_SKULL.svg'
          }, {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: true
          }, {
            rel: 'preload',
            href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional'
          }, {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional'
          }, {
            rel: 'preload',
            href: 'https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap'
          }, {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap'
          }
        ]}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
