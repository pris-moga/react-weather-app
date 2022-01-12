import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="actual-temp me-2">{props.celsius}</div>
        <a href="/" className="unit active">
          °C
        </a>
        <div className="unit-division ms-2 me-2">|</div>
        <a href="/" className="unit" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <div className="actual-temp me-2">{Math.round(fahrenheit())}</div>
        <a href="/" className="unit" onClick={showCelsius}>
          °C
        </a>
        <div className="unit-division ms-2 me-2">|</div>
        <a href="/" className="unit active">
          °F
        </a>
      </div>
    );
  }
}
