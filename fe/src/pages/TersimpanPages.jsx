import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardTersimpan from "../components/CardTersimpan";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";
import { Modal } from "react-bootstrap";

const TersimpanPages = () => {
  // kode modal logout start
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] =
    useState(false);

  const handleCloseLogoutConfirmation = () =>
    setShowLogoutConfirmationModal(false);
  const handleShowLogoutConfirmation = () =>
    setShowLogoutConfirmationModal(true);

  const handleLogout = () => {
    handleCloseLogoutConfirmation();
  };

  // kode modal logout end
  return (
    <>
      <NavbarAkun />
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="profil col-lg-3 border-2 px-lg-4 py-lg-3 border rounded rounded-2">
            <h4 className="fw-bold">Informasi Akun</h4>
            <div className="link-profil">
              <li>
                <Link to="/editprofil">Edit Profil</Link>
              </li>
              <li>
                <Link to="/password">Kata Sandi</Link>
              </li>
              <li>
                <Link to="#" className="active">
                  Tersimpan
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="text-danger">
                  Keluar
                </Link>
              </li> */}
              <Link
                to="#"
                style={{ textDecoration: "none", color: "inherit" }}
                className="text-danger"
                onClick={handleShowLogoutConfirmation}
              >
                <li>Keluar</li>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 ms-lg-4 border-2 px-lg-4 py-4 py-lg-3 border rounded rounded-2">
            <h5 className="fw-bold">Tersimpan</h5>
            <div className="row">
              <CardTersimpan />
            </div>
          </div>
        </div>
      </div>

      {/* Modal untuk Keluar */}
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
                  to="/"
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

      <Footer />
    </>
  );
};
export default TersimpanPages;
