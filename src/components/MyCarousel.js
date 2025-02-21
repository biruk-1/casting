import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/MyCarousel.css'; 

const MyCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {images.map((image, index) => (
          <div key={image.id} className="carousel-item carousel-image"> {/* Assume each model has a unique 'id' */}
            <div className="item-media">
              <Link to={`/models-detail/${image.id}`} aria-label={`View details for ${image.name}`}>
                <img src={image.src} alt={image.alt} />
              </Link>
              <div className="media-links">
                <Link
                  className="abs-link"
                  to={`/models-detail/${image.id}`} 
                  aria-label={`View details for ${image.name}`}
                >
                  <span className="sr-only">View details for {image.name}</span>
                </Link>
              </div>
            </div>
            <div className="item-content">
              <div className="bg-overlay" />
              <div className="model-parameters">
                <h2 className="block-header">
                  <Link to={`/models-detail/${image.id}`} className="highlight">
                    {image.name}
                  </Link>
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
