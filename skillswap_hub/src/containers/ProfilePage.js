import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ProfileCard from '../components/profile/ProfileCard';
import SkillsList from '../components/skills/SkillsList';
import Button from '../components/common/Button';
import { selectIsAuthenticated, selectUser } from '../store/slices/authSlice';
import { 
  selectUserSkills, 
  selectSkillsLoading, 
  fetchUserSkillsStart, 
  fetchUserSkillsSuccess, 
  fetchUserSkillsFailure 
} from '../store/slices/skillsSlice';

// PUBLIC_INTERFACE
/**
 * ProfilePage container component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered ProfilePage component
 */
const ProfilePage = ({ onLogout }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectUser);
  const userSkills = useSelector(selectUserSkills);
  const loading = useSelector(selectSkillsLoading);
  
  const [activeTab, setActiveTab] = useState('skills');
  const [skillsCount, setSkillsCount] = useState(0);
  const [swapsCount, setSwapsCount] = useState(0);
  
  // Define fetch functions first so they can be referenced in useEffect
  // Functions moved above the useEffect to fix the "used before defined" error
  
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      fetchUserSkills();
      fetchUserStats();
    }
  }, [isAuthenticated, currentUser, fetchUserSkills, fetchUserStats]);
  
  // Functions moved above the useEffect to fix the "used before defined" error
  
  // Mock user data for demo
  const mockUser = currentUser || {
    id: 'user1',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    bio: 'Full-stack developer with a passion for teaching and learning new skills. Always looking to expand my horizons and connect with like-minded individuals.',
    location: 'San Francisco, CA',
    createdAt: '2023-01-15T00:00:00Z'
  };
  
  // Handle skill request for demo
  const handleRequestSkill = (skillId) => {
    alert(`This would send a request for skill ID: ${skillId}`);
  };
  
  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2>My Skills</h2>
              <Link to="/skills/add">
                <Button variant="primary">Add New Skill</Button>
              </Link>
            </div>
            <SkillsList 
              skills={userSkills}
              userId={mockUser.id}
              loading={loading}
              onRequestSkill={handleRequestSkill}
            />
            {userSkills.length === 0 && !loading && (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <p style={{ marginBottom: '1.5rem' }}>You haven't added any skills yet.</p>
                <Link to="/skills/add">
                  <Button variant="primary">Add Your First Skill</Button>
                </Link>
              </div>
            )}
          </>
        );
      
      case 'swaps':
        return (
          <>
            <h2 style={{ marginBottom: '1rem' }}>My Skill Swaps</h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {/* For demo, show a message */}
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <p>This feature will show your active and past skill swaps.</p>
                <p>Coming soon!</p>
              </div>
            </div>
          </>
        );
      
      case 'settings':
        return (
          <>
            <h2 style={{ marginBottom: '1.5rem' }}>Account Settings</h2>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Personal Information</h3>
                <Link to="/profile/edit">
                  <Button variant="outlined">Edit Profile</Button>
                </Link>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Security</h3>
                <Link to="/password/change">
                  <Button variant="outlined">Change Password</Button>
                </Link>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Notifications</h3>
                <Link to="/notifications/settings">
                  <Button variant="outlined">Notification Settings</Button>
                </Link>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--error)' }}>Danger Zone</h3>
                <Button 
                  variant="outlined" 
                  style={{ 
                    color: 'var(--error)',
                    borderColor: 'var(--error)'
                  }}
                  onClick={() => window.confirm('Are you sure you want to deactivate your account? This action cannot be undone.')}
                >
                  Deactivate Account
                </Button>
              </div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };
  
  if (!isAuthenticated) {
    return (
      <PageLayout isAuthenticated={isAuthenticated} onLogout={onLogout}>
        <div className="container" style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Please log in to view your profile</h2>
          <Link to="/login">
            <Button variant="primary" size="lg">Log In</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout isAuthenticated={isAuthenticated} onLogout={onLogout}>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {/* Profile sidebar */}
          <div>
            <ProfileCard 
              user={mockUser}
              isCurrentUser={true}
              skillsCount={skillsCount}
              swapsCount={swapsCount}
            />
          </div>
          
          {/* Main content */}
          <div style={{ gridColumn: '2 / -1' }}>
            {/* Tabs */}
            <div style={{ 
              display: 'flex',
              borderBottom: '1px solid var(--medium-gray)',
              marginBottom: '2rem'
            }}>
              <button 
                onClick={() => setActiveTab('skills')}
                style={{ 
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === 'skills' ? '2px solid var(--kavia-orange)' : 'none',
                  color: activeTab === 'skills' ? 'var(--kavia-orange)' : 'inherit',
                  fontWeight: activeTab === 'skills' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                My Skills
              </button>
              
              <button 
                onClick={() => setActiveTab('swaps')}
                style={{ 
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === 'swaps' ? '2px solid var(--kavia-orange)' : 'none',
                  color: activeTab === 'swaps' ? 'var(--kavia-orange)' : 'inherit',
                  fontWeight: activeTab === 'swaps' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                Skill Swaps
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                style={{ 
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === 'settings' ? '2px solid var(--kavia-orange)' : 'none',
                  color: activeTab === 'settings' ? 'var(--kavia-orange)' : 'inherit',
                  fontWeight: activeTab === 'settings' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                Settings
              </button>
            </div>
            
            {/* Tab content */}
            {renderTabContent()}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
