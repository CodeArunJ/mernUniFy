// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResourceExchange from './components/ResourceExchange';
import OpenDiscussions from './components/OpenDiscussions';
import YourMessages from './components/YourMessages';
import TopContributors from './components/TopContributors';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/resources" element={<ResourceExchange />} />
                    <Route path="/discussions" element={<OpenDiscussions />} />
                    <Route path="/messages" element={<YourMessages />} />
                    <Route path="/contributors" element={<TopContributors />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </Router>
    );
};

export default App;
