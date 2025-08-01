import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass p-12 rounded-2xl shadow-xl fade-in">
          <div className="text-8xl mb-6">🌪️</div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          
          <h2 className="text-2xl font-semibold text-white mb-6">
            Oops! Page Not Found
          </h2>
          
          <p className="text-white text-opacity-80 mb-8 leading-relaxed">
            What you're looking for doesn't exist or you're probably just stupid.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              🏠 Return Home
            </Link>
            
            <div className="text-white text-opacity-60">
              <p>or</p>
            </div>
            
            <Link
              to="/about"
              className="inline-block bg-transparent border-2 border-white border-opacity-30 hover:border-opacity-50 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              📖 Learn More
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white border-opacity-20">
            <p className="text-white text-opacity-50 text-sm">
              Error 404 - The weather forecast for this page is: Not Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;