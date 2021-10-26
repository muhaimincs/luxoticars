import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import Layout from '../components/layout.homepage'
import WEB from '../web.config'
export default function HistoryPage () {
  const History = dynamic(
    () => import('../components/history'),
    { ssr: false }
  )
  return <History />
}

HistoryPage.getLayout = function getLayout (page) {
  const Header = dynamic(
    () => import('../components/header.homepage'),
    { ssr: false }
  )

  return (
    <>
      <NextSeo
        title={`History • ${WEB.name}`}
        description="History of LUXOTICARS"
        canonical={`${WEB.link}/gallery`}
        openGraph={{
          url: `${WEB.link}/gallery`,
          title: `History • ${WEB.name}`,
          description: 'History of LUXOTICARS'
        }}
      />
      <Layout>
        <Header />
        {page}
      </Layout>
    </>
  )
}
