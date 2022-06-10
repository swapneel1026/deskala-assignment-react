import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar
      // bg="primary"
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#43b0ef" }}
    >
      <Container>
        <Navbar.Brand href="#home">Deskala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/createRecords">
              Create Records
            </Nav.Link>
            <Nav.Link as={NavLink} to="/viewRecords">
              View Records
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
