import { Row, Col, Container } from "react-bootstrap";
import SwiperHome from "../components/SwiperHome";
import CardResep from "../components/CardResep";
import CardTips from "../components/CardTips";
import CardInspirasi from "../components/CardInspirasi";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
    });

    const handleScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8 && rect.bottom >= 0) {
          if (!element.classList.contains("visible")) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.classList.add("visible");
          }
        } else {
          if (element.classList.contains("visible")) {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.classList.remove("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // code let's go
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const targetText = "Let's go!";

    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= targetText.length) {
        setAnimatedText(targetText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setAnimatedText("");
          animateText();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const animateText = () => {
    let index = 0;
    const targetText = "Let's go!";
    const textContainer = document.getElementById("animated-text");

    const fadeIn = () => {
      if (index <= targetText.length) {
        const char = targetText[index];
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("fade-in");
        textContainer.appendChild(span);
        index++;
        setTimeout(fadeIn, 100);
      } else {
        setTimeout(() => {
          textContainer.innerHTML = "";
          animateText();
        }, 1000);
      }
    };

    fadeIn();
  };

  // code let's go end

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
              <h5 id="animated-text" className="fw-bold pt-lg-3">
                {animatedText}
              </h5>
            </div>
          </Col>
          <Col className="col-lg-6 ms-lg-5  col-sm-12 d-flex align-items-center justify-content-center ">
            <div className="ps-lg-5 col-img">
              <img src="/img/imghome/imghome2.png" alt="hay" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="informatif animate-on-scroll">
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
              <Col className="d-flex mt-lg-4 ms-lg-5 gap-lg-3 fs-5 text-white ">
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
      <div className="swiper-home animate-on-scroll">
        <SwiperHome />
      </div>
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
        <div className="resep mb-lg-5">
          <div className="d-flex justify-content-center align-items-center animate-on-scroll">
            <h4 className="fs-3 bold">
              Variasi resep masakan yang sehat, simpel dan mudah untuk Anda.
            </h4>
          </div>
          <div className="d-flex justify-content-center align-items-center animate-on-scroll ">
            <Link to="/resep" className="text-decoration-none">
              <p className="text-center">Lihat Semua Resep</p>
            </Link>
          </div>
        </div>
        <div className="animate-on-scroll ">
          <CardResep />
        </div>
        <div className="bg-resep">
          <img src="/img/imghome/bgresep.png" alt="hay" />
        </div>
      </div>
      <div className="animate-on-scroll">
        <div className="tips-trik w-100 ">
          <h3 className="text-center fw-bold">Tips & Trik</h3>
          <p className="text-center ">
            Pilih tips & trik yang sesuai kamu minati dan mulai hidup sehat
            dengan makanan yang bergizi. Ketuk banner untuk baca selengkapnya di
            DishFit.
          </p>
        </div>
      </div>
      <div className="animate-on-scroll">
        <CardTips></CardTips>
      </div>
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
        <div className="animate-on-scroll">
          <CardInspirasi />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
