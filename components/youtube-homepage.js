import { useEffect } from 'react'
import { useDimensions } from 'react-hook-dimensions'
import Link from 'next/link'

function Yt ({ data }) {
  const [elementRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
    defaults: {
      height: 300,
      scrollY: 123
    },
    layoutEffect: true
  })

  useEffect(() => {
    updateElementDimensions()
  }, [])

  return (
    <div className="group relative" ref={elementRef}>
      <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-64">
        <iframe
          className="h-full w-full"
          src={`${data.href}?controls=0`}
          title={data.name}
          frameBorder="0"
          width={elementDimensions.width}
          height={elementDimensions.height}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        {data.name}
      </h3>
      <p className="text-base text-gray-100 md:text-gray-900">{data.description}</p>
    </div>
  )
}

const callouts = [
  {
    name: 'First Experienced as a Customer | Volkswagen Tiguan R Line 2.0',
    description: 'Peace! Many thanks to Abang Mazlin from Volkswagen Gombak for his warmth hospitality and being transparent with me as we shared the same career for more than a decade. Not to forget, I would like to take this opportunity to congratulates to my partner of my life and thank you for always being there for me. Chai!',
    imageSrc: 'https://i.ytimg.com/vi/26M8Z8sgKkA/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/26M8Z8sgKkA'
  },
  {
    name: 'MERCEDES AMG E300 COUPE\' MILIK SI DIA // #WEDelivery',
    description: 'To Daiyan Trisha, may success be with you with your big laughter and sweet smile. Enjoy your dream car and drive safely and jangan lupa CHAI!',
    imageSrc: 'https://i.ytimg.com/vi/pmwe3A2ScCc/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/pmwe3A2ScCc'
  },
  {
    name: 'MCLAREN 600LT TRACK ORIENTED CAR',
    description: 'For the 600LT it’s simple. A focus on pure driving exhilaration. Nothing more. From the top-exit exhausts to the race car-inspired carbon fibre bodywork, we have pushed the boundaries to set a new sportscar benchmark.',
    imageSrc: 'https://i.ytimg.com/vi/oXWWgw2HIO4/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/oXWWgw2HIO4'
  }
]

export default function YoutubePage () {
  return (
    <div className="lg:bg-white">
      <div className="max-w-7xl mx-auto w-full sm:px-0 px-3">
        <div className="max-w-2xl mx-auto lg:max-w-none md:bg-white md:p-3 md:rounded flex items-center flex-col">
          <span className="z-10 shadow-xl md:bg-black md:-mt-6 md:mb-6 whitespace-pre text-white text-center text-xs sm:text-md lg:text-lg font-bold border-2 border rounded-md py-1 px-1 md:px-2">
            Delivery Stories
          </span>
          <div className="-mt-3 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <Yt key={callout.name} data={callout} />
            ))}
          </div>
        </div>
        <div className="py-8 max-w-sm mx-auto">
          <div className="flex items-center rounded-md shadow">
            <Link href="/gallery">
              <a
                className="inline-flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
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
