import { ethers } from 'ethers';

const contractAddress = '0x0E66fBA0f49A326542fe1EFD814a4D7dce7D0d49'; // Adresse du contrat de la marketplace
const contractABI = require('../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json').abi;

function getContract() {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  } else {
    throw new Error('Metamask not installed or window.ethereum not available');
  }
}

export default getContract;