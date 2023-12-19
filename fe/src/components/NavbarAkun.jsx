import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const NavbarAkun = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  useEffect(() => {
    refreshToken();
  },[]);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      // setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setResponse(response)
      // console.log(decoded)
      setName(decoded.name);
      // setExpire(decoded.exp);
      this.response = response;
    } catch (error) {
      if(error.response) {
        setResponse(null)
        // navigate("/login")
      }
    }
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary navbar bold">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img src="/img/logo-kalt.png" alt="logo" className="logo" />
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
                <NavDropdown.Item href="/diabetik" id="dropdown-item">
                  Diabetik
                </NavDropdown.Item>
                <NavDropdown.Item href="/vegetarian" id="dropdown-item">
                  Vegetarian
                </NavDropdown.Item>
                <NavDropdown.Item href="/vegan" id="dropdown-item">
                  Vegan
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {!response ? (
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
            ) : (
              <div className="d-flex ms-auto gap-2">
                <Link to="/editprofil" className="d-flex gap-2">
                  <img
                    src="/img/imgprofil/images.png"
                    alt="Aldi"
                    className="mt-2"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <p className="my-auto pt-2">
                    Hay, <span>{name}</span>
                  </p>
                </Link>
              </div>
            )}
            {/* <div className="d-flex ms-auto gap-2">
              <Link to="/editprofil" className="d-flex gap-2">
                <img
                  src="/img/imgprofil/imgprofil.png"
                  alt="Aldi"
                  className="mt-2"
                  style={{ height: "35px", width: "35px" }}
                />
                <p className="my-auto pt-2  ">
                  Hay, <span>{name}</span>
                </p>
              </Link>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarAkun;
