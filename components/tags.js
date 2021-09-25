import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          let title = key.replace(/-/g, ' ')
          title = title.replace(/_/g, ' ')
          return (
            <li
              key={key}
              className={`mr-3 font-medium border whitespace-nowrap dark:text-gray-300 ${
                selected
                  ? 'text-white bg-black border-red-600'
                  : 'bg-gray-100 border-gray-100 text-gray-400'
              }`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="px-4 py-2 block capitalize">
                  {title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
