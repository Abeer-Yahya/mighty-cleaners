import React, { useEffect, useState } from "react";
// import Services from "../data.json";
import axios from "axios";

export default function Service() {
  /*Servicas card, search, filter */
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(200);

  // to render the data once
  useEffect(() => {
    // setServices(Services.Pservices);
    axios
      .get("data.json")
      .then((res) => {
        setServices(res.data.Pservices);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  // to show only matching results
  useEffect(() => {
    if (search !== "") {
      console.log(services);
      const arr = services?.filter((item) => {
        return (
          item.info.toLowerCase().includes(`${search.toLowerCase()}`) &&
          item.price <= range
        );
      });
      setServices(arr);
    }

    // show all services
    else {
      const arr = services?.filter((item) => item.price < range);
      setServices(arr);
    }

    services.forEach((e) => {
      console.log(e.price < range);
    });

    // only apply this if the search changed
  }, [search, range]);

  //Services Cards system
  const card = services.map((service, i) => (
    <div className="card card-s col-md-3 m-4 p-auto" key={i}>
      <div className="card-body">
        <h4 className="card-title">{service.name}</h4>
        <br />
        <h6
          className="card-title"
          style={{ fontSize: "1.2rem", marginBottom: "1.4rem" }}
        >
          {service.info}
        </h6>
        <p className="card-text" style={{ textAlign: "right" }}>
          {service.price} JD
        </p>
        <a className="book-btn" href="/book">
          Book
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <form className="search-box" role="search">
        <input
          className="form-control"
          style={{ marginTop: "20px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <label className="form-label" htmlFor="customRange2">
          Filter by price
        </label>
        <div className="range">
          <h5 className="me-2"> 50 </h5>{" "}
          <input
            type="range"
            className="form-range"
            min="50"
            max="200"
            step="1"
            id="customRange2"
            onChange={(e) => setRange(e.target.value)}
          />{" "}
          <h5 className="ms-2">{range}</h5>
        </div>
      </form>
      <div className="services-card row">{card}</div>
    </>
  );
}
