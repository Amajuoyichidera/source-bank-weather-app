import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

const WeatherForm = () => {
  const [location, setLocation] = useState('');
  const [, setFocused] = useState(false)
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
    <div className="input-container">
      <label className={location ? "active" : ""}>Enter city or zip code</label>
     <input
      type="text"
      value={location}
      onChange={handleChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
     />
    </div>
   <button type="submit">Get Weather</button>
  </form>

  );
};

export default WeatherForm;
