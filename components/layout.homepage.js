import Head from 'next/head'

import WEB from '../web.config'

export default function Layout ({ children }) {
  return (
    <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:site_name" content={WEB.name} />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    </Head>
    <section>{children}</section>
    </>
  )
}
