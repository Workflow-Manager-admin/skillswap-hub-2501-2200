import { css } from 'styled-components';

/**
 * Theme configuration for SkillSwap Hub
 * 
 * A comprehensive design system defining colors, typography, spacing,
 * and other design tokens for consistent styling across the application
 */
const theme = {
  colors: {
    // Primary brand colors with varying shades
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
      main: '#FF9800',  // Default shade (alias to 500 for convenience)
    },
    
    // Secondary color palette with varying shades
    secondary: {
      50: '#E1F5FE',  // Lightest
      100: '#B3E5FC',
      200: '#81D4FA',
      300: '#4FC3F7',
      400: '#29B6F6',
      500: '#03A9F4',  // Base blue
      600: '#039BE5',
      700: '#0288D1',
      800: '#0277BD',
      900: '#01579B',  // Darkest
      main: '#03A9F4',  // Default shade
    },
    
    // Tertiary/accent color for additional highlights
    tertiary: {
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
      main: '#4CAF50',  // Default shade
    },
    
    // Neutral colors for backgrounds, text, etc.
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
      white: '#FFFFFF',
      black: '#000000',
    },
    
    // Background colors for different surfaces
    background: {
      default: '#121212',   // Default dark background
      paper: '#1E1E1E',     // Cards and elevated surfaces
      light: '#FFFFFF',     // Light mode background
      elevation: {
        1: '#1E1E1E',
        2: '#232323',
        3: '#252525',
        4: '#272727',
        8: '#2E2E2E',
        16: '#353535',
        24: '#383838',
      },
    },
    
    // Text colors with variants for different backgrounds
    text: {
      primary: {
        dark: 'rgba(255, 255, 255, 0.87)',  // White text on dark bg
        light: 'rgba(0, 0, 0, 0.87)',      // Dark text on light bg
      },
      secondary: {
        dark: 'rgba(255, 255, 255, 0.6)',   // Slightly faded white text
        light: 'rgba(0, 0, 0, 0.6)',        // Slightly faded dark text
      },
      disabled: {
        dark: 'rgba(255, 255, 255, 0.38)',  // Very faded white text
        light: 'rgba(0, 0, 0, 0.38)',       // Very faded dark text
      },
    },
    
    // Feedback/status colors for notifications and alerts
    feedback: {
      success: {
        main: '#4CAF50',  // Green
        light: '#A5D6A7',
        dark: '#2E7D32',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#FF9800',  // Orange
        light: '#FFCC80',
        dark: '#EF6C00',
        contrastText: '#000000',
      },
      error: {
        main: '#F44336',  // Red
        light: '#FFCDD2',
        dark: '#C62828',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#2196F3',  // Blue
        light: '#90CAF9',
        dark: '#0D47A1',
        contrastText: '#FFFFFF',
      },
    },
    
    // Border colors
    border: {
      dark: 'rgba(255, 255, 255, 0.12)',
      light: 'rgba(0, 0, 0, 0.12)',
    },
    
    // Skill type-specific colors
    skills: {
      technology: '#2196F3',   // Blue
      creative: '#9C27B0',     // Purple
      business: '#FF9800',     // Orange
      education: '#4CAF50',    // Green
      lifestyle: '#FF5722',    // Deep orange
      other: '#607D8B',        // Blue gray
    },
    
    // Legacy color names for backward compatibility
    // These help maintain compatibility with existing components
    legacy: {
      primary: '#FF9800',           // Main brand color (orange)
      secondary: '#03A9F4',         // Secondary color (blue)
      dark: '#121212',              // Dark background
      light: '#FFFFFF',             // Light text
      lightGray: '#F5F5F5',
      mediumGray: '#E0E0E0',
      darkGray: '#757575',
      textPrimary: '#FFFFFF',
      textSecondary: 'rgba(255, 255, 255, 0.6)',
      borderColor: 'rgba(255, 255, 255, 0.12)',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    }
  },
  
  // Typography system
  typography: {
    // Font families
    fontFamily: {
      main: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      heading: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      monospace: "'Roboto Mono', 'Consolas', monospace",
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
    },
  },
  
  // Spacing scale - consistency through multiples of 4
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
  
  // Z-index values for controlling stacking order
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
  
  // Common component variants for consistent styling
  variants: {
    // Button variants
    button: {
      primary: {
        backgroundColor: '#FF9800',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#F57C00' },
      },
      secondary: {
        backgroundColor: '#03A9F4',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#0288D1' },
      },
      tertiary: {
        backgroundColor: '#4CAF50',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#388E3C' },
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
    },
    
    // Input variants
    input: {
      default: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '0.25rem',
        color: 'rgba(255, 255, 255, 0.87)',
      },
      filled: {
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        border: 'none',
        borderRadius: '0.25rem',
        color: 'rgba(255, 255, 255, 0.87)',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.23)',
        borderRadius: '0.25rem',
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },
    
    // Badge variants
    badge: {
      default: {
        backgroundColor: '#FF9800',
        color: '#FFFFFF',
        borderRadius: '9999px',
        padding: '0.25rem 0.75rem',
      },
      dot: {
        height: '8px',
        width: '8px',
        backgroundColor: '#FF9800',
        borderRadius: '50%',
        display: 'inline-block',
      },
    },
  }
};

// Export the theme as default for easier importing
export default theme;

// Also export as named export for backward compatibility
export { theme };

// Export media query helpers directly from theme
export const { media } = theme;
