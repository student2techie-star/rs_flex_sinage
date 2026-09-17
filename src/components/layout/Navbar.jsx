import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="text-accent" style={{fontWeight: 800}}>RS</span> <span>FLEX & SIGNAGE</span>
        </Link>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary d-none-mobile">GET A QUOTE</Link>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
