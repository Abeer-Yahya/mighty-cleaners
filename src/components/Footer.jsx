import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-img">
        <a href="/">
          <img alt="Mighty Cleaners Logo" className="logo" src={logo} />
        </a>
      </div>

      <div className="footer-lists">
        <div className="footer-list">
          <ul>
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Our Servives
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <a href="/" className="footer-link">
                Register
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Login
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <h5>Follow us on</h5>
        <a href="/" className="footer-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="/" className="footer-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </footer>
  );
}
