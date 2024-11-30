import React, { useState, useEffect } from 'react';
import './styles/YourMessages.css';
import axios from 'axios'; // Axios for API calls

const Messages = ({ loggedInUserId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState({
        receiverId: '',
        content: '',
    });

    useEffect(() => {
        // Fetch messages for the logged-in user
        axios
            .get(`/api/messages?userId=${loggedInUserId}`)
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
            });
    }, [loggedInUserId]);

    const handleInputChange = (e) => {
        setNewMessage({
            ...newMessage,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send new message to the backend
        const messageData = {
            senderId: loggedInUserId,
            receiverId: newMessage.receiverId,
            content: newMessage.content,
        };

        axios
            .post('/api/messages', messageData)
            .then((response) => {
                setMessages([...messages, response.data]); // Add new message to local state
                setNewMessage({ receiverId: '', content: '' }); // Reset the form
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    };

    return (
        <div className="messages-page">
            <h2>Messages</h2>

            <div className="message-list">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message-item ${
                            message.senderId === loggedInUserId ? 'sent' : 'received'
                        }`}
                    >
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>

            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="receiverId"
                    value={newMessage.receiverId}
                    onChange={handleInputChange}
                    placeholder="Receiver User ID"
                    required
                />
                <textarea
                    name="content"
                    value={newMessage.content}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit" className="submit-message-btn">Send</button>
            </form>
        </div>
    );
};

export default Messages;
