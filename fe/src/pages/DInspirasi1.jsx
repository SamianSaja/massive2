import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DInspirasi1 = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderDetail
        title="Katie Milner, Berhasil Turun 40 Kg Dan Bukan Lagi Miss Piggy"
        date="Terbit, 11 November 2023"
      />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail="/img/inspirasi/1.png"
            paragraphs={[
              'Dalam artikel yang diterbitkan di Fimela, kita diperkenalkan dengan perjalanan menginspirasi Katie Milner, seorang guru sekolah dasar berusia 22 tahun yang berhasil mengatasi tantangan signifikan dalam hidupnya. Awalnya, Katie dipanggil "Miss Piggy" oleh sebagian orang karena berat badannya yang mencapai 100 kg dengan tinggi 152 cm. Cemoohan dan tekanan terhadap penampilannya membawa Katie pada titik di mana ia merasa perlu melakukan perubahan besar dalam hidupnya.',
              "Dengan tekad yang kuat, Katie memutuskan untuk mengubah gaya hidup dan pola makan buruknya. Selama 3 tahun, ia menjalani program diet yang disiplin, meninggalkan kebiasaan makan 5 kantong snack per hari, cokelat, dan berbagai makanan siap saji lainnya. Hasilnya, Katie berhasil menurunkan berat badannya sebanyak 40 kg, mencapai berat badan 64 kg.",
              "Selama perjalanan penurunan berat badannya, Katie menghadapi berbagai rintangan, termasuk kesulitan menggunakan sepatu, sering merasakan sakit pada pergelangan kakinya, dan gejala asma yang membuatnya tidak nyaman. Namun, dedikasi dan ketekunannya membawa perubahan yang luar biasa. Artikel tersebut menyoroti bahwa perubahan bukan hanya terjadi pada tingkat fisik, tetapi juga pada kesehatan keseluruhan Katie.",
              "Meskipun sering terlihat dengan senyuman di foto, Katie mengungkapkan bahwa sebelumnya ia merasa minder dan tidak bahagia dengan tubuhnya. Namun, keberhasilannya dalam perjalanan penurunan berat badan membawa kebahagiaan dan kepercayaan diri yang sebenarnya. Kini, Katie tidak hanya memiliki tubuh yang lebih sehat, tetapi juga menikmati perbedaan positif dalam kehidupan percintaannya, dengan banyak pria yang mulai memperhatikannya.",
              " Artikel tersebut memberikan inspirasi kepada pembaca untuk percaya pada kemampuan mereka sendiri untuk mengatasi tantangan, menerapkan perubahan positif dalam hidup, dan meraih kebahagiaan yang sejati.",
            ]}
          />

          <Col xs={4} className="col-5">
            <CardArtikel
              title="Artikel Terkait"
              imgCard="/img/inspirasi/2.png"
              titleCard="Cerita Sukses Dewi Hughes Turun 90 Kg dalam 15 Bulan"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/inspirasi/3.png"
              titleCard="Laura Patricia Turun 30 Kg Dengan Gaya Hidup Sehat"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/inspirasi/4.png"
              titleCard="Elaine, Wanita Yang Sukses Diet Turun 44 Kilogram"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/inspirasi/5.png"
              titleCard="Pria sukses turunkan 42 kg lewat diet makanan."
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/inspirasi/6.png"
              titleCard="Pria Thailand turunkan BB dari 156 kg menjadi 75 kg."
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

export default DInspirasi1;
