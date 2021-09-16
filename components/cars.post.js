import Car from './car.post'

const CarsPost = ({ currentTag = 'All', posts }) => {
  return (
    <div className="max-w-7xl bg-gray-200 mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-8">
      <section className="divide-y divide-gray-200">
        <div className="pb-6 sm:flex sm:items-center sm:justify-between sm:flex-wrap">
          <h2 className="text-2xl font-extrabold text-gray-900 font-sans uppercase">{currentTag}</h2>
        </div>
        {!posts.length && (
          <p className="text-gray-500 dark:text-gray-300">No cars found.</p>
        )}
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posts.slice(0, 20).map(post => (
            <Car key={post.id} post={post} />
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarsPost
