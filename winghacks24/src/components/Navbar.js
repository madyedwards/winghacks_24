import React from 'react';
import {Link} from 'react-router-dom';
import './navbar/Navbar.css';


function Navbar() {
  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/home' className='navbar-logo'>
              About <i className='fa-typo3'></i>
            </Link>
            <Link to='/characters' className='navbar-logo'>
              Characters <i className='fa-typo3'></i>
            </Link>
            <Link to='/credits' className='navbar-logo'>
              Credits <i className='fa-typo3'></i>
            </Link>
          </div>
        </nav>
    </>
  );
}

export default Navbar