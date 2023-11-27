import Header from "../components/Header";
import { Row } from "react-bootstrap";
import CtaBtn from "../components/CtaBtn";
import { CardItem } from "../components/CardItem";
import { dataTips } from "../data/dataTips";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const TipsTrik = () => {
  return (
    <>
      <NavbarComponent />
      <Header
        titleSpan="Tips & "
        titleH="Trik"
        desk='"Dapatkan tips & trik efektif untuk mengatasi kebiasaan makan tidak sehat dan mulai hidup sehat dengan makanan yang bergizi!”'
      />
      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">
          {dataTips.map((data, index) => (
            <CardItem
              key={index}
              imgCard={data.imgCard}
              title={data.title}
              text={data.text}
            >
              <Link to={data.url}>
                <CtaBtn />
              </Link>

              {/* <CtaBtn targetPath={`/dTips${index + 1}`}/> */}
            </CardItem>
          ))}

          {/* <CardItem
            imgCard="img/tips/1.png"
            title="Menyimpan Bumbu Dapur agar Awet"
            text="Menyimpan bumbu dapur dengan tepat menjaga kebersihan dapur dan meningkatkan daya tahan bumbu."
          >
            {" "}
            <CtaBtn />
          </CardItem>
          <CardItem
            imgCard="img/tips/2.png"
            title="Tips Membuat Anak Menyukai Makanan Sehat"
            text="Temukan cara mudah dan efektif mengajarkan anak mencintai makanan sehat dengan tips menyenangkan dan bermanfaat!"
          >
            {" "}
            <CtaBtn />
          </CardItem>
          <CardItem
            imgCard="img/tips/3.png"
            title="Cegah Anak Obesitas dengan Mengganti Camilan"
            text="Mencegah obesitas pada anak bisa dilakukan menciptakan gaya hidup dan kebiasaan sehari-hari yang sehat."
          >
            {" "}
            <CtaBtn />
          </CardItem>
          <CardItem
            imgCard="img/tips/4.png"
            title="Cemilan Alternatif Pengganti Junkfood"
            text="Jauhi junk food dengan mencoba cemilan alternatif yang menggugah selera dan tetap sehat."
          >
            {" "}
            <CtaBtn />
          </CardItem>
          <CardItem
            imgCard="img/tips/5.png"
            title="Tips pola makan sehat untuk kamu yang sibuk"
            text="Aktivitas tinggi dan kurangnya perhatian pada pola makan sehat di kota besar bisa berdampak negatif pada kesehatan."
          >
            {" "}
            <CtaBtn />
          </CardItem>
          <CardItem
            imgCard="img/tips/6.png"
            title="Tips and Trik Hidup Sehat Ala Anak Kostan"
            text="Temukan rahasia hidup sehat ala anak kostan! Tips praktis ini akan mengubah gaya hidupmu. Simak sekarang!"
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

export default TipsTrik;
