require('dotenv').config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(API_URL)

const contract = require('../../../artifacts/contracts/MyNFT.sol/MyNFT.json')
const contractAddress = '0x29758e733C9681EE0075564BeFA2f489C5B773a1'
const contractABI = contract.abi

export default async function handler(req, res) {
  const { tokenURI } = req.body

  try {
    console.log(web3.eth)
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest') //get latest nonce

    const nftContract = new web3.eth.Contract(contractABI, contractAddress)

    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    }

    const signedTx = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY).then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              'The hash of your transaction is: ',
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              'Something went wrong when submitting your transaction:',
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log('Promise failed:', err)
    })

    res
      .status(200)
      .json({
        message: 'NFT minted successfully',
        transactionHash: signedTx.transactionHash,
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to mint NFT' })
  }
}
