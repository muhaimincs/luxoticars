import Link from 'next/link'

import BLOG from '../web.config'

const Pagination = ({ page, showNext }) => {
  const currentPage = +page
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div className={`sticky bottom-[13vh] z-50 lg:z-auto lg:relative flex font-medium text-gray-100 ${additionalClassName}`}>
      {currentPage !== 1 && (
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/search/${currentPage - 1}`
        }
      >
        <a className="bg-gradient-to-r from-green-400 to-blue-500 p-1">
          <button
            rel="prev"
            className="block cursor-pointer px-3 py-4 bg-gray-900"
          >
            &lsaquo; PREV
          </button>
        </a>
      </Link>
      )}
      {showNext && (
        <Link href={`/search/${currentPage + 1}`}>
          <a className="bg-gradient-to-r from-green-400 to-blue-500 p-1">
            <button rel="next" className="block cursor-pointer px-3 py-4 bg-gray-900">
              NEXT &rsaquo;
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination
