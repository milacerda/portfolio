import React, { Component } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar key={false} expand={false} className="mb-3" bg="transparent">
        <Container fluid>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About me</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
  }
}


export default Header;