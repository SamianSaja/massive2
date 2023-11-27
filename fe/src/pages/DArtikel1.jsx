import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DArtikel1 = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderDetail title="Pola Makan Sehat" date="Terbit, 11 November 2023" />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail="/img/artikel/1.png"
            paragraphs={[
              "Pentingnya makanan berkualitas dan gizi baik sebagai dasar kesehatan anak-anak disampaikan oleh UNICEF Indonesia. Orang tua memiliki peran penting dalam mengajarkan kebiasaan makan sehat sejak dini dengan menjadi contoh yang baik, rajin beraktivitas fisik, dan membuat sajian makanan sehat. Pola pikir sehat terkait makanan juga perlu dikembangkan untuk melindungi anak dari penyakit berbahaya.",
              "Orang tua dapat membantu anak memahami rasa lapar secara fisik, menghindari menggunakan makanan sebagai hadiah atau hukuman, dan tidak melarang makanan secara tegas. Mengurangi porsi dan frekuensi konsumsi makanan kurang sehat disarankan, sambil memberikan penjelasan mengenai kelebihan makanan sehat. Memberikan apresiasi kepada anak yang berperilaku baik dengan aktivitas selain makanan juga penting.",
              "Memaksa anak untuk menghabiskan makanan tidak disarankan, dan orang tua dapat menjadi contoh dengan menikmati makanan sehat, serta mengatur porsi makanan sesuai dengan kebutuhan anak. Sarapan sehat dan kegiatan fisik setiap hari juga menjadi prioritas untuk pertumbuhan dan perkembangan anak. Pembatasan penggunaan gadget juga diperlukan untuk mendorong aktivitas fisik.",
              "Dengan membangun kebiasaan makan sehat sejak dini, anak-anak dapat memiliki hubungan positif dengan makanan hingga dewasa, memberikan dampak positif pada kesehatan dan kebahagiaan seluruh keluarga.",
            ]}
          />

          <Col xs={4} className="col-lg-5 col-12">
            <CardArtikel
              title="Artikel Terkait"
              imgCard="/img/artikel/2.png"
              titleCard="UNICEF dukung kampanye makanan sehat"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/artikel/3.png"
              titleCard="Pentingnya makanan sehat dan bergizi"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/artikel/4.png"
              titleCard="Pola Makan Buruk Sebabkan 1 dari 5 Kematian"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/artikel/5.png"
              titleCard="Pentingnya Membawa Bekal ke Sekolah"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <Bagikan />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DArtikel1;
