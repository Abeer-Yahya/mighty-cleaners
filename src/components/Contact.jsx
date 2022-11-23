import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="social-contact">
        <h4>Mighty Cleaners</h4>
        <p>
          <a href="tel:+962778930138" className="nav-link">
            <ion-icon
              name="call"
              style={{ fontSize: "1.2rem", marginBottom: "-2.5px" }}
            ></ion-icon>{" "}
            +962778930138
          </a>
        </p>
        <p>
          <a href="mightycleanrsCS@mighty.com" className="nav-link">
            <ion-icon
              name="mail"
              style={{ fontSize: "1.2rem", marginBottom: "-5px" }}
            ></ion-icon>{" "}
            mightycleanrsCS@mighty.com
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/@31.9944057,35.8294681,17z"
            className="nav-link"
            target={"_blank"}
          >
            <ion-icon
              name="location"
              style={{ fontSize: "1.2rem", marginBottom: "-5px" }}
            ></ion-icon>{" "}
            mightycleanrsCS@mighty.com
          </a>
        </p>
      </div>
      <div className="form-contact">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              id={"fname"}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              id={"subject"}
              type={"text"}
              placeholder="Write your message"
              style={{ height: "80px" }}
            />
          </Form.Group>
          <Button
            variant="success"
            style={{ backgroundColor: "#00253e " }}
            type="button"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
