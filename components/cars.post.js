import { motion } from 'framer-motion'
import Car from './car.post'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const CarsPost = ({ posts }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-8 pb-20">
        <section className="divide-y divide-gray-200">
          {!posts?.length && (
            <p className="text-gray-500 dark:text-gray-300">No cars found.</p>
          )}
          <div className="max-w-2xl mx-auto lg:max-w-7xl">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts?.slice(0, 20).map(post => (
              <Car key={post.id} post={post} />
            ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CarsPost
