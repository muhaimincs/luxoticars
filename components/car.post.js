/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import BLOG from '../web.config'
// import formatDate from '../lib/formatDate'

const CarPost = ({ post }) => {
  const firstPhoto = post['Photo Gallery'].split(',')[0]
  console.log(post, firstPhoto)
  return (
    <Link href={`/${post.slug}`} prefetch={false}>
      <a>
        <article>
          <img src={firstPhoto} className="rounded" />
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
          </header>
          <main>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  )
}

export default CarPost
