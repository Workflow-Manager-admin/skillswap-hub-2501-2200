import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Flex, Text, Divider } from './StyledElements';

// Styled components for Footer
const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.background.default};
  color: ${props => props.theme.colors.text.secondary.dark};
  padding: ${props => props.theme.spacing.xl} 0;
  border-top: 1px solid ${props => props.theme.colors.border.dark};
  margin-top: auto;
`;

const FooterHeading = styled.h4`
  color: ${props => props.theme.colors.text.primary.dark};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.text.secondary.dark};
  text-decoration: none;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.text.secondary.dark};
  text-decoration: none;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

const LogoSymbol = styled.span`
  color: ${props => props.theme.colors.primary.main};
`;

const LogoContainer = styled.div`
  font-size: 1.25rem;
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const FooterSection = styled.div`
  flex: 1 1 ${props => props.width || '200px'};
`;

const FooterBottom = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border.dark};
`;

// PUBLIC_INTERFACE
/**
 * Footer component for site footer
 * 
 * @returns {React.ReactElement} - Rendered Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Flex wrap="wrap" justify="space-between" gap="xl">
          {/* Logo & Description */}
          <FooterSection width="300px">
            <LogoContainer>
              <LogoSymbol>*</LogoSymbol> SkillSwap Hub
            </LogoContainer>
            <Text margin="0 0 1rem 0">
              Connect with skilled individuals and exchange services in our peer-to-peer skill trading platform.
            </Text>
            <Flex gap="md">
              {/* Social media placeholders */}
              <ExternalLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </ExternalLink>
              <ExternalLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </ExternalLink>
            </Flex>
          </FooterSection>
          
          {/* Links */}
          <FooterSection>
            <FooterHeading>Navigation</FooterHeading>
            <FooterLinksList>
              <li>
                <FooterLink to="/">
                  Home
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/skills">
                  Browse Skills
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/how-it-works">
                  How It Works
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/about">
                  About Us
                </FooterLink>
              </li>
            </FooterLinksList>
          </FooterSection>
          
          {/* Resources */}
          <FooterSection>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinksList>
              <li>
                <FooterLink to="/faq">
                  FAQ
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">
                  Contact Us
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">
                  Terms of Service
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy">
                  Privacy Policy
                </FooterLink>
              </li>
            </FooterLinksList>
          </FooterSection>
        </Flex>
        
        <FooterBottom>
          <Text align="center" size="sm">
            &copy; {currentYear} SkillSwap Hub. All rights reserved.
          </Text>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
