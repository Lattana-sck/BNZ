import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Navbar({ setActiveComponent }) {
  const router = useRouter()
  const [connected, toggleConnect] = useState(false)
  const [currAddress, updateAddress] = useState('0x')

  async function getAddress() {
    const ethers = require('ethers')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const addr = await signer.getAddress()
    updateAddress(addr)
  }

  // function updateButton() {
  //   const ethereumButton = document.querySelector('.enableEthereumButton')
  //   ethereumButton.classList.remove('hover:bg-blue-70')
  //   ethereumButton.classList.remove('bg-blue-500')
  //   ethereumButton.classList.add('hover:bg-green-70')
  //   ethereumButton.classList.add('bg-green-500')
  // }

  async function connectWebsite() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    if (chainId !== '0x5') {
      //alert('Incorrect network! Switch your metamask network to Rinkeby');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
      })
    }
    await window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(() => {
        updateButton()
        console.log('here')
        getAddress()
        window.location.replace(location.pathname)
      })
  }
  useEffect(() => {
    if (window.ethereum == undefined) return
    let val = window.ethereum.isConnected()
    if (val) {
      getAddress()
      toggleConnect(val)
      // updateButton()
    }

    window.ethereum.on('accountsChanged', function (accounts) {
      router.reload()
    })
  })

  return (
    <>
      <nav className="w-screen">
        <ul className="flex items-end justify-between bg-transparent py-3 pr-5 text-white">
          <li className="w-1/2">
            <ul className="mr-10 justify-between text-lg font-bold lg:flex">
              <li
                className={
                  router.pathname === '/'
                    ? 'border-b-2 p-2 hover:pb-0'
                    : 'p-2 hover:border-b-2 hover:pb-0'
                }
              >
                <button onClick={() => setActiveComponent('Marketplace')}>
                  Marketplace
                </button>
              </li>
              <li
                className={
                  router.pathname === '/sellNFT'
                    ? 'border-b-2 p-2 hover:pb-0'
                    : 'p-2 hover:border-b-2 hover:pb-0'
                }
              >
                <button onClick={() => setActiveComponent('SellNFT')}>
                  Lister mon NFT
                </button>
              </li>
              <li
                className={
                  router.pathname === '/profile'
                    ? 'border-b-2 p-2 hover:pb-0'
                    : 'p-2 hover:border-b-2 hover:pb-0'
                }
              >
                <button onClick={() => setActiveComponent('Profile')}>
                  Mon profile
                </button>
              </li>
              {/* <li>
                <button 
                className="enableEthereumButton rounded-full bg-teal-500 px-4 py-2 text-sm font-bold text-white hover:bg-teal-700"
                >Connected to 
                  {connected && currAddress !== '0x'
                    ? ' ' + currAddress.substring(0, 6) + '...'
                    : 'Connect Wallet'}
                </button>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
