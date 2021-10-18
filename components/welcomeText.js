import Image from 'next/image'

import LogoOfficial from '../public/LUXOTICARS.svg'
import LuxoticarsWhiteFont from '../public/LUXOTICARS_WHITE_FONT.svg'
import s from './welcomeText.module.css'

export default function WelcomeText () {
  return (
    <div className="max-w-7xl mx-auto w-screen flex flex-col items-center justify-center mt-32 mb-40 iphone5:mb-28">
      <div className="relative h-32 w-32 hidden md:block">
        <Image
          layout="fill"
          src={LogoOfficial}
          alt="luxoticars logo official"
        />
      </div>
      <Image src={LuxoticarsWhiteFont} alt="Luxoticars" width={240} />
      <h1 className="text-white text-xs md:text-5xl md:text-center px-6 text-center">The Syndicate</h1>
      <span className={s.neonText}>Carlifestyle</span>
      <span className="text-white text-xs md:text-5xl md:text-center px-6 text-center">Cartel</span>
    </div>
  )
}
