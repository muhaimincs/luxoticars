/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const CarPost = ({ post }) => {
  const firstPhoto = post['Photo Gallery'].split(',')[0]
  const tags = post.tags
  return (
    <Link href={`/${post.slug}`}>
      <a className="group relative">
        <header className="relative z-10 px-4 pt-40 pb-10 bg-gradient-to-t from-black">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500 inline-flex">
            {tags.map((tag, i) => `${i !== 0 ? ' | ' : ''}${tag}`)}
          </p>
          <h2 className="text-xl font-semibold text-white">
            {post.title}
          </h2>
        </header>
        {/* <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main> */}
        {/* <div className="w-full"> */}
          <img src={firstPhoto} className="absolute inset-0 w-full h-full object-cover" />
        {/* </div> */}
      </a>
    </Link>
  )
}

export default CarPost
