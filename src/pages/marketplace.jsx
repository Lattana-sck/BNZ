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
      <div className="p-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Content goes here */}
      <Navbar />
        </div>
    </>
  )
}

export default marketplace
