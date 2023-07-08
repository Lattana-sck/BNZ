import NftCards from '@/components/marketplace/Cards/NftCards'
import Navbar from '@/components/marketplace/Navbar'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
// const Web3 = require('web3')
import Web3 from 'web3'

function marketplace() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    getCurrentWalletConnected()
  })

  const NFTs = [
    {
      title: 'NFTparis',
      number: '#1203',
      description: 'description du NFT',
      price: '0.2',
      currency: 'ETH',
      lastSalePrice: '0.1',
    },
    {
      title: 'NFTparis',
      number: '#1204',
      description: 'description du NFT',
      price: '0.6',
      currency: 'ETH',
      lastSalePrice: '0.1',
    },
    {
      title: 'NFTparis',
      number: '#1205',
      description: 'description du NFT',
      price: '0.4',
      currency: 'ETH',
      lastSalePrice: '0.1',
    },
    {
      title: 'NFTparis',
      number: '#1206',
      description: 'description du NFT',
      price: '0.1',
      currency: 'ETH',
      lastSalePrice: '0.1',
    },
  ]

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

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_account',
        })
        if (accounts.length > 0) {
          setIsMetaMaskConnected(true)
          setWalletAddress(accounts[0])
        } else {
          console.log('Connect to metamask using the connect button')
        }
      } catch (err) {
        console.error(err.message)
      }
    } else {
      console.log('Metamask not installed')
    }
  }
console.log(isMetaMaskConnected)
  return (
    <>
      <Head>
        <title>BNZ - Marketplace</title>
        <meta name="description" content="BNZ - marketplace" />
      </Head>
      <div className="mx-12 max-w-7xl p-6 sm:px-6 lg:px-8">
        {/* <Navbar title={account} /> */}
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
      </div>
      <div
        className={`mx-auto max-w-7xl p-6 sm:px-6 lg:px-8 ${
          isMetaMaskConnected ? '' : 'blur-2xl'
        }`}
      >
        <div className="mx-12 grid grid-cols-4 gap-6 p-6">
          {NFTs.map((nft) => (
            <NftCards
              title={nft.title}
              number={nft.number}
              description={nft.description}
              price={nft.price}
              currency={nft.currency}
              lastSalePrice={nft.lastSalePrice}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default marketplace
