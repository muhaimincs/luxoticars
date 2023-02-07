import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import {
  InstagramIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/p1.jpeg'
import withTeamImage from '@/images/with-team.jpeg'
import youtubeAwwardImage from '@/images/youtube-awward.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - LUXOTICARS</title>
        <meta
          name="description"
          content="Founded and led by Abu Garciá, the company is renowned for its world-class"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
              We are driven to create on-demand buying experience and financing with transparency and nearly seamless end-to-end service.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-200">
              <p>
                Founded and led by Abu Garciá, it was his love for cars that gave him direction to where he is today.
              </p>
              <p>
                21 years ago, he started his career as a salesman for car magazines, bank officer (hire-purchase), etc where he found the satisfaction in life by providing cars to the market.
                Luxoticars started because of his happy customers, which now Luxoticars has a mission to live by.
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={withTeamImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                The Philosophy
              </h3>
              <p>
                Luxoticars is driven by the satisfaction of our customers. We found that it takes value to make our customers happy. We have embraced these values as part of our philosophy.
              </p>
              <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                The vision
              </h3>
              <p>
                Luxoticars’ vision is to grow as the best we can be as a company by seeking to improve our skills and quality of our service.
              </p>
              <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                The mission
              </h3>
              <p>
                Our mission is to earn our customer’s Loyalty by providing vehicles and customer experiences with the highest possible quality, excellent value, integrity and enthusiasm.
              </p>
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={youtubeAwwardImage}
                  alt="Receive Youtube awward"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-video rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://instagram.com/luxoticars" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://youtube.com/luxoticars" icon={YoutubeIcon} className="mt-4">
                Follow on Youtube
              </SocialLink>
              <SocialLink
                href="mailto:chai@luxoticars.cc"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chai@luxoticars.cc
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  )
}
