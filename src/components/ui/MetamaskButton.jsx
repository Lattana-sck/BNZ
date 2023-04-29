import React from 'react'
// import detectEthereumProvider from '@metamask/detect-provider'

// const provider = await detectEthereumProvider()
// if (provider) {
//   // From now on, this should always be true:
//   // provider === window.ethereum
//   startApp(provider) // initialize your app
// } else {
//   console.log('Please install MetaMask!')
// }

// function startApp(provider) {
//   // If the provider returned by detectEthereumProvider isn't the same as
//   // window.ethereum, something is overwriting it – perhaps another wallet.
//   if (provider !== window.ethereum) {
//     console.error('Do you have multiple wallets installed?')
//   }
//   // Access the decentralized web!
// }

function MetamaskButton({title}) {
  return <button class="bg-teal-500 w-32 h-10 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full">
  {title}</button>
}

export default MetamaskButton
