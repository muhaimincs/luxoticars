/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const CarPost = ({ post }) => {
  const firstPhoto = post['Photo Gallery'].split(',')[0]
  return (
    <Link href={`/${post.slug}`}>
      <a className="group relative h-40 rounded-lg overflow-hidden">
        <header className="relative z-10 px-4 pt-6 pb-10 bg-gradient-to-b from-black">
          <span className="text-white text-xs">{post.Year}</span>
          <h2 className="text-lg font-semibold text-gray-300">
            {post.title}
          </h2>
        </header>
        <img src={firstPhoto} className="absolute inset-0 w-full h-full object-cover min-h-full" />
      </a>
    </Link>
  )
}

export default CarPost
