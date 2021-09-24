import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  EffectFade,
  Autoplay
} from 'swiper'
import Image from 'next/image'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, EffectFade, Autoplay])

const Carousel = () => {
  return (
    <div className="absolute top-0 w-screen overflow-hidden z-[-100]">
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        autoHeight={true}
        spaceBetween={50}
        pagination={{
          clickable: true
        }}
        loop
        className="bg-gradient-to-t from-black"
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false
        }}
      >
        <SwiperSlide data-swiper-autoplay="5500">
          <div>
            <Image
              width={1280}
              height={720}
              layout="fill"
              src="https://images.ctfassets.net/ijuxqf6x1pz2/1N8YjfxoUBbnIdKnQtsZ0k/98bf4396c6cc3c4a323a33fae9accb49/photo_2021-09-24_09.31.08.jpeg" alt="Luxoticars Ferrari"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="30000">
          <div className="bg-gradient-to-t from-black">
          <video
            autoPlay
            loop
            muted
            playsInline="playsinline"
            preload="metadata"
            className="bg-cover object-cover bg-center w-full h-52 bg-gradient-to-t from-black"
            poster="https://ipfs.fleek.co/ipfs/bafybeid7kualxhp3emamgkk2xbf2djyadbkl4u2onlcskmsudeucousm5m"
            data-object-fit="contain"
          >
            <source
              src="https://ipfs.fleek.co/ipfs/bafybeidvysen4oi7su3owebwge5aof7b6ljemtmsyuzbytowdkh5kkpova"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          </div>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="5500">
          <Image
            width={1280}
            height={720}
            layout="fill"
            src="https://images.ctfassets.net/ijuxqf6x1pz2/15nQQBgBkiECSSQznnm5lV/1178ec83805376fbad23be545a9c7503/photo_2021-09-24_09.31.11.jpeg" alt="Luxoticars Ferrari"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
