import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../common/Card';
import Button from '../common/Button';
import { Badge, Flex, Text } from '../common/StyledElements';
import { getColor } from '../../assets/styles/ThemeUtils';

// Styled components for SkillCard
const ImageContainer = styled.div`
  height: 160px;
  overflow: hidden;
  margin: -${props => props.theme.spacing.md} -${props => props.theme.spacing.md} ${props => props.theme.spacing.md};
  position: relative;
`;

const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryBadge = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing.xs};
  left: ${props => props.theme.spacing.xs};
  background-color: ${props => {
    const category = props.category?.toLowerCase();
    if (category === 'technology') return props.theme.colors.skills.technology;
    if (category === 'creative') return props.theme.colors.skills.creative;
    if (category === 'business') return props.theme.colors.skills.business;
    if (category === 'education') return props.theme.colors.skills.education;
    if (category === 'lifestyle') return props.theme.colors.skills.lifestyle;
    return props.theme.colors.skills.other;
  }};
  color: ${props => props.theme.colors.neutral.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const SkillTitle = styled.h4`
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary.dark};
`;

const Separator = styled.span`
  margin: 0 ${props => props.theme.spacing.xs};
`;

const Description = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${props => props.theme.colors.text.primary.dark};
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExperienceLevel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  
  strong {
    font-weight: ${props => props.theme.typography.fontWeight.medium};
  }
`;

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
        <ImageContainer>
          <SkillImage 
            src={skill.imageUrl} 
            alt={skill.title}
          />
          
          {/* Category badge */}
          <CategoryBadge category={skill.category}>
            {skill.category}
          </CategoryBadge>
        </ImageContainer>
      )}
      
      <CardContent>
        <SkillTitle>{skill.title}</SkillTitle>
        
        <UserInfo>
          <span>{skill.owner?.name || 'Anonymous'}</span>
          <Separator>•</Separator>
          <span>{skill.location || 'Remote'}</span>
        </UserInfo>
        
        <Description>
          {skill.description}
        </Description>
        
        <CardFooter>
          <ExperienceLevel>
            <strong>Experience:</strong> {skill.experienceLevel}
          </ExperienceLevel>
          
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
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
