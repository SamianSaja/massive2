import Header from "../components/Header";
import { Row } from "react-bootstrap";
import CtaBtn from "../components/CtaBtn";
import { CardItem } from "../components/CardItem";
import { dataInspirasi } from "../data/dataInspirasi";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Inspirasi = () => {
  return (
    <>
    <NavbarComponent />
      <Header
        titleSpan="Insp"
        titleH="irasi"
        desk='"Temukan inspirasi untuk menambah semangatmu dalam menjalankan pola makan sehat!"'
      />
      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">

          {dataInspirasi.map((data, index) => (
            <CardItem
              key={index}
              imgCard={data.imgCard}
              title={data.title}
              text={data.text}
            >
              <Link to={data.url}>
              <CtaBtn />
              </Link>
              {/* <CtaBtn  targetPath={`/dInspirasi${index + 1}`}/> */}
            </CardItem>
          ))}

          {/* <CardItem
            imgCard="img/inspirasi/1.png"
            title="Katie Milner, Berhasil Turun 40 Kg Dan Bukan Lagi Miss Piggy"
            text="Gadis ini dibully dengan panggilan Miss. Piggy karena ia bertubuh tambun dengan berat sekitar 100 kg pada tinggi sekitar 152 cm."
          >
            {" "}
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/inspirasi/2.png"
            title="Cerita Sukses Dewi Hughes Turun 90 Kg dalam 15 Bulan
            "
            text="Dewi Hughes, artis dan presenter yang sukses menurunkan 90 kilogram berat badannya dalam 15 bulan"
          >
            {" "}
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/inspirasi/3.png"
            title="Laura Patricia Turun 30 Kg Dengan Gaya Hidup Sehat"
            text="Laura berhasil menurunkan berat badannya dari 80 kg menjadi 58 kg hanya dalam waktu 1 tahun 3 bulan."
          >
            {" "}
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/inspirasi/4.png"
            title="Elaine, Wanita Yang Sukses Diet Turun 44 Kilogram"
            text="Elaine sukses menurunkan 44 kg dengan mengadopsi diet sehat, dan menjaga pola makan dan rutin berolahraga."
          >
            {" "}
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/inspirasi/5.png"
            title="Pria sukses turunkan 42 kg lewat diet makanan rumahan."
            text="Mohit sukses turunkan berat badannya 42 kg dengan diet makanan rumahan dan mengurangi makanan berminyak."
          >
            {" "}
            <CtaBtn />
          </CardItem>

          <CardItem
            imgCard="img/inspirasi/6.png"
            title="Pria Thailand turunkan BB dari 156 kg menjadi 75 kg."
            text="Nes turun berat badan 1 tahun, hindari gorengan, milk tea, camilan tinggi gula, dan dessert. Prioritaskan makanan sehat setiap hari."
          >
            {" "}
            <CtaBtn />
          </CardItem> */}
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Inspirasi;
