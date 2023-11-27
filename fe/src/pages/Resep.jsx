import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataResep } from "../data/dataResep";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Resep = () => {
  return (
    <>
      <NavbarComponent />
      <Header
        titleSpan="Resep "
        titleH="Sehat"
        desk='"Dapatkan inspirasi untuk mengolah makanan sehat yang bervariasi dengan
        resep masakan kesehatan yang simpel dan mudah"'
      />

      <section className="content-card-utama">
        <Row className="justify-content-center">
          {dataResep.map((data, index) => (
            <Link to={data.url} className="col-lg-4 text-decoration-none d-flex">
              <CardItem
                key={index}
                imgCard={data.imgCard}
                title={data.title}
              ></CardItem>
            </Link>
          ))}
        </Row>
      </section>

      <Footer />
    </>
  );
};

export default Resep;
