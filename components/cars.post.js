import Car from './car.post'

const CarsPost = ({ posts }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-8 pb-20">
        <section className="divide-y divide-gray-200">
          {!posts.length && (
            <p className="text-gray-500 dark:text-gray-300">No cars found.</p>
          )}
          <div className="max-w-2xl mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts.slice(0, 20).map(post => (
              <Car key={post.id} post={post} />
            ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CarsPost
