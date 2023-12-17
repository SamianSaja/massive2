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

const DTips1 = () => {
  const [tips, setTips] = useState([]);
  const [selectedTips, setSelectedTips] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedTips();
    getTips();
  }, []);

  const getTips = async () => {
    try {
      axios
        .get(`http://localhost:5000/tips`)
        .then((res) => setTips(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedTips = async () => {
    try {
      axios
        .get(`http://localhost:5000/tips/${uuid}`)
        .then((res) => setSelectedTips(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavbarAkun />
      {selectedTips.map((tip, i) => {
          const hari = new Date(tip.createdAt).toLocaleString("id-ID", {
            weekday: "long",
          });
          const tanggal = new Date(tip.createdAt).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          });

          return (
            <div key={i}>
              <HeaderDetail title={tip.title} date={`${hari}, ${tanggal}`} />
              
              <Container fluid className="d-flex content-detail">
                <Row>
                  <DesKolom
                    imgDetail={`http://localhost:5000/${tip.img}`}
                    paragraphs={tip.fill_content}
                  />

                  <Col xs={4} className="col-lg-5 col-12">
                    <h2>Artikel Terkait</h2>
                  {tips.map((data, i) => ( 
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

export default DTips1;
