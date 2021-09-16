/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import Image from 'next/image'

function classnames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <nav className="sticky top-0 z-40 bg-white text-sm font-medium text-gray-900 ring-1 ring-gray-900 ring-opacity-5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-5 sm:space-x-10 lg:space-x-14 overflow-x-auto overscroll-x-contain">
        {Object.keys(tags).map(key => {
          // const selected = key === currentTag
          return (
            <Link
              key={key}
              href={{
                pathname: '',
                query: { tag: encodeURIComponent(key) }
              }}
              scroll={false}
              replace
            >
              <a className="group relative flex-shrink-0 w-24 h-24">
                <img src={`/img/car-type/${key.toLowerCase()}.png`} className="w-full h-full object-cover" />
                <div className="px-0 md:px-4 text-center absolute z-10 bottom-0 inset-x-0">
                  <p className={classnames(currentTag === key
                    ? 'text-xs font-medium text-red-600 font-semibold mb-1 uppercase'
                    : 'text-xs font-medium text-gray-900 mb-1 uppercase')}>{`${key} (${tags[key]})`}</p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Tags
