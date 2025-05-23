import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Footer component for site footer
 * 
 * @returns {React.ReactElement} - Rendered Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--kavia-dark)', 
      color: 'var(--text-secondary)',
      padding: '2rem 0',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
          
          {/* Logo & Description */}
          <div style={{ flex: '1 1 300px' }}>
            <div className="logo" style={{ marginBottom: '1rem' }}>
              <span className="logo-symbol">*</span> SkillSwap Hub
            </div>
            <p style={{ marginBottom: '1rem' }}>
              Connect with skilled individuals and exchange services in our peer-to-peer skill trading platform.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Social media placeholders */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                Instagram
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link to="/faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
            &copy; {currentYear} SkillSwap Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
