import styled, { css } from 'styled-components';

/**
 * StyledButton component for consistent styling across the application
 * Modern button component using styled-components for theming
 */
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.default};
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

  ${props => props.variant === 'tertiary' && css`
    background-color: ${props.theme.colors.tertiary.main};
    color: ${props.theme.colors.neutral.white};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.tertiary[700]};
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
    padding-left: ${props.theme.spacing.xs};
    padding-right: ${props.theme.spacing.xs};
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary[50]};
    }
  `}
`;

export default StyledButton;
