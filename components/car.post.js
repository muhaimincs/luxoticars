/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const CarPost = ({ post }) => {
  const firstPhoto = post['Photo Gallery'].split(',')[0]
  return (
    <Link href={`/${post.slug}`}>
      <a className="group relative">
        <header className="relative z-10 px-4 pt-40 pb-10 bg-gradient-to-t from-black">
          <h2 className="text-xl font-semibold text-white">
            {post.title}
          </h2>
        </header>
        <img src={firstPhoto} className="absolute inset-0 w-full h-full object-cover" />
      </a>
    </Link>
  )
}

export default CarPost
