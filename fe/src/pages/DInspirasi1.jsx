import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarAkun from "../components/NavbarAkun"
import Footer from "../components/Footer";

const DInspirasi1 = () => {
  const [title, setTitle] = useState("");
  const [desk, setDesk] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [ins, setIns] = useState([]);
  const [selectedIns, setSelectedIns] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedIns();
    getIns();
  }, []);

  const getIns = async () => {
    try {
      axios
        .get(`http://localhost:5000/ins`)
        .then((res) => setIns(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedIns = async () => {
    try {
      axios
        .get(`http://localhost:5000/ins/${uuid}`)
        .then((res) => setSelectedIns(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavbarAkun />
      {selectedIns.map((inspirasi, i) => {
          const hari = new Date(inspirasi.createdAt).toLocaleString("id-ID", {
            weekday: "long",
          });
          const tanggal = new Date(inspirasi.createdAt).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          });

          return (
            <div key={i}>
              <HeaderDetail title={inspirasi.title} date={`${hari}, ${tanggal}`} />
              
              <Container fluid className="d-flex content-detail">
                <Row>
                  <DesKolom
                    imgDetail={`http://localhost:5000/${inspirasi.img}`}
                    paragraphs={inspirasi.fill_content}
                  />

                  <Col xs={4} className="col-lg-5 col-12">
                    <h2>Artikel Terkait</h2>
                  {ins.map((data, i) => ( 
                    <CardArtikel
                      // title="Artikel Terkait"
                      imgCard={`http://localhost:5000/${data.img}`}
                      titleCard={data.title}
                    >
                      <CtaBtnSmall/>
                      
                      <Bagikan />
                    </CardArtikel>
                    
                    ))}
                  </Col>
                </Row>
              </Container>
            </div>
          )
        })}
      <Footer />
    </>
  );
};

export default DInspirasi1;
