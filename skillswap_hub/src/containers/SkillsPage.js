import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageLayout from '../components/layout/PageLayout';
import SkillsList from '../components/skills/SkillsList';
import Button from '../components/common/Button';
import Card from '../common/Card';
import { 
  selectAllSkills,
  selectCategories,
  selectSkillsLoading,
  fetchSkillsStart,
  fetchSkillsSuccess,
  fetchSkillsFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../store/slices/skillsSlice';
import { selectIsAuthenticated, selectUser } from '../store/slices/authSlice';
import skillsService from '../services/skillsService';

// PUBLIC_INTERFACE
/**
 * SkillsPage container component for browsing skills
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered SkillsPage component
 */
const SkillsPage = ({ onLogout }) => {
  const dispatch = useDispatch();
  const skills = useSelector(selectAllSkills);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectSkillsLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectUser);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  
  // Fetch skills and categories on component mount
  useEffect(() => {
    fetchSkills();
    fetchCategories();
  }, []);
  
  // Fetch all skills
  const fetchSkills = async () => {
    dispatch(fetchSkillsStart());
    try {
      // Here we would normally fetch from the API
      // Since we're mocking data, we'll create some sample skills
      const mockSkills = generateMockSkills();
      dispatch(fetchSkillsSuccess(mockSkills));
    } catch (error) {
      dispatch(fetchSkillsFailure(error.message));
    }
  };
  
  // Fetch categories
  const fetchCategories = async () => {
    dispatch(fetchCategoriesStart());
    try {
      // Mock categories
      const mockCategories = [
        'Technology', 'Creative', 'Business', 'Education', 'Lifestyle', 'Other'
      ];
      dispatch(fetchCategoriesSuccess(mockCategories));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
  
  // Generate mock skills for demonstration
  const generateMockSkills = () => {
    return [
      {
        id: '1',
        title: 'Web Development',
        description: 'Learn how to build responsive websites using HTML, CSS, and JavaScript. I can teach you the fundamentals of modern web development.',
        category: 'Technology',
        experienceLevel: 'Intermediate',
        location: 'Remote',
        owner: {
          id: '101',
          name: 'Alex Johnson',
          avatarUrl: 'https://i.pravatar.cc/150?img=1'
        },
        imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-05-15T12:00:00Z'
      },
      {
        id: '2',
        title: 'Digital Photography',
        description: 'I can teach you photography basics including composition, lighting, and post-processing techniques. Bring your own camera.',
        category: 'Creative',
        experienceLevel: 'Beginner',
        location: 'New York, NY',
        owner: {
          id: '102',
          name: 'Sarah Williams',
          avatarUrl: 'https://i.pravatar.cc/150?img=5'
        },
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-05-10T15:30:00Z'
      },
      {
        id: '3',
        title: 'Business Plan Development',
        description: 'I can help you create a comprehensive business plan for your startup or small business. Includes market research and financial projections.',
        category: 'Business',
        experienceLevel: 'Advanced',
        location: 'Remote',
        owner: {
          id: '103',
          name: 'Michael Chen',
          avatarUrl: 'https://i.pravatar.cc/150?img=3'
        },
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-05-05T09:15:00Z'
      },
      {
        id: '4',
        title: 'Yoga Instruction',
        description: 'Learn yoga basics for beginners. Focus on proper alignment, breathing techniques, and simple sequences you can practice at home.',
        category: 'Lifestyle',
        experienceLevel: 'Beginner',
        location: 'Los Angeles, CA',
        owner: {
          id: '104',
          name: 'Emma Rodriguez',
          avatarUrl: 'https://i.pravatar.cc/150?img=9'
        },
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-04-28T14:00:00Z'
      },
      {
        id: '5',
        title: 'Spanish Language Tutoring',
        description: 'Conversational Spanish lessons for beginners to intermediate learners. Learn practical phrases and grammar through immersive conversation.',
        category: 'Education',
        experienceLevel: 'Intermediate',
        location: 'Remote',
        owner: {
          id: '105',
          name: 'Carlos Mendez',
          avatarUrl: 'https://i.pravatar.cc/150?img=7'
        },
        imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-04-20T10:45:00Z'
      },
      {
        id: '6',
        title: 'Mobile App Development',
        description: 'Learn how to build native mobile applications for iOS or Android using React Native. From setup to deployment.',
        category: 'Technology',
        experienceLevel: 'Advanced',
        location: 'Remote',
        owner: {
          id: '106',
          name: 'David Kim',
          avatarUrl: 'https://i.pravatar.cc/150?img=8'
        },
        imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        createdAt: '2023-04-15T16:20:00Z'
      }
    ];
  };
  
  // Handle skill request
  const handleRequestSkill = (skillId) => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = '/login?redirect=' + encodeURIComponent(`/skills/${skillId}`);
      return;
    }
    
    // Here we would normally send a request to the server
    console.log(`Requested skill swap for skill ID: ${skillId}`);
    
    // For demo purposes, show an alert
    alert('Skill swap request sent successfully!');
  };
  
  // Filter skills based on search term and category
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = searchTerm === '' || 
      skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || 
      skill.category.toLowerCase() === selectedCategory.toLowerCase();
      
    return matchesSearch && matchesCategory;
  });
  
  // Sort skills based on sort option
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortOption === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sortOption === 'alphabetical') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  
  return (
    <PageLayout isAuthenticated={isAuthenticated} onLogout={onLogout}>
      <div className="container">
        <h1 style={{ marginBottom: '1rem', marginTop: '1rem' }}>Browse Skills</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--dark-gray)' }}>
          Discover skills offered by our community members and request a swap.
        </p>
        
        {/* Search and filters */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {/* Search input */}
          <div style={{ flex: '1 1 300px' }}>
            <input
              type="text"
              placeholder="Search for skills..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid var(--medium-gray)',
                borderRadius: '4px',
              }}
            />
          </div>
          
          {/* Category filter */}
          <div style={{ flex: '0 1 200px' }}>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid var(--medium-gray)',
                borderRadius: '4px',
                backgroundColor: 'white',
              }}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Sort options */}
          <div style={{ flex: '0 1 200px' }}>
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid var(--medium-gray)',
                borderRadius: '4px',
                backgroundColor: 'white',
              }}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
        
        {/* Skills list */}
        <SkillsList 
          skills={sortedSkills}
          userId={currentUser?.id}
          loading={loading}
          onRequestSkill={handleRequestSkill}
        />
      </div>
    </PageLayout>
  );
};

export default SkillsPage;
