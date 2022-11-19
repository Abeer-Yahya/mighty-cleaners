import React from "react";
import "../App.css";
import serviceCTA from "../assets/serviceCTA.jpg";

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
        <a className="landing-serv" href="/">
          Request a quote
        </a>
        <p>OR</p>
        <a className="light" href="">
          Contact us
        </a>
      </div>
    </section>
  );
}
