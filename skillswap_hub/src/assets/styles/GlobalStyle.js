import { createGlobalStyle } from 'styled-components';

// Global styles for the entire application using styled-components
const GlobalStyle = createGlobalStyle`
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  /* Global reset and base styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background-color: ${props => props.theme.colors.background.default};
    color: ${props => props.theme.colors.text.primary.dark};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
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
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.colors.primary.main};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
  }

  a:hover {
    text-decoration: underline;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
  }

  /* Light/Dark mode classes - maintained for backwards compatibility */
  body.dark-mode {
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
  }

  body.light-mode {
    background-color: ${props => props.theme.colors.lightGray};
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
    background-color: ${props => props.theme.colors.dark};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
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
    color: ${props => props.theme.colors.primary};
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
    color: ${props => props.theme.colors.primary};
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
    color: ${props => props.theme.colors.textSecondary};
    max-width: 600px;
    margin-bottom: 16px;
  }
`;

export default GlobalStyle;
