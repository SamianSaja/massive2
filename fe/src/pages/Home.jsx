import { Row, Col, Container } from "react-bootstrap";
import SwiperHome from "../components/SwiperHome";
import CardResep from "../components/CardResep";
import CardTips from "../components/CardTips";
import CardInspirasi from "../components/CardInspirasi";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="content ">
        <div>
          <img
            className="d-flex align-items-start justify-content-end"
            style={{
              width: "75%",
              float: "right",
              marginTop: "70px",
            }}
            src="img/imghome/imghome1.png"
            alt=""
          />
        </div>
        <Row className="row-content ms-lg-3 gap-lg-5  ">
          <Col className=" ms-lg-5 ms-lg-4 mt-lg-0 col-lg-4 col-sm-12  d-flex align-items-center justify-content-center">
            <div className="text-content">
              <h2 className="fw-bolder mb-lg-4 ">
                Jelajahi dunia sehat dan informatif
                <br />
                <span>di DishFit.</span>
              </h2>
              <p>Nikmati sesuatu yang baru tanpa batas.</p>
              <h5 className="fw-bold pt-lg-3">Let's go!</h5>
            </div>
          </Col>
          <Col className="col-lg-6 ms-lg-5  col-sm-12 d-flex align-items-center justify-content-center ">
            <div className="ps-lg-5 col-img">
              <img src="/img/imghome/imghome2.png" alt="hay" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="informatif">
        <div className="bg-informatif">
          <img
            src="/img/imghome/imghome3.png"
            alt="hay"
            style={{ width: "100%" }}
          />
        </div>
        <div className="content-informatif">
          <h3 className="text-center  text-white fw-bolder fs-3">
            Artikel Informatif di Dishfit
          </h3>
          <Container className="w-100 d-flex justify-content-center align-items-center ">
            <Row className="row-informatif  gap-lg-4  ">
              <Col className="d-flex mt-lg-4 gap-lg-3 fs-5 text-white ">
                <img src="/img/imghome/iconhealth.png" alt="health" />
                <p className="my-auto">Healthier</p>
              </Col>
              <Col className="d-flex mt-lg-4 gap-lg-3 fs-5 text-white ">
                <img src="/img/imghome/iconfit.png" alt="fit" />
                <p className="my-auto">Fit</p>
              </Col>
              <Col className="d-flex mt-lg-4 gap-lg-3 fs-5 text-white ">
                <img src="/img/imghome/iconedu.png" alt="edu" />
                <p className="my-auto">Education</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <SwiperHome />
      <div className="title-swipe">
        <h5 className="fw-bold d-flex justify-content-center align-items-center mt-4 mt-lg-5">
          Menjelajah Dunia Sehat
        </h5>
        <Container className="w-100 d-flex justify-content-center align-items-center ">
          <Row className="row-jelajah gap-lg-4 gap-2  ">
            <Col className=" mt-lg-4 gap-lg-3 ">
              <Link to="/tips" className="text-decoration-none">
                <div className="border-1 shadow-lg ">
                  <img src="/img/imghome/imgberita.png" alt="health" />
                </div>
                <p className="text-dark text-center my-1 fw-bold">
                  Tips & Trik
                </p>
              </Link>
            </Col>
            <Col className=" mt-lg-4 gap-lg-3 ">
              <Link to="/artikel" className="text-decoration-none">
                <div className="border-1 shadow-lg ">
                  <img src="/img/imghome/imgtipstrik.png" alt="health" />
                </div>
                <p className="text-dark text-center my-1  fw-bold">Artikel</p>
              </Link>
            </Col>
            <Col className=" mt-lg-4 gap-lg-3 ">
              <Link to="/resep" className="text-decoration-none">
                <div className="border-1 shadow-lg ">
                  <img src="/img/imghome/imgresep.png" alt="health" />
                </div>
                <p className="text-dark text-center my-1  fw-bold">
                  Resep Sehat
                </p>
              </Link>
            </Col>
            <Col className=" mt-lg-4 gap-lg-3 ">
              <Link to="/vegan" className="text-decoration-none">
                <div className="border-1 shadow-lg ">
                  <img src="/img/imghome/imgdiet.png" alt="health" />
                </div>
                <p className="text-dark text-center my-1  fw-bold">
                  Diet Khusus
                </p>
              </Link>
            </Col>
            <Col className=" mt-lg-4 gap-lg-3 ">
              <Link to="/inspirasi" className="text-decoration-none">
                <div className="border-1 shadow-lg ">
                  <img src="/img/imghome/imginspirasi.png" alt="health" />
                </div>
                <p className="text-dark text-center my-1  fw-bold">Inspirasi</p>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="w-100 mt-lg-5 mt-3"></div>
      </div>
      <div>
        <div className="resep">
          <div className="d-flex justify-content-center align-items-center">
            <h4 className="fs-3 bold">
              Variasi resep masakan yang sehat, simpel dan mudah untuk Anda.
            </h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/resep" className="text-decoration-none">
              <p className="text-center">Lihat Semua Resep</p>
            </Link>
          </div>
        </div>
        <CardResep />
        <div className="bg-resep">
          <img src="/img/imghome/bgresep.png" alt="hay" />
        </div>
      </div>
      <div>
        <div className="tips-trik w-100 ">
          <h3 className="text-center fw-bold">Tips & Trik</h3>
          <p className="text-center ">
            Pilih tips & trik yang sesuai kamu minati dan mulai hidup sehat
            dengan makanan yang bergizi. Ketuk banner untuk baca selengkapnya di
            DishFit.
          </p>
        </div>
      </div>
      <CardTips></CardTips>
      <div className="lihat-all d-flex w-100 justify-content-center align-items-center mt-lg-4">
        <Link to="/tips">
          <button>
            Lihat Semua
            <img src="/img/imghome/right.png" alt="" />
          </button>
        </Link>
      </div>
      <div className="mt-lg-5 imgbuttontips">
        <img
          src="/img/imghome/imgbuttontips.png"
          alt="hay"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <div className="w-100 d-flex justify-content-center align-items- mt-lg-4">
          <div className=" inspirasi w-75 mx-auto d-flex justify-content-between px-lg-3">
            <p>CERITA INSPIRASI DI DISHFIT</p>
            <Link to="/inspirasi" className="text-decoration-none text-dark">
              <p>LIHAT SEMUA</p>
            </Link>
          </div>
        </div>
        <div>
          <CardInspirasi />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
