import axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataResep } from "../data/dataResep";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun"
import Footer from "../components/Footer";

const Resep = () => {
  const [recepts, setRecepts] = useState([]);

  useEffect(() => {
    getRecepts()
  }, []);

  const getRecepts = async () => {
    try {
      axios.get('http://localhost:5000/recept')
      .then(res => setRecepts(res.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <>
      <NavbarAkun />
      <Header
        titleSpan="Resep "
        titleH="Sehat"
        desk='"Dapatkan inspirasi untuk mengolah makanan sehat yang bervariasi dengan
        resep masakan kesehatan yang simpel dan mudah"'
      />

      <section className="content-card-utama">
        <Row className="justify-content-center">
          {recepts.map((data, index) => (
            <Link to={`/dresep/${data.uuid}`} className="col-lg-4 text-decoration-none d-flex">
              <CardItem
                key={index}
                imgCard={`http://localhost:5000/${data.img}`}
                title={data.food_name}
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
