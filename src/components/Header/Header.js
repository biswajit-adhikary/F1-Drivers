import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-area">
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <Container>
          <Navbar.Brand href="#home">React Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="">Home</NavLink>
              <NavLink to="/teams">Teams</NavLink>
              <NavLink to="/results">Results</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
