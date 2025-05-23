// PUBLIC_INTERFACE
/**
 * Email validation
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// PUBLIC_INTERFACE
/**
 * Password strength validation
 * @param {string} password - Password to check
 * @returns {Object} - Validation result with isValid and message
 */
export const validatePasswordStrength = (password) => {
  const minLength = 8;
  
  if (!password) {
    return { isValid: false, message: 'Password is required' };
  }
  
  if (password.length < minLength) {
    return { isValid: false, message: `Password must be at least ${minLength} characters` };
  }
  
  // Check for at least one number
  const hasNumber = /\d/.test(password);
  
  // Check for at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  
  // Check for at least one special character
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  
  if (!hasNumber || !hasUppercase || !hasSpecial) {
    return { 
      isValid: false, 
      message: 'Password must include at least one number, one uppercase letter, and one special character' 
    };
  }
  
  return { isValid: true, message: '' };
};

// PUBLIC_INTERFACE
/**
 * Form field validation for required fields
 * @param {string} value - Field value
 * @param {string} fieldName - Field name for error message
 * @returns {string} - Error message or empty string if valid
 */
export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`;
  }
  return '';
};

// PUBLIC_INTERFACE
/**
 * Text field length validation
 * @param {string} value - Field value
 * @param {number} maxLength - Maximum allowed length
 * @param {string} fieldName - Field name for error message
 * @returns {string} - Error message or empty string if valid
 */
export const validateLength = (value, maxLength, fieldName) => {
  if (value && value.length > maxLength) {
    return `${fieldName} must be less than ${maxLength} characters`;
  }
  return '';
};

// PUBLIC_INTERFACE
/**
 * URL validation
 * @param {string} url - URL to validate
 * @returns {boolean} - Whether URL is valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// PUBLIC_INTERFACE
/**
 * Form validation helper
 * @param {Object} data - Form data object
 * @param {Object} validationRules - Rules for validation
 * @returns {Object} - Object with errors and isValid flag
 */
export const validateForm = (data, validationRules) => {
  const errors = {};
  let isValid = true;
  
  for (const field in validationRules) {
    const value = data[field];
    const rules = validationRules[field];
    
    for (const rule of rules) {
      if (rule.type === 'required' && validateRequired(value, rule.name)) {
        errors[field] = validateRequired(value, rule.name);
        isValid = false;
        break;
      }
      
      if (rule.type === 'email' && value && !isValidEmail(value)) {
        errors[field] = 'Please enter a valid email address';
        isValid = false;
        break;
      }
      
      if (rule.type === 'length' && validateLength(value, rule.max, rule.name)) {
        errors[field] = validateLength(value, rule.max, rule.name);
        isValid = false;
        break;
      }
      
      if (rule.type === 'passwordStrength' && value) {
        const passwordValidation = validatePasswordStrength(value);
        if (!passwordValidation.isValid) {
          errors[field] = passwordValidation.message;
          isValid = false;
          break;
        }
      }
      
      if (rule.type === 'match' && value !== data[rule.matchField]) {
        errors[field] = `${rule.name} must match ${rule.matchName}`;
        isValid = false;
        break;
      }
      
      if (rule.type === 'url' && value && !isValidUrl(value)) {
        errors[field] = 'Please enter a valid URL';
        isValid = false;
        break;
      }
    }
  }
  
  return { errors, isValid };
};
