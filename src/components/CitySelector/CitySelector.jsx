import React from 'react';
import { EGYPTIAN_CITIES } from '../../services/constants';
import './CitySelector.css';

const CitySelector = ({ selectedCity, onCityChange, isLoading }) => {
  return (
    <div className="city-selector fade-in">
      <label htmlFor="city-select" className="block text-white text-sm font-medium mb-2">
        Select Egyptian City:
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        disabled={isLoading}
        className="city-select"
      >
        {EGYPTIAN_CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;