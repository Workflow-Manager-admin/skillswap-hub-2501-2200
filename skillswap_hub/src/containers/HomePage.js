import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { selectIsAuthenticated } from '../store/slices/authSlice';

// PUBLIC_INTERFACE
/**
 * HomePage container component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onLogout - Logout handler function
 * @returns {React.ReactElement} - Rendered HomePage component
 */
const HomePage = ({ onLogout }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Features array
  const features = [
    {
      icon: '🔄',
      title: 'Peer-to-Peer Skill Exchange',
      description: 'Trade your skills directly with others in your community. No middlemen, no fees.'
    },
    {
      icon: '🧠',
      title: 'Discover New Skills',
      description: 'Find people offering the skills you want to learn. From programming to cooking, music to marketing.'
    },
    {
      icon: '🤝',
      title: 'Build Connections',
      description: 'Connect with like-minded individuals and expand your network while learning from each other.'
    },
    {
      icon: '📈',
      title: 'Track Your Progress',
      description: 'Keep track of your skill trades and see your learning journey unfold over time.'
    }
  ];

  // How it works steps
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and list the skills you can offer to others.'
    },
    {
      number: '02',
      title: 'Browse Available Skills',
      description: 'Explore skills offered by other users that interest you.'
    },
    {
      number: '03',
      title: 'Request a Skill Swap',
      description: 'Found a skill you want to learn? Request a swap with that user.'
    },
    {
      number: '04',
      title: 'Exchange Knowledge',
      description: 'Meet (in-person or virtually) and exchange your skills.'
    }
  ];

  return (
    <PageLayout isAuthenticated={isAuthenticated} onLogout={onLogout}>
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 0',
        textAlign: 'center',
        backgroundColor: 'var(--kavia-dark)',
        color: 'var(--text-color)',
        borderBottom: '1px solid var(--border-color)',
      }}>
        <div className="container">
          <div className="subtitle" style={{ color: 'var(--kavia-orange)', marginBottom: '1rem' }}>
            Share. Learn. Grow.
          </div>
          
          <h1 className="title" style={{ marginBottom: '1.5rem' }}>
            Exchange Skills, <br />
            Expand Your Horizons
          </h1>
          
          <p className="description" style={{ 
            maxWidth: '600px',
            margin: '0 auto 2rem',
            color: 'var(--text-secondary)'
          }}>
            SkillSwap Hub is the platform where people trade knowledge and expertise
            without money. Learn something new by teaching what you already know.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {isAuthenticated ? (
              <Link to="/skills">
                <Button variant="primary" size="lg">
                  Browse Skills
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button variant="primary" size="lg">
                    Join Now
                  </Button>
                </Link>
                <Link to="/skills">
                  <Button variant="outlined" size="lg">
                    Explore Skills
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose SkillSwap Hub?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" hoverable style={{ height: '100%' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--dark-gray)' }}>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: 'var(--light-bg)',
        color: 'var(--kavia-dark)'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            How It Works
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: 'var(--kavia-orange)',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold'
                }}>
                  {step.number}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {isAuthenticated ? (
              <Link to="/my-skills">
                <Button variant="primary" size="lg">
                  List Your Skills
                </Button>
              </Link>
            ) : (
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Start Now
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Call To Action Section */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: 'var(--kavia-dark)',
        color: 'var(--text-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>
            Ready to start trading skills?
          </h2>
          <p style={{ 
            maxWidth: '600px',
            margin: '0 auto 2rem',
            color: 'var(--text-secondary)'
          }}>
            Join our community of skill-swappers and learn something new today.
            No money required - just your time and expertise.
          </p>
          
          <Link to={isAuthenticated ? "/skills" : "/register"}>
            <Button variant="primary" size="lg">
              {isAuthenticated ? 'Find Skills to Learn' : 'Join SkillSwap Hub'}
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
