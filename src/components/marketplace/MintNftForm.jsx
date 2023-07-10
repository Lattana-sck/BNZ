import React from 'react'

function MintNftForm({ setTokenURI, mintNFT, tokenURI}) {
  return (
    <div className="mx-12 flex max-w-7xl items-center justify-center p-6 font-bold dark:text-white sm:px-6 lg:px-8">
        <form className="mb-4 rounded border-teal-500 px-8 pb-8  pt-6 shadow-xl shadow-teal-500 ">
          <div className="mb-4">
            <label
              className="mb-2 block text-xl font-bold dark:text-white"
              htmlFor="uri"
            >
              Créez votre NFT
            </label>
            <input
              value={tokenURI}
              onChange={(e) => setTokenURI(e.target.value)}
              placeholder="Token URI"
              id="uri"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={mintNFT}
              className="w-25 h-10 rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-400"
            >
              Mint NFT
            </button>
          </div>
        </form>
      </div>
  )
}

export default MintNftForm