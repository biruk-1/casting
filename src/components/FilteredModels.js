import React, { useEffect, useState } from 'react';
import MyCarousel from './MyCarousel';
import { useLocation } from 'react-router-dom';
import '../styles/MyCarousel.css';

const FilteredModels = () => {
    const { state } = useLocation(); // Get the state passed from HomePage
    const { models, filters } = state || { models: [], filters: {} }; // Destructure state
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        // Apply filters to models
        let filtered = models;

        if (filters.height) {
            const [minHeight, maxHeight] = filters.height.split('-').map(Number);
            filtered = filtered.filter(model => model.height >= minHeight && model.height <= maxHeight);
        }

        if (filters.eyes) {
            filtered = filtered.filter(model => model.eyes === filters.eyes);
        }

        if (filters.sex) {
            filtered = filtered.filter(model => model.sex === filters.sex);
        }

        setFilteredModels(filtered);
    }, [models, filters]);

    return (
        <section style={{ margin: '10px 20px 10px 20px' }} className="filtered-models">
            {filteredModels.length > 0 ? (
                <MyCarousel images={filteredModels.map(model => ({
                    src: model.src,
                    alt: model.alt,
                    name: model.name,
                    height: model.height,
                    eyes: model.eyes,
                    bust: model.bust,
                    waist: model.waist,
                    hips: model.hips,
                    shoe: model.shoe
                }))} />
            ) : (
                <p>No models match your filters.</p>
            )}
        </section>
    );
};

export default FilteredModels;
