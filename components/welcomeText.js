import s from './welcomeText.module.css'

export default function WelcomeText () {
  return (
    <div className="max-w-7xl mx-auto w-screen flex flex-col items-center justify-center mt-72 mb-40 iphone5:mb-28">
      <h1 className="text-white text-lg md:text-3xl md:text-center px-6 text-center mt-3">The Syndicate</h1>
      <span className={s.neonText}>Carlifestyle</span>
      <span className="text-white text-lg md:text-3xl md:text-center px-6 text-center mt-3">Cartel</span>
    </div>
  )
}
