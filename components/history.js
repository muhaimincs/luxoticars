import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination
} from 'swiper'
import dynamic from 'next/dynamic'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

// const Footer = dynamic(
//   () => import('../components/footer'),
//   { ssr: false }
// )

const Hero = dynamic(
  () => import('../components/hero.history'),
  { ssr: false }
)

const SecondHero = dynamic(
  () => import('../components/second-hero.history'),
  { ssr: false }
)

const HistoryComponent = () => {
  return (
    <div className="absolute top-0 w-screen h-screen overflow-hidden z-[-100]">
      <div className="relative">
        <Swiper
          style={{ '--swiper-pagination-color': '#ff0000' }}
          direction="vertical"
          pagination={{
            clickable: true
          }}
          className="relative h-screen"
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <SecondHero />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HistoryComponent
