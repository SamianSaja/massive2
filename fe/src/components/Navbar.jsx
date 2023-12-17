import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
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

  // kode modal logout start
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] =
    useState(false);

  const handleCloseLogoutConfirmation = () =>
    setShowLogoutConfirmationModal(false);
  const handleShowLogoutConfirmation = async() => {
    try {
      const response = await axios.delete('http://localhost:5000/logout');
      
      setShowLogoutConfirmationModal(true)
    } catch (error) {
      console.log(error)
    }
  }
  
    

  const handleLogout = () => {
    handleCloseLogoutConfirmation();
  };
  // kode modal logout end

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
              <NavDropdown title="Artikel" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addartikelA" id="dropdown-item">
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tambahartikel" id="dropdown-item">
                  tambah
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Resep" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addresepA" id="dropdown-item">
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tambahresep" id="dropdown-item">
                  Tambah
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Inpirasi" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addinspirasiA" id="dropdown-item">
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tambahinspirasi" id="dropdown-item">
                  Tambah
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Tips" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addtipsA" id="dropdown-item">
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tambahtips" id="dropdown-item">
                  Tambah
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Diet Khusus" id="basic-nav-dropdown">
                <NavDropdown.Item href="/adddietA" id="dropdown-item">
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tambahdiet" id="dropdown-item">
                  Tambah
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
              <div className="d-flex ms-auto gap-2">
                <Link
                  to="#"
                  onClick={handleShowLogoutConfirmation}
                >
                  Logout
                </Link>
              </div>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={showLogoutConfirmationModal}
        onHide={handleCloseLogoutConfirmation}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-utama d-flex justify-content-center align-items-center">
            <div className="modal-confirm ">
              <img src="/img/imgprofil/modaltanya.png" alt="" />
              <div className="modal-ask ">
                <p className="text-center">Apakah Anda yakin ingin keluar?</p>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button className="modal-simpan " onClick={handleLogout}>
                    Ya
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarAkun;
