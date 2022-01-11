import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="back-rectangle-one"></div>
      <div className="back-rectangle-two"></div>
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>
    </div>
  );
}
