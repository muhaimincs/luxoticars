import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import Cars from '../components/cars.post'
import Tags from '../components/tags'
import Pagination from '../components/pagination'
import bg from '../public/img/black_yellow.jpeg'
import WEB from '../web.config'

const SearchLayout = ({ tags, posts, currentTag, showNext = false, page = 1 }) => {
  const sentinalRef = useRef([])
  const navRef = useRef(null)
  const [searchValue, setSearchValue] = useState('')
  const coverImg = require(`../public/brands/cover/${currentTag}.jpeg`).default
  const logo = require(`../public/brands/colors/${currentTag}.svg`).default
  let filteredBlogPosts = []
  let title = currentTag ? currentTag.replace(/-/g, ' ') : currentTag
  title = currentTag ? title.replace(/_/g, ' ') : ''
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('backdrop-blur-lg')
        navRef.current.classList.add('bg-gradient-to-r')
        navRef.current.classList.add('from-[#21252999]')
        navRef.current.classList.add('via-[#2125293d]')
        navRef.current.classList.add('to-gray-900')
        navRef.current.classList.add('bg-opacity-25')
        navRef.current.classList.add('z-50')
        navRef.current.classList.add('py-3')
        navRef.current.classList.remove('space-y-8')
        navRef.current.classList.add('space-y-2')
      } else {
        navRef.current.classList.remove('backdrop-blur-lg')
        navRef.current.classList.remove('bg-gradient-to-r')
        navRef.current.classList.remove('from-[#21252999]')
        navRef.current.classList.remove('via-[#2125293d]')
        navRef.current.classList.remove('to-gray-900')
        navRef.current.classList.remove('bg-opacity-25')
        navRef.current.classList.remove('z-50')
        navRef.current.classList.remove('space-y-2')
        navRef.current.classList.add('space-y-8')
        navRef.current.classList.remove('py-3')
      }
    }
  }
  if (posts) {
    filteredBlogPosts = posts.filter(post => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  useEffect(() => {
    if (window) {
      const observer = new window.IntersectionObserver(handler)
      observer.observe(sentinalRef.current)
    }
  }, [sentinalRef])

  return (
    <>
    <div className="absolute top-0 inset-x-0 z-[-10]" ref={sentinalRef}>
      <div className="relative h-64 xl:h-96 w-screen">
        <Image src={coverImg || bg} objectFit="cover" layout="fill" objectPosition="30%" alt={`${currentTag} on ${WEB.name}`} />
      </div>
    </div>
    {currentTag
      ? (
        <div className="max-w-7xl mx-auto p-10">
          <div className="flex flex-col-reverse justify-center items-start gap-y-10">
            <h1 className="text-white capitalize text-2xl">{title}</h1>
            <div className="w-24 h-24 flex items-center justify-center">
              <Image src={logo} alt={`${currentTag} logo on ${WEB.name}`} />
            </div>
          </div>
        </div>
        )
      : (
      <div className="bg-transparent h-32 h-32 xl:h-64" />
        )}
    <div className="bg-transparent observer-element h-4" ref={sentinalRef} />
    <div className="sticky top-0 md:relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-colors transition-opacity backdrop-filter" ref={navRef}>
      <div className="relative">
        <input
          type="text"
          placeholder={
            currentTag ? `Search in ${title}` : 'Search your car'
          }
          className="block w-full border px-4 py-2 border-black bg-white text-black dark:bg-night dark:border-white dark:text-white"
          onChange={e => setSearchValue(e.target.value)}
        />
        <svg
          className="absolute right-2 top-2.5 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Tags
        tags={tags}
        currentTag={currentTag}
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
      <Cars currentTag={currentTag} posts={filteredBlogPosts} />
      <Pagination page={page} showNext={showNext} />
      {currentTag && (
        <div className="flex items-center justify-center">
          <Link href="/search">
            <a className="border border-gray-400 px-3 py-4 rounded-xl text-gray-400">Reset</a>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
