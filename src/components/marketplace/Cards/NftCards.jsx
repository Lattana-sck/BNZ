import React from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'

function NftCards({
  title,
  number,
  price,
  currency,
  lastSalePrice,
  url,
  id,
  walletAddress,
  contractAddress,
  contractABI,
  loadNFTs,
}) {

  const buyNFT = async (nftId, price) => {
    if (walletAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x6d77ab41E9D04aE7a13E41C40fA948fBd388F24d", contractABI, signer)
      console.log("contracts", contract)
      try {
        const transaction = await contract.buyNFT(nftId, { value: price })
        console.log('Transaction sent:', transaction.hash)
        await transaction.wait()
        console.log('NFT purchased!')
        loadNFTs() // Recharge les NFTs après l'achat réussi
      } catch (err) {
        console.error('Error:', err)
      }
    }
  }

  const listNFT = async (address, nftId, price) => {
    if (walletAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x6d77ab41E9D04aE7a13E41C40fA948fBd388F24d", contractABI, signer)
      console.log("contracts", contract)
      try {
        const transaction = await contract.listNFTForSale(address, nftId, price)
        console.log('Transaction sent:', transaction.hash)
        await transaction.wait()
        console.log('NFT listed!')
        loadNFTs() // Recharge les NFTs après l'achat réussi
      } catch (err) {
        console.error('Error:', err)
      }
    }
  }
  

  return (
    <>
      <div className="col-span-1 max-w-sm overflow-hidden rounded-xl shadow-md hover:shadow-2xl dark:text-white dark:shadow-teal-500">
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
            <button
              className="m-1 inline-block rounded-full bg-teal-400 px-3 py-1 text-sm font-semibold text-white hover:bg-teal-500 dark:text-gray-700"
              onClick={() => buyNFT(id._hex, price)}
            >
              Acheter
            </button>

            <button 
            onClick={() => listNFT("0x6d77ab41E9D04aE7a13E41C40fA948fBd388F24d", id._hex, "0.1")}
            className="m-1 inline-block rounded-full bg-teal-400 px-3 py-1 text-sm font-semibold text-white hover:bg-teal-500 dark:text-gray-700">
              List
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NftCards
