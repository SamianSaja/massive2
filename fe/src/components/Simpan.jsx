import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


const Simpan = () => {
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

  return (
    <>
      <div className="ms-lg-5 mt-3">
        <Button variant="success btn-share bold" className="simpan" onClick={handleShowConfirmation}>
          {" "}
          <img
            src="/img/share/save.png"
            alt=""
            width={"15px"}
            className="icon-save me-2"
          />{" "}
          Simpan Resep
        </Button>
      </div>

      {/* modal buat simpan perubahan */}
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
                <p className="text-center">Simpan Resep?</p>
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
                <p className="text-center">Resep Berhasil Disimpan</p>
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
    </>
  );
};

export default Simpan;
