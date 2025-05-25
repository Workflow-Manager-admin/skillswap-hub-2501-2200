import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { Container, Flex } from './StyledElements';

// Styled components for Navbar
const NavbarWrapper = styled.nav`
  background-color: ${props => props.theme.colors.background.default};
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.border.dark};
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: ${props => props.theme.zIndex.sticky};
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const LogoSymbol = styled.span`
  color: ${props => props.theme.colors.primary.main};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary.dark};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text.secondary.dark};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text.primary.dark};
  font-size: ${props => props.theme.typography.fontSize.md};
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: inline-block;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.background.default};
  padding: ${props => props.theme.spacing.md};
  z-index: ${props => props.theme.zIndex.dropdown};
  border-top: 1px solid ${props => props.theme.colors.border.dark};
  border-bottom: 1px solid ${props => props.theme.colors.border.dark};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary.dark};
  text-decoration: none;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

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
    <NavbarWrapper>
      <Container>
        <Flex justify="space-between" align="center" style={{ width: '100%' }}>
          <Logo>
            <LogoLink to="/">
              <LogoSymbol>*</LogoSymbol> 
              <span>SkillSwap Hub</span>
            </LogoLink>
          </Logo>

          {/* Desktop Navigation */}
          <DesktopNav>
            <NavLink to="/skills">
              Browse Skills
            </NavLink>
            {isAuthenticated && (
              <>
                <NavLink to="/my-skills">
                  My Skills
                </NavLink>
                <NavLink to="/requests">
                  Requests
                </NavLink>
                <NavLink to="/profile">
                  Profile
                </NavLink>
              </>
            )}
          </DesktopNav>

          {/* Auth Buttons */}
          <DesktopNav>
            {isAuthenticated ? (
              <Button variant="outlined" size="md" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <Flex gap="sm">
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
              </Flex>
            )}
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMenu}>
            {menuOpen ? 'Close' : 'Menu'}
          </MobileMenuButton>
        </Flex>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <MobileMenu>
            <MobileNavLink 
              to="/skills" 
              onClick={() => setMenuOpen(false)}
            >
              Browse Skills
            </MobileNavLink>
            
            {isAuthenticated ? (
              <>
                <MobileNavLink 
                  to="/my-skills" 
                  onClick={() => setMenuOpen(false)}
                >
                  My Skills
                </MobileNavLink>
                <MobileNavLink 
                  to="/requests" 
                  onClick={() => setMenuOpen(false)}
                >
                  Requests
                </MobileNavLink>
                <MobileNavLink 
                  to="/profile" 
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </MobileNavLink>
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
              <Flex direction="column" gap="sm">
                <Link to="/login" onClick={() => setMenuOpen(false)} style={{ width: '100%' }}>
                  <Button variant="outlined" size="md" fullWidth>
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} style={{ width: '100%' }}>
                  <Button variant="primary" size="md" fullWidth>
                    Register
                  </Button>
                </Link>
              </Flex>
            )}
          </MobileMenu>
        )}
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
