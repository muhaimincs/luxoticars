import Script from 'next/script'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Head() {
  return (
    <>
      <meta
        name="description"
        content="The Syndicate Carlifestyle Cartel"
      />
      <meta
        key="og:title"
        property="og:title"
        content="LUXOTICARS - The Syndicate Carlifestyle Cartel"
      />
      <meta
        property="og:image"
        content="https://luxoticars.cc/og-image.png"
      />
      <meta
        name="twitter:image"
        content="https://luxoticars.cc/og-image.png"
      />
      <title>LUXOTICARS - The Syndicate Carlifestyle Cartel</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"  />
      <Script dangerouslySetInnerHTML={{ __html: modeScript }} strategy="afterInteractive" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
      />
      <link
        rel="alternate"
        type="application/feed+json"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <link rel="preconnect" href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`} crossOrigin="true" />
    </>
  );
}