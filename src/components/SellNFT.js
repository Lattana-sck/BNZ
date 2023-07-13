import { useState } from 'react'
import { uploadFileToIPFS, uploadJSONToIPFS } from '../pages/api/pinata'
import Marketplace from '../Marketplace.json'

const SellNFT = () => {
  const [formParams, updateFormParams] = useState({
    name: '',
    description: '',
    price: '',
  })
  const [fileURL, setFileURL] = useState(null)
  const ethers = require('ethers')
  const [message, updateMessage] = useState('')

  async function disableButton() {
    const listButton = document.getElementById('list-button')
    listButton.disabled = true
    listButton.style.backgroundColor = 'grey'
    listButton.style.opacity = 0.3
  }

  async function enableButton() {
    const listButton = document.getElementById('list-button')
    listButton.disabled = false
    listButton.style.backgroundColor = '#A500FF'
    listButton.style.opacity = 1
  }

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0]
    //check for file extension
    try {
      //upload the file to IPFS
      disableButton()
      updateMessage('Uploading image.. please dont click anything!')
      const response = await uploadFileToIPFS(file)
      if (response.success === true) {
        enableButton()
        updateMessage('')
        console.log('Uploaded image to Pinata: ', response.pinataURL)
        setFileURL(response.pinataURL)
      }
    } catch (e) {
      console.log('Error during file upload', e)
    }
  }

  //This function uploads the metadata to IPFS
  async function uploadMetadataToIPFS() {
    const { name, description, price } = formParams
    //Make sure that none of the fields are empty
    if (!name || !description || !price || !fileURL) {
      updateMessage('Please fill all the fields!')
      return -1
    }

    const nftJSON = {
      name,
      description,
      price,
      image: fileURL,
    }

    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON)
      if (response.success === true) {
        console.log('Uploaded JSON to Pinata: ', response)
        return response.pinataURL
      }
    } catch (e) {
      console.log('error uploading JSON metadata:', e)
    }
  }

  async function listNFT(e) {
    e.preventDefault()

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS()
      if (metadataURL === -1) return
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      disableButton()
      updateMessage('Uploading NFT(takes 5 mins).. please dont click anything!')

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        Marketplace.address,
        Marketplace.abi,
        signer
      )

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, 'ether')
      let listingPrice = await contract.getListPrice()
      listingPrice = listingPrice.toString()

      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, {
        value: listingPrice,
      })
      await transaction.wait()

      alert('Successfully listed your NFT!')
      enableButton()
      updateMessage('')
      updateFormParams({ name: '', description: '', price: '' })
      window.location.replace('/')
    } catch (e) {
      alert('Upload error' + e)
    }
  }
  return (
    <div className="">
      <div className="mt-10 flex flex-col place-items-center" id="nftForm">
        <form className="mb-4 rounded bg-white px-8 pb-8 pt-4 shadow-md">
          <h3 className="mb-8 text-center font-bold text-teal-500">
            Liste ton NFT a la marketplace
          </h3>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-teal-500"
              htmlFor="name"
            >
              Nom du NFT
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="Axie#4563"
              onChange={(e) =>
                updateFormParams({ ...formParams, name: e.target.value })
              }
              value={formParams.name}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-teal-500"
              htmlFor="description"
            >
              NFT Description
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              cols="40"
              rows="5"
              id="description"
              type="text"
              placeholder="Axie Infinity Collection"
              value={formParams.description}
              onChange={(e) =>
                updateFormParams({ ...formParams, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-teal-500"
              htmlFor="price"
            >
              Prix (en ETH)
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="number"
              placeholder="Min 0.01 ETH"
              step="0.01"
              value={formParams.price}
              onChange={(e) =>
                updateFormParams({ ...formParams, price: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold text-teal-500"
              htmlFor="image"
            >
              Charger une image (&lt;500 KB)
            </label>
            <input type={'file'} onChange={OnChangeFile}></input>
          </div>
          <br></br>
          <div className="text-center text-red-500">{message}</div>
          <button
            onClick={listNFT}
            className="mt-10 w-full rounded bg-teal-500 p-2 font-bold text-white shadow-lg"
            id="list-button"
          >
            Lister un NFT
          </button>
        </form>
      </div>
    </div>
  )
}

export default SellNFT;