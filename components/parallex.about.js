import { useEffect, useState } from 'react'
import Image from 'next/image'

import ParallaxItem, { handleScroll } from './parallex-item'
import Quote from './quote.about'
import s from './parallex.about.module.css'
import WithTeamPhoto from '../public/img/with-team.jpeg'
import WithTeamPhoto2 from '../public/img/with-team2.jpg'
import YoutubeAward from '../public/img/youtube-awward.jpeg'

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
    <ParallaxItem scroll={scroll} className="overflow-hidden w-full lg:max-w-prose mx-auto">
      <dl className="shadow-lg grid grid-cols-2 gap-2">
        <div className={`bg-black/50 rounded-xl flex flex-col p-6 bg-cover bg-center ${s['r-gradient']}`}>
          <dt className="order-2 text-xs md:text-lg leading-6 font-medium text-[#93d3f0]">Luxoticars launched</dt>
          <dd className="order-1 text-xl font-extrabold text-white">2008</dd>
        </div>
        <div className={`bg-black/50 rounded-xl flex flex-col p-6 bg-cover bg-center ${s['r-gradient']}`}>
          <dt className="order-2 text-xs md:text-lg leading-6 font-medium text-[#93d3f0]">Delivery</dt>
          <dd className="order-1 text-xl font-extrabold text-white">Thousands</dd>
        </div>
      </dl>
    </ParallaxItem>
    <div className="max-w-prose mx-auto rounded-xl overflow-hidden backdrop-blur-lg bg-gradient-to-r from-[#21252999] via-[#2125293d] to-gray-900 bg-opacity-25 transform backdrop-filter">
      <div className="relative rounded-t-xl">
        <Image src={WithTeamPhoto} />
      </div>
      <ParallaxItem scroll={scroll} className="ml-3">
        <Quote text="Sale is an important position across a variety of fields. It is generally recognized that sales promotion is not a noble job and that it will be badly affected by routines, cheating of money, etc. I’ve noticed that just because a single poisonous thought permeates the public's knowledge about the sales world. Frankly, I am very proud as a salesman in my current field of the automobile business, as the founder of two of my companies- Luxuticars and Motorsports Signature." />
      </ParallaxItem>
    </div>
    <ParallaxItem scroll={scroll} speed={-0.0002} className="max-w-prose mx-auto rounded-xl overflow-hidden backdrop-blur-lg bg-gradient-to-r from-[#21252999] via-[#2125293d] to-gray-900 bg-opacity-25 transform backdrop-filter my-3">
      <div className="relative rounded-t-xl">
        <Image src={YoutubeAward} />
      </div>
      <div className="ml-3 py-3 text-white">
        Youtube Award
      </div>
    </ParallaxItem>
    <div className="max-w-prose mx-auto rounded-xl overflow-hidden backdrop-blur-lg bg-gradient-to-r from-[#21252999] via-[#2125293d] to-gray-900 bg-opacity-25 transform backdrop-filter">
      <div className="relative rounded-t-xl">
        <Image src={WithTeamPhoto2} />
      </div>
      <ParallaxItem scroll={scroll} className="ml-3">
        <Quote text="I firmly believe that the sales profession is very worthy of the hard work and effort to achieve sales success. Therefore, I hope that through my experience, stories, and online media promotional videos, I can guide everyone to change this conservative idea. Remember, every industry can be the champion and create talents. Negative attitudes can be toxic and contagious. It is essential to keep us in a positive environment-both internally and externally" />
      </ParallaxItem>
    </div>
    </>
  )
}
