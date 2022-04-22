import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Drop2 from './Drop2';
import Drop3 from './Drop3';
import styled from 'styled-components';

const Image=styled.img`
height:60px;
width:100%;
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const [click2, setClick2] = useState(false);
  const [drop2, setDrop2] = useState(false);

  const handleClick2 = () => setClick2(!click2);
  const closeMobileMenu2 = () => setClick2(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDrop2(false);
    } else {
      setDrop2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDrop2(false);
    } else {
      setDrop2(false);
    }
  };
  
  const [click3, setClick3] = useState(false);
  const [drop3, setDrop3] = useState(false);

  const handleClick3 = () => setClick3(!click3);
  const closeMobileMenu3 = () => setClick3(false);

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDrop3(false);
    } else {
      setDrop3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDrop3(false);
    } else {
      setDrop3(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <Image src="images/logo.png"></Image>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu3}
            >
              About <i className='fas fa-caret-down' />
            </Link>
            {drop3 && <Drop3 />}
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/Specialities'
              className='nav-links'
              onClick={closeMobileMenu2}
            >
              Specialities <i className='fas fa-caret-down' /> 
            </Link>
            {drop2 && <Drop2 />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
          </li>
        </ul>
        <Button />
        

      </nav>
    </>
  );
}

export default Navbar;
