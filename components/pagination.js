import Link from 'next/link'

import BLOG from '../web.config'

const Pagination = ({ page, showNext }) => {
  const currentPage = +page
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div className={`flex font-medium text-black dark:text-gray-100 ${additionalClassName}`}>
      {currentPage !== 1 && (
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a>
          <button
            rel="prev"
            className="block cursor-pointer"
          >
            ← PREV
          </button>
        </a>
      </Link>
      )}
      {showNext && (
        <Link href={`/page/${currentPage + 1}`}>
          <a>
            <button rel="next" className="block cursor-pointer">
              NEXT →
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination
