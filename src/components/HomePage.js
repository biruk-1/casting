import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../styles/HomePage.css'; // Your CSS for styling the page
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import Header from './Header';

const HomePage = () => {
    const [models, setModels] = useState([]); // State to hold models data
    const [filters, setFilters] = useState({
        height: '',
        eyes: '',
        sex: ''
    });
    const navigate = useNavigate(); // Initialize useNavigate for routing

    // Fetch the models data from the public directory on component mount
    useEffect(() => {
        fetch('/models.json')
            .then(response => response.json())
            .then(data => {
                setModels(data); // Set the full models data
            })
            .catch(error => console.error('Error fetching models data:', error));
    }, []);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // Handle search to navigate to the FilteredModels page
    const handleSearch = () => {
        navigate('/filtered-models', { state: { filters, models } });
    };

    return (
        <div className="home-container">
            <div className="overlay">
                <div className="content">
                    <h1 className="main-heading">Welcome to Beauty Agency</h1>
                    <p className="sub-heading">
                        Your gateway to a world of top models, where beauty, style, and professionalism converge.
                    </p>

                    {/* Filter Options */}
                    <div className="mainFilter">
                        <h3>Filter by your preference</h3>
                        <div className="filterOption">
                            {/* Height Filter */}
                            <select name="height" className="HeightFilter" onChange={handleFilterChange}>
                                <option value="">Select Height</option>
                                <option value="140-150">1.4 - 1.5</option>
                                <option value="150-165">1.5 - 1.65</option>
                                <option value="165-175">1.65 - 1.75</option>
                                <option value="175-190">1.75 - 1.9</option>
                                <option value="190-200">1.9 - 2</option>
                            </select>

                            {/* Eye Color Filter */}
                            <select name="eyes" className="colorFilter" onChange={handleFilterChange}>
                                <option value="">Select Eye Color</option>
                                <option value="blue">Blue</option>
                                <option value="brown">Brown</option>
                                <option value="green">Green</option>
                                <option value="hazel">Hazel</option>
                            </select>

                            {/* Gender Filter */}
                            <select name="sex" className="Sex" onChange={handleFilterChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <button onClick={handleSearch}>Search</button> {/* Update to call handleSearch */}
                    </div>
                </div>

                {/* Footer with social media icons */}
                <footer className="footer">
                    <p>FOLLOW US:</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-google-plus"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
