import React, { useState } from 'react';
import './styles/OpenDiscussions.css';

const OpenDiscussions = () => {
    // State to hold the list of discussions
    const [discussions, setDiscussions] = useState([
        { title: "Welcome to the platform!", content: "Let's have our first discussion." }
    ]);

    // State to manage form inputs
    const [newDiscussion, setNewDiscussion] = useState({
        title: '',
        content: ''
    });

    // State to manage the visibility of the discussion form and discussions list
    const [showForm, setShowForm] = useState(false);
    const [showDiscussions, setShowDiscussions] = useState(true);

    // Handle form input changes
    const handleInputChange = (e) => {
        setNewDiscussion({
            ...newDiscussion,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newDiscussion.title && newDiscussion.content) {
            // Add the new discussion to the discussions list
            setDiscussions([...discussions, newDiscussion]);

            // Reset form inputs
            setNewDiscussion({ title: '', content: '' });

            // Hide the form after submission
            setShowForm(false);
        }
    };

    return (
        <div className="open-discussions">
            <h2>Open Discussions</h2>

            {/* Buttons for Add Discussion and View Discussions */}
            <div className="discussion-actions">
                <button onClick={() => setShowForm(!showForm)} className="toggle-form-btn">
                    {showForm ? 'Cancel' : 'Add Discussion'}
                </button>

                <button onClick={() => setShowDiscussions(!showDiscussions)} className="toggle-view-btn">
                    {showDiscussions ? 'view Discussions' : 'View Discussions'}
                </button>
            </div>

            {/* Conditionally display the list of discussions */}
            {showDiscussions && (
                <div className="discussion-list">
                    {discussions.map((discussion, index) => (
                        <div key={index} className="discussion-item">
                            <h3>{discussion.title}</h3>
                            <p>{discussion.content}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Form to add a new discussion, visible only when showForm is true */}
            {showForm && (
                <form className="discussion-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={newDiscussion.title}
                        onChange={handleInputChange}
                        placeholder="Discussion Title"
                        required
                    />
                    <textarea
                        name="content"
                        value={newDiscussion.content}
                        onChange={handleInputChange}
                        placeholder="Discussion Content"
                        required
                    ></textarea>
                    <button type="submit" className="submit-discussion-btn">Submit</button>
                </form>
            )}
        </div>
    );
};

export default OpenDiscussions;
