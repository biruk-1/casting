import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ModelsDetail.css'; // Assuming this is already there

const ModelsDetail = () => {
  const { id } = useParams(); // Get model id from the URL params
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModelData = async () => {
      try {
        const response = await fetch('/models.json'); // Path to your models.json file
        const data = await response.json();

        // Find the model by id
        const selectedModel = data.find((model) => model.id === parseInt(id));

        if (selectedModel) {
          setModel(selectedModel);
        } else {
          setError('Model not found');
        }
      } catch (err) {
        console.error('Error fetching model data:', err);
        setError('Error loading model data');
      } finally {
        setLoading(false);
      }
    };

    fetchModelData();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (

    <div className="model-detail-container">
      <div className='first-section'>
      <div className="model-detail-header">
        <h2>About Model</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="model-gallery">
        <h3>Model Gallery</h3>
        <div className="model-gallery-images">
          {model.galleryImages && model.galleryImages.length > 0 ? (
            model.galleryImages.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`${model.name} - ${index + 1}`} />
            ))
          ) : (
            <p>No additional images available</p>
          )}
        </div>
      </div>
      
      </div>
      {/* New Section: Model Gallery for Multiple Images */}
            
      
      <div className="model-info">
        <div className="model-image">
          {model.src ? (
            <img src={model.src} alt={`Photo of ${model.name}`} />
          ) : (
            <p>No Image</p>
          )}
        </div>

        <div className="model-details">
          <h3>{model.name}</h3>

          <div className="social-links">
            {model.facebook && (
              <a href={model.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
            )}
            {model.twitter && (
              <a href={model.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            )}
            {model.googlePlus && (
              <a href={model.googlePlus} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-google-plus"></i>
              </a>
            )}
            {model.linkedin && (
              <a href={model.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            )}
          </div>

          <div className="model-parameters">
            <div className='model-disc'>
            <div><span className="label">Height:</span> {model.height}</div>
            <div><span className="label">Bust:</span> {model.bust}</div>
            <div><span className="label">Waist:</span> {model.waist}</div>
            <div><span className="label">Hips:</span> {model.hips}</div>
            <div><span className="label">Shoe:</span> {model.shoe}</div>
            <div><span className="label">Eyes:</span> {model.eyes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsDetail;
