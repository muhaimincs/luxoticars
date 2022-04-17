import Brands from './brands.carousel'

const perRow = 6

export default function BrandsHomepage ({ tags }) {
  const slice1 = Object.keys(tags).slice(0, perRow)
  const slice2 = Object.keys(tags).slice(
    perRow * (2 - 1),
    perRow * 2
  )
  return (
    <div className="overflow-hidden mt-44">
      <Brands tags={slice1} />
      <div className="h-8 bg-transparent" />
      <Brands tags={slice2} dur={50} />
    </div>
  )
}
