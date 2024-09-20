import React from 'react';
import '../styles/HomePage.css'; // Make sure your CSS file is properly linked
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import Header from './Header';
const HomePage = () => {
    return (
        <div className="home-container">
            <div className="overlay">
                {/* Engaging homepage content */}
                <div className="content">
                    <h1 className="main-heading">Welcome to Beauty Agency</h1>
                    <p className="sub-heading">
                        Your gateway to a world of top models, where beauty, style, and professionalism converge. 
                        Join us to discover the best talent or become one of the most sought-after models in the industry!
                    </p>
                    <div className="mainFilter"> 
                        <h3>Filter by you preferance</h3>
                    <div  className="filterOption">
                        <select className='HeightFilter' >
                            <option value="option1">1.4 - 1.5</option>
                            <option value="option2">1.5 - 1.65</option>
                            <option value="option3">1.65 - 1.75</option>
                            <option value="option4">1.8 - 1.9</option>
                            <option value="option5">1.9 - 2</option>
                        </select>
                        <select className='colorFblackilter'>
                            <option value = 'black'>black</option>
                            <option value = "brown">brown</option>
                            <option value = "white">white</option>
                        </select>
                        <select className='Sex'>
                            <option value = "male">male</option>
                            <option value = "Female">female</option>
                        </select>
                    </div>
                        <button>search</button>
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
        // </>
    );
};

export default HomePage;
