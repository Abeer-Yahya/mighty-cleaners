import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import Logout from "./Logout";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const handelLogout = () => {
    removeCookie("currentUser");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="100"
            height="80"
            className="d-inline-block align-left"
          />{" "}
        </Navbar.Brand>
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

            <Nav.Link>
              {cookies.currentUser == null && (
                <NavLink to={"/login"} className=" nav-link">
                  Login
                </NavLink>
              )}
            </Nav.Link>
            <Nav.Link>
              {cookies.currentUser != null &&
                (cookies.currentUser.googleId != "" ? (
                  <Logout />
                ) : (
                  <button onClick={handelLogout}> logout</button>
                ))}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
