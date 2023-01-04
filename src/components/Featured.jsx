
export function Featured({ src, title = "", features = [] }) {
  return (
    <div className="relative pb-10 md:pb-0">
      <figure className="animate-fade-in">
        <img src={src} alt="Featured car" className="rounded-xl"  />
      </figure>
      <div className="absolute top-2 left-3 md:top-36 z-20">
        <h2 className="text-zinc-300 text-2xl md:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-b backdrop-opacity-10 from-white via-zinc-200 to-transparent">{title}</span>
        </h2>
        <div className="flex flex-wrap md:gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex md:items-center gap-2">
              <span className="text-zinc-300 text-2xl">◦</span>
              <span className="text-zinc-300 text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -inset-px bg-black/30" />
      <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-black" />
      <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-black lg:block" />
    </div>
  )
}