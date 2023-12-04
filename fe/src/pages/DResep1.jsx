import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Row, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import Bagikan from "../components/Bagikan";
import Simpan from "../components/Simpan";
import DesKolom from "../components/DesKolom";
import BahanKolom from "../components/BahanKolom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DResep1 = () => {
  const [food_name, setFoodName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [food_making, setFoodMaking] = useState("");
  const [img, setImg] = useState("");
  const [created_at, setCreated] = useState();
  const [articles, setArticles] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedResep();
    getResep();
  }, []);

  const getResep = async () => {
    try {
      axios.get(`http://localhost:5000/recept`)
      .then(res => setArticles(res.data.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  const getSelectedResep = async () => {
    const response = await axios.get(`http://localhost:5000/recept/${uuid}`);
    console.log(response.data)
    setFoodName(response.data.food_name);
    setIngredient(response.data.ingredient);
    setFoodMaking(response.data.food_making);
    setImg(response.data.img);
  }


  return (
    <>
      <NavbarComponent />
      <HeaderDetail title={food_name} />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail={`http://localhost:5000/${img}`}
            // titleDesk="Cara Membuat"
            // listItems={[
            //   "Bumbu halus diulek hingga benar-benar halus",
            //   "Buat bubur dari nasi : tuang air mendidih ke dalam panci berisi nasi hingga batas air 1 ruas jari di atas nasi. Terus diaduk sambil dimasak, jangan sampai gosong. Biar air mulai susut dan bubur belum terbentuk, tambahkan lagi airnya.",
            //   "Masukkan bumbu halus, jagung manis, ubi merah, labu kuning, dan serai. ",
            //   "Jika akan disajikan, angkat serainya, buang. Masukkan kangkung dan bayam merah sebentar. ",
            //   "Sajikan bubur dalam mangkuk, beri kemangi.",
            // ]}
            listItems={food_making}
          />
          <BahanKolom
            // listItems1={[
            //   "1 mangkuk nasi (lebih cepat membuatnya daripada dimulai dengan beras)",
            //   "1 jagung manis, disisir",
            //   "1 ubi merah, kupas, potong kotak",
            //   "¼ labu kuning/waluh yang tidak terlalu besar, potong kecil",
            //   "1 batang serai geprek",
            //   "1 ikat kangkung (atau daun gedi), petik pilih yang muda",
            //   "1 ikat bayam merah, petik pilih yg muda",
            //   "1 ikat kemangi",
            // ]}
            // titleList2="Bumbu halus:"
            // listItems2={[
            //   "2 buah kemiri",
            //   "Garam, lada secukupnya. ",
            //   "2 siung bawang putih ",
            //   "2 siung bawang merah ",
            // ]}
            listItems={ingredient}
          >
            <Bagikan />
            <Simpan />
          </BahanKolom>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DResep1;
