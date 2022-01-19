import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon-container">
        <WeatherIcon
          code={props.data.weather[0].icon}
          class={"forecast-icon"}
        />
      </div>
      <div className="next-days">
        <span>{minTemp()}</span>
        <span className="ps-1 pe-1">/</span>
        <span className="forecast-max-temp">{maxTemp()}</span>
      </div>
    </div>
  );
}
