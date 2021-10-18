import Image from 'next/image'

import Img1 from '../public/img/commerce/img1.jpeg'
import Img2 from '../public/img/commerce/img2.jpeg'
import Img3 from '../public/img/commerce/img3.jpeg'
import Img4 from '../public/img/commerce/img4.jpeg'
import Img5 from '../public/img/commerce/img5.jpeg'
import Img6 from '../public/img/commerce/img6.jpeg'

export default function SalesSection () {
  return (
    <section aria-labelledby="sale-heading">
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-white md:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-gray-800 md:text-gray-100 md:text-5xl">
                  Shop Carlifestyle.
                  <br />
                  Gear Up
                </h2>
                <div className="mt-6 text-base">
                  <a href="https://shop.luxoticars.my" className="font-semibold text-gray-400 md:text-red-600">
                    Get them now<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <div className="relative h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img1}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <div className="relative h-128 w-128 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img2}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <div className="relative h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img3}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <div className="relative h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img4}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <div className="relative h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img5}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <div className="relative h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 overflow-hidden">
                        <Image
                          src={Img6}
                          alt="Luxoticars Carlifestyle Cartel"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
