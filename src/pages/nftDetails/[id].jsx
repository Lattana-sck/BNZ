import React from 'react'
import { useRouter } from 'next/router'
import NFTPage from '../../components/NFTpage'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'

function NftDetails() {
  const router = useRouter()
  const { id } = router.query // id here is what you specified in the file name [.../nftDetails/[id].jsx]

  return (
    <SimpleLayout>
      {/* ensure id is defined before rendering NFTPage */}
      {id && <NFTPage tokenId={id} />}
    </SimpleLayout>
  )
}

export default NftDetails