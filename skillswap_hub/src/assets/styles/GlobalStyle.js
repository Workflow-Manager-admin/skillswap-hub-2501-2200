import { createGlobalStyle } from 'styled-components';

// Global styles for the entire application using styled-components
const GlobalStyle = createGlobalStyle`
  /* Font preloading for performance */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap&display=swap');

  /* Modern CSS Reset - more comprehensive than just setting margin/padding to 0 */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Remove default margin */
  body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
    margin: 0;
  }
  
  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
    height: 100%;
  }
  
  /* Set core body defaults */
  body {
    min-height: 100vh;
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 16px;
    line-height: 1.6;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background.default};
    color: ${props => props.theme.colors.text.primary.dark};
    overflow-x: hidden;
    transition: background-color 0.3s ease;
  }
  
  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* A11y - Remove animation for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Selection style - customize text highlighting */
  ::selection {
    background-color: ${props => props.theme.colors.primary[200]};
    color: ${props => props.theme.colors.neutral[900]};
  }
  
  /* Custom scrollbar for modern browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.default};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary[700]};
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
  
  /* Improved typography with better vertical rhythm */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
    line-height: 1.2;
    color: ${props => props.theme.colors.text.primary.dark};
    letter-spacing: -0.015em;
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
  }

  h4 {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }

  h5 {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }

  h6 {
    font-size: ${props => props.theme.typography.fontSize.md};
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 70ch; /* Limit line length for better readability */
  }

  /* Improved links with focus states for better accessibility */
  a {
    color: ${props => props.theme.colors.primary.main};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
    position: relative;
  }

  a:hover {
    color: ${props => props.theme.colors.primary[700]};
    text-decoration: underline;
  }
  
  a:focus {
    outline: 2px solid ${props => props.theme.colors.primary[400]};
    outline-offset: 2px;
  }
  
  /* Focus styles for interactive elements */
  button:focus, 
  input:focus, 
  select:focus, 
  textarea:focus {
    outline: 2px solid ${props => props.theme.colors.primary[400]};
    outline-offset: 2px;
  }

  /* Container with responsive padding */
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 clamp(1rem, 5vw, 2rem);
    margin: 0 auto;
  }
  
  /* Basic button reset */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
  
  /* List styles reset */
  ul, ol {
    list-style: none;
  }
  
  /* Form element normalization */
  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }
  
  /* Table normalization */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /* Light/Dark mode classes - maintained for backwards compatibility */
  body.dark-mode {
    background-color: ${props => props.theme.colors.legacy.dark};
    color: ${props => props.theme.colors.legacy.light};
  }

  body.light-mode {
    background-color: ${props => props.theme.colors.legacy.lightGray};
    color: #333;
  }

  /* Utility classes - maintained for backwards compatibility */
  .text-center { text-align: center; }

  .mt-1 { margin-top: ${props => props.theme.spacing.xs}; }
  .mt-2 { margin-top: ${props => props.theme.spacing.sm}; }
  .mt-3 { margin-top: ${props => props.theme.spacing.md}; }
  .mt-4 { margin-top: ${props => props.theme.spacing.lg}; }
  .mt-5 { margin-top: ${props => props.theme.spacing['2xl']}; }

  .mb-1 { margin-bottom: ${props => props.theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${props => props.theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${props => props.theme.spacing.md}; }
  .mb-4 { margin-bottom: ${props => props.theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${props => props.theme.spacing['2xl']}; }

  .ml-1 { margin-left: ${props => props.theme.spacing.xs}; }
  .ml-2 { margin-left: ${props => props.theme.spacing.sm}; }
  .ml-3 { margin-left: ${props => props.theme.spacing.md}; }
  .ml-4 { margin-left: ${props => props.theme.spacing.lg}; }
  .ml-5 { margin-left: ${props => props.theme.spacing['2xl']}; }

  .mr-1 { margin-right: ${props => props.theme.spacing.xs}; }
  .mr-2 { margin-right: ${props => props.theme.spacing.sm}; }
  .mr-3 { margin-right: ${props => props.theme.spacing.md}; }
  .mr-4 { margin-right: ${props => props.theme.spacing.lg}; }
  .mr-5 { margin-right: ${props => props.theme.spacing['2xl']}; }

  .p-1 { padding: ${props => props.theme.spacing.xs}; }
  .p-2 { padding: ${props => props.theme.spacing.sm}; }
  .p-3 { padding: ${props => props.theme.spacing.md}; }
  .p-4 { padding: ${props => props.theme.spacing.lg}; }
  .p-5 { padding: ${props => props.theme.spacing['2xl']}; }

  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .items-center { align-items: center; }
  .flex-wrap { flex-wrap: wrap; }

  .w-full { width: 100%; }
  .h-full { height: 100%; }

  .rounded { border-radius: ${props => props.theme.borderRadius.sm}; }
  .rounded-lg { border-radius: ${props => props.theme.borderRadius.md}; }
  .rounded-full { border-radius: ${props => props.theme.borderRadius.full}; }

  /* Animation utilities */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }

  /* Responsive utilities */
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    .hidden-sm {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: ${props => props.theme.breakpoints.lg}) {
    .hidden-md {
      display: none;
    }
  }

  @media (min-width: 993px) {
    .hidden-lg {
      display: none;
    }
  }

  /* Navbar styles from App.css */
  .navbar {
    background-color: ${props => props.theme.colors.legacy.dark};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.colors.legacy.borderColor};
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
  }

  .logo {
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-symbol {
    color: ${props => props.theme.colors.primary.main};
  }

  /* App styles */
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .hero {
    padding-top: 120px;
    padding-bottom: 64px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .subtitle {
    color: ${props => props.theme.colors.primary.main};
    font-weight: 500;
    font-size: 1.1rem;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.5;
    color: ${props => props.theme.colors.legacy.textSecondary};
    max-width: 600px;
    margin-bottom: 16px;
  }
`;

export default GlobalStyle;
