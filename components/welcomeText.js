import { NextSeo } from 'next-seo'

import s from './welcomeText.module.css'

export default function WelcomeText () {
  return (
    <>
    <h1 className="text-white text-lg md:text-3xl md:text-center px-6 text-center mt-3">
      The Syndicate<br />
      <span className={s.neonText}>Carlifestyle</span><br />
      Cartel
    </h1>
    <NextSeo
      additionalLinkTags={[
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap'
        }, {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap'
        }
      ]}
    />
    </>
  )
}
