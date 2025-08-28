import React from "react";
import "./Forecast.css";

function Forecast({ forecast }) {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.time.map((day, index) => (
          <div key={day} className="forecast-card">
            <p>{day}</p>
            <p>🌡 {forecast.temperature_2m_min[index]}°C - {forecast.temperature_2m_max[index]}°C</p>
            <p>🌧 {forecast.precipitation_sum[index]} mm</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
