import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import Bagikan from "../components/Bagikan";
import Simpan from "../components/Simpan";
import DesKolom from "../components/DesKolom";
import BahanKolom from "../components/BahanKolom";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";

export const DVegan1 = () => {

  const [selectedRecept, setSelectedRecept] = useState([]);
  const [recepts, setRecepts] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedResep();
    getResep();
  }, []);

  const getResep = async () => {
    try {
      axios
        .get(`http://localhost:5000/diet`)
        .then((res) => setRecepts(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedResep = async () => {
    try {
      axios
        .get(`http://localhost:5000/diet/${uuid}`)
        .then((res) => setSelectedRecept(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarAkun />
      {selectedRecept.map((recept, i) => {
          const hari = new Date(recept.createdAt).toLocaleString("id-ID", {
            weekday: "long",
          });
          const tanggal = new Date(recept.createdAt).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          });

          return (
            <div key={i}>
              <HeaderDetail title={recept.food_name} date={`${hari}, ${tanggal}`} />
              
              <Container fluid className="d-flex content-detail">
                <Row>
                  <DesKolom
                    imgDetail={`http://localhost:5000/${recept.img}`}
                    listItems={recept.food_making}
                  />
                  <BahanKolom
                    listItems={recept.ingredient}
                  >
                    <Bagikan />
                    <Simpan />
                  </BahanKolom>
                </Row>
              </Container>
            </div>
          )
        })}
      <Footer />
    </>
  );
};
