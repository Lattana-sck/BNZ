import React from 'react'

function Input() {
  return (
    <div className='col-span-2'>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            ETH
          </span>
        </div>
      </div>
    </div>
  )
}

export default Input