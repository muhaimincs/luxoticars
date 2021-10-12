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
        }]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/LUXOTICARS_GRADIENT_SKULL.svg'
          }
        ]}
      />
      <Gtag />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
