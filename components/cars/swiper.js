import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Zoom,
  Navigation,
  Pagination
} from 'swiper'
import Image from 'next/image'

SwiperCore.use([Zoom, Navigation, Pagination])

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperComponent = ({ photos, initialSlide = 0 }) => {
  return (
    <Swiper
      style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
      zoom={true}
      navigation={true}
      autoHeight={true}
      slidesPerView={1}
      centeredSlides={true}
      initialSlide={initialSlide}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      className="rounded-2xl">
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <div className="swiper-zoom-container">
              <div className="relative w-96 h-auto">
                <Image src={photo} layout="fill" objectFit="cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SwiperComponent