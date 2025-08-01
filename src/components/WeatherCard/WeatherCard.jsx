import React from 'react';
import { WEATHER_ICONS } from '../../services/constants';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather: [{ main: weatherMain, description, icon }],
    wind: { speed },
    sys: { country },
    visibility,
  } = weatherData;

  const weatherIcon = WEATHER_ICONS[icon] || '🌤️';

  return (
    <div className="weather-card glass fade-in">
      <div className="weather-header">
        <h2 className="city-name">
          {name}, {country}
        </h2>
        <div className="weather-icon">
          {weatherIcon}
        </div>
      </div>

      <div className="temperature-section">
        <div className="main-temp">
          {Math.round(temp)}°C
        </div>
        <div className="weather-description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </div>
        <div className="feels-like">
          Feels like {Math.round(feels_like)}°C
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <div>
            <div className="detail-label">Wind</div>
            <div className="detail-value">{Math.round(speed)} m/s</div>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <div>
            <div className="detail-label">Humidity</div>
            <div className="detail-value">{humidity}%</div>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <div>
            <div className="detail-label">Pressure</div>
            <div className="detail-value">{pressure} hPa</div>
          </div>
        </div>
      </div>

      {visibility && (
        <div className="additional-details">
          <div className="detail-row">
            <span className="detail-icon">👁️</span>
            <span className="detail-text">Visibility: {Math.round(visibility / 1000)} km</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;