import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'

export function MenuIcon({ open, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  )
}

export function ArticleNavBar({ sections }) {
  let navBarRef = useRef()
  let [activeIndex, setActiveIndex] = useState(null)
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

  useEffect(() => {
    function updateActiveIndex() {
      let newActiveIndex = null
      let elements = sections.map(({ link }) => document.getElementById(link))
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      for (let index = 0; index < elements.length; index++) {
        if(elements[index]) {
          if (
            window.scrollY >=
            elements[index].getBoundingClientRect().top - offset
          ) {
            newActiveIndex = index
          } else {
            break
          }
        }
      }

      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex, { passive: true })
    }
  }, [])

  return (
    <div ref={navBarRef} className="sticky top-0 z-10">
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center py-3 px-4',
                !open &&
                  'bg-white/95 dark:bg-zinc-900 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/85 [@supports(backdrop-filter:blur(0))]:backdrop-blur'
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-red-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900 dark:text-slate-200">
                    {sections[mobileActiveIndex].text}
                  </span>
                </>
              )}
              <Popover.Button
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10'
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700 dark:stroke-slate-300" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 dark:bg-zinc-800 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/85 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as={Link}
                  key={section.link}
                  href={section.link}
                  className="flex items-center py-1.5 px-4"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-red-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900 dark:text-slate-100">
                    {section.text}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white dark:bg-zinc-900" />
          </>
        )}
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-600 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:dark:bg-zinc-900/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.link} className="flex [counter-increment:section]">
              <Link
                href={section.link}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-red-600 bg-blue-50 dark:bg-zinc-800 text-red-600 before:text-red-600'
                    : 'border-transparent dark:text-zinc-200 before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900'
                )}
              >
                {section.text}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
