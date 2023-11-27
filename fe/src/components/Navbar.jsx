import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary navbar bold">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img src="img/logo-kalt.png" alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className="me-4 mt-2">
                Beranda
              </NavLink>
              <NavLink to={"/artikel"} className="me-4 mt-2">
                Artikel
              </NavLink>
              <NavLink to={"/resep"} className="me-4 mt-2">
                Resep Sehat
              </NavLink>
              <NavLink to={"/tips"} className="me-4 mt-2">
                Tips & Trik
              </NavLink>
              <NavLink to={"/inspirasi"} className="me-3 mt-2">
                Inspirasi
              </NavLink>
              <NavDropdown title="Diet Khusus" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" id="dropdown-item">
                  Diabetik
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="dropdown-item">
                  Vegetarian
                </NavDropdown.Item>
                <NavDropdown.Item href="/vegan" id="dropdown-item">
                  Vegan
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex ms-auto">
              <NavLink to={"/login"} className="me-2 mt-2">
                Log in
              </NavLink>

              <Link to="/register">
                <Button variant="success" id="btn-sign-up">
                  Sign up
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
