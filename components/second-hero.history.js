import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination
} from 'swiper'

import Hero2008 from './hero-2008.history'

SwiperCore.use([Pagination])

const SecondHero = () => {
  return (
    // <div className="text-white">Testing</div>
    <Swiper
      className="relative flex h-screen"
      style={{ '--swiper-pagination-color': '#ff0000' }}
      pagination={{
        clickable: true
      }}>
      <SwiperSlide className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <Hero2008 />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <div className="text-white">Testing II</div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <div className="text-white">Testing III</div>
      </SwiperSlide>
    </Swiper>
    // <div className="flex md:block flex-col-reverse">
    //   <div className="relative overflow-hidden">
    //     <div className="pt-16 pb-10 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    //       <div className="z-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
    //         <div className="sm:max-w-lg md:max-w-sm">
    //           <h1 className="text-2xl font font-extrabold tracking-tight text-gray-300 sm:text-6xl">
    //             History
    //           </h1>
    //           <p className="mt-4 text-xl text-white">
    //             Luxoticars has a decade of experience selling reconditioned cars
    //           </p>
    //           <p className="mt-4 text-xs text-white">
    //             An influencer of luxury and exotic cars.
    //             He switched his interest and hobby into a career
    //             His interest in cars began since his school days;
    //             He likes to make his clients as his close friends;
    //             Building friendship in motorsports;
    //           </p>
    //           <p className="mt-4 text-xs text-white">
    //             He is obsessed with exotic cars;
    //             Cars are his hobby for a long while now;
    //             Together with his brother he is producing a video on cars to influence others with same interest as his.
    //           </p>
    //         </div>
    //         <div>
    //           <div className="hidden md:block mt-10">
    //             <div
    //               aria-hidden="true"
    //               className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
    //             >
    //               <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
    //                 <div className="flex items-center space-x-6 lg:space-x-8">
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8 z-0">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/6jvysTLhYhp3Y6H83vb2F0/2909655f9e5f5597f5d9963b277d716f/photo_2021-09-09_22.21.09.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/7uZyP0fxmAMRtJoWlE3pcX/3ff5589acbb4c6c1a651f2216d628c23/photo_2021-09-09_22.08.01.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/yFyY3S4MzuWUg5bqFLTRi/46fd0076aa57c80ac95f1eba025c7a3a/photo_2021-09-09_22.08.29.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover z-[-1]"
    //                       />
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/2fwRtwlEFj5IYJo0t9WGT0/d13a2321ddb6ef567f9d17407efc0afd/photo_2021-09-09_22.10.58.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/2CO6UHZJzEUMSEf4d4H8M2/a428904141ef95c7bd1b0c891d1e1dde/photo_2021-09-09_22.08.37.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/5dmQB9ioPpz6RouBagXroz/1d533f6d4c71084d00c542c0fa772b22/photo_2021-09-09_22.16.29.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <img
    //                         src="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
    //                         alt=""
    //                         className="w-full h-full object-center object-cover"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center mt-10 md:hidden">
    //     <div className="relative group">
    //       <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl h-64 w-64 transform scale-105 blur opacity-75" />
    //       <div className="relative">
    //         <div className="rounded-xl overflow-hidden h-52 w-52">
    //           <Image
    //             src="https://images.ctfassets.net/ijuxqf6x1pz2/4Ybp8mYNmbsNWy2JdtpPrV/896c5652069d5ba2d7bece9e194e84be/photo_2021-09-09_22.07.56.jpeg"
    //             alt="Abu garcia"
    //             width={640}
    //             height={1138}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SecondHero
