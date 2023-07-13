import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import MarketplaceJSON from '../Marketplace.json'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import SellNFT from '@/components/SellNFT'
import Profile from '@/components/Profile'
import { GetIpfsUrlFromPinata } from '@/utils'
import axios from 'axios'
import NFTTile from '@/components/NFTTile'

require('dotenv').config()

function marketplace() {
  const [data, updateData] = useState()
  const [dataFetched, updateFetched] = useState(false)
  const [activeComponent, setActiveComponent] = useState('Marketplace')
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setIsMetaMaskConnected(true)
        setWalletAddress(accounts[0])
      } catch (err) {
        console.error(err.message)
      }
    } else {
      console.log('Metamask not installed')
    }
  }
  async function getAllNFTs() {
    const ethers = require('ethers')
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    )
    //create an NFT Token
    let transaction = await contract.getAllNFTs()

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        var tokenURI = await contract.tokenURI(i.tokenId)
        tokenURI = GetIpfsUrlFromPinata(tokenURI)
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
        return item
      })
    )

    updateFetched(true)
    updateData(items)
  }

  if (!dataFetched) getAllNFTs()
  console.log(isMetaMaskConnected)
  return (
    <SimpleLayout>
      <button
        onClick={() => connectWallet()}
        className="w-25 h-10 rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-400"
      >
        {walletAddress.length > 0
          ? `Connected: ${walletAddress.substring(
              0,
              6
            )}...${walletAddress.substring(38)}`
          : 'Connect Wallet'}
      </button>
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'SellNFT' && <SellNFT />}
      {activeComponent === 'Profile' && <Profile />}
      { isMetaMaskConnected &&
       <div className="mt-20 flex flex-col place-items-center">
        <div className="font-bold text-white md:text-xl">Top NFTs</div>
        <div className="mt-5 flex max-w-screen-xl flex-wrap justify-between text-center">
          {data?.map((value, index) => {
            return <NFTTile data={value} key={index}></NFTTile>
          })}
        </div>
      </div>
      }
    </SimpleLayout>
  )
}

export default marketplace
