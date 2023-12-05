import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DTips1 = () => {
  const [title, setTitle] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [tips, setTips] = useState([]);
  const { uuid } = useParams();


  useEffect(() => {
    getSelectedTips();
    getTips();
  }, []);

  const getTips = async () => {
    try {
      axios.get(`http://localhost:5000/tips`)
      .then(res => setTips(res.data.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  const getSelectedTips = async () => {
    const response = await axios.get(`http://localhost:5000/tips/${uuid}`);
    console.log(response.data)
    setTitle(response.data.title);
    setFillContent(response.data.fill_content);
    setImg(response.data.img);
    setCreated(response.data.createdAt)
  }

  const hari = new Date(created_at).toLocaleString('id-ID', { weekday: 'long' });
  const tanggal = new Date(created_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });


  return (
    <>
      <NavbarComponent />
      <HeaderDetail
        title={title}
        date={`${hari}, ${tanggal}`}
      />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail={`http://localhost:5000/${img}`}
            paragraphs={fill_content}
          />

          <Col xs={4} className="col-lg-5 col-12">
            <h2>Artikel Terkait</h2>
          {tips.map((data, i) => ( 
            <CardArtikel
              imgCard={`http://localhost:5000/${data.img}`}
              titleCard={data.title}
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            
            ))}; 
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DTips1;
