import { Header } from '@/components/Header'
import { usePrevious } from '@/hooks/usePrevious'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <Header />
      <main>
        <Component
          previousPathname={previousPathname} 
          path={router.pathname}
          {...pageProps}
        />
      </main>
    </>
  )
}
