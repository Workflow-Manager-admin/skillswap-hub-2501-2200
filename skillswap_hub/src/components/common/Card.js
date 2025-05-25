import React from 'react';
import styled from 'styled-components';
import { getBorderRadius, getShadow, getVariant } from '../../assets/styles/ThemeUtils';

// Styled card component
const StyledCard = styled.div`
  border-radius: ${props => getBorderRadius('md')};
  padding: ${props => props.theme.spacing.md};
  transition: ${props => props.theme.transitions.default};
  
  /* Apply variant styles */
  background-color: ${props =>
    props.variant === 'outlined'
      ? 'transparent'
      : props.variant === 'elevated'
        ? props.theme.colors.background.paper
        : props.theme.colors.background.paper};
        
  border: ${props =>
    props.variant === 'outlined'
      ? `1px solid ${props.theme.colors.border.dark}`
      : 'none'};
  
  box-shadow: ${props =>
    props.variant === 'elevated'
      ? getShadow('md')
      : 'none'};
      
  /* Hover effects when hoverable */
  &:hover {
    transform: ${props => props.hoverable ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props => props.hoverable ? getShadow('lg') : props.variant === 'elevated' ? getShadow('md') : 'none'};
  }
`;

// PUBLIC_INTERFACE
/**
 * Card component for displaying content in a contained box
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Card variant ('default', 'outlined', 'elevated')
 * @param {boolean} props.hoverable - Whether the card has hover effects
 * @param {React.ReactNode} props.children - Card content
 * @param {Object} props.style - Additional styles
 * @returns {React.ReactElement} - Rendered Card component
 */
const Card = ({ 
  variant = 'default',
  hoverable = false,
  children, 
  style = {},
  ...props 
}) => {
  return (
    <StyledCard
      variant={variant}
      hoverable={hoverable}
      style={style}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
