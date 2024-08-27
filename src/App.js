import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherInfo />
    </div>
  );
};

export default App;

