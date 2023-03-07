import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import 'swiper/css/lazy'

export function Gallery({ photos, title }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      modules={[Autoplay]}
      // navigation
      // autoHeight
      preloadImages={false}
      autoplay={{
        delay: 3500,
      }}
      effect='fade'
      fadeEffect={{
        crossFade: true
      }}
      className="h-full w-full swiper-backface-hidden swiper-pointer-events"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={photo.url}>
          <img
            className="h-full w-full object-cover object-center swiper-lazy"
            src={photo.url}
            alt={title}
            height={`${photo.details.image.height}px`}
            width={`${photo.details.image.width}px`}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
