import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Footer() {
  return (
    // <footer className="footer">
    //   <div className="footer-img">
    //     <a href="/">
    //       <img alt="Mighty Cleaners Logo" className="logo" src={logo} />
    //     </a>
    //   </div>

    //   <div className="footer-lists">
    //     <div className="footer-list">
    //       <ul>
    //         <li>
    //           <a href="/" className="footer-link">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="footer-link">
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="footer-link">
    //             Our Servives
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-list">
    //       <ul>
    //         <li>
    //           <a href="/" className="footer-link">
    //             Register
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="footer-link">
    //             Login
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" className="footer-link">
    //             Contact Us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="social-links">
    //     <h5>Follow us on</h5>
    //     <a href="/" className="footer-link">
    //       <ion-icon name="logo-facebook"></ion-icon>
    //     </a>
    //     <a href="/" className="footer-link">
    //       <ion-icon name="logo-instagram"></ion-icon>
    //     </a>
    //   </div>
    // </footer>
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#00253e" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Mighty Cleaners
              </h6>
              <p>
                We provide you with a special experience,you can sign up for
                free to book one of our cleaning services. We are here to help!
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Home
                </a>
              </p>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Services
                </a>
              </p>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Register
                </a>
              </p>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Contact us
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Amman, 11934, JO
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>{" "}
                mightycleanersCS@mighty.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 962 77 893 0138{" "}
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h6>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <ion-icon name="logo-facebook"></ion-icon>{" "}
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <ion-icon name="logo-instagram"></ion-icon>{" "}
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <ion-icon name="logo-linkedin"></ion-icon>{" "}
              </a>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: Abeer Yahya
      </div>
    </footer>
  );
}
