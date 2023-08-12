import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { GalleryWithZoom } from'./GalleryWithZoom'

export function CarPhotos({ title, photos }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div onClick={openModal} className="relative px-4 py-20 sm:px-6 sm:py-52 lg:py-96 lg:px-8 z-10">
        <h1 className="md:text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl antialiased" itemprop="name">
          <span className="bg-clip-text text-transparent bg-gradient-to-b backdrop-opacity-10 from-white via-zinc-200 to-transparent">
            {title.substring(0, title.indexOf(' '))}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b backdrop-opacity-10 from-white via-zinc-200 to-transparent">
            {title.substring(title.indexOf(' ') + 1)}
          </span>
        </h1>
        <div className='absolute right-2 bottom-2'>
          <svg fill="none" viewBox="0 0 26 26" className='w-6 h-6'>
            <path stroke="red" d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m12-8v12m6-6H7"></path>
          </svg>
        </div>
        {/* <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.
        </p> */}
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        appear
      >
        <Dialog open={isOpen} onClose={closeModal} as="div" className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div onClick={openModal} className="fixed inset-0 backdrop-blur-lg bg-gradient-to-r to-gray-900 via-[#2125293d] from-[#21252999] bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="w-full h-full p-3 transition-all transform relative">
                    <Dialog.Panel>
                      <GalleryWithZoom photos={photos} initialSlide={isOpen} title={title} />
                      <button type='button' onClick={closeModal} className='absolute right-2 top-2 z-50'>
                        <svg fill="none" className='w-6 h-6' viewBox="0 0 26 26">
                          <path
                            stroke="red"
                            d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m7.8-6.2 8.4 8.4m0-8.4-8.4 8.4"
                          />
                        </svg>
                      </button>
                    </Dialog.Panel>
                    
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
