import React from 'react'
import NFTImage from './nft.png'
import './nft.css'
const NFT = () => {
  return (
    <div className='nft'>
      <div className="nft-text">
        <h3>Metabnb NFTs</h3>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
            These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button className='btn'>Learn more</button>
      </div>
      <div className="nft-img">
      <img src={NFTImage} alt="NFT Image" />
      </div>
    </div>
  )
}

export default NFT
