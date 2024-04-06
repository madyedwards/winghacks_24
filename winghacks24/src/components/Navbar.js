import React from 'react';
import {Link} from 'react-router-dom';
import './navbar/Navbar.css';


function Navbar() {
  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/home' className='navbar-logo'>
              something! <i className='fa-typo3'></i>
            </Link>
            <Link to='/characters' className='navbar-logo'>
              characters! <i className='fa-typo3'></i>
            </Link>
            <Link to='/credits' className='navbar-logo'>
              credits! <i className='fa-typo3'></i>
            </Link>
          </div>
        </nav>
    </>
  );
}

export default Navbar