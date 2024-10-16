import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../styles/HomePage.css'; // Your CSS for styling the page
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import Header from './Header';

const HomePage = () => {
    const [models, setModels] = useState([]); // State to hold models data
    const [filters, setFilters] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Fashion');

    const navigate = useNavigate(); // Initialize useNavigate for routing

    // Background images for each category
    const backgroundImages = {
        Fashion: 'images/black.png',
        Movies: 'images/movies.jpg',
        Songs: 'images/Music.jpg',
        Commercials: 'images/Promotion.jpg'
    };

    // Category-specific texts
    const categoryTexts = {
        Fashion: {
            main: 'Welcome to Fashion Models Casting',
            sub: 'Discover the world of high fashion, where beauty and style meet professionalism.',
        },
        Movies: {
            main: 'Welcome to Movie Casting',
            sub: 'Find talented actors and actresses ready to shine on the big screen.',
        },
        Songs: {
            main: 'Welcome to Music Casting',
            sub: 'Explore a variety of vocal talents for your next hit song.',
        },
        Commercials: {
            main: 'Welcome to Commercial Casting',
            sub: 'Connecting brands with the perfect faces to represent their vision.',
        }
    };

    // Filter options for each category
    const filterOptions = {
        Fashion: { 
            height: true, 
            eyes: true, 
            sex: true, 
            waist: true, 
            bust: true, 
            shoe: true 
        },
        Movies: { 
            experience: true, 
            age: true, 
            gender: true, 
            role: true, // Added role filter
            language: true // Added language filter
        },
        Songs: { 
            vocalRange: true, 
            genre: true, 
            sex: true, 
            experience: true, // Added experience filter
            age: true // Added age filter
        },
        Commercials: { 
            productType: true, 
            gender: true, 
            experience: true, 
            age: true, // Added age filter
            location: true // Added location filter
        }
    };

    // Fetch the models data from the public directory on component mount
    useEffect(() => {
        fetch('/models.json')
            .then(response => response.json())
            .then(data => {
                setModels(data); // Set the full models data
            })
            .catch(error => console.error('Error fetching models data:', error));
    }, []);

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setFilters({}); // Reset filters when category changes
    };

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

    // Render the filter options dynamically based on the selected category
    const renderFilterOptions = () => {
        const options = filterOptions[selectedCategory];
        return (
            <div className="filterOption">
                {options.height && (
                    <select name="height" className="HeightFilter" onChange={handleFilterChange}>
                        <option value="">Select Height</option>
                        <option value="140-150">1.4 - 1.5</option>
                        <option value="150-165">1.5 - 1.65</option>
                        <option value="165-175">1.65 - 1.75</option>
                        <option value="175-190">1.75 - 1.9</option>
                        <option value="190-200">1.9 - 2</option>
                    </select>
                )}
                {options.eyes && (
                    <select name="eyes" className="colorFilter" onChange={handleFilterChange}>
                        <option value="">Select Eye Color</option>
                        <option value="blue">Blue</option>
                        <option value="brown">Brown</option>
                        <option value="green">Green</option>
                        <option value="hazel">Hazel</option>
                    </select>
                )}
                {options.sex && (
                    <select name="sex" className="SexFilter" onChange={handleFilterChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                )}
                {options.shoe && (
                    <select name="shoe" className="ShoeFilter" onChange={handleFilterChange}>
                        <option value="">Select Shoe Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                )}
                {options.waist && (
                    <select name="waist" className="WaistFilter" onChange={handleFilterChange}>
                        <option value="">Select Waist Size</option>
                        <option value="slim">Slim</option>
                        <option value="regular">Regular</option>
                        <option value="large">Large</option>
                    </select>
                )}
                {options.bust && (
                    <select name="bust" className="BustFilter" onChange={handleFilterChange}>
                        <option value="">Select Bust Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                )}
                {options.experience && (
                    <select name="experience" className="ExperienceFilter" onChange={handleFilterChange}>
                        <option value="">Select Experience Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                )}
                {options.age && (
                    <select name="age" className="AgeFilter" onChange={handleFilterChange}>
                        <option value="">Select Age</option>
                        <option value="18-25">18 - 25</option>
                        <option value="26-35">26 - 35</option>
                        <option value="36-45">36 - 45</option>
                        <option value="46-55">46 - 55</option>
                        <option value="56-65">56 - 65</option>
                        <option value="66-75">66 - 75</option>
                    </select>
                )}
                {options.role && (
                    <select name="role" className="RoleFilter" onChange={handleFilterChange}>
                        <option value="">Select Role</option>
                        <option value="lead">Lead</option>
                        <option value="supporting">Supporting</option>
                        <option value="background">Background</option>
                    </select>
                )}
                {options.language && (
                    <select name="language" className="LanguageFilter" onChange={handleFilterChange}>
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                    </select>
                )}
                {options.location && (
                    <select name="location" className="LocationFilter" onChange={handleFilterChange}>
                        <option value="">Select Location</option>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                    </select>
                )}
            </div>
        );
    };

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImages[selectedCategory]})` }}>
            <Header />
            <div className="overlay">
                <div className="content">
                    {/* Dynamic Texts based on Selected Category */}
                    <h1 className="main-heading">{categoryTexts[selectedCategory].main}</h1>
                    <p className="sub-heading">{categoryTexts[selectedCategory].sub}</p>

                    {/* Category selection */}
                    <div className="category-selection">
                        {['Fashion', 'Movies', 'Songs', 'Commercials'].map((category) => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Filter Options */}
                    <div className="filter-section">
                        <h2>Filter Options</h2>
                        {renderFilterOptions()}
                        <button className="search-button" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
