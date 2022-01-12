import React from "react";

import brokenClouds from "./images/broken-clouds.png";
import clearSky from "./images/clear-sky.png";
import clearSkyNight from "./images/clear-sky-night.png";
import fewClouds from "./images/few-clouds.png";
import fewCloudsNight from "./images/few-clouds-night.png";
import mist from "./images/mist.png";
import mistNight from "./images/mist-night.png";
import rain from "./images/rain.png";
import rainNight from "./images/rain-night.png";
import scatteredClouds from "./images/scattered-clouds.png";
import showerRain from "./images/shower-rain.png";
import snow from "./images/snow.png";
import thunderstorm from "./images/thunderstorm.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSky,
    "01n": clearSkyNight,
    "02d": fewClouds,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rain,
    "10n": rainNight,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mistNight,
  };

  return (
    <img
      src={codeMapping[props.code]}
      alt={props.alt}
      className="weather-icon-big"
    />
  );
}
