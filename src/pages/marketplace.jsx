import NftCards from '@/components/marketplace/Cards/NftCards'
import Navbar from '@/components/marketplace/Navbar'
import Head from 'next/head'
import React from 'react'

function marketplace() {
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
  return (
    <>
      <Head>
        <title>BNZ - Marketplace</title>
        <meta name="description" content="BNZ - marketplace" />
      </Head>
      <div className="mx-12 max-w-7xl p-6 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
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
