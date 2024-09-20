import React from 'react';
import '../styles/MyCarousel.css'; // Ensure this path is correct

const MyCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {images.map((image, index) => (
          <div key={index} className="carousel-item carousel-image">
            <div className="item-media">
              <img src={image.src} alt={image.alt} />
              <div className="media-links">
                <a
                  className="abs-link"
                  href={image.link}
                  aria-label={`View details for ${image.name}`}
                >
                  {/* Content for screen readers */}
                  <span className="sr-only">View details for {image.name}</span>
                </a>
              </div>
            </div>
            <div className="item-content">
              <div className="bg-overlay" />
              <div className="model-parameters">
                <h2 className="block-header">
                  <span className="highlight">
                    {image.name}
                  </span>
                </h2>
                <div>
                  <span className="bold">Height</span>
                  <br />
                  <span>{image.height}</span>
                </div>
                <div>
                  <span className="bold">Bust</span>
                  <br />
                  <span>{image.bust}</span>
                </div>
                <div>
                  <span className="bold">Waist</span>
                  <br />
                  <span>{image.waist}</span>
                </div>
                <div>
                  <span className="bold">Hips</span>
                  <br />
                  <span>{image.hips}</span>
                </div>
                <div>
                  <span className="bold">Shoe</span>
                  <br />
                  <span>{image.shoe}</span>
                </div>
                <div>
                  <span className="bold">Eyes</span>
                  <br />
                  <span>{image.eyes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
