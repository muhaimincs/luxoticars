import Link from 'next/link'
import Image from 'next/image'

const Tags = ({ tags, currentTag, className }) => {
  if (!tags) return null
  const ulClassName = !className
    ? 'flex max-w-full mt-4 overflow-x-auto space-x-3'
    : className
  return (
    <div>
      <ul className={ulClassName}>
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          let title = key.replace(/-/g, ' ')
          title = title.replace(/_/g, ' ')
          return (
            <li
              key={key}
              className={`flex-shrink-0 w-32 font-sans font-medium rounded flex flex-col justify-center items-center px-2 py-3 ${
                selected
                  ? 'text-white bg-gradient-to-t from-gray-500 border-red-600 text-red-600'
                  : 'bg-gradient-to-t from-gray-700 text-gray-200'
              }`}
            >
              <div className="w-8 h-8">
                <Image src={`/brands/${key}.svg`} width={32} height={32} />
              </div>
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                replace
              >
                <a className="block capitalize text-xs text-center">
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
