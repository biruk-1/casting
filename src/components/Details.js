import React, { useState } from 'react';
import '../styles/Details.css'; // Make sure to include your CSS file

const images = [
  { src: 'images/models_square/01.jpg', name: 'Jessica Stacy', height: '185', bust: '79', waist: '59', hips: '87', shoe: '39', eyes: 'blue', hair: 'brunet' },
  { src: 'images/models_square/02.jpg', name: 'Jessica Stacy', height: '185', bust: '79', waist: '59', hips: '87', shoe: '39', eyes: 'blue', hair: 'brunet' },
  { src: 'images/models_square/03.jpg', name: 'Jessica Stacy', height: '185', bust: '79', waist: '59', hips: '87', shoe: '39', eyes: 'blue', hair: 'brunet' },
  { src: 'images/models_square/04.jpg', name: 'Jessica Stacy', height: '185', bust: '79', waist: '59', hips: '87', shoe: '39', eyes: 'blue', hair: 'brunet' },
  { src: 'images/models_square/05.jpg', name: 'Jessica Stacy', height: '185', bust: '79', waist: '59', hips: '87', shoe: '39', eyes: 'blue', hair: 'brunet' },
];

const Details = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const displayedImages = [
    images[(currentIndex + 0) % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <section className="details-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {displayedImages.map((img, index) => (
            <div key={index} className="carousel-item">
              <div className="item-media">
                <img src={img.src} alt={`Slide ${index}`} />
                <div className="overlay">
                  <div className="details">
                    <h2>{img.name}</h2>
                    <p><span className="bold">Height:</span> {img.height}</p>
                    <p><span className="bold">Bust:</span> {img.bust}</p>
                    <p><span className="bold">Waist:</span> {img.waist}</p>
                    <p><span className="bold">Hips:</span> {img.hips}</p>
                    <p><span className="bold">Shoe:</span> {img.shoe}</p>
                    <p><span className="bold">Eyes:</span> {img.eyes}</p>
                    <p><span className="bold">Hair:</span> {img.hair}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination-controls">
        <button className="prev" onClick={handlePrev}>&lt;</button>
        <span className="page-number">
          {Math.floor(currentIndex / 3) + 1}/{Math.ceil(images.length / 3)}
        </span>
        <button className="next" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Details;
