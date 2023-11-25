import React, { useState } from 'react';
import '../css/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const toggleNavbar = () => {
    setIsResponsive(!isResponsive);
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h1 className='navbar-logo'>
          <svg onClick={() => navigate('/')} height="20" viewBox="0 0 36.289 20.768" alt="Logo" class="b28a1eb6">
            <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27" fill="#ffffff"></path>
          </svg>


        </h1>
        <div className={click ? 'navbar-menu active' : 'navbar-menu'}>
          <a className='menu-link' onClick={() => navigate('/')}>
            Home
          </a>
          <a className='menu-link' onClick={() => navigate('/listing')}>
            Listings
          </a>
          <a className='menu-link' onClick={() => navigate('/post-add')}>
            Post Ad
          </a>
          <a className='menu-link' onClick={() => navigate('/login')}>
            Log In
          </a>
        </div>
        <div className='navbar-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
