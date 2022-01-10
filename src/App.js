import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="back-rectangle-one">
        <div className="container">
          <h1>Weather App</h1>
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
}
