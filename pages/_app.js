import 'tailwindcss/tailwind.css'
import '../styles/notion.css'

import dynamic from 'next/dynamic'
import { DefaultSeo } from 'next-seo'
import WEB from '../web.config'

const Gtag = dynamic(() => import('../components/Gtag'), { ssr: false })

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: WEB.lang,
          url: WEB.link,
          site_name: WEB.name
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
            crossorigin: true
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
      <Gtag />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
