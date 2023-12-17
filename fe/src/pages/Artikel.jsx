import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row } from "react-bootstrap";
import CtaBtn from "../components/CtaBtn";
import { CardItem } from "../components/CardItem";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";

const Artikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      axios
        .get("http://localhost:5000/articles")
        .then((res) => setArticles(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavbarAkun />
      <Header titleSpan="Artikel " titleH="Informatif" />

      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">
          {articles.map((data, index) => (
            <CardItem
              key={index}
              imgCard={`http://localhost:5000/${data.img}`}
              title={data.title}
              text={data.desk}
            >
              <Link to={`/dartikel/${data.uuid}`}>
                <CtaBtn />
              </Link>
            </CardItem>
          ))}
        </Row>
      </section>
      <Footer />
    </>
  );
};
export default Artikel;