import React from 'react';
import './navbar.scss';

import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar flex   bg-white'>
      <img src={logo} alt='lendsqr' />
    </nav>
  );
};

export default Navbar;
