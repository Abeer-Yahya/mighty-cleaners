import React from "react";
import "../App.css";
import registerCTA from "../assets/registerCTA.jpg";
import { NavLink } from "react-router-dom";

export default function RegisterCTA() {
  return (
    <section className="RegisterCTA-section">
      <div className="RegisterCTA-box">
        <h3>REGISTER</h3> <br />
        <p>To Book one of our servecies you need to ceate -free- account!</p>
        <NavLink to={"/register"} className="landing-reg">
          Sign Up
        </NavLink>
      </div>
      <div className="RegisterCTA-img-box">
        <img
          alt="a cleaning lady with brom"
          className="RegisterCTA-img"
          src={registerCTA}
        />
      </div>
    </section>
  );
}
