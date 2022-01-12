import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col weather-info">
          <div className="wind"> Wind: {props.data.wind} km/h</div>
          <div>Feels like {props.data.feelsLike}°</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <div className="actual-temp">{props.data.temperature}</div>
          <a href="/" className="unit active">
            °C
          </a>
          <div className="unit-division ms-2 me-2">|</div>
          <a href="/" className="unit">
            °F
          </a>
        </div>
        <div className="col actual-weather-icon">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
      </div>
      <div className="row temps-and-description">
        <div className="col">
          <span>
            <i className="fas fa-arrow-down temp-icon me-1"></i>
          </span>
          <span>{props.data.minTemp}°</span>
          <span>
            <i className="fas fa-arrow-up temp-icon ms-2 me-1"></i>
          </span>
          <span className="max-temp">{props.data.maxTemp}°</span>
        </div>
        <div className="col text-capitalize weather-description">
          {props.data.description}
        </div>
      </div>
    </div>
  );
}
