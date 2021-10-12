import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'

import WEB from '../web.config'

export default function Layout ({ children }) {
  return (
    <>
    <LogoJsonLd
      logo={`${WEB.link}/LUXOTICARS.svg`}
      url={WEB.link}
    />
    <SocialProfileJsonLd
      type="Person"
      name="luxoticars"
      url={WEB.link}
      sameAs={[
        'http://www.facebook.com/luxoticars',
        'http://instagram.com/luxoticars',
        'http://www.tiktok.com/@luxoticars'
      ]}
    />
    <section>{children}</section>
    </>
  )
}
