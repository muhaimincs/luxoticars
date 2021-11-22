import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Zoom,
  Navigation,
  Pagination
} from 'swiper'

import WEB from '../../web.config'

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
          <SwiperSlide key={photo.url}>
            <div className="swiper-zoom-container">
              {/* <div className="aspect-w-16 aspect-h-9 overflow-hidden"> */}
                <img 
                  src={photo.url} 
                  width={`${photo.width}px`}
                  height={`${photo.height}px`} 
                  className="w-full h-full object-cover object-center" 
                  alt={`${WEB?.name} - ${photo?.name}`}
                />
              {/* </div> */}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SwiperComponent