import { useEffect, useState } from 'react'

import ParallaxItem, { handleScroll } from './parallex-item'
import Mission from './mission.about'
import P1 from './p1.about'

export default function ParallexAbout () {
  const [scroll, setScroll] = useState(window.innerHeight || 0)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll(() => {
        setScroll(window.pageYOffset + window.innerHeight)
      })
    )
  }, [])

  return (
    <>
    <ParallaxItem scroll={scroll}>
      <Mission />
    </ParallaxItem>
    <ParallaxItem scroll={scroll} speed={0.2}>
      <P1 />
    </ParallaxItem>
    </>
  )
}
