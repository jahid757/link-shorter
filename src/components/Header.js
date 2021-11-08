import React from "react";
import { Container, Nav,Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mb-5">
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">Link Shorter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link  href="#memes">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
