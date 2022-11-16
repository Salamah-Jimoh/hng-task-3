import React from 'react'
import Logo from './logo.svg'
import Facebook from './fb.png'
import Instagram from './ig.png'
import Twitter from './twitter.png'
import Copy from './copy.png'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="images">
        <img src={Logo} alt="Logo" className='meta-img' />
        <div className="socials">
            <img src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon" />
            <img src={Twitter} alt="Twitter icon" />
        </div>
        <div className='copy'>
        <img src={Copy} alt="Copyright" />
        <span>2022 Metabnb</span></div>
      </div>
     <div className="footer-links">
        <a href="" className='bold'>Community</a>
        <a href="">NFT</a>
        <a href="">Tokens</a>
        <a href="">Landlords</a>
        <a href="">Discord</a>
        </div> 
        <div className="footer-links">
        <a href="" className='bold'>Places</a>
        <a href="">Castle</a>
        <a href="">Farms</a>
        <a href="">Beach</a>
        <a href="">Learn More</a>
        </div> 
        <div className="footer-links">
        <a href="" className='bold'>About us</a>
        <a href="">Road map</a>
        <a href="">Creators</a>
        <a href="">Career</a>
        <a href="">Contact us</a>
        </div> 
    </div>
  )
}

export default Footer
