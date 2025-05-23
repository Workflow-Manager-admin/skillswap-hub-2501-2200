import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

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
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Log In to Your Account</h2>
      
      {error && (
        <div style={{ 
          padding: '0.75rem', 
          backgroundColor: 'rgba(244, 67, 54, 0.1)', 
          color: 'var(--error)', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="email"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.email ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
            }}
          />
          {formErrors.email && (
            <p style={{ color: 'var(--error)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              {formErrors.email}
            </p>
          )}
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label 
              htmlFor="password"
              style={{ 
                fontWeight: 500
              }}
            >
              Password
            </label>
            <Link 
              to="/forgot-password" 
              style={{ 
                fontSize: '0.875rem',
                color: 'var(--kavia-orange)'
              }}
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.password ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
            }}
          />
          {formErrors.password && (
            <p style={{ color: 'var(--error)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              {formErrors.password}
            </p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={loading}
          style={{ marginBottom: '1.5rem' }}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
        
        <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: 'var(--kavia-orange)' }}>
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
