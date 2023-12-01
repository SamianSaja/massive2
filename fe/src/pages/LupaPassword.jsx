import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LupaPassword = () => {
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
                <h3 className="fw-bolder">Ubah Kata Sandi</h3>
              </div>
              <div className="regis-form ">
                <label htmlFor="label">Kata Sandi Baru</label>
                <input
                  type="text"
                  placeholder="kata sandi baru"
                  className={`ps-2 `}
                />
              </div>
              <div className="regis-form  ">
                <label htmlFor="">Konfirmasi kata sandi baru</label>
                <input
                  type="password"
                  placeholder="Konfirmasi sandi baru"
                  className={`ps-2 `}
                />
              </div>

              <button className="form-button" type="submit">
                Simpan Perubahan
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default LupaPassword;
