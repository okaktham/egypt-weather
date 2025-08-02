import axios from 'axios';

const API_KEY = 'd943891a09df82315744e51688c3da93';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getCurrentWeather = async (cityName) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        q: `${cityName},EG`,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
    } else if (error.response?.status === 404) {
      throw new Error('City not found. Please check the city name.');
    } else if (error.response?.status === 429) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch weather data. Please try again.');
  }
};

// Get 5-day forecast for a city
export const getWeatherForecast = async (cityName) => {
  try {
    const response = await weatherAPI.get('/forecast', {
      params: {
        q: `${cityName},EG`,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};

// Get weather by coordinates
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw error;
  }
};
