import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CityDetails = () => {
  const { city } = useParams();
  const location = useLocation();
  const { title, description, latitude, longitude, price, type } = location.state || {};
  
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather data
    const fetchWeather = async () => {
      const apiKey = "923a2df7e9e21f7b8c411464400b37ca"; // Your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchWeather();
    }

    AOS.init({
      offset: 120,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, [latitude, longitude]);

  return (
    <div className="p-5 flex flex-col items-center space-y-8">
      <h1 className="text-5xl font-bold text-center mb-8 mt-24" data-aos="fade-up">
        {title || city}
      </h1>

      {/* Map Section */}
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden" data-aos="fade-right">
        {latitude && longitude ? (
          <MapContainer
            center={[latitude, longitude]}
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Circle
              center={[latitude, longitude]}
              radius={5000}
              color="rgba(30, 144, 255, 0.6)"
              fillColor="rgba(30, 144, 255, 0.4)"
              fillOpacity={0.7}
            />
          </MapContainer>
        ) : (
          <p>Location coordinates not available</p>
        )}
      </div>

      {/* Place Details and Weather Information in a horizontal layout */}
      <div className="flex w-full max-w-5xl space-x-4"> {/* Increased max width */}
        {/* Large Information Card */}
        <div
          className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 w-full space-y-4 transform transition-transform duration-500 hover:scale-105"
          data-aos="fade-up" // Added animation
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center dark:text-white">{title || city}</h2>
          <div className="flex flex-col gap-4">
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="font-bold text-xl">Description</h3>
              <p>{description}</p>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="font-bold text-xl">Type</h3>
              <p>{type}</p>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-bold text-xl">Latitude</h3>
                <p>{latitude}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Longitude</h3>
                <p>{longitude}</p>
              </div>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="font-bold text-xl">Price</h3>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div>
        </div>

        {/* Weather Information */}
        <div
          className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-5 w-full space-y-4 transform transition-transform duration-500 hover:scale-105"
          data-aos="fade-up" // Added animation
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center dark:text-white">Current Weather</h2>
          {loading ? (
            <p>Loading weather data...</p>
          ) : weather ? (
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="font-bold text-xl text-center">{weather.name}</h3>
              <div>
                <h3 className="font-bold text-xl">Temperature</h3>
                <p>{Math.round(weather.main.temp)}°C</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Condition</h3>
                <p>{weather.weather[0].description}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Humidity</h3>
                <p>{weather.main.humidity}%</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Wind Speed</h3>
                <p>{Math.round(weather.wind.speed)} m/s</p>
              </div>
            </div>
          ) : (
            <p>Error fetching weather data.</p>
          )}
        </div>
      </div>

      {/* Offers Section */}
      <div
        className="w-full max-w-lg bg-blue-100 p-5 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Special Offers</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-800">
          <li>10% off on bookings made within the next 48 hours!</li>
          <li>Free city tour for bookings over $500</li>
          <li>Complimentary breakfast for weekend stays</li>
        </ul>
      </div>

      {/* Book Package Button */}
      <a
        href="/booking"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Book Package
      </a>
    </div>
  );
};

export default CityDetails;


