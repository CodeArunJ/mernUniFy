// src/pages/SignUpPage.js
import React from 'react';
import './styles/SignUpPage.css';

const SignUpPage = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {/* Your sign-up form logic can go here */}
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignUpPage;
