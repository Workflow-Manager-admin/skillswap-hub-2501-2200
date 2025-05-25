import React from 'react';
import { getColor, getBorderRadius, getTransition } from '../../assets/styles/ThemeUtils';

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
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: getBorderRadius('md'),
    transition: getTransition('default'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  };

  const sizeStyles = {
    sm: { padding: '8px 12px', fontSize: '0.875rem' },
    md: { padding: '12px 16px', fontSize: '1rem' },
    lg: { padding: '14px 20px', fontSize: '1.125rem' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: getColor('primary'),
      color: getColor('light'),
      border: 'none',
      '&:hover': {
        backgroundColor: '#ff8b4d',
      },
    },
    secondary: {
      backgroundColor: getColor('dark'),
      color: getColor('light'),
      border: 'none',
      '&:hover': {
        backgroundColor: '#333',
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      color: getColor('primary'),
      border: `1px solid ${getColor('primary')}`,
      '&:hover': {
        backgroundColor: 'rgba(232, 122, 65, 0.1)',
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: getColor('primary'),
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(232, 122, 65, 0.1)',
      },
    },
  };

  // Combine all styles
  const combinedStyle = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  // Handle hover styles manually since inline styles don't support pseudo-classes
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Apply hover styles
  if (isHovered) {
    if (variant === 'primary') {
      combinedStyle.backgroundColor = '#ff8b4d';
    } else if (variant === 'secondary') {
      combinedStyle.backgroundColor = '#333';
    } else if (variant === 'outlined' || variant === 'text') {
      combinedStyle.backgroundColor = 'rgba(232, 122, 65, 0.1)';
    }
  }

  return (
    <button
      style={combinedStyle}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
