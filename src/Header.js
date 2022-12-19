import React from 'react';
import './Header.css';
import logo from './avocado.png';

function Header() {
  return (
    <div className="header flex items-center pl-10">
      <div className='flex items-center'>
        <img alt='logo' src={logo}/>
        <div className='appName'>Avocommerce</div>
      </div>
    </div>
  );
}

export default Header;