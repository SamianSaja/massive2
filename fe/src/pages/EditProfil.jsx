import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun";
import { Modal } from "react-bootstrap";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

const EditableField = ({ label, value, onEdit }) => {
  const [newValue, setNewValue] = useState("");

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleUbahClick = () => {
    setPopupVisible(true);
  };

  return (
    <div>
      <div className="form-profil d-flex justify-content-between">
        <h6>{label}</h6>
        <button onClick={handleUbahClick}>Ubah</button>
      </div>
      <input
        type="text"
        placeholder={value}
        value={newValue}
        onChange={handleInputChange}
      />
    </div>
  );
};



const EditProfil = () => {
  // kode ubah gambar
  const [selectedImage, setSelectedImage] = useState(
    "/img/imgprofil/imgprofil.png"
  );

  const handleTextClick = () => {
    document.getElementById("image-input").click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);

      setSelectedImage(imageUrl);
    }
  };
  // kode ubah form
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

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

  const handleSimpanClick = () => {};

  // backend
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  useEffect(() => {
    refreshToken();
    getUsers();
  },[]);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(decoded)
      // setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if(error.response) {
        navigate("/login")
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
      // console.log(decoded)
      setName(decoded.name);
      setUsername(decoded.username);
      setEmail(decoded.phone_number);
      setExpire(decoded.exp);
      setUserId(decoded.userId)
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

  return (
    <>
      <NavbarAkun />
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="profil col-lg-3 border-2 px-lg-4 py-lg-3 border rounded rounded-2">
            <h4 className="fw-bold">Informasi Akun</h4>
            <div className="link-profil">
              <li>
                <Link to="#" className="active">
                  Edit Profil
                </Link>
              </li>
              <li>
                <Link to="/password">kata Sandi</Link>
              </li>
              <li>
                <Link to={`/tersimpan/${userId}`}>Tersimpan</Link>
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
            <h5 className="fw-bold">Edit Profil</h5>
            <div>
              <div className="profile-image mt-lg-4 d-flex gap-3">
                <img id="profile-img" src="/img/imgprofil/images.png" alt="Profile Image" />
                <div className="my-auto select-img">
                  <h6 className="fw-bold">{name}</h6>
                  <span className="ubah bg-danger">
                    <input
                      type="file"
                      id="image-input"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <p className="text-ubah mt-1" onClick={handleTextClick}>
                      Ubah foto profil
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <form action="#" className="profil">
                  <div>
                    <EditableField
                      label="Email/No Telepon"
                      value={email}
                      onEdit={setEmail}
                    />
                    <EditableField label="Nama" value={name} onEdit={setName} />
                    <EditableField
                      label="Nama Pengguna"
                      value={username}
                      onEdit={setUsername}
                    />
                  </div>
                  <br />

                  {/* <button className="simpan" onClick={handleSimpanClick}>
                    Simpan Perubahan
                  </button> */}

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
                <p className="text-center">Simpan Perubahan?</p>
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
                <p className="text-center">Perubahan Berhasil Disimpan</p>
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

      <Footer />
    </>
  );
};
export default EditProfil;
