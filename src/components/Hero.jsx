import React from "react";
import hero from "../assets/hero.png";
import "../App.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        alt="hand wearing gloves and holding a cleaning product"
        className="hero-img"
        src={hero}
      />
      <div className="hero-text-box">
        <h3>Mighty Cleaners</h3>
        <br />
        <p>THE BEST HOUSE CLEANING IN JORDAN</p> <br />
        <a href="/services" className="hero-cta">
          Check Our Services
        </a>
      </div>
    </div>
  );
}
