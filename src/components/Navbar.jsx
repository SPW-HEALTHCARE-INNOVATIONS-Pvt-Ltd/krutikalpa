import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)', padding: '1rem 0'
    }}>
      <div className="container flex-between">
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none' }}>
          <span style={{ color: 'var(--logo-kruti-color)' }}>Kruti</span>
          <span style={{ color: '#f27921' }}>Kalpa</span>
          <span style={{ color: 'var(--text-primary)', marginLeft: '0.3rem' }}>Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          <Link to="/about" style={{ 
            color: 'var(--text-primary)', 
            fontWeight: isActive('/about') ? 700 : 500,
            textDecoration: isActive('/about') ? 'underline' : 'none',
            textUnderlineOffset: '4px',
            transition: 'all 0.2s' 
          }}>About Us</Link>
          <Link to="/government" style={{ 
            color: 'var(--text-primary)', 
            fontWeight: isActive('/government') ? 700 : 500,
            textDecoration: isActive('/government') ? 'underline' : 'none',
            textUnderlineOffset: '4px',
            transition: 'all 0.2s' 
          }}>Government</Link>
          <Link to="/enterprise" style={{ 
            color: 'var(--text-primary)', 
            fontWeight: isActive('/enterprise') ? 700 : 500,
            textDecoration: isActive('/enterprise') ? 'underline' : 'none',
            textUnderlineOffset: '4px',
            transition: 'all 0.2s' 
          }}>Enterprise</Link>
          <Link to="/#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Contact</Link>
          <button onClick={toggleTheme} style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav & Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-menu-btn">
          <button onClick={toggleTheme} style={{ color: 'var(--text-primary)' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Inline styles for media queries */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .nav-links a:hover { color: var(--text-primary) !important; }
        
        .mobile-menu {
          position: absolute; top: 100%; left: 0; right: 0;
          background: var(--bg-secondary);
          padding: 1rem;
          display: flex; flex-direction: column; gap: 1rem;
          border-bottom: 1px solid var(--border-color);
        }
      `}} />

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/government" onClick={() => setIsOpen(false)}>Government</Link>
          <Link to="/enterprise" onClick={() => setIsOpen(false)}>Enterprise</Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
