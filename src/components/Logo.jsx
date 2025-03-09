import React from 'react';
import logo from '../assets/images/logo.png'; 
import logoWhite from '../assets/images/M.png';

const Logo = ({ isScroll }) => {
  return (
    <img
      src={isScroll ? logoWhite : logo}
      width="60"
      height="50"
      alt="Logo"
      className="transition-all rounded duration-300"
    />
  );
};

export default Logo;
