import React from 'react'
import HeroImg from './hero.png'
import './hero.css'
const Hero = () => {
  return (
    <div>
    <div className='hero'>
      <div className="hero-text">
        <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse,
             get a chance to turn your imagination to reality at your comfort zone</p>
        <div className="search">
         <input type="search" name="" id="" placeholder='Search for location' />
         <button className='btn-search'>Search</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="Image of four nfts" />
      </div>
    </div>
    </div>
  )
}

export default Hero
