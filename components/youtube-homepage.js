import { useEffect } from 'react'
import { useDimensions } from 'react-hook-dimensions';

function Yt ({ data }) {
  const [elementRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
    defaults: {
      height: 300,
      scrollY: 123,
    },
    layoutEffect: true,
  });

  useEffect(() => {
    updateElementDimensions()
  }, []);

  return (
    <div className="group relative" ref={elementRef}>
      <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <iframe
          className="w-full h-full object-center object-cover"
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
      <p className="text-base font-semibold text-gray-900">{data.description}</p>
    </div>
  )
}

const callouts = [
  {
    name: 'First Experienced as a Customer | Volkswagen Tiguan R Line 2.0',
    description: 'Peace! Many thanks to Abang Mazlin from Volkswagen Gombak for his warmth hospitality and being transparent with me as we shared the same career for more than a decade. Not to forget, I would like to take this opportunity to congratulates to my partner of my life and thank you for always being there for me. Chai!',
    imageSrc: 'https://i.ytimg.com/vi/26M8Z8sgKkA/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/26M8Z8sgKkA',
  },
  {
    name: 'MERCEDES AMG E300 COUPE\' MILIK SI DIA // #WEDelivery',
    description: 'To Daiyan Trisha, may success be with you with your big laughter and sweet smile. Enjoy your dream car and drive safely and jangan lupa CHAI!',
    imageSrc: 'https://i.ytimg.com/vi/pmwe3A2ScCc/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/pmwe3A2ScCc',
  },
  {
    name: 'MCLAREN 600LT TRACK ORIENTED CAR',
    description: 'For the 600LT it’s simple. A focus on pure driving exhilaration. Nothing more. From the top-exit exhausts to the race car-inspired carbon fibre bodywork, we have pushed the boundaries to set a new sportscar benchmark.',
    imageSrc: 'https://i.ytimg.com/vi/oXWWgw2HIO4/maxresdefault.jpg',
    href: 'https://www.youtube.com/embed/oXWWgw2HIO4',
  },
]

export default function YoutubePage() {
  return (
    <div className="max-w-7xl mx-auto w-full sm:px-6 lg:px-8 px-3 py-6">
      <div className="max-w-2xl mx-auto py-4 lg:max-w-none">
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {callouts.map((callout) => (
            <Yt key={callout.name} data={callout} />
          ))}
        </div>
      </div>
    </div>
  )
}