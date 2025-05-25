import { css } from 'styled-components';

/**
 * Theme configuration for SkillSwap Hub
 * A comprehensive design system defining colors, typography, spacing,
 * and other design tokens for consistent styling across the application
 */
const theme = {
  colors: {
    // Primary brand colors
    primary: {
      50: '#FFF3E0',  // Lightest
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',  // Base orange
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',  // Darkest
    },
    // Secondary color palette
    secondary: {
      50: '#E3F2FD',  // Lightest
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',  // Base blue
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',  // Darkest
    },
    // Accent color for highlights
    accent: {
      50: '#E8F5E9',  // Lightest
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',  // Base green
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',  // Darkest
    },
    // Neutrals for backgrounds and text
    neutral: {
      50: '#FAFAFA',   // Lightest - nearly white
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',  // Mid-gray
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',  // Darkest - nearly black
    },
    // Semantic colors for feedback
    success: '#4CAF50',   // Success actions and positive feedback
    error: '#F44336',     // Error messages and destructive actions
    warning: '#FF9800',   // Warnings and cautionary messages
    info: '#2196F3',      // Informational messages
    
    // Background and surface colors
    background: {
      dark: '#121212',      // Dark theme main background
      light: '#FFFFFF',     // Light theme main background
      paper: {
        dark: '#1E1E1E',    // Dark theme surface/card background
        light: '#FFFFFF',   // Light theme surface/card background
      }
    },
    
    // Text colors
    text: {
      primary: {
        dark: 'rgba(255, 255, 255, 0.87)',  // Primary text on dark background
        light: 'rgba(0, 0, 0, 0.87)',       // Primary text on light background
      },
      secondary: {
        dark: 'rgba(255, 255, 255, 0.6)',   // Secondary text on dark background
        light: 'rgba(0, 0, 0, 0.6)',        // Secondary text on light background
      },
      disabled: {
        dark: 'rgba(255, 255, 255, 0.38)',  // Disabled text on dark background
        light: 'rgba(0, 0, 0, 0.38)',       // Disabled text on light background
      },
    },
    
    // Border colors
    border: {
      dark: 'rgba(255, 255, 255, 0.12)',    // Border on dark background
      light: 'rgba(0, 0, 0, 0.12)',         // Border on light background
    },
    
    // Skill categories - unique colors for skill types
    skills: {
      technology: '#2196F3',   // Blue for technology skills
      creative: '#9C27B0',     // Purple for creative skills
      business: '#FF9800',     // Orange for business skills
      education: '#4CAF50',    // Green for education skills
      lifestyle: '#FF5722',    // Deep orange for lifestyle skills
      other: '#607D8B',        // Blue gray for other categories
    },
    
    // Legacy color naming for backward compatibility
    // Don't use these for new components
    legacy: {
      primary: '#FF9800',           // Main brand color (orange)
      dark: '#121212',              // Dark background
      light: '#FFFFFF',             // Light text
      lightGray: '#F5F5F5',         // Light background
      mediumGray: '#E0E0E0',        // Borders, dividers
      darkGray: '#757575',          // Secondary text
      textPrimary: '#FFFFFF',
      textSecondary: 'rgba(255, 255, 255, 0.6)',
      borderColor: 'rgba(255, 255, 255, 0.12)',
      skillBlue: '#2196F3',
      skillGreen: '#4CAF50',
      skillPurple: '#9C27B0',
    }
  },
  
  // Typography settings
  typography: {
    // Font families
    fontFamily: {
      main: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      heading: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      monospace: "'Roboto Mono', 'Consolas', monospace"
    },
    
    // Font sizes - using rem for accessibility
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      md: '1rem',        // 16px - base size
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
    },
    
    // Font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    
    // Paragraph spacing
    paragraphSpacing: {
      small: '0.75em',
      normal: '1em',
      large: '1.5em',
    }
  },
  
  // Spacing scale - multiples of 4px for consistency
  spacing: {
    none: '0',
    '2xs': '0.125rem',  // 2px
    xs: '0.25rem',      // 4px
    sm: '0.5rem',       // 8px
    md: '1rem',         // 16px
    lg: '1.5rem',       // 24px
    xl: '2rem',         // 32px
    '2xl': '2.5rem',    // 40px
    '3xl': '3rem',      // 48px
    '4xl': '4rem',      // 64px
    '5xl': '5rem',      // 80px
    '6xl': '6rem',      // 96px
  },
  
  // Border radius values
  borderRadius: {
    none: '0',
    xs: '0.125rem',     // 2px - subtle rounding
    sm: '0.25rem',      // 4px - slight rounding
    md: '0.5rem',       // 8px - medium rounding
    lg: '0.75rem',      // 12px - large rounding
    xl: '1rem',         // 16px - extra large rounding
    '2xl': '1.5rem',    // 24px - very rounded
    full: '9999px',     // pill/circle shape
  },
  
  // Shadows for elevation
  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.12), 0 5px 8px rgba(0, 0, 0, 0.10)',
    xl: '0 15px 25px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.08)',
    '2xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  
  // Transitions for animations
  transitions: {
    none: 'none',
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
    linear: 'all 0.3s linear',
    easeIn: 'all 0.3s ease-in',
    easeOut: 'all 0.3s ease-out',
    easeInOut: 'all 0.3s ease-in-out',
  },
  
  // Z-index values
  zIndex: {
    hide: -1,
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
    toast: 1600,
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '480px',   // Extra small devices
    sm: '576px',   // Small devices, phones
    md: '768px',   // Medium devices, tablets
    lg: '992px',   // Large devices, desktops
    xl: '1200px',  // Extra large devices
    '2xl': '1400px', // Extra extra large devices
  },
  
  // Media queries for responsive design with styled-components
  media: {
    xs: (...args) => css`
      @media (max-width: 480px) {
        ${css(...args)}
      }
    `,
    sm: (...args) => css`
      @media (max-width: 576px) {
        ${css(...args)}
      }
    `,
    md: (...args) => css`
      @media (min-width: 577px) and (max-width: 768px) {
        ${css(...args)}
      }
    `,
    lg: (...args) => css`
      @media (min-width: 769px) and (max-width: 992px) {
        ${css(...args)}
      }
    `,
    xl: (...args) => css`
      @media (min-width: 993px) {
        ${css(...args)}
      }
    `,
    dark: (...args) => css`
      @media (prefers-color-scheme: dark) {
        ${css(...args)}
      }
    `,
    light: (...args) => css`
      @media (prefers-color-scheme: light) {
        ${css(...args)}
      }
    `,
  },
  
  // Common component variants
  variants: {
    // Button variants
    button: {
      primary: {
        backgroundColor: '#FF9800',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#F57C00' },
      },
      secondary: {
        backgroundColor: '#2196F3',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#1976D2' },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: '#FF9800',
        border: '1px solid #FF9800',
        '&:hover': { backgroundColor: 'rgba(255, 152, 0, 0.08)' },
      },
      text: {
        backgroundColor: 'transparent',
        color: '#FF9800',
        '&:hover': { backgroundColor: 'rgba(255, 152, 0, 0.08)' },
      },
    },
    
    // Card variants
    card: {
      default: {
        backgroundColor: '#1E1E1E',
        borderRadius: '0.5rem',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '0.5rem',
      },
      elevated: {
        backgroundColor: '#1E1E1E',
        borderRadius: '0.5rem',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      },
    }
  }
};

