/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import Link from 'next/link'

import s from './car.post.module.css'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const CarPost = ({ post }) => {
  const firstPhoto = post?.['Photo Gallery'] ? post?.['Photo Gallery'].split(',')[0] : post?.externalSource[0].url
  return (
    <Link href={`/${post.slug}`} passHref={true}>
      <motion.a
        variants={item}
        className="group relative h-40 rounded-lg overflow-hidden border border-gray-700">
        <header className="relative z-10 px-4 pt-6 pb-10 bg-gradient-to-b from-black">
          <span className="text-white text-xs">{post.Year}</span>
          <h2 className="text-lg font-semibold text-gray-300">
            {post.title}
          </h2>
        </header>
        <img src={firstPhoto} className="absolute inset-0 w-full h-full object-cover min-h-full" />
      </motion.a>
    </Link>
  )
}

export default CarPost
