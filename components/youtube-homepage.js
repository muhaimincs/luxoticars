import Link from 'next/link'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import s from './youtube.module.css'

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Yt ({ data }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${data.slug}`}
      className="flex font-sans group relative border border-slate-800 rounded bg-black/30">
      <LiteYouTubeEmbed
        id={data.slug}
        title={data.title}
        wrapperClass="flex-none w-56 relative bg-center overflow-hidden rounded-tl rounded-bl bg-cover"
        webp
      />
      <div className='flex-auto p-3'>
        <h6 className="text-sm text-gray-300 line-clamp-1">
          {data.title}
        </h6>
        <p className="text-sm text-gray-100 line-clamp-4">{data.summary}</p>
      </div>
    </a>
  )
}

export default function YoutubePage ({ youtubes }) {
  return (
    <div className='md:pt-32'>
      <div className="space-y-3 max-w-md ml-auto">
        {youtubes.map((callout) => (
          <Yt key={callout.id} data={callout} />
        ))}
      </div>
      <div className="py-8 max-w-md ml-auto">
        <div className="flex items-center">
          <Link href="/gallery" prefetch={false}>
            <a
              className="inline-flex w-full mx-20 rounded items-center justify-center border border-transparent bg-red-600 text-white py-4 text-lg px-3 ring ring-red-200 ring-opacity-50 ring-offset-4 ring-offset-red-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
