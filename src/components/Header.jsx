import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo.png" alt="VividTech Logo" className="header-logo" />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#service" onClick={() => setIsMenuOpen(false)}>Service</a></li>
            <li><a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a></li>
            <li><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
            <li><a href="#insights" onClick={() => setIsMenuOpen(false)}>Insights</a></li>
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="contact-btn">Contact Us</button>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
