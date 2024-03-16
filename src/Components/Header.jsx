import React from 'react';
import logo from '../Assests/logo.png';
import '../Styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;