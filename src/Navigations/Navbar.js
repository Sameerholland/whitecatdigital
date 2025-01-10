import React, { useState } from 'react';
import '../Css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link to='/' className="logo">WhiteCatDigital</Link>
      <button
        className="toggle-menu"
        aria-label={menuActive ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
      >
        {menuActive ? '✖' : '☰'}
      </button>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><Link to="/service" onClick={toggleMenu}>Service</Link></li>
        <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/policy" onClick={toggleMenu}>Policy</Link></li>
        <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
