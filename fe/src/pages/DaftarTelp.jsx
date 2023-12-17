import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginTelp = () => {
  const [name, setName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();


  const SignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone_number', phone_number);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('confPassword', confPassword);

    try {
        await axios.post('http://localhost:5000/users', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        navigate("/login");
    } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
    }
  }


  return (
    <>
      <div fluid className="Container" style={{ height: "100vh" }}>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="/img/imglogin/imglogin.png"
              alt="Gambar"
              style={{ height: "100vh" }}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6} className="FormContainer formtelp">
            <Form className="Form mt-lg-4 mt-4 " onSubmit={SignUp}>
              <Link to="/register">
                <div className="iconback mb-4">
                  <div className="iconback1">
                    <img src="/img/imglogin/iconback.png" alt="" />
                  </div>
                </div>
              </Link>
              <div>
                <h3 className="fw-bolder" style={{ fontSize: "22px" }}>
                  Daftar Dengan Nomor
                </h3>
                <p style={{color: "red", textAlign: "center", padding: "0", margin: "0"}}>{msg}</p>
              </div>
              <div className="regis-form ">
                <label htmlFor="label">Nomor</label>
                <input
                  type="text"
                  placeholder="Masukkan nomor"
                  className="ps-2"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="user-form d-flex gap-lg-2 gap-1">
                <div className="regis-form  ">
                  <label htmlFor="">Nama</label>
                  <input type="text" 
                  placeholder="Nama" 
                  className="ps-2" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="regis-form  ">
                  <label htmlFor="">Nama Pengguna</label>
                  <input
                    type="text"
                    placeholder="Nama pengguna"
                    className="ps-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="regis-form  ">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan Password"
                  className="ps-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="regis-form  ">
                <label htmlFor="">Konfirmasi Password</label>
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  className="ps-2"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              {/* <Link to=""> */}
                <button className="form-button" type="submit">
                  Daftar
                </button>
              {/* </Link> */}
              <Form.Text className="text-punya">
                <p className=" text-black d-flex justify-content-center ">
                  Sudah Punya Akun?
                  <Link to="/login" className="text-decoration-none ms-1">
                    <span className="daftar "> Masuk </span>
                  </Link>
                </p>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default LoginTelp;
