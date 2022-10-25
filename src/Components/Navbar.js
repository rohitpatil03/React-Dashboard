import React, { useState, useRef, useEffect } from 'react'
import { links, social } from './data'
import logo from './logo1.png'


const Navbar = () => {
  

  



  return (
    <nav className='nav'>

      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="Place for the logo" className='logo'/>
        </div>

        

        <ul className='social-icons'>
          {social.map((item)=>{
            const {id, url, icon} = item;
            return(
              <a href={url} key={id}><li key={id}>{icon}</li></a>
            );
          })}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar