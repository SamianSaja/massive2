import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataVegan } from "../data/dataVegan";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DietVegan = () => {
  return (
    <>
      <NavbarComponent />
      <Header
        titleSpan="Diet "
        titleH="Khusus"
        desk="Temukan resep yang sesuai kebutuhan mu!."
      />
      <h2 className="bold text-center mb-3">Vegan</h2>
      <section className="content-card-utama">
        <Row className="justify-content-center">
          {dataVegan.map((data, index) => (
            <Link to={data.url} className="col-lg-4 text-decoration-none d-flex">
              <CardItem
                key={index}
                imgCard={data.imgCard}
                title={data.title}
                jenis={data.jenis}
              ></CardItem>
            </Link>
          ))}
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default DietVegan;
