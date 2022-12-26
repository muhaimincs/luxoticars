
export function Featured({ src, title = "", features = [] }) {
  return (
    <div>
      <figure className="relative animate-fade-in">
        <img src={src} alt="Featured car"  />
      </figure>
    </div>
  )
}