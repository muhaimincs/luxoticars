import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Brand } from '@/components/BrandGrid'
import { MenuIcon } from '@/components/ArticleNavBar'

export function Brands({ brands }) {
  let navBarRef = useRef()
  const router = useRouter()
  const { brand } = router.query
  let [activeIndex, setActiveIndex] = useState(null)
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

  useEffect(() => {
    if (brand) {
      const selectedIndex = brands.map((b) => b.brand).indexOf(brand)
      setActiveIndex(selectedIndex)
    }
  }, [brand])

  return (
    <div ref={navBarRef} className="order-first sm:order-last lg:pl-20 sticky top-0 lg:top-20">
      <div className="hidden sm:block max-w-sm px-0 md:px-2.5 lg:max-w-none">
        <h2 className="text-zinc-900 dark:text-zinc-300">Explore By Maker</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {brands.map((brand, carIndex) => <Brand key={brand.brand} aria-hidden={carIndex >= brands.length} {...brand} nav />)}
        </div>
      </div>
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
                  <span className="ml-4 text-base capitalize font-medium text-slate-900 dark:text-slate-200">
                    {brands[mobileActiveIndex].brand}
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
              <Popover.Button
                as={Link}
                href="/l"
                className="flex items-center py-1.5 px-4"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-red-600"
                >
                  0
                </span>
                <span className="ml-4 text-base capitalize font-medium text-slate-900 dark:text-slate-100">
                  All
                </span>
              </Popover.Button>
              {brands.map((section, sectionIndex) => (
                <Popover.Button
                  as={Link}
                  key={section.brand}
                  href={`/l/?brand=${section.brand}`}
                  className="flex items-center py-1.5 px-4"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-red-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base capitalize font-medium text-slate-900 dark:text-slate-100">
                    {String(section.brand)}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white dark:bg-zinc-900" />
          </>
        )}
      </Popover>
    </div>
  )
}