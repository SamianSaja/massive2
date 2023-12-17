import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordValue, setPasswordValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handlePasswordChange = (e) => {
  //   setPasswordValue(e.target.value);
  // };


  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('phone_number', phone_number);
    // formData.append('password', password);
    try {
        await axios.post('http://localhost:5000/login', {
          phone_number: phone_number,
          password: password
        });
        navigate("/");
    } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <div fluid className="Container">
      <Row>
        <Col xs={12} md={6}>
          <img
            src="/img/imglogin/imglogin.png"
            alt="Gambar"
            style={{ height: "100vh" }}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6} className="FormContainer">
          <Form className="Form" onSubmit={SignIn}>
            <Link to="/">
              <div className="iconback mb-4">
                <div className="iconback1">
                  <img src="/img/imglogin/iconback.png" alt="" />
                </div>
              </div>
            </Link>
            <div>
              <h3 className="fw-bolder">Masuk</h3>
              <p style={{color: "red", textAlign: "center"}}>{msg}</p>
            </div>
            <div className="login-form">
              <div className="icon-form">
                <img src="/img/imglogin/icontelp.png" alt="" />
              </div>
              <input 
              type="text" 
              placeholder="Masukkan Email atau No Hp" 
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="login-form ">
              <div className="icon-form ">
                <img src="/img/imglogin/iconpass.png" alt="" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src="/img/imglogin/iconhide.png"
                alt="hay"
                className="icon-hide "
                onClick={togglePasswordVisibility}
              />
            </div>

            <Form.Text className="text-muted float-end ">
              <Link to="/lupapassword">Lupa Kata Sandi?</Link>
            </Form.Text>
            {/* <Link to="/homeakun"> */}
              <button className="form-button" type="submit">
                Masuk
              </button>
            {/* </Link> */}
            <Form.Text className="text-punya">
              <p className=" text-black d-flex justify-content-center ">
                Belum Punya Akun?
                <Link to="/register" className="text-decoration-none ms-1">
                  <span className="daftar "> Daftar </span>
                </Link>
              </p>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPages;
