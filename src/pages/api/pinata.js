require('dotenv').config()

const { PINATA_API_KEY, PINATA_SECRET_API_KEY } = process.env
const pinataSDK = require('@pinata/sdk')

export default async function handler(req, res) {
  // const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY)
  
  res.status(200).json({ name: 'John Doe' })
  // pinata
  //   .testAuthentication()
  //   .then((result) => {
  //     //handle successful authentication here
  //     console.log(result)
  //     res.status(200).json({ result: result })
  //   })
  //   .catch((err) => {
  //     //handle error here
  //     console.log(err)
  //     res.status(200).json({ result: err })
  //   })
}
