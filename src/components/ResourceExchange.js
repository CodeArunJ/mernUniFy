import React, { useState } from 'react';
import axios from 'axios';
import './styles/ResourceExchange.css';

const ResourceExchange = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedResources, setUploadedResources] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResourceSection, setShowResourceSection] = useState(false); // State to toggle visibility

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            setLoading(true);
            // Assuming you have a backend API ready to handle file uploads
            const response = await axios.post('/api/upload-resource', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // After successful upload, add the resource to the list
            setUploadedResources((prevResources) => [...prevResources, response.data.resource]);
            setSelectedFile(null);
            setLoading(false);
            alert('Resource uploaded successfully!');
        } catch (error) {
            console.error('Error uploading the file:', error);
            setLoading(false);
            alert('Failed to upload resource.');
        }
    };

    // Toggle resource-sharing section visibility
    const toggleResourceSection = () => {
        setShowResourceSection(!showResourceSection);
    };

    return (
        <div className="resource-exchange">
            <h2>Resource Exchange</h2>
            <p>Share your files, materials, and resources here.</p>

            {/* Button to toggle the display */}
            <button onClick={toggleResourceSection} className="toggle-resource-button">
                {showResourceSection ? 'Hide Resource Sharing' : 'Show Resource Sharing'}
            </button>

            {/* Conditionally render the resource-sharing section */}
            {showResourceSection && (
                <div className="resource-section">
                    <form onSubmit={handleUpload}>
                        <input type="file" onChange={handleFileChange} />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Uploading...' : 'Upload Resource'}
                        </button>
                    </form>

                    {/* Display Uploaded Resources */}
                    <div className="uploaded-resources">
                        <h3>Uploaded Resources</h3>
                        <ul>
                            {uploadedResources.map((resource, index) => (
                                <li key={index}>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResourceExchange;
