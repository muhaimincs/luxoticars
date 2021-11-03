import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  EffectFade,
  Autoplay
} from 'swiper'
import Image from 'next/image'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectFade, Autoplay])

const Carousel = () => {
  return (
    <div className="absolute inset-0 w-screen overflow-hidden z-[-100]">
      <Swiper
        // onSwiper={setSwiperRef}
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        // autoHeight={true}
        // spaceBetween={50}
        // pagination={{
        //   type: 'fraction'
        // }}
        loop
        effect={'fade'}
        centeredSlides={true}
        className="w-full h-3/4"
        // virtual
      >
        <SwiperSlide data-swiper-autoplay="30000">
          <video
            autoPlay
            loop
            muted
            playsInline="playsinline"
            preload="metadata"
            className="absolute top-0 bg-cover object-cover w-full h-full"
            poster="https://ipfs.fleek.co/ipfs/bafybeid7kualxhp3emamgkk2xbf2djyadbkl4u2onlcskmsudeucousm5m"
            data-object-fit="cover"
          >
            <source
              src="https://ipfs.fleek.co/ipfs/bafybeidvysen4oi7su3owebwge5aof7b6ljemtmsyuzbytowdkh5kkpova"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black z-50" aria-hidden="true" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="10500">
          <div className="transform translate-y-[-137px] md:translate-y-[-346px] iphone5:translate-y-[-10px]">
            <div className="relative h-screen w-screen">
              <Image
                width={1280}
                height={720}
                layout="fill"
                objectFit="cover"
                src="https://images.ctfassets.net/ijuxqf6x1pz2/1N8YjfxoUBbnIdKnQtsZ0k/98bf4396c6cc3c4a323a33fae9accb49/photo_2021-09-24_09.31.08.jpeg"
                alt="Luxoticars Ferrari"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent z-50" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="10500">
          <div className="transform translate-y-[-137px] md:translate-y-[-346px] iphone5:translate-y-[-10px]">
            <div className="relative w-screen h-screen">
              <Image
                width={1280}
                height={720}
                layout="fill"
                objectFit="cover"
                src="https://images.ctfassets.net/ijuxqf6x1pz2/15nQQBgBkiECSSQznnm5lV/1178ec83805376fbad23be545a9c7503/photo_2021-09-24_09.31.11.jpeg"
                alt="Luxoticars Ferrari"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent z-50" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
