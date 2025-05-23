import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * ProfileCard component for displaying user profile information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.user - User data
 * @param {boolean} props.isCurrentUser - Whether this is the current logged-in user
 * @param {number} props.skillsCount - Number of skills offered by the user
 * @param {number} props.swapsCount - Number of swaps completed by the user
 * @returns {React.ReactElement} - Rendered ProfileCard component
 */
const ProfileCard = ({ user, isCurrentUser = false, skillsCount = 0, swapsCount = 0 }) => {
  if (!user) {
    return (
      <Card style={{ padding: '2rem', textAlign: 'center' }}>
        <p>User data not found.</p>
      </Card>
    );
  }

  // Default avatar placeholder URL
  const avatarUrl = user.avatarUrl || 'https://via.placeholder.com/100';
  
  return (
    <Card 
      variant="elevated" 
      style={{ 
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {/* Banner/header area */}
      <div 
        style={{ 
          height: '120px', 
          backgroundColor: 'var(--kavia-orange)', 
          position: 'relative',
        }}
      >
        {/* Edit button for current user */}
        {isCurrentUser && (
          <Link 
            to="/profile/edit" 
            style={{ 
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
          >
            <Button variant="outlined" size="sm">
              Edit Profile
            </Button>
          </Link>
        )}
      </div>
      
      {/* Profile content */}
      <div style={{ padding: '0 1.5rem 1.5rem' }}>
        {/* Avatar */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '4px solid white',
          overflow: 'hidden',
          marginTop: '-50px',
          position: 'relative',
          backgroundColor: '#f0f0f0'
        }}>
          <img 
            src={avatarUrl} 
            alt={user.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
        
        {/* Name and info */}
        <h2 style={{ marginTop: '1rem', marginBottom: '0.25rem' }}>
          {user.name}
        </h2>
        
        <div style={{ color: 'var(--dark-gray)', marginBottom: '1rem' }}>
          {user.location && (
            <div style={{ marginBottom: '0.25rem' }}>
              📍 {user.location}
            </div>
          )}
          <div>
            🗓️ Member since {new Date(user.createdAt).toLocaleDateString()}
          </div>
        </div>
        
        {/* Bio */}
        {user.bio && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>About</h4>
            <p>{user.bio}</p>
          </div>
        )}
        
        {/* Stats */}
        <div style={{ 
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
              {skillsCount}
            </div>
            <div style={{ color: 'var(--dark-gray)', fontSize: '0.875rem' }}>
              Skills Offered
            </div>
          </div>
          
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
              {swapsCount}
            </div>
            <div style={{ color: 'var(--dark-gray)', fontSize: '0.875rem' }}>
              Swaps Completed
            </div>
          </div>
        </div>
        
        {/* Actions */}
        {!isCurrentUser && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary">
              Send Message
            </Button>
            <Button variant="outlined">
              View Skills
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProfileCard;
