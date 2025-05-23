import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

// PUBLIC_INTERFACE
/**
 * SkillCard component for displaying skill information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.skill - Skill data
 * @param {boolean} props.isOwner - Whether the current user is the owner
 * @param {Function} props.onRequestSkill - Function to request the skill
 * @returns {React.ReactElement} - Rendered SkillCard component
 */
const SkillCard = ({ skill, isOwner = false, onRequestSkill }) => {
  // Helper function to get category color
  const getCategoryColor = (category) => {
    const categoryColors = {
      'technology': 'var(--skillBlue)',
      'creative': 'var(--skillPurple)',
      'business': 'var(--kavia-orange)',
      'education': 'var(--skillGreen)',
      'lifestyle': 'var(--warning)',
      'other': 'var(--dark-gray)',
    };
    
    return categoryColors[category.toLowerCase()] || categoryColors.other;
  };
  
  return (
    <Card 
      hoverable 
      variant="elevated"
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {skill.imageUrl && (
        <div style={{ 
          height: '160px', 
          overflow: 'hidden',
          margin: '-1rem -1rem 1rem',
          position: 'relative'
        }}>
          <img 
            src={skill.imageUrl} 
            alt={skill.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }} 
          />
          
          {/* Category badge */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: getCategoryColor(skill.category),
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 500
          }}>
            {skill.category}
          </div>
        </div>
      )}
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>{skill.title}</h4>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '0.75rem',
          fontSize: '0.875rem',
          color: 'var(--dark-gray)'
        }}>
          <span>{skill.owner?.name || 'Anonymous'}</span>
          <span style={{ margin: '0 6px' }}>•</span>
          <span>{skill.location || 'Remote'}</span>
        </div>
        
        <p style={{ 
          fontSize: '0.875rem', 
          marginBottom: '1rem',
          flex: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {skill.description}
        </p>
        
        <div style={{ 
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '0.875rem' }}>
            <strong>Experience:</strong> {skill.experienceLevel}
          </div>
          
          {isOwner ? (
            <Link to={`/skills/${skill.id}/edit`}>
              <Button variant="outlined" size="sm">
                Edit
              </Button>
            </Link>
          ) : (
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => onRequestSkill(skill.id)}
            >
              Request Swap
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;
