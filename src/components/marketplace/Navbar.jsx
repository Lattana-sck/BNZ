import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import MetamaskButton from '../ui/MetamaskButton'
function Navbar() {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Rechercher une collection...
          </label>
          <div className="relative w-full">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
              placeholder="Rechercher une collection, une start-up, un entrepreneur"
              type="search"
              name="search"
            />
          </div>
          <div className="item-center flex justify-center pt-3">
            <MetamaskButton title={'Wallet'} />
            <UserCircleIcon
              className="inset-y-0 left-0 h-full w-20 cursor-pointer pb-3 text-gray-500 hover:text-gray-600"
              aria-hidden="true"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Navbar