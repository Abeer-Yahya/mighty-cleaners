import React from "react";
import "../App.css";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-heading">
        <h3>WHY HIRE US</h3>
        <p>
          Mighty Cleaners provides residential cleaning services throughout
          Jordan
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <img className="feature-img" alt="Cleaning Team" src={feature1} />
          <div className="feature-text">
            <h6>Experienced Employees</h6>
            <p>
              Our staff is highly experienced and can deal with all required
              cases.
            </p>
          </div>
        </div>
        <div className="feature">
          <img
            className="feature-img"
            alt=" Cleaning supplies"
            src={feature2}
          />
          <div className="feature-text">
            <h6>We Supply Everything</h6>
            <p>
              We bring all cleaning supplies with us to provide you with the
              best service.
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="feature-img" alt="100% Guarantee" src={feature3} />
          <div className="feature-text">
            <h6>100% Guarantee</h6>
            <p>
              Our services are fully guaranteed, and we are sure you will be
              satisfied.
            </p>
          </div>
        </div>
        <div className="feature">
          <img className="feature-img" alt="Flat Rate Price" src={feature4} />
          <div className="feature-text">
            <h6>Flat Rate Pricing</h6>
            <p>
              We offer our services at moderate prices to suit everyone's
              budget.
            </p>
          </div>
        </div>
      </div>
      <div className="features-cta">
        <a href="/services" className="feature-cta">
          Our Services
        </a>
      </div>
    </section>
  );
}
