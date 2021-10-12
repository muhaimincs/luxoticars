import { LogoJsonLd } from 'next-seo'

import WEB from '../web.config'

export default function Layout ({ children }) {
  return (
    <>
    <LogoJsonLd
      logo={`${WEB.link}/LUXOTICARS.svg`}
      url={WEB.link}
    />
    <section>{children}</section>
    </>
  )
}
