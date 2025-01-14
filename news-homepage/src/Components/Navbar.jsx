import React from 'react'
import logo from  '../assets/images/logo.svg'
import './Navbar.css'
import menu from  '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'

const Navbar = () => {

  const [noshowMenu, setNoShowMenu] = useState(true);

  function toggleMenu(){
    setNoShowMenu(!noshowMenu);
   
  }
  
  return (
    
      <div className="Navbar">
        <div className="logo">
            <img src= {logo} ></img>
        </div>
        
      
        
        <div className="menu-items">
    
    { noshowMenu ? noshowMenu && (
      <>
          <ul className='list-items '>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            
          </ul>
          </>

   ) : <>
   <div className='side-bar-container'>
    <img src ={close} className='close' onClick={toggleMenu} ></img>
       <ul className='side-bar '>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            
          </ul>
          </div> 
   </> }

 

          <img src={menu} className='menu' onClick={toggleMenu}></img>
        </div>
        
    </div>
  )
}

export default Navbar