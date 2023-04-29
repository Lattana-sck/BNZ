import { Container } from '@/components/layouts/Container'
import MetamaskButton from '@/components/ui/MetamaskButton'
import Head from 'next/head'
import React from 'react'

function marketplace() {
  return (
    <>
      <Head>
        <title>BNZ - Marketplace</title>
        <meta
          name="description"
          content="BNZ - marketplace"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none text-white">
              <MetamaskButton title={"Connect metamask"}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default marketplace
