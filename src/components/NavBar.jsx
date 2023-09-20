import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
export const NavBar = () => (
  <header className="header">
    <Navbar>
      <Container>
        <Navbar.Brand as={Link}  to="/">Ankara</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/category/perros">Perros</Nav.Link>
          <Nav.Link as={Link} to="/category/gatos">Gatos</Nav.Link>
          <Nav.Link as={Link} to="/category/otros">Otros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </header> 
);