// Helper functions to use theme values

/**
 * Gets a color from the theme
 * @param {string} path - Path to color (e.g., 'primary.500', 'text.primary.dark')
 * @returns {string} - Color value
 */
export const getColor = (path) => {
  const parts = path.split('.');
  let result = theme.colors;
  
  for (const part of parts) {
    if (!result[part]) return path; // Return original if not found
    result = result[part];
  }
  
  return result;
};

/**
 * Gets font family
 * @param {string} type - Font family type ('main', 'heading', 'monospace')
 * @returns {string} - Font family value
 */
export const getFont = (type = 'main') => {
  return theme.typography.fontFamily[type] || theme.typography.fontFamily.main;
};

/**
 * Gets font size
 * @param {string} size - Size key ('xs', 'sm', 'md', etc.)
 * @returns {string} - Font size value
 */
export const getFontSize = (size) => {
  return theme.typography.fontSize[size] || size;
};

/**
 * Gets font weight
 * @param {string} weight - Weight key ('light', 'regular', 'medium', etc.)
 * @returns {number} - Font weight value
 */
export const getFontWeight = (weight) => {
  return theme.typography.fontWeight[weight] || weight;
};

/**
 * Gets spacing value
 * @param {string} space - Space key ('xs', 'sm', 'md', etc.)
 * @returns {string} - Spacing value
 */
export const getSpacing = (space) => {
  return theme.spacing[space] || space;
};

/**
 * Gets border radius value
 * @param {string} radius - Radius key ('sm', 'md', 'lg', etc.)
 * @returns {string} - Border radius value
 */
export const getBorderRadius = (radius) => {
  return theme.borderRadius[radius] || radius;
};

/**
 * Gets shadow value
 * @param {string} shadow - Shadow key ('sm', 'md', 'lg', etc.)
 * @returns {string} - Shadow value
 */
export const getShadow = (shadow) => {
  return theme.shadows[shadow] || shadow;
};

/**
 * Gets transition value
 * @param {string} transition - Transition key ('default', 'fast', 'slow', etc.)
 * @returns {string} - Transition value
 */
export const getTransition = (transition) => {
  return theme.transitions[transition] || transition;
};

/**
 * Gets breakpoint value
 * @param {string} breakpoint - Breakpoint key ('sm', 'md', 'lg', etc.)
 * @returns {string} - Breakpoint value
 */
export const getBreakpoint = (breakpoint) => {
  return theme.breakpoints[breakpoint] || breakpoint;
};

/**
 * Gets component variant styles
 * @param {string} component - Component name ('button', 'card', etc.)
 * @param {string} variant - Variant name ('primary', 'outlined', etc.)
 * @returns {Object} - Variant styles
 */
export const getVariant = (component, variant) => {
  return theme.variants?.[component]?.[variant] || {};
};

// Media query helpers for styled-components
export const media = theme.media;

// Default export for easier importing
export default theme;
