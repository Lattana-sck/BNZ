// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract NFTMarketplace is ERC721Holder {
    using SafeMath for uint256;

    struct NFTListing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool active;
    }

    NFTListing[] public listings;
    mapping(address => uint256[]) private listingsBySeller;

    event NFTListed(uint256 indexed listingId, address indexed seller, address indexed nftContract, uint256 tokenId, uint256 price);
    event NFTSold(uint256 indexed listingId, address indexed seller, address indexed buyer, address nftContract, uint256 tokenId, uint256 price);

    function listNFTForSale(address _nftContract, uint256 _tokenId, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");

        IERC721 nft = IERC721(_nftContract);
        require(nft.ownerOf(_tokenId) == msg.sender, "Only the NFT owner can list it for sale");

        nft.safeTransferFrom(msg.sender, address(this), _tokenId);
        listings.push(NFTListing(msg.sender, _nftContract, _tokenId, _price, true));
        uint256 listingId = listings.length - 1;
        listingsBySeller[msg.sender].push(listingId);

        emit NFTListed(listingId, msg.sender, _nftContract, _tokenId, _price);
    }

    function buyNFT(uint256 _listingId) external payable {
        require(_listingId < listings.length, "Invalid listing ID");
        NFTListing storage listing = listings[_listingId];
        require(listing.active, "Listing is not active");
        require(msg.value >= listing.price, "Insufficient funds");

        address payable seller = payable(listing.seller);
        IERC721 nft = IERC721(listing.nftContract);

        nft.safeTransferFrom(address(this), msg.sender, listing.tokenId);

        seller.transfer(listing.price);

        listing.active = false;

        emit NFTSold(_listingId, seller, msg.sender, listing.nftContract, listing.tokenId, listing.price);
    }

    function getActiveListingsBySeller(address _seller) external view returns (uint256[] memory) {
        return listingsBySeller[_seller];
    }
}