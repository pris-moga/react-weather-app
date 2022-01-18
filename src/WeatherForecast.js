import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-container">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon-container">
            <WeatherIcon code="03d" class={"forecast-icon"} />
          </div>
          <div className="next-days">
            <span>-24°</span>
            <span className="ps-1 pe-1">/</span>
            <span className="forecast-max-temp">-12°</span>
          </div>
        </div>
        <div className="col forecast-container">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon-container">
            <WeatherIcon code="03d" class={"forecast-icon"} />
          </div>
          <div className="next-days">
            <span>-24°</span>
            <span className="ps-1 pe-1">/</span>
            <span className="forecast-max-temp">-12°</span>
          </div>
        </div>
        <div className="col forecast-container">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon-container">
            <WeatherIcon code="03d" class={"forecast-icon"} />
          </div>
          <div className="next-days">
            <span>-24°</span>
            <span className="ps-1 pe-1">/</span>
            <span className="forecast-max-temp">-12°</span>
          </div>
        </div>
        <div className="col forecast-container">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon-container">
            <WeatherIcon code="03d" class={"forecast-icon"} />
          </div>
          <div className="next-days">
            <span>-24°</span>
            <span className="ps-1 pe-1">/</span>
            <span className="forecast-max-temp">-12°</span>
          </div>
        </div>
        <div className="col forecast-container">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon-container">
            <WeatherIcon code="03d" class={"forecast-icon"} />
          </div>
          <div className="next-days">
            <span>-24°</span>
            <span className="ps-1 pe-1">/</span>
            <span className="forecast-max-temp">-12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
