import NftCards from '@/components/marketplace/Cards/NftCards'
import Navbar from '@/components/marketplace/Navbar'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
// const Web3 = require('web3')
import Web3 from 'web3'
import { ethers } from 'ethers'
const contractArtifact = require('../../artifacts/contracts/MyNFT.sol/MyNFT.json')
const contractABI = contractArtifact.abi
const contractAddress = '0x29758e733C9681EE0075564BeFA2f489C5B773a1'

function marketplace() {
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()
  // const contract = new ethers.Contract(contractAddress, contractABI, signer)

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [NFTs, setNFTs] = useState([])
  const [tokenURI, setTokenURI] = useState('')

  useEffect(() => {
    getCurrentWalletConnected()
  })

  useEffect(() => {
    loadNFTs()
  }, [walletAddress])

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
  const loadNFTs = async () => {
    if (walletAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, contractABI, signer)

      try {
        const nfts = await contract.getNFTs()
        setNFTs(nfts)
      } catch (err) {
        console.error(err)
      }
    }
  }

  const mintNFT = async () => {
    if (walletAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, contractABI, signer)

      try {
        const transaction = await contract.mintNFT(walletAddress, tokenURI)
        console.log('Transaction sent: ' + transaction.hash)
        await transaction.wait()
        console.log('NFT minted!')
        setTokenURI('') // Reset the input field
        loadNFTs() // Reload NFTs
      } catch (err) {
        console.error('Error: ', err)
      }
    }
  }

  return (
    <>
      <Head>
        <title>BNZ - Marketplace</title>
        <meta name="description" content="BNZ - marketplace" />
      </Head>
      <div className="mx-12 max-w-7xl p-6 sm:px-6 lg:px-8">
        <Navbar />
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
              id={nft.id}
              uri={nft.uri}
              url={`https://ipfs.io/ipfs/${nft?.uri?.split('//')?.[1]}`}
              // Add any other NFT details you want to display
            />
          ))}
        </div>
      </div>
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
    </>
  )
}

export default marketplace
