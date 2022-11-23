import React, { useState } from "react";
import "../App.css";
// import GoogleMapReact from "google-map-react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Booking() {
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //         setLat(position.coords.latitude);
  //         setLng(position.coords.longitude);
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  // return (
  //   <>
  //     <button onClick={getLocation}>Get Location</button>
  //     <p>{status}</p>
  //     {lat && <p>Latitude: {lat}</p>}
  //     {lng && <p>Longitude: {lng}</p>}
  //   </>
  // );

  return (
    <div className="booking-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control id={"fname"} type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control id={"phone"} type={"tel"} placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control id={"address"} type={"text"} placeholder="Address" />
        </Form.Group>

        <Button
          variant="success"
          style={{ backgroundColor: "#00253e " }}
          type="button"
        >
          Book
        </Button>
      </Form>
    </div>
  );
}
