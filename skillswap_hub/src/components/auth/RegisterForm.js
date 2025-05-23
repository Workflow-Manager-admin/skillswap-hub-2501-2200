import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * RegisterForm component for user registration
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Form submission handler
 * @param {string} props.error - Error message to display
 * @param {boolean} props.loading - Whether form submission is in progress
 * @returns {React.ReactElement} - Rendered RegisterForm component
 */
const RegisterForm = ({ onSubmit, error, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    location: '',
    bio: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    location: '',
    bio: ''
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
    const newErrors = { 
      name: '',
      email: '', 
      password: '',
      passwordConfirm: '',
      location: '',
      bio: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
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
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }
    
    // Password confirmation
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Passwords do not match';
      isValid = false;
    }
    
    // Location validation (optional)
    
    // Bio validation (optional)
    if (formData.bio && formData.bio.length > 500) {
      newErrors.bio = 'Bio must be less than 500 characters';
      isValid = false;
    }
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Remove passwordConfirm before submitting
      const { passwordConfirm, ...submissionData } = formData;
      onSubmit(submissionData);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Create an Account</h2>
      
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
        {/* Name field */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="name"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.name ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
            }}
          />
          {formErrors.name && (
            <p style={{ color: 'var(--error)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              {formErrors.name}
            </p>
          )}
        </div>
        
        {/* Email field */}
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
        
        {/* Password field */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="password"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            autoComplete="new-password"
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
        
        {/* Confirm Password field */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="passwordConfirm"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.passwordConfirm ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
            }}
          />
          {formErrors.passwordConfirm && (
            <p style={{ color: 'var(--error)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              {formErrors.passwordConfirm}
            </p>
          )}
        </div>
        
        {/* Location field */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="location"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Location (optional)
          </label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Country"
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.location ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
            }}
          />
          {formErrors.location && (
            <p style={{ color: 'var(--error)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              {formErrors.location}
            </p>
          )}
        </div>
        
        {/* Bio field */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label 
            htmlFor="bio"
            style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: 500
            }}
          >
            Bio (optional)
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell others about yourself"
            rows={4}
            style={{ 
              width: '100%', 
              padding: '0.75rem',
              fontSize: '1rem',
              border: `1px solid ${formErrors.bio ? 'var(--error)' : 'var(--medium-gray)'}`,
              borderRadius: '4px',
              resize: 'vertical',
            }}
          />
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: '0.25rem',
            fontSize: '0.75rem',
            color: formData.bio.length > 500 ? 'var(--error)' : 'var(--dark-gray)'
          }}>
            <span>{formData.bio.length}/500 characters</span>
            {formErrors.bio && <span>{formErrors.bio}</span>}
          </div>
        </div>
        
        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={loading}
          style={{ marginBottom: '1.5rem' }}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
        
        <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--kavia-orange)' }}>
            Log in instead
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
