import Car from './car.post'

const CarsPost = ({ currentTag, posts }) => {
  return (
    <div className="max-w-7xl bg-gray-200 mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-8">
      <section className="divide-y divide-gray-200">
        <div className="pb-6 sm:flex sm:items-center sm:justify-between sm:flex-wrap">
          <h2 className="text-2xl font-extrabold text-gray-900 font-sans">{currentTag}</h2>
        </div>
        {!posts.length && (
          <p className="text-gray-500 dark:text-gray-300">No cars found.</p>
        )}
        {posts.slice(0, 20).map(post => (
          <Car key={post.id} post={post} />
        ))}
      </section>
    </div>
  )
}

export default CarsPost
