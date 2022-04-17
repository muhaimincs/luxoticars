import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  EffectFade,
  Autoplay
} from 'swiper'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Shopee from '../public/img/props/shopee.svg'
import WEB from '../web.config'

SwiperCore.use([EffectFade, Autoplay])

export default function ShopeeHomepage ({ tags }) {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-center'>
        <motion.div
          style={{
            marginBottom: '-20px',
            marginRight: '-45px',
            paddingBottom: '20px',
            paddingRight: '45px',
            display: 'inline-block'
          }}
          animate={{ rotate: 20 }}
          transition={{
            repeat: 7,
            repeatType: 'mirror',
            duration: 0.2,
            delay: 0.5,
            ease: 'easeInOut',
            type: 'tween'
          }}
        >
          <a href="https://shp.ee/i6sjx9t">
            <Image width={28} height={28} src={Shopee} alt={`Join ${WEB.name} on Shopee`} />
          </a>
        </motion.div>
        <span className='text-slate-500'>Merchandise</span>
      </div>
      <div className='relative'>
        <p className='text-white absolute bottom-2 px-3 pb-3 text-xl'>
          Shop Hats, Caps, Polo Shirt and accessories
        </p>
        <img
          alt="Luxoticars Shopee Shop"
          src="https://images.ctfassets.net/ijuxqf6x1pz2/6fhnIF0DbfYKYIFtQain0D/8e74183d55344ed1159018ac11ec751e/photo_2022-04-16_22.00.32.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent z-50" />
      </div>
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        loop
        effect="slide"
        centeredSlides={true}
        className="block my-3 w-full"
      >
        <SwiperSlide>
          <div className='space-y-4 grid grid-cols-2 items-start gap-6 sm:space-y-0 px-3'>
            <div>
              <img
                className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover'
                src="https://images.ctfassets.net/ijuxqf6x1pz2/3Z6Oy75dEuVmaan3R02pg0/4ff8fa5b7870138cdd419daae0ffbb76/photo_2022-04-16_22.31.17.jpeg"
              />
            </div>
            <div className='sm:col-span-2 text-white'>
              <p className="text-xl">Hats & Caps</p>
              <p className="text-base">For him and her</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='space-y-4 grid grid-cols-2 items-start gap-6 sm:space-y-0 px-3'>
            <div>
              <img
                className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover'
                src="https://images.ctfassets.net/ijuxqf6x1pz2/3Z6Oy75dEuVmaan3R02pg0/4ff8fa5b7870138cdd419daae0ffbb76/photo_2022-04-16_22.31.17.jpeg"
              />
            </div>
            <div className='sm:col-span-2 text-white'>
              <p className="text-xl">Polo Shirts</p>
              <p className="text-base">Premium </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
