import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun";
import { Modal } from "react-bootstrap";
import Footer from "../components/Footer";

const PasswordPages = () => {
  // kode modal simpan perubahan start
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const handleCloseConfirmation = () => setShowConfirmationModal(false);
  const handleShowConfirmation = () => setShowConfirmationModal(true);

  const handleCloseCompletion = () => {
    setShowCompletionModal(false);
  };
  const handleSaveChanges = () => {
    handleCloseConfirmation();
    setShowCompletionModal(true);
  };
  // kode modal simpan perubahan end

  // kode modal lgout start
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
                <Link to="#" className="active">
                  kata Sandi
                </Link>
              </li>
              <li>
                <Link to="/tersimpan">Tersimpan</Link>
              </li>
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
            <h5 className="fw-bold">Kata Sandi</h5>
            <div>
              <div className="profile-image mt-lg-4 d-flex gap-3"></div>
              <div>
                <form action="#" className="profil">
                  <div className="sandi">
                    <label htmlFor="">Kata Sandi Baru</label>
                    <input type="text" />
                    <label htmlFor="">Konfirmasi Sandi Baru</label>
                    <input type="text" />
                  </div>
                  <br />
                  <Link
                    to="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <button className="simpan" onClick={handleShowConfirmation}>
                      Simpan Perubahan
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal simpan perubahan */}
      <Modal
        show={showConfirmationModal}
        onHide={handleCloseConfirmation}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-utama d-flex justify-content-center align-items-center">
            <div className="modal-confirm ">
              <img src="/img/imgprofil/modaltanya.png" alt="" />
              <div className="modal-ask ">
                <p className="text-center">
                  Apakah Anda yakin ingin menyimpan perubahan?
                </p>
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button className="modal-simpan " onClick={handleSaveChanges}>
                    Simpan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showCompletionModal} onHide={handleCloseCompletion} centered>
        <Modal.Body>
          <div className="modal-utama d-flex justify-content-center align-items-center">
            <div className="modal-confirm   ">
              <img src="/img/imgprofil/imgberhasilsimpan.png" alt="" />
              <div className="modal-ask ">
                <p className="text-center">Kata Sandi Anda Berhasil Di Ubah</p>
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button
                    className="modal-simpan "
                    onClick={handleCloseCompletion}
                  >
                    Selesai
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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
export default PasswordPages;
