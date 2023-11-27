import axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Navbar, Row } from "react-bootstrap";
import CtaBtn from "../components/CtaBtn";
import { CardItem } from "../components/CardItem";
import { Link } from "react-router-dom";

import { dataArtikel } from "../data/dataArtikel";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Artikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle()
  }, []);

  const getArticle = async () => {
    try {
      axios.get('http://localhost:5000/articles')
      .then(res => setArticles(res.data.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <>
      <NavbarComponent />
      <Header titleSpan="Artikel " titleH="Informatif" />

      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">
          {articles.map((data, index) => (
            <CardItem
              key={index}
              imgCard={data.img}
              title={data.title}
              text={data.desk}
            >
              <Link to={`/DArtikel1/${data.uuid}`}>
                <CtaBtn />
              </Link>
            </CardItem>
          ))}
        </Row>
      </section>
      <Footer/>
    </>
  );
};
export default Artikel;

{
  /* <CardItem
            imgCard="img/artikel/1.png"
            title="Pola makan sehat"
            text="Upaya membiasakan anak-anak dengan makanan sehat ini harus dimulai sejak dini dengan memberikan asupan nutrisi yang seimbang."
          >
            <CtaBtn />{" "}
          </CardItem>

          <CardItem
            imgCard="img/artikel/6.png"
            title="Diet sehat"
            text="Mengutip artikel Unicef, pola makan sehat merupakan asas bagi kesehatan, kesejahteraan, tumbuh kembang yang optimal."
          >
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/artikel/2.png"
            title="UNICEF dukung kampanye makanan sehat"
            text="Para pemuda dari delapan negara berpartisipasi dalam sebuah kampanye yang didukung  UNICEF di Bangkok pada pekan ini"
          >
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/artikel/3.png"
            title="Pentingnya makanan sehat dan bergizi"
            text="Pola makan yang tepat  membantu mengurangi risiko penyakit kronis seperti diabetes, kardiovaskular, dan jenis kanker lainnya."
          >
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/artikel/4.png"
            title="Pola Makan Buruk Sebabkan 1 dari 5 Kematian"
            text="Peningkatan konsumsi makanan olahan, daging, gula, dan garam menjadi faktor utama dalam pola makan buruk."
          >
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/artikel/5.png"
            title="Pentingnya Membawa Bekal ke Sekolah"
            text="Program pemerintah untuk mengatasi permasalahan gizi dan kesehatan anak dengan menggalakan kegiatan membawa bekal ke sekolah."
          >
            <CtaBtn />
          </CardItem> */
}
