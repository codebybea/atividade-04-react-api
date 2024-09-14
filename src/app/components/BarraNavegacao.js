"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function BarraNavegacao() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">SeriesTV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Menu Dropdown */}
            <NavDropdown title="Descobrir" id="basic-nav-dropdown">
              <NavDropdown.Item href="/series/popular">
                Séries Populares
              </NavDropdown.Item>
              <NavDropdown.Item href="/series/thebest">
                Melhores Avaliados
              </NavDropdown.Item>
              <NavDropdown.Item href="/series/tvhoje">
                Séries Na TV Hoje
              </NavDropdown.Item>
              <NavDropdown.Item href="/series/exibidas">
              Séries Exibidas Hoje
              </NavDropdown.Item>
            </NavDropdown>

            {/* LINKS */}
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
