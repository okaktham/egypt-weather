import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 rounded-2xl shadow-xl fade-in">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            About Egypt Weather
          </h1>

          <div className="text-white text-opacity-90 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                🌤️ Project Overview
              </h2>
              <p className="leading-relaxed">
                Egypt Weather is a modern React application that provides real-time weather 
                information for major Egyptian cities. Built as a graduation project for my iti 
                trainning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                🛠️ Technologies Used
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• React.js with Hooks</li>
                    <li>• React Router for navigation</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Custom CSS animations</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">API & Data</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• OpenWeatherMap API</li>
                    <li>• Axios for HTTP requests</li>
                    <li>• Error handling & loading states</li>
                    <li>• Real-time weather data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                🇪🇬 Featured Cities
              </h2>
              <p className="leading-relaxed mb-3">
                Get weather updates for 20+ major Egyptian cities including:
              </p>
            <div className="flex justify-center">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-fit">
                {
                    [ 
                    "Cairo",
                    "Alexandria",
                    "Luxor",
                    "Aswan",
                    "Hurghada",
                    "Sharm El Sheikh",
                    "Giza",
                    "Port Said"
                    ]
                    .map((city) => (
                    <li key={city} className="bg-white/10 px-4 py-2 rounded text-center backdrop-blur-sm shadow-sm"> {city} </li>
                ))}
                </ul>
            </div>

            </section>
            <section className="text-center pt-6 border-t border-white border-opacity-20">
              <p className="text-white text-opacity-70">
                made for my iti graduation project
              </p>
              <p className="text-sm text-white text-opacity-50 mt-2">
                Powered by WeatherStack API
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;