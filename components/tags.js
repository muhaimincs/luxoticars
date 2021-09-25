import Link from 'next/link'
import Image from 'next/image'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto space-x-3">
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          let title = key.replace(/-/g, ' ')
          title = title.replace(/_/g, ' ')
          return (
            <li
              key={key}
              className={`font-medium border rounded whitespace-nowrap flex flex-col justify-center items-center px-2 py-3 ${
                selected
                  ? 'text-white bg-black border-red-600'
                  : 'bg-gray-700 border-gray-400 text-gray-400'
              }`}
            >
              <div className="w-8 h-8">
                <Image src={`/brands/${key}.svg`} width={32} height={32} />
              </div>
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="block capitalize">
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
