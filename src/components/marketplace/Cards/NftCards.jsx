import React from 'react'
import Image from 'next/image'
import img from '@/images/NFT/nftimage.png'

function NftCards({ title, number, description, price, currency, lastSalePrice, url }) {
  return (
    <>
      <div className="dark:text-white col-span-1 max-w-sm overflow-hidden rounded-xl shadow-md hover:shadow-2xl dark:shadow-teal-500">
        <Image
          className=""
          width={290}
          height={200}
          src={url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-center text-lg font-bold">
            {title}&nbsp;
            {number}
          </div>
        </div>
        <div className="px-4 pb-2 text-center">
          <div className="text-center">
            <span className="font-bold">{price}</span>
            <span className="font-bold">{currency}</span>
          </div>
          <div>
            <span>Last sale : {lastSalePrice}</span>
          </div>
          <div>
            <button className="m-1 inline-block rounded-full bg-teal-400 hover:bg-teal-500 px-3 py-1 text-sm font-semibold text-white dark:text-gray-700">
              Buy now
            </button>
            <button className="m-1 inline-block rounded-full bg-teal-400 hover:bg-teal-500 px-3 py-1 text-sm font-semibold text-white dark:text-gray-700">
              Bid
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NftCards
