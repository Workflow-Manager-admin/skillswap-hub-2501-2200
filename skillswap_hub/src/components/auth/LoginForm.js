import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import { 
  Input, 
  Label, 
  ErrorMessage, 
  Flex, 
  Text 
} from '../common/StyledElements';

// Styled components for LoginForm
const FormTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ErrorAlert = styled.div`
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => `${props.theme.colors.feedback.error.light}33`}; // 20% opacity
  color: ${props => props.theme.colors.feedback.error.main};
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FormLink = styled(Link)`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// PUBLIC_INTERFACE
/**
 * LoginForm component for user authentication
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Form submission handler
 * @param {string} props.error - Error message to display
 * @param {boolean} props.loading - Whether form submission is in progress
 * @returns {React.ReactElement} - Rendered LoginForm component
 */
const LoginForm = ({ onSubmit, error, loading = false }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div>
      <FormTitle>Log In to Your Account</FormTitle>
      
      {error && (
        <ErrorAlert>
          {error}
        </ErrorAlert>
      )}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            error={!!formErrors.email}
          />
          {formErrors.email && (
            <ErrorMessage>
              {formErrors.email}
            </ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Flex justify="space-between" align="center" style={{ marginBottom: '0.5rem' }}>
            <Label htmlFor="password" style={{ margin: 0 }}>
              Password
            </Label>
            <FormLink to="/forgot-password">
              Forgot password?
            </FormLink>
          </Flex>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            error={!!formErrors.password}
          />
          {formErrors.password && (
            <ErrorMessage>
              {formErrors.password}
            </ErrorMessage>
          )}
        </FormGroup>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={loading}
          style={{ marginBottom: '1.5rem' }}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
        
        <Text align="center" size="sm">
          Don't have an account?{' '}
          <FormLink to="/register">
            Create an account
          </FormLink>
        </Text>
      </form>
    </div>
  );
};

export default LoginForm;
