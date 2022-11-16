import React from 'react'
import { useState } from 'react'
import {Outlet, Link} from 'react-router-dom'
import './nav.css'
import Open from './open.svg'
import Logo from './logo.png'
import Close from './x.png'
import Wolf from './wolf.png'
import Arrow from './arrow.png'
import Waves from './waves.png'

const Nav = () => {
    const [showModal, setShowModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    let close;
  let navMobile;
  let modal;
  if(showModal){
    modal=<div className='modal-box' id='modal'>
          <div className='first'>
          <h4>Connect Wallet</h4>
          <img src={Close} alt="" onClick={()=>{
            setCloseModal(true)
        }} /> 
        </div>
        <div className="border"></div>
        <p className='walletp'>Choose your preferred wallet:</p>
        <div className="inputs">
          <div className="meta-meat">
          <div className="meta">
            <img src={Wolf} alt="" />
            <p>Metamask</p>
            <img src={Arrow} alt="" className="arrow arrow1" />
          </div>
          <div className="meta">
            <img src={Waves} alt="" />
            <p>WalletConnect</p>
            <img src={Arrow} alt="" className="arrow" />
          </div>
          </div>
        </div>
      </div>   
  }
 {
 if(closeModal){
    var modalBox = document.getElementById('modal');
    modalBox.style.display='none';
    setCloseModal(false)
    setShowModal(false)
  }
} 
if(showMenu){
  navMobile =<div class="nav-links-mobile">
   <ul>
                    <li><a href="">Home</a></li>
                    <li><Link to ='/place'>Place to stay</Link></li>
                    <li><a href="">NFTs</a></li>
                    <li><a href="">Community</a></li>
                </ul>
  </div>
  close =    <p class="close" onClick={()=>{
    setShowMenu(false)

  }}>X</p>
}

  return (
    <div className="all" style={{overflow: showModal ? 'hidden':'visible'}}>
    <div className="container" style={{
       background:showModal ? 'rgba(64, 64, 64, 0.3)' :'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)',
       overflow: showModal ? 'hidden':'visible'
    }}>
     <div className='nav'>
      {/*Mobile menu */}
      <div className="mobile-menu">
      <img className="hamburger" src={Open} style={{
        display:showMenu ? 'none' :''
      }} onClick={()=>{
        setShowMenu(!showMenu)
      }}></img>
       {close}
    </div>
        <div className="logo">
            <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><Link to ='/place'>Place to stay</Link></li>
                    <li><a href="">NFTs</a></li>
                    <li><a href="">Community</a></li>
                </ul>
            </div>
            <div className="button">
                <button className='btn'
                 onClick={()=>{
                    setShowModal(!showModal)}}> Connect wallet</button>
            </div>
        </div>
    {navMobile}
        {modal}
    <Outlet/>
    </div>
    </div>
  )
}

export default Nav
