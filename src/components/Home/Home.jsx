import React, { useState, useEffect } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import WeatherCard from '../WeatherCard/WeatherCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getCurrentWeather } from '../../services/weatherAPI';
import { DEFAULT_CITY } from '../../services/constants';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather data
  const fetchWeather = async (city) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getCurrentWeather(city);
      setWeatherData(data);
    } catch (err) {
      let errorMessage = 'Failed to fetch weather data. Please try again.';
      
      // Handle specific OpenWeatherMap errors
      if (err.message.includes('API key')) {
        errorMessage = 'Invalid API key. Please add your OpenWeatherMap API key.';
      } else if (err.message.includes('City not found')) {
        errorMessage = 'City not found. Please check the city name.';
      } else if (err.message.includes('rate limit')) {
        errorMessage = 'API rate limit exceeded. Please try again later.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      console.error('Weather fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle city change
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  // Fetch weather on component mount and city change
  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-4xl font-bold text-white mb-2">
            Egypt Weather Forecast
          </h1>
          <p className="text-white text-opacity-80">
            Get real-time weather updates for Egyptian cities
          </p>
          <div className="mt-2 text-sm text-white text-opacity-60">
            Powered by OpenWeatherMap API
          </div>
        </div>

        <CitySelector
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          isLoading={isLoading}
        />

        {isLoading && <LoadingSpinner />}

        {error && (
          <div className="glass p-4 rounded-lg mb-6 fade-in">
            <div className="text-red-200 text-center">
              <span className="text-2xl mb-2 block">⚠️</span>
              <p className="font-medium mb-2">{error}</p>
              {error.includes('API key') && (
                <div className="text-xs text-red-100 mb-3 p-3 bg-red-500 bg-opacity-20 rounded">
                  <p>You need to get a free API key from openweathermap.org</p>
                  <p>Then replace the placeholder in src/services/weatherAPI.js</p>
                </div>
              )}
              <button
                onClick={() => fetchWeather(selectedCity)}
                className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {weatherData && !isLoading && (
          <WeatherCard weatherData={weatherData} />
        )}

        <div className="text-center mt-8 fade-in">
          <p className="text-white text-opacity-60 text-sm">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;