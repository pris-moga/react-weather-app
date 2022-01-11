import React, { useState } from "react";
import axios from "axios";

import broken from "./images/broken-clouds.png";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "January 10, 1:50 pm",
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      temperature: Math.round(response.data.main.temp),
      icon: broken,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>
          </div>
          <div className="col align-self-center search-input">
            <form>
              <input
                type="search"
                placeholder=" Enter location"
                className="search me-2"
                autoComplete="off"
              />
              <input
                type="submit"
                value="Search"
                className="search-button me-1"
              />
              <button className="my-location">
                <i class="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col weather-info">
            <div className="wind"> Wind: {weatherData.wind} km/h</div>
            <div>Feels like {weatherData.feelsLike}°</div>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="actual-temp">{weatherData.temperature}</div>
            <a href="/" className="unit active">
              °C
            </a>
            <div className="unit-division ms-2 me-2">|</div>
            <a href="/" className="unit">
              °F
            </a>
          </div>
          <div className="col actual-weather-icon">
            <img
              src={weatherData.icon}
              alt="..."
              className="weather-icon-big"
            />
          </div>
        </div>
        <div className="row temps-and-description">
          <div className="col">
            <span>
              <i class="fas fa-arrow-down temp-icon me-1"></i>
            </span>
            <span>{weatherData.minTemp}°</span>
            <span>
              <i class="fas fa-arrow-up temp-icon ms-2 me-1"></i>
            </span>
            <span className="max-temp">{weatherData.maxTemp}°</span>
          </div>
          <div className="col text-capitalize weather-description">
            {weatherData.description}
          </div>
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.behance.net/P-MOGA"
            target="_blank"
            rel="noreferrer"
          >
            Priscilla Morales
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/pris-moga/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub.
          </a>{" "}
          Hosted on Netlify.
        </footer>
      </div>
    );
  } else {
    const apiKey = "8f7a17d91f18177f5114e6901f85dc41";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
