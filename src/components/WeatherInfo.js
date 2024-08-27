import React from 'react';
import { useSelector } from 'react-redux';

const WeatherInfo = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    weather && (
      <div className="weather-info">
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Description: {weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
    )
  );
};

export default WeatherInfo;
