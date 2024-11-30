import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './styles/Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Home</Link>
            </div>
            <div className="auth-buttons">
                {user ? (
                    <>
                        {/* Additional buttons after login */}
                        <Link to="/aboutus">
                            <button className="aboutus-btn">About Us</button>
                        </Link>
                        <Link to="/contactus">
                            <button className="contactus-btn">Contact Us</button>
                        </Link>
                        <button onClick={() => logout()} className="logout-btn">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="login-btn">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signup-btn">Sign Up</button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
