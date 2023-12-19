import axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataVegan } from "../data/dataVegan";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun";

const DietVegetarian = () => {
  const [recepts, setRecepts] = useState([]);

  useEffect(() => {
    getRecepts()
  }, []);

  const getRecepts = async () => {
    try {
      axios.get('http://localhost:5000/vegetarian')
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
        titleSpan="Diet "
        titleH="Khusus"
        desk="Temukan resep yang sesuai kebutuhan mu!."
      />
      <h2 className="bold text-center mb-3">Vegetarian</h2>
      <section className="content-card-utama">
        <Row className="justify-content-center">
            {recepts.map((data, index) => (
              <Link to={`/dvegan/${data.uuid}`} className="col-lg-4 text-decoration-none d-flex">
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

export default DietVegetarian;
