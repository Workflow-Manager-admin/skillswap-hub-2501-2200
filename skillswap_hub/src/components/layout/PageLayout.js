import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

// PUBLIC_INTERFACE
/**
 * PageLayout component providing consistent layout across pages
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {boolean} props.isAuthenticated - Whether user is authenticated
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered PageLayout component
 */
const PageLayout = ({ 
  children, 
  isAuthenticated = false, 
  onLogout,
  ...props 
}) => {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      
      <main style={{ flex: 1, padding: '80px 0 40px' }}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
