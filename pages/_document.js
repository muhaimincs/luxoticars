import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
          />
          {/* <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300&display=optional"
            />
          </noscript> */}
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
