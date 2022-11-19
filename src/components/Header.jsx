import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const handelLogout = () => {
    removeCookie("currentUser");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <NavLink to={"/"} className="brand nav-link">
          <Navbar.Brand>Mighty Cleaners</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">
              <NavLink to={"/about"} className="nav-link">
                About Us
              </NavLink>
            </Nav.Link>
            <Nav.Link href="./Services">
              <NavLink to={"/services"} className="nav-link">
                Our Services
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/Contact">
              <NavLink to={"/contact"} className="nav-link">
                Contact Us
              </NavLink>
            </Nav.Link>

            <Nav.Link className="nav-cta">
              {cookies.currentUser == null && (
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              )}
            </Nav.Link>
            <Nav.Link>
              {cookies.currentUser != null && (
                <NavLink
                  onClick={handelLogout}
                  to={"/login"}
                  className="nav-link"
                >
                  Logout
                </NavLink>
              )}
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="./Register"
              className="nav-link"
              style={{ visibility: "hidden" }}
            >
              <NavLink className="nav-cta" to={"/register"}>
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
