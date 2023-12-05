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

const DInspirasi1 = () => {
  const [title, setTitle] = useState("");
  const [desk, setDesk] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [ins, setIns] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedIns();
    getIns();
  }, []);

  const getIns = async () => {
    try {
      axios
        .get(`http://localhost:5000/ins`)
        .then((res) => setIns(res.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedIns = async () => {
    const response = await axios.get(`http://localhost:5000/ins/${uuid}`);
    console.log(response.data);
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
      <HeaderDetail title={title} date={`${hari}, ${tanggal}`} />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail={`http://localhost:5000/${img}`}
            // paragraphs={[
            //   'Dalam artikel yang diterbitkan di Fimela, kita diperkenalkan dengan perjalanan menginspirasi Katie Milner, seorang guru sekolah dasar berusia 22 tahun yang berhasil mengatasi tantangan signifikan dalam hidupnya. Awalnya, Katie dipanggil "Miss Piggy" oleh sebagian orang karena berat badannya yang mencapai 100 kg dengan tinggi 152 cm. Cemoohan dan tekanan terhadap penampilannya membawa Katie pada titik di mana ia merasa perlu melakukan perubahan besar dalam hidupnya.',
            //   "Dengan tekad yang kuat, Katie memutuskan untuk mengubah gaya hidup dan pola makan buruknya. Selama 3 tahun, ia menjalani program diet yang disiplin, meninggalkan kebiasaan makan 5 kantong snack per hari, cokelat, dan berbagai makanan siap saji lainnya. Hasilnya, Katie berhasil menurunkan berat badannya sebanyak 40 kg, mencapai berat badan 64 kg.",
            //   "Selama perjalanan penurunan berat badannya, Katie menghadapi berbagai rintangan, termasuk kesulitan menggunakan sepatu, sering merasakan sakit pada pergelangan kakinya, dan gejala asma yang membuatnya tidak nyaman. Namun, dedikasi dan ketekunannya membawa perubahan yang luar biasa. Artikel tersebut menyoroti bahwa perubahan bukan hanya terjadi pada tingkat fisik, tetapi juga pada kesehatan keseluruhan Katie.",
            //   "Meskipun sering terlihat dengan senyuman di foto, Katie mengungkapkan bahwa sebelumnya ia merasa minder dan tidak bahagia dengan tubuhnya. Namun, keberhasilannya dalam perjalanan penurunan berat badan membawa kebahagiaan dan kepercayaan diri yang sebenarnya. Kini, Katie tidak hanya memiliki tubuh yang lebih sehat, tetapi juga menikmati perbedaan positif dalam kehidupan percintaannya, dengan banyak pria yang mulai memperhatikannya.",
            //   " Artikel tersebut memberikan inspirasi kepada pembaca untuk percaya pada kemampuan mereka sendiri untuk mengatasi tantangan, menerapkan perubahan positif dalam hidup, dan meraih kebahagiaan yang sejati.",
            // ]}
            paragraphs={fill_content}
          />

          <Col xs={4} className="col-5">
            <h2>Artikel Terkait</h2>
            {ins.map((data, i) => (
              <CardArtikel
                // title="Artikel Terkait"
                imgCard={`http://localhost:5000/${data.img}`}
                titleCard={data.title}
              >
                <CtaBtnSmall />
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

export default DInspirasi1;
