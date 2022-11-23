import React from "react";
import "../App.css";
import serviceCTA from "../assets/serviceCTA.jpg";
import { NavLink } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <section className="ServiceCTA-section">
      <div className="ServicerCTA-img-box">
        <img
          alt="a cleaning guy with brom"
          className="RegisterCTA-img"
          src={serviceCTA}
        />
      </div>
      <div className="RegisterCTA-box light">
        <h3>NEED THE BEST HOUSE CLEANING</h3> <br />
        <p>
          Don’t delay.
          <br /> Book today.
        </p>
        <NavLink to={"/services"} className="landing-serv">
          Request a quote
        </NavLink>
        <br />
        <span>OR</span>
        <br />
        <NavLink to={"/contact"} className="light">
          Contact us
        </NavLink>
      </div>
    </section>
  );
}
