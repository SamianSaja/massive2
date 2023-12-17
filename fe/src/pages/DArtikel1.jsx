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
import { Link } from "react-router-dom";

const DArtikel1 = () => {
  const [title, setTitle] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState([]);


  const { uuid } = useParams();

  useEffect(() => {
    getSelectedArticle();
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      axios
        .get(`http://localhost:5000/articles`)
        .then((res) => setArticles(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedArticle = async () => {
    try {
      axios
        .get(`http://localhost:5000/articles/${uuid}`)
        .then((res) => setSelectedArticle(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <NavbarAkun />
      {selectedArticle.map((article, i) => {
          const hari = new Date(article.createdAt).toLocaleString("id-ID", {
            weekday: "long",
          });
          const tanggal = new Date(article.createdAt).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          });

          return (
            <div key={i}>
              <HeaderDetail title={article.title} date={`${hari}, ${tanggal}`} />
              
              <Container fluid className="d-flex content-detail">
                <Row>
                  <DesKolom
                    imgDetail={`http://localhost:5000/${article.img}`}
                    paragraphs={article.fill_content}
                  />

                  <Col xs={4} className="col-lg-5 col-12">
                    <h2>Artikel Terkait</h2>
                  {articles.map((data, i) => ( 
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

export default DArtikel1;
