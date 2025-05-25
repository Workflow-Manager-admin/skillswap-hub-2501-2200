import styled from 'styled-components';
import { getColor, getBorderRadius, getSpacing, getTransition } from '../../assets/styles/ThemeUtils';

/**
 * StyledElements.js
 * 
 * A collection of commonly used styled elements to provide consistent styling
 * throughout the application based on the theme configuration.
 */

// Container - Responsive container with max-width
export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.xl};
  padding: 0 ${props => props.theme.spacing.md};
  margin: 0 auto;
`;

// Flex container with common options
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.theme.spacing[props.gap] || props.gap || '0'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

// Input with theme styling
export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-family: ${props => props.theme.typography.fontFamily.main};
  border-radius: ${props => getBorderRadius('md')};
  border: 1px solid ${props => 
    props.error 
      ? props.theme.colors.feedback.error.main
      : props.theme.colors.neutral[300]};
  background-color: ${props => 
    props.variant === 'filled'
      ? props.theme.colors.background.elevation[1]
      : 'transparent'};
  color: ${props => props.theme.colors.text.primary.dark};
  transition: ${props => getTransition('default')};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.secondary.dark};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Textarea with theme styling
export const TextArea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-family: ${props => props.theme.typography.fontFamily.main};
  border-radius: ${props => getBorderRadius('md')};
  border: 1px solid ${props => 
    props.error 
      ? props.theme.colors.feedback.error.main
      : props.theme.colors.neutral[300]};
  resize: ${props => props.resize || 'vertical'};
  min-height: ${props => props.minHeight || 'auto'};
  background-color: ${props => props.theme.colors.neutral[50]};
  color: ${props => props.theme.colors.text.primary.dark};
  transition: ${props => getTransition('default')};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.secondary.dark};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Form Label with theme styling
export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text.primary.dark};
  font-size: ${props => props.theme.typography.fontSize[props.size] || props.theme.typography.fontSize.md};
`;

// Error message for forms
export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.feedback.error.main};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin-top: ${props => props.theme.spacing.xs};
`;

// Card container
export const CardContainer = styled.div`
  background-color: ${props => 
    props.variant === 'outlined' 
      ? 'transparent' 
      : props.theme.colors.background.paper};
  border-radius: ${props => getBorderRadius('md')};
  padding: ${props => props.padding || props.theme.spacing.md};
  border: ${props => 
    props.variant === 'outlined'
      ? `1px solid ${props.theme.colors.border.dark}`
      : 'none'};
  box-shadow: ${props => 
    props.variant === 'elevated'
      ? props.theme.shadows.md
      : 'none'};
  transition: ${props => getTransition('default')};
  
  &:hover {
    transform: ${props => props.hoverable ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props => props.hoverable ? props.theme.shadows.lg : props.variant === 'elevated' ? props.theme.shadows.md : 'none'};
  }
`;

// Badge component
export const Badge = styled.div`
  display: inline-block;
  padding: ${props => props.dot ? '0' : `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: ${props => props.dot ? '50%' : props.theme.borderRadius.full};
  background-color: ${props => 
    props.color 
      ? getColor(props.color) 
      : props.theme.colors.primary.main};
  color: ${props => props.theme.colors.neutral.white};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-align: center;
  line-height: ${props => props.dot ? '8px' : 'normal'};
  height: ${props => props.dot ? '8px' : 'auto'};
  width: ${props => props.dot ? '8px' : 'auto'};
  min-width: ${props => props.dot ? 'auto' : props.theme.spacing.xl};
`;

// Text component with variants
export const Text = styled.p`
  color: ${props => {
    if (props.variant === 'secondary') return props.theme.colors.text.secondary.dark;
    if (props.variant === 'disabled') return props.theme.colors.text.disabled.dark;
    if (props.color) return getColor(props.color);
    return props.theme.colors.text.primary.dark;
  }};
  font-size: ${props => props.theme.typography.fontSize[props.size] || props.theme.typography.fontSize.md};
  font-weight: ${props => props.weight ? props.theme.typography.fontWeight[props.weight] : 'normal'};
  margin: ${props => props.margin || 0};
  text-align: ${props => props.align || 'left'};
  line-height: ${props => props.theme.typography.lineHeight.normal};
`;

// Divider component
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${props => props.theme.colors.border.dark};
  margin: ${props => props.margin || `${props.theme.spacing.md} 0`};
`;

// Link component
export const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  transition: ${props => getTransition('default')};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary[700]};
    text-decoration: underline;
  }
`;

// Avatar component
export const Avatar = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.theme.colors.neutral[200]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Grid container
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth || '280px'}, 1fr)
  );
  gap: ${props => props.gap || props.theme.spacing.lg};
  width: 100%;
`;
