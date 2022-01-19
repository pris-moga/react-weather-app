import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col forecast-container">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8f7a17d91f18177f5114e6901f85dc41";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
