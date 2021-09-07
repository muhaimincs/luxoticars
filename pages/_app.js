import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
// import '@/styles/globals.css'
// import '@/styles/notion.css'
import 'tailwindcss/tailwind.css'

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
