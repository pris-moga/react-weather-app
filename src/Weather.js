import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      coords: response.data.coord,
    });
  }

  function search() {
    const apiKey = "8f7a17d91f18177f5114e6901f85dc41";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityEntry(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <h2>
              <FormatDate date={weatherData.date} />
            </h2>
          </div>
          <div className="col align-self-center search-input">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder=" Enter location"
                className="search me-2"
                autoComplete="off"
                onChange={handleCityEntry}
              />
              <input
                type="submit"
                value="Search"
                className="search-button me-1"
              />
              <button className="my-location">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coords={weatherData.coords} />
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
    search();
    return "Loading...";
  }
}
