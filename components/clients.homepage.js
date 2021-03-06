import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay,
  Virtual
} from 'swiper'
import Link from 'next/link'
import Image from 'next/image'

import 'swiper/css/virtual'

SwiperCore.use([Autoplay, Virtual])

function Gallery ({
  photos,
  direction = 'horizontal',
  className = 'aspect-w-3 aspect-h-5 overflow-hidden lg:block'
}) {
  return (
    <Swiper
        loop
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
          type: 'fraction'
        }}
        className={direction === 'vertical' ? 'max-h-[34rem] min-w-full' : 'max-h-[34rem] max-w-96'}
        direction={direction}
        // virtual
        autoplay
      >
      {photos.map((photo, index) => (
        <SwiperSlide key={photo} virtualIndex={index}>
          <div className={className}>
            <Image src={photo} alt="" layout="fill" objectFit="cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const slide1 = [
  'https://images.ctfassets.net/ijuxqf6x1pz2/4qoKLhWYD3IXfrIHTUWi4o/1d81807324a2ea309266cd5d54473d99/photo_2022-02-22_19.40.36.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/5dT5DNrQCDRmnVl7VP5g5W/d91e9fa0de3269849a278f71c34b26f2/photo_2022-02-22_19.40.27.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/4yd8Pn0MfojN0W5CrRW2ZQ/1034664a2f5f4d315691144936cdcced/photo_2022-02-22_19.40.17.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/2TSVQ6Bd3NstS6tqjgWfDW/d7e568d29e67480acfd2382c7c039ecf/photo_2022-03-18_20.30.14.jpeg',
]
const slide2 = [
  'https://images.ctfassets.net/ijuxqf6x1pz2/5vSho2RLl6tqARVD4FUrhp/1e683c26eeb6e5facd2137e39a032eda/photo_2021-10-22_21.31.32.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/5BB4e4cU3uj6KR9Cy5cfcd/977a0b1125b1a614538b5af6f7c83269/photo_2021-10-22_21.31.22.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/fMhPBcOXwDTJFfvFtOglD/d232c251b52ab707f9f702347b1deb60/photo_2021-10-22_21.31.26.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/4yK2Yx4G8HZymh3YLf8cw4/c60f2cb1c283069d38fe1ad4d1cf1cb6/photo_2022-03-18_20.30.03.jpeg'
]
const slide3 = [
  'https://images.ctfassets.net/ijuxqf6x1pz2/5Oe4BfjB43Mo9Rh34aYyex/7e8b2fb377f886ceac72d8639ab2ee96/photo_2021-10-20_10.21.59.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/c6BWaRqJIFg6a3JRJHyvC/8e370dd89e438d2d293ddf2ccc4f66ce/photo_2021-10-20_10.40.21.jpeg'
]
const slide4 = [
  'https://images.ctfassets.net/ijuxqf6x1pz2/6wtLyzxPmcFf4bIDWN1Vh6/99e0269558d865c2fe4857f085d0accd/photo_2021-11-17_04.58.08.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/2HB9iJ5jKo0XkQFgfQmMnx/e73b20a930abbd814592122ca9accece/photo_2021-10-22_21.31.03.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/4y04gUPOUUAUxZAoZCquYt/691c2e3decc848ea51b3c77fb5007ccb/photo_2021-10-22_21.31.38.jpeg',
  'https://images.ctfassets.net/ijuxqf6x1pz2/5Q4ZS1hwqvv0WEDzynLyzi/f9d6a74aaf9d0cb697ff89732bb5a245/photo_2021-10-22_21.31.42.jpeg'
]

export default function ClientHomepage () {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto w-full px-3 md:px-6 mb-6">
        <h3 className="text-white text-3xl font-sans">
          Luxoticars Clients Moment
        </h3>
      </div>
      <div className="max-w-7xl mx-auto w-full px-0 md:px-6 space-y-2">
        <div className="lg:grid lg:grid-cols-3 space-y-2 lg:space-y-0 lg:gap-x-2">
          <Gallery
            photos={slide1}
            direction="vertical"
            className="aspect-w-3 aspect-h-5 overflow-hidden lg:block h-48 md:h-96"
          />
          <div className="grid-cols-2 grid lg:grid-cols-1 gap-2 max-h-32 lg:max-h-96">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden">
              <div className="w-full h-full">
                <Gallery
                  photos={slide2}
                  className="aspect-w-3 aspect-h-2"
                />
              </div>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden">
              <div className="w-full h-full">
                <Gallery
                  photos={slide3}
                  direction="vertical"
                  className="aspect-w-3 aspect-h-2"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:aspect-w-3 lg:aspect-h-4">
            <div className="w-full h-full">
              <Gallery
                photos={slide4}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-8 px-6 md:px-96">
        <Link href="/client">
          <a
            className="inline-flex w-full items-center justify-center px-5 py-3 border border-transparent bg-white text-gray-800 py-4 text-lg ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700"
          >
            &rsaquo; Meet our clients
          </a>
        </Link>
      </div>
    </div>
  )
}
