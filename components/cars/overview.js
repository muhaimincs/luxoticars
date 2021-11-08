import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// import Swiper from './swiper'

const Swiper = dynamic(
  () => import('./swiper')
)

const CarOverview = ({ photos, isLarge = true, defaultAlt }) => {
  console.log(photos)
  let [isOpen, setIsOpen] = useState(null)

  const closeDialog = () => setIsOpen(null)
  const openModal = (slide) => {
    setIsOpen(slide)
  }

  return (
    <>
    <div className={`mt-3 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-0 lg:grid ${photos[3] ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} lg:gap-x-8`}>
      {isLarge && (
        <>
          {photos[3] && (
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <div className="w-full h-full" onClick={() => openModal(3)}>
                <Image src={photos[3]} objectFit="cover" objectPosition="center" layout="fill" alt={defaultAlt} />
              </div>
            </div>
          )}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <div className="w-full h-full" onClick={() => openModal(1)}>
                <Image src={photos[1]} objectFit="cover" objectPosition="center" layout="fill" alt={defaultAlt} />
              </div>
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <div className="w-full h-full" onClick={() => openModal(2)}>
                <Image src={photos[2]} objectFit="cover" objectPosition="center" layout="fill" alt={defaultAlt} />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <div className="w-full h-full" onClick={() => openModal(true)}>
          <Image src={photos[0]} objectFit="cover" objectPosition="center" layout="fill" alt={defaultAlt} />
        </div>
      </div>
    </div>
    <Transition
      show={!!isOpen}
      as={Fragment}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog onClose={closeDialog} className="fixed inset-0 z-10 overflow-y-auto">
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
            <Dialog.Overlay className="fixed inset-0 bg-white/70" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full h-[70vh] max-w-md md:max-w-2xl lg:max-w-7xl transition-all transform bg-gray-100 shadow-xl rounded-2xl">
              {!!isOpen && <Swiper photos={photos} initialSlide={isOpen} />}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
    </>
  )
}

export default CarOverview