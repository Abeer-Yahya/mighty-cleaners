import React from "react";
import Card from "react-bootstrap/Card";

import "../App.css";

export default function Feedback() {
  return (
    <section className="feedback-section">
      <div className="features-heading">
        <h3>CUSTOMER TESTIMONIALS</h3>
        <p>What Our Clients Say</p>
      </div>
      <div className="feedback">
        <Card style={{ width: "18rem" }} className="feedback-card">
          <Card.Body>
            <Card.Title>Obada Ahmad</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Amman, JO{" "}
            </Card.Subtitle>
            <Card.Text>
              The guy was polite and worked fast. My mattress was cleaned in the
              specified time. Customer service was great. Thanks Mighty
              Cleaners, you're the best.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="feedback-card">
          <Card.Body>
            <Card.Title>Rana Waleed</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Madaba, JO{" "}
            </Card.Subtitle>
            <Card.Text>
              Very happy that you managed to save my curtains! The cigarette
              smell is gone and the fabric looks amazing! Thank you Mighty
              Cleaners, you are the best!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="feedback-card">
          <Card.Body>
            <Card.Title>Lama Al Majali</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Irbid, JO{" "}
            </Card.Subtitle>
            <Card.Text>
              Excellent service and cleaning results. I was particularly
              impressed with the job the crew did in the waiting room – the
              carpet really looks like new again!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
