import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination
} from 'swiper'
import dynamic from 'next/dynamic'

import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

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
    <div className="bg-black bg-fixed bg-cover" style={{
      backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23080808' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23101010' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23171717' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%231f1f1f' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23272727' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E')"
    }}>
      <div className="flex items-center justify-center h-[calc(100%-64px)]">
        <h3 className="text-white text-3xl">Our mission is to increase the GDP of the internet</h3>
      </div>
    </div>
  )
}

export default HistoryComponent
