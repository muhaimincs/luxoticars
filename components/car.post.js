/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
        className={`group ${s.a}`}>
        <header className={s.header}>
          <small class="text-xs">
            <span className={s.year}>{post?.Year}</span>
          </small>
          <h2 className={s.h2}>
            {post?.title}
          </h2>
        </header>
        <div className={s.img}>
          <Image src={firstPhoto} alt={post?.title} layout="fill" objectFit="cover" />
        </div>
        {post?.status[0] === 'Sold' && (
          <p className="absolute bottom-0 right-0 bg-white/50 p-1 m-3 text-xs">SOLD</p>
        )}
      </motion.a>
    </Link>
  )
}

export default CarPost
