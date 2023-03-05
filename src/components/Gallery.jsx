import { Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import 'swiper/css/lazy'

export function Gallery({ photos, title }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      modules={[Lazy, Autoplay]}
      // navigation
      // autoHeight
      preloadImages={false}
      autoplay={{
        delay: 3500,
      }}
      className="h-full w-full swiper-backface-hidden swiper-pointer-events"
      lazy
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={photo.url}>
          <img
            className="h-full w-full object-cover object-center swiper-lazy"
            data-src={photo.url}
            alt={title}
            height={`${photo.details.image.height}px`}
            width={`${photo.details.image.width}px`}
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
