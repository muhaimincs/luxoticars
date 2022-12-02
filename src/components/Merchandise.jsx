import Image from 'next/image'
import clsx from 'clsx'

import Img1 from '@/images/merch/img1.jpeg'
import Img2 from '@/images/merch/img2.jpeg'
import Img3 from '@/images/merch/img3.jpeg'
import Img4 from '@/images/merch/img4.jpeg'
import Img5 from '@/images/merch/img5.jpeg'
import Img6 from '@/images/merch/img6.jpeg'

let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

export function Merchandise() {
  return (
    <div className="mt-5 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[Img1, Img2, Img3, Img4, Img5, Img6].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-28 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-52 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt="Luxoticars Merchandise"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
