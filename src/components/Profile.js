import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MarketplaceJSON from '../Marketplace.json'
import axios from 'axios'
import Navbar from './Navbar'
import NFTTile from './NFTTile'

export default function Profile() {
  const [data, updateData] = useState([])
  const [address, updateAddress] = useState('0x')
  const [totalPrice, updateTotalPrice] = useState('0')
  const [dataFetched, updateFetched] = useState(false)
  const router = useRouter()
  const { tokenId } = router.query // on récupère le tokenId du paramètre de l'URL

  useEffect(() => {
    async function getNFTData(tokenId) {
      const ethers = require('ethers')
      let sumPrice = 0

      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const addr = await signer.getAddress()

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        MarketplaceJSON.address,
        MarketplaceJSON.abi,
        signer
      )

      //create an NFT Token
      let transaction = await contract.getMyNFTs()

      /*
       * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
       * and creates an object of information that is to be displayed
       */

      const items = await Promise.all(
        transaction.map(async (i) => {
          const tokenURI = await contract.tokenURI(i.tokenId)
          let meta = await axios.get(tokenURI)
          meta = meta.data

          let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.image,
            name: meta.name,
            description: meta.description,
          }
          sumPrice += Number(price)
          return item
        })
      )

      updateData(items)
      updateFetched(true)
      updateAddress(addr)
      updateTotalPrice(sumPrice.toPrecision(3))
    }

    if (tokenId && !dataFetched) getNFTData(tokenId)
  }, [tokenId, dataFetched])

  return (
    <div className="profileClass" style={{ 'min-height': '100vh' }}>
      <div className="profileClass">
        <div className="mt-11 flex flex-col text-center text-white md:text-2xl">
          <div className="mb-5">
            <h2 className="font-bold">Wallet Address</h2>
            {address}
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center text-center text-white md:text-2xl">
          <div>
            <h2 className="font-bold">No. of NFTs</h2>
            {data.length}
          </div>
          <div className="ml-20">
            <h2 className="font-bold">Total Value</h2>
            {totalPrice} ETH
          </div>
        </div>
        <div className="mt-11 flex flex-col items-center text-center text-white">
          <h2 className="font-bold">Your NFTs</h2>
          <div className="flex max-w-screen-xl flex-wrap justify-center">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>
            })}
          </div>
          <div className="mt-10 text-xl">
            {data.length == 0
              ? 'Oops, No NFT data to display (Are you logged in?)'
              : ''}
          </div>
        </div>
      </div>
    </div>
  )
}
