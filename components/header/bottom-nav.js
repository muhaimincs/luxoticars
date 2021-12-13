import Image from 'next/image'
import {
  Popover
} from '@headlessui/react'

import s from './index.module.css'
import style from './bottom-nav.module.css'
import LuxoticarsLogo from '../../public/LUXOTICARS.svg'
import LuxoticarsWhiteFont from '../../public/LUXOTICARS_WHITE_FONT.svg'

export default function BottomNav() {
  return (
    <>
      <div className={style.wrapper}>
        <div className="bg-transparent flex items-center pl-2 pr-5">
          {/* Mobile menu button */}
          <Popover.Button className={s['popover-button']}>
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={s['svg-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </Popover.Button>
        </div>
        <div className={style['logo-wrapper']}>
          <Image src={LuxoticarsLogo} alt="Luxoticars" height={52} width={34} />
          <div className="relative">
            <Image src={LuxoticarsWhiteFont} alt="Luxoticars" height={10} width={158} />
          </div>
        </div>
      </div>
      <div className={s.copyright}>
        Copyright © 2021 Luxoticars Sdn. Bhd. All rights reserved.
      </div>
    </>
  )
}