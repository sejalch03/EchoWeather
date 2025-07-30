import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ThemeToggle from './components/ThemeToggle';
import FiveDayForecast from './components/FiveDayForecast';
import ErrorModal from './components/ErrorModal';
import AnimatedWeatherBG from './components/AnimatedWeatherBG';
import { OPENWEATHER_API_KEY } from './config';
import './App.css';

const getBackground = (weather) => {
  if (!weather) return 'default-bg';
  const main = weather.weather[0].main;
  switch (main) {
    case 'Clear': return 'clear-bg';
    case 'Clouds': return 'clouds-bg';
    case 'Rain': return 'rain-bg';
    case 'Snow': return 'snow-bg';
    case 'Thunderstorm': return 'thunderstorm-bg';
    case 'Mist': return 'default-bg';
    default: return 'default-bg';
  }
};

function App() {
  const [city, setCity] = useState('Ghaziabad');
  const [weather, setWeather] = useState(null);
  const [forecastList, setForecastList] = useState([]);
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState('');

  // Fetch current weather + forecast data based on city
  const fetchWeatherData = (cityName) => {
    setError('');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeather(data);
          setError('');
        } else {
          setError('City not found. Please check the name and try again.');
          setWeather(null);
          setForecastList([]);
        }
      })
      .catch(() => {
        setError('Error fetching weather data. Please try again later.');
        setWeather(null);
        setForecastList([]);
      });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === "200") {
          setForecastList(data.list);
        } else {
          setForecastList([]);
        }
      })
      .catch(() => {
        setForecastList([]);
      });
  };

  const handleSearch = (val) => {
    fetchWeatherData(val);
    setCity(val);
  };

  const handlePopupError = (msg) => setError(msg);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  const bgClass = `${getBackground(weather)} ${theme}`;

  const weatherMain = weather
    ? weather.weather[0].main.charAt(0).toUpperCase() + weather.weather[0].main.slice(1).toLowerCase()
    : null;

  useEffect(() => {
    fetchWeatherData(city);
    
  }, []);

  return (
    <div className={`app ${bgClass}`}>
      {/* Animated Video/Image Background */}
      <AnimatedWeatherBG weatherMain={weatherMain} />

      {/* Top brand name and theme toggle, flex container for alignment */}
      <div className="brand-theme-row">
        <div className="brand-name">EchoWeather</div>
        {!error && <ThemeToggle theme={theme} toggleTheme={toggleTheme} />}
      </div>

      {/* Primary content area */}
      <div className="main-content">
        <SearchBar onSearch={handleSearch} onError={handlePopupError} />
        <div className="popup-context">
          <ErrorModal message={error} onClose={() => setError('')} />
          {!error && weather && <WeatherCard weather={weather} />}
          {!error && forecastList.length > 0 && (
            <FiveDayForecast forecastList={forecastList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;