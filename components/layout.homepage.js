import Head from 'next/head'

import WEB from '../web.config'

export default function Layout ({ children }) {
  return (
    <>
    <Head>
      <meta property="og:site_name" content={WEB.name} />
    </Head>
    <section>{children}</section>
    </>
  )
}
