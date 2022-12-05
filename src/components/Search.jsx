import { Fragment, useState, useCallback, useRef, createContext, useContext, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import algoliasearch from 'algoliasearch/lite'
import { useActionKey } from '@/hooks/useActionKey'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-hooks-web'

const INDEX_NAME = 'dev_luxoticars'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
)
const SearchContext = createContext()

export function SearchProvider({ children }) {
  const router = useRouter()
  const pathRef = useRef()

  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    () => {
      setIsOpen(true)
    },
    [setIsOpen]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
  })

  useEffect(() => {
    pathRef.current = router.pathname
  }, [router.pathname])

  return (
    <>
      <Head>
        <link rel="preconnect" href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`} crossOrigin="true" />
      </Head>
      <SearchContext.Provider
        value={{
          isOpen,
          onOpen,
          onClose,
          onInput,
        }}
      >
        {children}
      </SearchContext.Provider>
      <Modal isOpen={isOpen} onClose={onClose} pathRef={pathRef.current} />
    </>
  )
}

function Hit({ hit }) {
  const { brand } = hit
  const logo = require(`@/images/brands/${brand}.svg`).default

  return (
    <>
      <Link
        href={`/m/${hit.slug}#display`}
        className="DocSearch-Hit--Result first:mt-3"
      >
        <div className="DocSearch-Hit-Container">
          <div className="DocSearch-Hit-icon">
            <Image src={logo} alt={`${brand} on Luxoticars`} />
          </div>
          <div className="DocSearch-Hit-content-wrapper">
            <span className="DocSearch-Hit-path">
              <Highlight hit={hit} attribute="title" />
            </span>
          </div>
          <div className="DocSearch-Hit-action" />
        </div>
      </Link>
    </>
  )
}

export function SearchButton({ children, ...props }) {
  let searchButtonRef = useRef()
  let actionKey = useActionKey()
  let { onOpen, onInput } = useContext(SearchContext)

  useEffect(() => {
    function onKeyDown(event) {
      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event)
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onInput, searchButtonRef])

  return (
    <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
      {typeof children === 'function' ? children({ actionKey }) : children}
    </button>
  )
}

function useDocSearchKeyboardEvents({ isOpen, onOpen, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (
        (event.keyCode === 27 && isOpen) ||
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (!isEditingContent(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])
}

function Modal({ isOpen, onClose, pathRef }) {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      if (String(pathRef) === String(router.pathname)) {
        document.body.classList.add('DocSearch--active');
      }
    }

    return () => {
      if (isOpen) {
        document.body.classList.remove('DocSearch--active');
        if (String(pathRef) === String(router.pathname)) {
          onClose()
        }
      }
    };
  }, [router.pathname, pathRef, isOpen])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="DocSearch DocSearch-Container" onClose={onClose}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="py-20 px-3 sm:p-[12vh] h-screen w-screen flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="DocSearch-Modal transform transition-all">
                <InstantSearch
                  indexName={INDEX_NAME}
                  searchClient={searchClient}
                >
                  <SearchBox placeholder='Search...' />
                  <div className="DocSearch-Dropdown">
                    <div className="DocSearch-Dropdown-Container">
                      <Hits hitComponent={Hit} className="DocSearch-Hits" />
                    </div>
                  </div>
                </InstantSearch>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

function isEditingContent(event) {
  let element = event.target
  let tagName = element.tagName
  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}
