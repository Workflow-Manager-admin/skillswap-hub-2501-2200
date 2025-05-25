import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../common/Card';
import Button from '../common/Button';
import { Flex, Text, Avatar } from '../common/StyledElements';

// Styled components for ProfileCard
const BannerArea = styled.div`
  height: 120px;
  background-color: ${props => props.theme.colors.primary.main};
  position: relative;
`;

const EditButtonContainer = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing.xs};
  right: ${props => props.theme.spacing.xs};
`;

const ProfileContent = styled.div`
  padding: 0 ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.colors.neutral.white};
  overflow: hidden;
  margin-top: -50px;
  position: relative;
  background-color: ${props => props.theme.colors.neutral[200]};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileName = styled.h2`
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const ProfileInfo = styled.div`
  color: ${props => props.theme.colors.text.secondary.dark};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProfileInfoItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const ProfileBio = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const BioHeading = styled.h4`
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const StatsContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const StatItem = styled.div``;

const StatValue = styled.div`
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary.dark};
`;

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
        <Text>User data not found.</Text>
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
      <BannerArea>
        {/* Edit button for current user */}
        {isCurrentUser && (
          <EditButtonContainer>
            <Link to="/profile/edit">
              <Button variant="outlined" size="sm">
                Edit Profile
              </Button>
            </Link>
          </EditButtonContainer>
        )}
      </BannerArea>
      
      {/* Profile content */}
      <ProfileContent>
        {/* Avatar */}
        <ProfileAvatar>
          <img 
            src={avatarUrl} 
            alt={user.name} 
          />
        </ProfileAvatar>
        
        {/* Name and info */}
        <ProfileName>
          {user.name}
        </ProfileName>
        
        <ProfileInfo>
          {user.location && (
            <ProfileInfoItem>
              📍 {user.location}
            </ProfileInfoItem>
          )}
          <ProfileInfoItem>
            🗓️ Member since {new Date(user.createdAt).toLocaleDateString()}
          </ProfileInfoItem>
        </ProfileInfo>
        
        {/* Bio */}
        {user.bio && (
          <ProfileBio>
            <BioHeading>About</BioHeading>
            <Text>{user.bio}</Text>
          </ProfileBio>
        )}
        
        {/* Stats */}
        <StatsContainer>
          <StatItem>
            <StatValue>
              {skillsCount}
            </StatValue>
            <StatLabel>
              Skills Offered
            </StatLabel>
          </StatItem>
          
          <StatItem>
            <StatValue>
              {swapsCount}
            </StatValue>
            <StatLabel>
              Swaps Completed
            </StatLabel>
          </StatItem>
        </StatsContainer>
        
        {/* Actions */}
        {!isCurrentUser && (
          <Flex gap="md">
            <Button variant="primary">
              Send Message
            </Button>
            <Button variant="outlined">
              View Skills
            </Button>
          </Flex>
        )}
      </ProfileContent>
    </Card>
  );
};

export default ProfileCard;
