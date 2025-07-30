import React from "react";

const direction = deg => {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
};

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { main, wind, visibility, weather: weatherArr, clouds, sys } = weather;
  const sunTime = time =>
    time
      ? new Date(time * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "-";

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div>
          <h2>
            {weather.name}, {sys.country}
          </h2>
          <div className="main-weather-desc">{weatherArr[0].description}</div>
        </div>
        <div className="weather-icon-wrapper">
          <img
            alt={weatherArr[0].description}
            src={`https://openweathermap.org/img/wn/${weatherArr[0].icon}@2x.png`}
            
          />
        </div>
      </div>
      <div className="main-temp">{Math.round(main.temp)}°C</div>
      <div className="feels-like">Feels like: {Math.round(main.feels_like)}°C</div>

      <div className="weather-features">
        <div>
          <b>💧 Humidity:</b> {main.humidity}%
        </div>
        <div>
          <b>💨 Wind:</b> {wind.speed} m/s {direction(wind.deg)}
        </div>
        <div>
          <b>👀 Visibility:</b> {(visibility / 1000).toFixed(1)} km
        </div>
        <div>
          <b>🌡 Pressure:</b> {main.pressure} hPa
        </div>
        <div>
          <b>☁️ Cloud Cover:</b> {clouds.all}%
        </div>
        <div>
          <b>🌅 Sunrise:</b> {sunTime(sys.sunrise)}
        </div>
        <div>
          <b>🌇 Sunset:</b> {sunTime(sys.sunset)}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;


