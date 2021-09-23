import 'tailwindcss/tailwind.css'
import '../styles/notion.css'

import dynamic from 'next/dynamic'

const Gtag = dynamic(() => import('../components/Gtag'), { ssr: false })

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Gtag />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
