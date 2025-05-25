import styled, { css } from 'styled-components';

/**
 * StyledButton component for consistent styling across the application
 * Modern button component using styled-components for theming
 */
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.default};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  /* Size variants */
  ${props => props.size === 'sm' && css`
    padding: 8px 12px;
    font-size: ${props => props.theme.fontSizes.sm};
  `}

  ${props => (!props.size || props.size === 'md') && css`
    padding: 12px 16px;
    font-size: ${props => props.theme.fontSizes.md};
  `}

  ${props => props.size === 'lg' && css`
    padding: 14px 20px;
    font-size: ${props => props.theme.fontSizes.lg};
  `}

  /* Style variants */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: #ff8b4d;
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: #333;
    }
  `}

  ${props => props.variant === 'outlined' && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: rgba(232, 122, 65, 0.1);
    }
  `}

  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: rgba(232, 122, 65, 0.1);
    }
  `}
`;

export default StyledButton;
