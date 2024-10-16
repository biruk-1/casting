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

        // Filter by height
        if (filters.height) {
            const [minHeight, maxHeight] = filters.height.split('-').map(Number);
            filtered = filtered.filter(model => model.height >= minHeight && model.height <= maxHeight);
        }

        // Filter by eye color
        if (filters.eyes) {
            filtered = filtered.filter(model => model.eyes === filters.eyes);
        }

        // Filter by gender
        if (filters.sex) {
            filtered = filtered.filter(model => model.sex === filters.sex);
        }

        // Filter by waist size
        if (filters.waist) {
            filtered = filtered.filter(model => model.waist === filters.waist);
        }

        // Filter by bust size
        if (filters.bust) {
            filtered = filtered.filter(model => model.bust === filters.bust);
        }

        // Filter by shoe size
        if (filters.shoe) {
            filtered = filtered.filter(model => model.shoe === filters.shoe);
        }

        // Filter by experience level
        if (filters.experience) {
            filtered = filtered.filter(model => model.experience === filters.experience);
        }

        // Filter by age range
        if (filters.age) {
            const [minAge, maxAge] = filters.age.split('-').map(Number);
            filtered = filtered.filter(model => model.age >= minAge && model.age <= maxAge);
        }

        // Filter by role (specific to Movies)
        if (filters.role) {
            filtered = filtered.filter(model => model.role === filters.role);
        }

        // Filter by language (specific to Songs)
        if (filters.language) {
            filtered = filtered.filter(model => model.language === filters.language);
        }

        // Filter by location (specific to Commercials)
        if (filters.location) {
            filtered = filtered.filter(model => model.location === filters.location);
        }

        setFilteredModels(filtered);
    }, [models, filters]);

    return (
        <section style={{ margin: '100px 20px 10px 20px' }} className="filtered-models">
            {filteredModels.length > 0 ? (
                <MyCarousel images={filteredModels.map(model => ({
                    id: model.id,  // Pass the id
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
