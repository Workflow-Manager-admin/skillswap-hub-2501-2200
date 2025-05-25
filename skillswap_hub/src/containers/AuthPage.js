import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PageLayout from '../components/layout/PageLayout';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import Card from '../components/common/Card';
import { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  registerStart, 
  registerSuccess, 
  registerFailure,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError
} from '../store/slices/authSlice';
// authService would be used in a real implementation with API calls

// PUBLIC_INTERFACE
/**
 * AuthPage container component for login and registration
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered AuthPage component
 */
const AuthPage = ({ onLogout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  
  // Determine if this is login or register page
  const isLogin = location.pathname === '/login';
  
  // Get redirect URL from query params (if exists)
  const searchParams = new URLSearchParams(location.search);
  const redirectUrl = searchParams.get('redirect') || '/profile';
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectUrl);
    }
  }, [isAuthenticated, navigate, redirectUrl]);
  
  // Handle login submission
  const handleLogin = async (credentials) => {
    dispatch(loginStart());
    try {
      // For demo purposes, mock a successful login
      // In a real app, you would call the authService
      // const response = await authService.login(credentials);
      
      // Mock response
      const response = {
        token: 'mock-jwt-token',
        user: {
          id: 'user1',
          name: 'Jane Doe',
          email: credentials.email,
          avatarUrl: 'https://i.pravatar.cc/150?img=12',
          bio: 'Full-stack developer with a passion for teaching and learning.',
          location: 'San Francisco, CA',
          createdAt: new Date().toISOString()
        }
      };
      
      dispatch(loginSuccess(response));
      navigate(redirectUrl);
    } catch (error) {
      dispatch(loginFailure(error.message || 'Login failed'));
    }
  };
  
  // Handle registration submission
  const handleRegister = async (userData) => {
    dispatch(registerStart());
    try {
      // For demo purposes, mock a successful registration
      // In a real app, you would call the authService
      // const response = await authService.register(userData);
      
      // Mock response
      const response = {
        token: 'mock-jwt-token',
        user: {
          id: 'new-user-1',
          name: userData.name,
          email: userData.email,
          bio: userData.bio || '',
          location: userData.location || '',
          avatarUrl: 'https://i.pravatar.cc/150?img=15',
          createdAt: new Date().toISOString()
        }
      };
      
      dispatch(registerSuccess(response));
      navigate(redirectUrl);
    } catch (error) {
      dispatch(registerFailure(error.message || 'Registration failed'));
    }
  };
  
  return (
    <PageLayout isAuthenticated={isAuthenticated} onLogout={onLogout}>
      <div className="container" style={{ 
        paddingTop: '2rem',
        paddingBottom: '3rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Card 
          variant="elevated" 
          style={{ 
            maxWidth: '500px', 
            width: '100%', 
            padding: '2rem'
          }}
        >
          {isLogin ? (
            <LoginForm 
              onSubmit={handleLogin} 
              error={error}
              loading={loading}
            />
          ) : (
            <RegisterForm 
              onSubmit={handleRegister} 
              error={error}
              loading={loading}
            />
          )}
        </Card>
      </div>
    </PageLayout>
  );
};

export default AuthPage;
