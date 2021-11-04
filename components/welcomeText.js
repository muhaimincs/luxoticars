import s from './welcomeText.module.css'

export default function WelcomeText () {
  return (
    <div className={s.wrapper}>
      <h1 className="text-white text-lg md:text-3xl md:text-center px-6 text-center mt-3">The Syndicate</h1>
      <span className={s.neonText}>Carlifestyle</span>
      <span className="text-white text-lg md:text-3xl md:text-center px-6 text-center mt-3">Cartel</span>
    </div>
  )
}
