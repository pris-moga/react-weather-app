import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row first-row">
        <div className="col">
          <h1>Mexico City</h1>
          <h2>January 10, 1:50 pm</h2>
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
          <div className="wind"> Wind: 2 km/h</div>
          <div>Feels like 17°</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="actual-temp">21</div>
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
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
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
          <span>14°</span>
          <span>
            <i class="fas fa-arrow-up temp-icon ms-2 me-1"></i>
          </span>
          <span className="max-temp">20°</span>
        </div>
        <div className="col weather-description">cloudy</div>
      </div>
    </div>
  );
}
