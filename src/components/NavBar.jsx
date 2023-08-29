import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <header className="header">
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Ankara</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/category/perros">Perros</Nav.Link>
          <Nav.Link href="/category/gatos">Gatos</Nav.Link>
          <Nav.Link href="/category/otros">Otros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </header> 
);
