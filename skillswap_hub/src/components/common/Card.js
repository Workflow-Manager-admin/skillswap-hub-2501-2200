import React from 'react';
import { getBorderRadius, getShadow } from '../../assets/styles/theme';

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
  const baseStyle = {
    borderRadius: getBorderRadius('md'),
    padding: '1rem',
    transition: 'all 0.3s ease',
  };

  const variantStyles = {
    default: {
      backgroundColor: '#fff',
      border: '1px solid var(--medium-gray)',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '1px solid var(--medium-gray)',
    },
    elevated: {
      backgroundColor: '#fff',
      boxShadow: getShadow('md'),
      border: 'none',
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Combine all styles
  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...(hoverable && isHovered ? {
      transform: 'translateY(-4px)',
      boxShadow: getShadow('lg'),
    } : {}),
    ...style,
  };

  return (
    <div
      style={combinedStyle}
      onMouseEnter={hoverable ? handleMouseEnter : undefined}
      onMouseLeave={hoverable ? handleMouseLeave : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
