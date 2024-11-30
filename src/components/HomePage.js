import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';  // Keep the original CSS intact

const HomePage = () => {
  const { user } = useAuth(); // Get the logged-in user status from AuthContext
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (user) {
      // If the user is logged in, navigate to the respective page
      navigate(path);
    } else {
      // Show an alert if the user is not logged in
      alert('Please log in to access this feature.');
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <div className="homepage-buttons">
        {/* Buttons that navigate to specific pages */}
        <button 
          className="homepage-btn" 
          onClick={() => handleNavigation('/resources')}
        >
          Resources
        </button>
        <button 
          className="homepage-btn" 
          onClick={() => handleNavigation('/discussions')}
        >
          Open Discussions
        </button>
        <button 
          className="homepage-btn" 
          onClick={() => handleNavigation('/messages')}
        >
          Messages
        </button>
        <button 
          className="homepage-btn" 
          onClick={() => handleNavigation('/contributors')}
        >
          Top Contributors
        </button>
      </div>
    </div>
  );
};

export default HomePage;
