import Head from 'next/head'

export default function Layout ({ children }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <section>{children}</section>
    </>
  )
}
