import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

// PUBLIC_INTERFACE
/**
 * Navbar component for site navigation
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAuthenticated - Whether user is authenticated
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered Navbar component
 */
const Navbar = ({ isAuthenticated = false, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="logo-symbol">*</span> 
              <span>SkillSwap Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden-sm" style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
              Browse Skills
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/my-skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                  My Skills
                </Link>
                <Link to="/requests" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                  Requests
                </Link>
                <Link to="/profile" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden-sm">
            {isAuthenticated ? (
              <Button variant="outlined" size="md" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Link to="/login">
                  <Button variant="outlined" size="md">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="md">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="hidden-md hidden-lg" style={{ display: 'inline-block' }}>
            <button 
              onClick={toggleMenu} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: '4px',
                color: 'var(--text-color)'
              }}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            className="hidden-md hidden-lg" 
            style={{ 
              position: 'absolute', 
              top: '60px', 
              left: 0, 
              width: '100%', 
              backgroundColor: 'var(--kavia-dark)', 
              padding: '1rem',
              zIndex: 99,
              borderTop: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <Link 
              to="/skills" 
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text-color)', textDecoration: 'none' }}
            >
              Browse Skills
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/my-skills" 
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                >
                  My Skills
                </Link>
                <Link 
                  to="/requests" 
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                >
                  Requests
                </Link>
                <Link 
                  to="/profile" 
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                >
                  Profile
                </Link>
                <Button 
                  variant="outlined" 
                  size="md" 
                  onClick={() => {
                    setMenuOpen(false);
                    onLogout();
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button variant="outlined" size="md" fullWidth>
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" size="md" fullWidth>
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
