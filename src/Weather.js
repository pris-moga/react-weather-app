import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Mexico City</h1>
          <h2>January 10, 1:50 pm</h2>
        </div>
        <div className="col">
          <form>
            <input
              type="search"
              placeholder=" Enter location"
              autoComplete="off"
            />
            <input type="submit" value="Search" />
            <button>
              <i class="fas fa-map-marker-alt"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Feels like 17°</div>
      </div>
      <div className="row">
        <div className="col">
          <span>21</span>
          <span>°C</span>
          <span>|</span>
          <span>°F</span>
        </div>
        <div className="col">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>
            <i class="fas fa-arrow-down"></i>
          </span>
          <span>14°</span>
          <span>
            <i class="fas fa-arrow-up"></i>
          </span>
          <span>20°</span>
        </div>
        <div className="col">Cloudy</div>
      </div>
    </div>
  );
}
