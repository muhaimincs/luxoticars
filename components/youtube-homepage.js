import Link from 'next/link'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Yt ({ data }) {
  return (
    <div className="group relative">
      <LiteYouTubeEmbed id={data.id} title={data.name} wrapperClass="relative w-full h-64 rounded-lg overflow-hidden group-hover:opacity-75" />
      <h3 className="mt-6 text-sm text-gray-500">
        {data.name}
      </h3>
      <p className="text-base text-gray-100">{data.description}</p>
    </div>
  )
}

const callouts = [
  {
    id: 'lkHd5FvHD7U',
    name: 'MEET THE STAFF | DTC CARLIFESTYLE | SPECIAL ORDER SHORT CLIP',
    description: 'DTC MOTORS is among the best recond car dealer and specialize in “SPECIAL ORDERS” to fulfil customer preference.  Through the “SPECIAL ORDER” system that we offer, you can choose your car directly from Japan and the United Kingdom and most importantly the price that we offer is transparent. Hence, share your dream  with us and we will  realize it for you.',
    imageSrc: 'https://i.ytimg.com/vi/lkHd5FvHD7U/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/lkHd5FvHD7U'
  },
  {
    id: 'ND7Am2zqi0M',
    name: 'SPECIAL ORDER DTC CARLIFETYLE | FERRARI 488 PISTA NAJIB ASSADOK Edition',
    description: 'DTC MOTORS is among the best recond car dealer and specialize in “SPECIAL ORDERS” to fulfil customer preference.  Through the “SPECIAL ORDER” system that we offer, you can choose your car directly from Japan and the United Kingdom and most importantly the price that we offer is transparent. Hence, share your dream  with us and we will  realize it for you.',
    imageSrc: 'https://i.ytimg.com/vi/ND7Am2zqi0M/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/ND7Am2zqi0M'
  },
  {
    id: 'Qwh7N_ecZe8',
    name: 'RM5,000,000 FERRARI SF90 STRADALE | PART 1',
    description: 'Allow me to introduce a good friend of mine; Mr. Weng Kee. Owner of Victoria Motorsport and has been in motorsport industry for more than a decade. Well, today he lend me one of his new "toys"',
    imageSrc: 'https://i.ytimg.com/vi/Qwh7N_ecZe8/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/Qwh7N_ecZe8'
  },
]

export default function YoutubePage () {
  return (
    <div>
      <div className="max-w-7xl mx-auto w-full sm:px-0 px-3">
        <div className="max-w-2xl mx-auto lg:max-w-none md:p-3 md:rounded flex items-center flex-col">
          <span className="z-10 shadow-xl md:bg-black md:-mt-6 md:mb-6 whitespace-pre text-white text-center text-xs sm:text-md lg:text-lg font-bold border-2 border rounded-md py-1 px-1 md:px-2">
            Delivery Stories
          </span>
          <div className="-mt-3 space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6">
            {callouts.map((callout) => (
              <Yt key={callout.name} data={callout} />
            ))}
          </div>
        </div>
        <div className="py-8 max-w-sm mx-auto">
          <div className="flex items-center rounded-md shadow">
            <Link href="/gallery" prefetch={false}>
              <a
                className="inline-flex w-full items-center justify-center px-5 py-3 border border-transparent bg-white text-gray-800 py-4 text-lg px-3 ring ring-gray-200 ring-opacity-50 ring-offset-4 ring-offset-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Visit our gallery
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
