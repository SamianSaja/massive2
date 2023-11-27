import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginTelp = () => {
  return (
    <>
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
          <Col xs={12} md={6} className="FormContainer formtelp">
            <Form className="Form mt-lg-4 mt-4 ">
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
              </div>
              <div className="regis-form ">
                <label htmlFor="label">Nomor</label>
                <input
                  type="text"
                  placeholder="Masukkan nomor"
                  className="ps-2"
                />
              </div>
              <div className="user-form d-flex gap-lg-2 gap-1">
                <div className="regis-form  ">
                  <label htmlFor="">Nama</label>
                  <input type="password" placeholder="Nama" className="ps-2" />
                </div>
                <div className="regis-form  ">
                  <label htmlFor="">Nama Pengguna</label>
                  <input
                    type="password"
                    placeholder="Nama pengguna"
                    className="ps-2"
                  />
                </div>
              </div>
              <div className="regis-form  ">
                <label htmlFor="">Kata Sandi</label>
                <input
                  type="password"
                  placeholder="Masukkan Kata Sandi"
                  className="ps-2"
                />
              </div>
              <Link to="/kodeverif">
                <button className="form-button" type="submit">
                  Kirim Kode Verifikasi
                </button>
              </Link>
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
