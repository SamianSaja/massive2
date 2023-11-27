import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPages = () => {
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
          <Form className="Form">
            <Link to="/login">
              <div className="iconback mb-4">
                <div className="iconback1">
                  <img src="/img/imglogin/iconback.png" alt="" />
                </div>
              </div>
            </Link>
            <div>
              <h3 className="fw-bolder">Daftar Akun</h3>
            </div>
            <div
              variant="primary"
              type="submit "
              className="form-regis d-flex justify-content-center align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center gap-2">
                <img src="/img/imglogin/icongoogle1.png" alt="say" />
                <p className="pt-lg-3">Masuk dengan Google</p>
              </div>
            </div>
            <div className="regisor d-flex ">
              <span></span>
              <p>Or</p>
              <span></span>
            </div>
            <div
              variant="primary"
              type="submit"
              className="form-regis d-flex justify-content-center align-items-center"
            >
              <Link to="/logintelp" className="text-dark text-decoration-none">
                <div className="d-flex justify-content-center align-items-center  gap-2">
                  <img src="/img/imglogin/icontelp2.png" alt="" />
                  <p className="pt-lg-3">Masuk Dengan Nomor</p>
                </div>
              </Link>
            </div>

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
  );
};

export default RegisterPages;
