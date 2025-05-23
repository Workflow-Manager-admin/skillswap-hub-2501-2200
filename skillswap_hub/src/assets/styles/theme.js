// Theme configuration for SkillSwap Hub
export const theme = {
  colors: {
    primary: '#E87A41',        // Kavia orange
    dark: '#1A1A1A',           // Dark background
    light: '#FFFFFF',          // Light text
    lightGray: '#F5F5F5',      // Light background
    mediumGray: '#E0E0E0',     // Borders, dividers
    darkGray: '#757575',       // Secondary text
    success: '#4CAF50',        // Success messages/indicators
    warning: '#FFC107',        // Warning messages/indicators
    error: '#F44336',          // Error messages
    skillBlue: '#2196F3',      // Skill category color
    skillGreen: '#8BC34A',     // Skill category color
    skillPurple: '#9C27B0',    // Skill category color
  },
  fonts: {
    main: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }
};

// Helper functions to use theme values
export const getColor = (color) => theme.colors[color] || color;
export const getFont = () => theme.fonts.main;
export const getFontSize = (size) => theme.fontSizes[size] || size;
export const getSpacing = (space) => theme.spacing[space] || space;
export const getBorderRadius = (radius) => theme.borderRadius[radius] || radius;
export const getShadow = (shadow) => theme.shadows[shadow] || shadow;
export const getTransition = (transition) => theme.transitions[transition] || transition;
export const getBreakpoint = (breakpoint) => theme.breakpoints[breakpoint] || breakpoint;
