import React from "react";

function groupForecastByDay(forecastList) {
  const days = {};
  forecastList.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });
  return Object.keys(days).map(date => {
    const group = days[date];
    const temps = group.map(item => item.main.temp);
    
    const hottest = group.reduce((a, b) => (a.main.temp > b.main.temp ? a : b));
    return {
      date,
      min: Math.round(Math.min(...temps)),
      max: Math.round(Math.max(...temps)),
      icon: hottest.weather[0].icon,
      desc: hottest.weather[0].description,
    };
  });
}

const FiveDayForecast = ({ forecastList }) => {
  
  const daily = groupForecastByDay(forecastList).slice(0, 5);

  return (
    <div className="day-forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="day-forecast-scroll">
        {daily.map(day => (
          <div className="forecast-chip" key={day.date}>
            <div className="chip-time">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.desc}
              className="chip-icon"
              draggable="false"
            />
            <div className="chip-temp">
              <span style={{color: "#fe2f3a"}}>{day.max}&deg;C</span>
              {" / "}
              <span style={{color: "#1954be"}}>{day.min}&deg;C</span>
            </div>
            <div className="chip-desc" style={{ textTransform: "capitalize" }}>{day.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;









