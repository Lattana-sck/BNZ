import Link from 'next/link'
import { GetIpfsUrlFromPinata } from '../utils'

const NFTTile = (data) => {
  const IPFSUrl = GetIpfsUrlFromPinata(data.data.image)
  return (
    <Link href={`/nftDetails/${data.data.tokenId}`}>
      <div className="mb-12 ml-12 mt-5 flex w-48 flex-col items-center rounded-lg border-2 shadow-2xl md:w-72">
        <img
          src={IPFSUrl}
          alt=""
          className="h-80 w-72 rounded-lg object-cover"
        />
        <div className="-mt-20 w-full rounded-lg bg-gradient-to-t from-[#454545] to-transparent p-2 pt-5 text-white">
          <strong className="text-xl">{data.data.name}</strong>
          <p className="display-inline">{data.data.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default NFTTile
