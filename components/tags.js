import Link from 'next/link'
import Image from 'next/image'

function classnames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <nav className="sticky top-0 z-40 bg-white text-sm font-medium text-gray-900 ring-1 ring-gray-900 ring-opacity-5 shadow-sm mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-5 sm:space-x-10 lg:space-x-14">
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
              <a className="group relative overflow-hidden">
                <div className="overflow-hidden">
                    <Image src={`/img/car-type/${key}.png`} width={280} height={280} objectFit="cover" objectPosition="50% 50%" />
                  </div>
                <div className="px-0 md:px-4 text-center">
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
