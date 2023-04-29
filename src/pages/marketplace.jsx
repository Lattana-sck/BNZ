import NftCards from '@/components/marketplace/Cards/NftCards'
import Navbar from '@/components/marketplace/Navbar'
import Head from 'next/head'
import React from 'react'

function marketplace() {
  return (
    <>
      <Head>
        <title>BNZ - Marketplace</title>
        <meta name="description" content="BNZ - marketplace" />
      </Head>
      <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-6 gap-3 p-6">
          <NftCards
            title={'NFTparis'}
            number={'#1203'}
            description={'description du NFT'}
            price={'0.1'}
            currency={'ETH'}
            lastSalePrice={'0.1'}
          />
          <NftCards
            title={'NFTparis'}
            number={'#1203'}
            description={'description du NFT'}
            price={'0.1'}
            currency={'ETH'}
            lastSalePrice={'0.1'}
          />
          <NftCards
            title={'NFTparis'}
            number={'#1203'}
            description={'description du NFT'}
            price={'0.1'}
            currency={'ETH'}
            lastSalePrice={'0.1'}
          />
        </div>
      </div>
    </>
  )
}

export default marketplace
