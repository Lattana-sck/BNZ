import { useEffect, useRef } from 'react'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import Web3ContextProvider from 'utils/Web3Context'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Web3ContextProvider>
            <Component previousPathname={previousPathname} {...pageProps} />
          </Web3ContextProvider>
        </main>
        <Footer />
      </div>
    </>
  )
}
