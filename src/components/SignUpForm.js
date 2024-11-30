import React, { useState } from "react";
import './styles/SignUpForm.css';
const SignUpForm = () => {
    const [name, setName] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log("Signing up:", { name, collegeId, fatherName, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>College ID:</label>
            <input
                type="text"
                value={collegeId}
                onChange={(e) => setCollegeId(e.target.value)}
                required
            />
            <label>Father's Name:</label>
            <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
