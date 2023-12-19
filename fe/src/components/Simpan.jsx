import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';


const Simpan = () => {
  // kode modal simpan perubahan start
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false)
  const handleCloseConfirmation = () => setShowConfirmationModal(false);

  const handleShowConfirmation = () => {
    if(!token){
      setShowLoginModal(true)
    } else
    setShowConfirmationModal(true)
  };


  const handleCloseCompletion = () => {
    setShowCompletionModal(false);
  };
  const handleSaveChanges = () => {
    addSaved();
    handleCloseConfirmation();
    setShowCompletionModal(true);
  };

  const handleLogin = () => {
    setShowLoginModal(false)
  }

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  }
  // kode modal simpan perubahan end

  const { uuid } = useParams();
  console.log(uuid)
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      // console.log(decoded)
      // setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if(error.response) {
        // navigate("/login")
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(decoded)
      setUserId(decoded.userId);
      // setUsername(decoded.username);
      // setEmail(decoded.phone_number);
      // setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  const getUsers = async() => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(response.data.data);
  }

  const addSaved = async () => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append('userId', userId);
    // formData.append('contentId', uuid);

    try {
        await axios.post('http://localhost:5000/saved', {
          userId: userId,
          contentId: uuid
        });
        // navigate("/artikel");
    } catch (error) {
        console.log(error);
    }
  };

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

      <Modal
        show={showLoginModal}
        onHide={handleCloseLoginModal}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-utama d-flex justify-content-center align-items-center">
            <div className="modal-confirm ">
              <img className="pb-5" src="/img/imgprofil/modelWarning.jpeg" alt="" />
              <div className="modal-ask ">
                <p className="text-center">Harap Login dahulu</p>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button className="modal-simpan " onClick={handleLogin}>
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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
