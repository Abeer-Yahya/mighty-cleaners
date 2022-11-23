import React from "react";
import hero from "../assets/hero.png";
import "../App.css";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to={"/services"}
          className="hero-cta"
          style={{ textDecoration: "none" }}
        >
          Check Our Services
        </NavLink>
      </div>
    </div>
  );
}
