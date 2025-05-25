import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { logout, selectIsAuthenticated } from './store/slices/authSlice';

// Import theme and global styles
import theme from './assets/styles/theme';
import GlobalStyle from './assets/styles/GlobalStyle';
import './App.css';

// Import containers
import HomePage from './containers/HomePage';
import SkillsPage from './containers/SkillsPage';
import ProfilePage from './containers/ProfilePage';
import AuthPage from './containers/AuthPage';

// Define protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  if (!isAuthenticated) {
    // Redirect to login page with the return url
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const dispatch = useDispatch();
  
  // Handle user logout
  const handleLogout = () => {
    dispatch(logout());
    // After logout, redirect to home page
    window.location.href = '/';
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage onLogout={handleLogout} />} />
          <Route path="/skills" element={<SkillsPage onLogout={handleLogout} />} />
          <Route path="/login" element={<AuthPage onLogout={handleLogout} />} />
          <Route path="/register" element={<AuthPage onLogout={handleLogout} />} />
          
          {/* Protected routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/my-skills" 
            element={
              <ProtectedRoute>
                <SkillsPage onLogout={handleLogout} mySkillsOnly={true} />
              </ProtectedRoute>
            }
          />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
