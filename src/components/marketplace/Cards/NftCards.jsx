import React from 'react'
import Image from 'next/image'
import img from '@/images/NFT/nftimage.png'
function NftCards({ title, number, description, price, currency, lastSalePrice }) {
  return (
    <>
      <div className="col-span-1 max-w-sm overflow-hidden rounded-xl shadow-2xl">
        <Image
          className=""
          width={1000}
          height={100}
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-center text-lg font-bold">
            {title}&nbsp;
            {number}
          </div>
          {/* <p className="truncate text-center text-base text-gray-700">
            {description}
          </p> */}
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
            <span className="m-1 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Buy now
            </span>
            <span className="m-1 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Bid
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NftCards
