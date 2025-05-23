import React from 'react';
import SkillCard from './SkillCard';

// PUBLIC_INTERFACE
/**
 * SkillsList component for displaying a grid of skills
 * 
 * @param {Object} props - Component props
 * @param {Array} props.skills - Array of skill objects
 * @param {string} props.userId - Current user ID to determine ownership
 * @param {boolean} props.loading - Whether data is loading
 * @param {Function} props.onRequestSkill - Function to request a skill
 * @returns {React.ReactElement} - Rendered SkillsList component
 */
const SkillsList = ({ skills = [], userId = null, loading = false, onRequestSkill }) => {
  if (loading) {
    return (
      <div style={{ padding: '2rem 0', textAlign: 'center' }}>
        <p>Loading skills...</p>
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div style={{ padding: '2rem 0', textAlign: 'center' }}>
        <p>No skills found.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem',
      margin: '1.5rem 0'
    }}>
      {skills.map(skill => (
        <div key={skill.id} style={{ height: '100%' }}>
          <SkillCard 
            skill={skill} 
            isOwner={userId && skill.owner?.id === userId}
            onRequestSkill={onRequestSkill}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
