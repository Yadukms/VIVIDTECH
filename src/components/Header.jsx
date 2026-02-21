import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo.png" alt="Vivid Logo" className="logo" />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</a></li>
            <li><a href="#technologies" onClick={() => setIsMenuOpen(false)}>TECHNOLOGIES</a></li>
            <li><a href="#career" onClick={() => setIsMenuOpen(false)}>CAREER</a></li>
            <li><a href="#insights" onClick={() => setIsMenuOpen(false)}>INSIGHTS</a></li>
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>PARTNERS</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</a></li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
