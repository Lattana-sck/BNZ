import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import MarketplaceJSON from '../Marketplace.json';
import { GetIpfsUrlFromPinata } from '../utils';

const NFTPage = ({ tokenId }) => {
  const [data, setData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);
  const [message, setMessage] = useState("");
  const [currAddress, setCurrAddress] = useState("0x");
  
  useEffect(() => {
    if (!tokenId || dataFetched) return;
    getNFTData(tokenId);
  }, [tokenId, dataFetched]);

  async function getNFTData(tokenId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();

    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );

    let tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    tokenURI = GetIpfsUrlFromPinata(tokenURI);
    let meta = await axios.get(tokenURI);
    meta = meta.data;

    let item = {
      price: meta.price,
      tokenId: tokenId,
      seller: listedToken.seller,
      owner: listedToken.owner,
      image: meta.image,
      name: meta.name,
      description: meta.description,
    };

    setData(item);
    setDataFetched(true);
    setCurrAddress(addr);
  }

  async function buyNFT(tokenId) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      let contract = new ethers.Contract(
        MarketplaceJSON.address,
        MarketplaceJSON.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(data.price, "ether");
      setMessage("Buying the NFT... Please Wait (Upto 5 mins)");

      let transaction = await contract.executeSale(tokenId, {
        value: salePrice,
      });
      await transaction.wait();

      alert("You successfully bought the NFT!");
      setMessage("");
    } catch (e) {
      alert("Upload Error" + e);
    }
  }

  if (typeof data.image === "string")
    data.image = GetIpfsUrlFromPinata(data.image);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="flex ml-20 mt-20">
        <img src={data.image} alt="" className="w-2/5" />
        <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
          <div>Name: {data.name}</div>
          <div>Description: {data.description}</div>
          <div>Price: <span>{data.price + " ETH"}</span></div>
          <div>Owner: <span className="text-sm">{data.owner}</span></div>
          <div>Seller: <span className="text-sm">{data.seller}</span></div>
          <div>
            {currAddress != data.owner && currAddress != data.seller ? (
              <button
                className="enableEthereumButton bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-sm"
                onClick={() => buyNFT(tokenId)}
              >
                Buy this NFT
              </button>
            ) : (
              <div className="text-emerald-700">You are the owner of this NFT</div>
            )}

            <div className="text-green text-center mt-3">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;