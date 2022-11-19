import React, { useEffect, useState } from "react";
import Services from "../data.json";

export default function Service() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(200);

  // to render the data once
  useEffect(() => {
    setServices(Services.Pservices);
  }, []);

  // to show only matching results
  useEffect(() => {
    setServices(Services.Pservices);
    if (search !== "") {
      const arr = Services.Pservices.filter((item) => {
        return (
          item.language.toLowerCase().includes(`${search.toLowerCase()}`) &&
          item.price <= range
        );
      });
      setServices(arr);
    }

    // show all services
    else {
      const arr = Services.Pservices.filter((item) => item.price < range);
      setServices(arr);
    }

    services.forEach((e) => {
      console.log(e.price < range);
    });

    // only apply this if the search changed
  }, [search, range]);

  //Cards system
  const card = services.map((service, i) => (
    <div className="card col-md-3 m-5 p-auto" key={i}>
      <div className="card-body">
        <h4 className="card-title">{service.name}</h4>
        <h5 className="card-title">{service.info}</h5>
        <p className="card-text">{service.price}</p>
      </div>
    </div>
  ));

  return (
    <>
      <form class="d-flex flex-column w-50 mx-auto" role="search">
        <input
          class="form-control mx-auto mb-5"
          style={{ marginTop: "20px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <label class="form-label" for="customRange2">
          Filter by price range
        </label>
        <div class="range d-flex">
          <h5 className="me-2"> 50 </h5>{" "}
          <input
            type="range"
            class="form-range"
            min="50"
            max="200"
            step="1"
            id="customRange2"
            onChange={(e) => setRange(e.target.value)}
          />{" "}
          <h5 className="ms-2">{range}</h5>
        </div>
      </form>
      <div className="row d-flex justify-content-center">{card}</div>
    </>
  );
}
