import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import Cars from '../components/cars.post'
import Tags from '../components/tags'

const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = []
  let title = currentTag ? currentTag.replace(/-/g, ' ') : currentTag
  title = currentTag ? title.replace(/_/g, ' ') : ''
  if (posts) {
    filteredBlogPosts = posts.filter(post => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
      {!currentTag && (
        <div className="relative">
          <input
            type="text"
            placeholder={
              currentTag ? `Search in ${title}` : 'Search Cars'
            }
            className="block w-full border px-4 py-2 border-black bg-white text-black dark:bg-night dark:border-white dark:text-white"
            onChange={e => setSearchValue(e.target.value)}
          />
          <svg
            className="absolute right-0 top-1.5 h-5 w-5 text-black"
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
      )}
      {currentTag && (
        <div className="flex justify-between items-center">
          <h1 className="text-white capitalize text-2xl">{title}</h1>
          <Image src={`/brands/${currentTag}.svg`} width={96} height={96} />
        </div>
      )}
      <Tags
        tags={tags}
        currentTag={currentTag}
      />
      <Cars currentTag={currentTag} posts={filteredBlogPosts} />
      <div className="py-10 h-0.5 bg-white rounded-md" />
    </div>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
