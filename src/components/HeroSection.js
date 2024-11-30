// src/components/HeroSection.js
import React from 'react';
import './styles/HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1>Connect, Collaborate, and Contribute</h1>
            <button className="join-btn">Join Now</button>
            <button className="login-btn">Login</button>
            <div className="stats">
                <span>Users: 1200</span>
                <span>Active Discussions: 300</span>
            </div>
        </div>
    );
};

export default HeroSection;
