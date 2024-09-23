import React, { useState, useEffect } from 'react';
import MyCarousel from './MyCarousel';
import '../styles/MyCarousel.css';

const Preview = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4; 

  // Fetch models from models.json
  useEffect(() => {
    fetch('/Models.json')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
    );
  };

  return (
    <section style={{ margin: '10px 20px 10px 20px' }} className="ds ms intro_section page_mainslider">
      <div style={{ margin: '100px 20px 20px 20px' }} className="page_maincarousel">
        <button className="carousel-control-prev prev-button" onClick={handlePrev}>
          &#10094;
        </button>
        <MyCarousel images={images.slice(currentIndex, currentIndex + visibleImages)} />
        <button className="carousel-control-next next-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Preview;
