import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>🌡 Temperature: {weather.temperature}°C</p>
      <p>💨 Wind Speed: {weather.windspeed} km/h</p>
      <p>🕒 Time: {weather.time}</p>
    </div>
  );
}

export default WeatherCard;
