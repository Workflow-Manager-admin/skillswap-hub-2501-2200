/**
 * ThemeUtils.js
 * 
 * Utility functions for working with the theme
 * These helper functions make it easier to access theme properties consistently across the app
 */
import theme from './theme';

/**
 * Gets a color from the theme
 * @param {string} path - Path to color (e.g., 'primary.500', 'text.primary.dark')
 * @param {Object} [customTheme] - Optional custom theme object (defaults to imported theme)
 * @returns {string} - Color value
 */
export const getColor = (path, customTheme = theme) => {
  // Use the provided theme or fall back to imported theme
  const themeToUse = customTheme || theme;
  
  // Handle legacy color names
  if (!path.includes('.')) {
    if (themeToUse.colors.legacy && themeToUse.colors.legacy[path]) {
      return themeToUse.colors.legacy[path];
    }
  }
  
  // Handle path notation (e.g., 'primary.500')
  const parts = path.split('.');
  let result = themeToUse.colors;
  
  for (const part of parts) {
    if (!result[part]) return path; // Return original if not found
    result = result[part];
  }
  
  return result;
};

/**
 * Gets font family
 * @param {string} type - Font family type ('main', 'heading', 'monospace')
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Font family value
 */
export const getFont = (type = 'main', customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.typography.fontFamily[type] || themeToUse.typography.fontFamily.main;
};

/**
 * Gets font size
 * @param {string} size - Size key ('xs', 'sm', 'md', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Font size value
 */
export const getFontSize = (size, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.typography.fontSize[size] || size;
};

/**
 * Gets font weight
 * @param {string} weight - Weight key ('light', 'regular', 'medium', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {number} - Font weight value
 */
export const getFontWeight = (weight, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.typography.fontWeight[weight] || weight;
};

/**
 * Gets spacing value
 * @param {string} space - Space key ('xs', 'sm', 'md', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Spacing value
 */
export const getSpacing = (space, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.spacing[space] || space;
};

/**
 * Gets border radius value
 * @param {string} radius - Radius key ('sm', 'md', 'lg', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Border radius value
 */
export const getBorderRadius = (radius, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.borderRadius[radius] || radius;
};

/**
 * Gets shadow value
 * @param {string} shadow - Shadow key ('sm', 'md', 'lg', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Shadow value
 */
export const getShadow = (shadow, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.shadows[shadow] || shadow;
};

/**
 * Gets transition value
 * @param {string} transition - Transition key ('default', 'fast', 'slow', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Transition value
 */
export const getTransition = (transition, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.transitions[transition] || transition;
};

/**
 * Gets breakpoint value
 * @param {string} breakpoint - Breakpoint key ('sm', 'md', 'lg', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {string} - Breakpoint value
 */
export const getBreakpoint = (breakpoint, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.breakpoints[breakpoint] || breakpoint;
};

/**
 * Gets component variant styles
 * @param {string} component - Component name ('button', 'card', etc.)
 * @param {string} variant - Variant name ('primary', 'outlined', etc.)
 * @param {Object} [customTheme] - Optional custom theme object
 * @returns {Object} - Variant styles
 */
export const getVariant = (component, variant, customTheme = theme) => {
  const themeToUse = customTheme || theme;
  return themeToUse.variants?.[component]?.[variant] || {};
};

/**
 * Creates a CSS value with a unit if the value is a number
 * @param {number|string} value - Value to convert
 * @param {string} unit - Unit to use if value is a number
 * @returns {string} - Value with unit
 */
export const withUnit = (value, unit = 'px') => {
  if (typeof value === 'number') {
    return `${value}${unit}`;
  }
  return value;
};

/**
 * Gets the appropriate theme mode (dark or light) based on preference or context
 * @param {string} [mode] - Force specific mode ('dark' or 'light')
 * @returns {string} - Color mode to use
 */
export const getColorMode = (mode) => {
  // If mode is explicitly provided, use it
  if (mode === 'dark' || mode === 'light') {
    return mode;
  }
  
  // Check for media preference if in browser environment
  if (typeof window !== 'undefined') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  
  // Default to dark mode
  return 'dark';
};

// Export media query helpers directly from the theme
export const { media } = theme;

// Export all theme values for direct use
export * from './theme';
