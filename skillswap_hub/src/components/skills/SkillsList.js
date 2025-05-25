import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import { Grid, Text } from '../common/StyledElements';

// Styled components for SkillsList
const EmptyState = styled.div`
  padding: ${props => props.theme.spacing.xl} 0;
  text-align: center;
`;

const LoadingState = styled.div`
  padding: ${props => props.theme.spacing.xl} 0;
  text-align: center;
`;

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
      <LoadingState>
        <Text>Loading skills...</Text>
      </LoadingState>
    );
  }

  if (skills.length === 0) {
    return (
      <EmptyState>
        <Text>No skills found.</Text>
      </EmptyState>
    );
  }

  return (
    <Grid minWidth="280px" gap="lg">
      {skills.map(skill => (
        <div key={skill.id} style={{ height: '100%' }}>
          <SkillCard 
            skill={skill} 
            isOwner={userId && skill.owner?.id === userId}
            onRequestSkill={onRequestSkill}
          />
        </div>
      ))}
    </Grid>
  );
};

export default SkillsList;
