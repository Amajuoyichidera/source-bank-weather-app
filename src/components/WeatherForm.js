import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

const WeatherForm = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      dispatch(fetchWeather(location));
    }
    setLocation('');
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city or zip code"
        value={location}
        onChange={handleChange}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
