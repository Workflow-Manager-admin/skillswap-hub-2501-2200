import React from 'react';
import styled, { css } from 'styled-components';
import { getColor, getBorderRadius, getTransition, getVariant } from '../../assets/styles/ThemeUtils';

// Define button styles with styled-components
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => getBorderRadius('md')};
  transition: ${props => getTransition('default')};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Size variants */
  ${props => props.size === 'sm' && css`
    padding: ${props.theme.spacing.xs} ${props.theme.spacing.sm};
    font-size: ${props.theme.typography.fontSize.sm};
  `}
  
  ${props => (!props.size || props.size === 'md') && css`
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
    font-size: ${props.theme.typography.fontSize.md};
  `}
  
  ${props => props.size === 'lg' && css`
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};
    font-size: ${props.theme.typography.fontSize.lg};
  `}
  
  /* Style variants */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background-color: ${props.theme.colors.primary.main};
    color: ${props.theme.colors.neutral.white};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary[700]};
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: ${props.theme.colors.secondary.main};
    color: ${props.theme.colors.neutral.white};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.secondary[700]};
    }
  `}
  
  ${props => props.variant === 'outlined' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary.main};
    border: 1px solid ${props.theme.colors.primary.main};
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary[50]};
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary.main};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary[50]};
    }
  `}
  
  /* Additional styles */
  ${props => props.style && css(props.style)}
`;

// PUBLIC_INTERFACE
/**
 * Button component for consistent styling across the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant ('primary', 'secondary', 'outlined', 'text')
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {Function} props.onClick - Click event handler
 * @param {React.ReactNode} props.children - Button content
 * @returns {React.ReactElement} - Rendered Button component
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  disabled = false, 
  onClick, 
  children,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
