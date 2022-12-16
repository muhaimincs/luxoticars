import { Header } from '@/components/Header'
import { usePrevious } from '@/hooks/usePrevious'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      {/* <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div> */}
      <Header />
      <main>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
    </>
  )
}
