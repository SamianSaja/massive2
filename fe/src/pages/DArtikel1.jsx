import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DArtikel1 = () => {
  const [title, setTitle] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [articles, setArticles] = useState([]);

  // const [article, setSelectedArticle] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedArticle();
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      axios
        .get(`http://localhost:5000/articles`)
        .then((res) => setArticles(res.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedArticle = async () => {
    const response = await axios.get(`http://localhost:5000/articles/${uuid}`);
    console.log(response.data);
    // setuuid(response.data.uuid);
    setTitle(response.data.title);
    setFillContent(response.data.fill_content);
    setImg(response.data.img);
    setCreated(response.data.createdAt);
  };

  const hari = new Date(created_at).toLocaleString("id-ID", {
    weekday: "long",
  });
  const tanggal = new Date(created_at).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <>
      <NavbarComponent />
      {/* {article.map((head, i) => ( */}
      <HeaderDetail title={title} date={`${hari}, ${tanggal}`} />
      {/* ))}; */}

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail={`http://localhost:5000/${img}`}
            // paragraphs={[
            //   "Pentingnya makanan berkualitas dan gizi baik sebagai dasar kesehatan anak-anak disampaikan oleh UNICEF Indonesia. Orang tua memiliki peran penting dalam mengajarkan kebiasaan makan sehat sejak dini dengan menjadi contoh yang baik, rajin beraktivitas fisik, dan membuat sajian makanan sehat. Pola pikir sehat terkait makanan juga perlu dikembangkan untuk melindungi anak dari penyakit berbahaya.",
            //   "Orang tua dapat membantu anak memahami rasa lapar secara fisik, menghindari menggunakan makanan sebagai hadiah atau hukuman, dan tidak melarang makanan secara tegas. Mengurangi porsi dan frekuensi konsumsi makanan kurang sehat disarankan, sambil memberikan penjelasan mengenai kelebihan makanan sehat. Memberikan apresiasi kepada anak yang berperilaku baik dengan aktivitas selain makanan juga penting.",
            //   "Memaksa anak untuk menghabiskan makanan tidak disarankan, dan orang tua dapat menjadi contoh dengan menikmati makanan sehat, serta mengatur porsi makanan sesuai dengan kebutuhan anak. Sarapan sehat dan kegiatan fisik setiap hari juga menjadi prioritas untuk pertumbuhan dan perkembangan anak. Pembatasan penggunaan gadget juga diperlukan untuk mendorong aktivitas fisik.",
            //   "Dengan membangun kebiasaan makan sehat sejak dini, anak-anak dapat memiliki hubungan positif dengan makanan hingga dewasa, memberikan dampak positif pada kesehatan dan kebahagiaan seluruh keluarga.",
            // ]}

            paragraphs={fill_content}
          />

          <Col xs={4} className="col-lg-5 col-12">
            <h2>Artikel Terkait</h2>
            {articles.map((data, i) => (
              <CardArtikel
                // title="Artikel Terkait"
                imgCard={`http://localhost:5000/${data.img}`}
                titleCard={data.title}
              >
                <Link to={`/dartikel/${data.uuid}`}>
                  <CtaBtnSmall />
                </Link>
              </CardArtikel>
            ))}

            <Bagikan />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DArtikel1;
