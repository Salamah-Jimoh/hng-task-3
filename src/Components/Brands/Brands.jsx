import React from 'react'
import './brands.css'
import MbToken from './mbtoken.svg'
import MetaMask from './meta.svg'
import OpenSea from './opensea.svg'
const Brands = () => {
  return (
    <div>
        <div className="icons">
          <div className="brands">
      <img src={MbToken} alt="Mbtoken icon" />
      <img src={MetaMask} alt="MetaMask icon" />
      <img src={OpenSea} alt="Opensea icon" />
      </div>
    </div>
    </div>
  )
}

export default Brands
