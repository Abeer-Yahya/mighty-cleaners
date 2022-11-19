import React from "react";
import "../App.css";
import registerCTA from "../assets/registerCTA.jpg";

export default function RegisterCTA() {
  return (
    <section className="RegisterCTA-section">
      <div className="RegisterCTA-box">
        <h3>REGISTER</h3> <br />
        <p>To Book one of our servecies you need to ceate -free- account!</p>
        <a className="landing-reg" href="/">
          Sign Up
        </a>
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
