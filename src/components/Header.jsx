import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
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
            <NavLink to={"/About"} className="nav-link">
              <Nav.Link href="/">About Us</Nav.Link>
            </NavLink>
            <NavLink to={"/Services"} className="nav-link">
              <Nav.Link href="./Services">Our Services</Nav.Link>
            </NavLink>
            <NavLink to={"/Contact"} className="nav-link">
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
            </NavLink>
            <NavLink className="nav-link">
              <Nav.Link eventKey={2} href="./Register" className="nav-cta">
                Register
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
