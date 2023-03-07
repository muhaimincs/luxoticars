import { Zoom, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import 'swiper/css/lazy'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function GalleryWithZoom({ photos, title }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      modules={[Zoom, Navigation, Pagination]}
      className="rounded-2xl overflow-hidden"
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      loop
      navigation
      calc
      autoHeight
      lazy
      zoom
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.url}>
          <div className="swiper-zoom-container">
            <img
              className="object-cover object-center swiper-lazy h-full"
              src={photo.url}
              alt={title}
              height={`${photo.details.image.height}px`}
              width={`${photo.details.image.width}px`}
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
