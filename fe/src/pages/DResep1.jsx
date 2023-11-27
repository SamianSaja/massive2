import { Row, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import Bagikan from "../components/Bagikan";
import Simpan from "../components/Simpan";
import DesKolom from "../components/DesKolom";
import BahanKolom from "../components/BahanKolom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DResep1 = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderDetail title="Bubur Manado" />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail="/img/resep/1.png"
            titleDesk="Cara Membuat"
            listItems={[
              "Bumbu halus diulek hingga benar-benar halus",
              "Buat bubur dari nasi : tuang air mendidih ke dalam panci berisi nasi hingga batas air 1 ruas jari di atas nasi. Terus diaduk sambil dimasak, jangan sampai gosong. Biar air mulai susut dan bubur belum terbentuk, tambahkan lagi airnya.",
              "Masukkan bumbu halus, jagung manis, ubi merah, labu kuning, dan serai. ",
              "Jika akan disajikan, angkat serainya, buang. Masukkan kangkung dan bayam merah sebentar. ",
              "Sajikan bubur dalam mangkuk, beri kemangi.",
            ]}
          />
          <BahanKolom
            listItems1={[
              "1 mangkuk nasi (lebih cepat membuatnya daripada dimulai dengan beras)",
              "1 jagung manis, disisir",
              "1 ubi merah, kupas, potong kotak",
              "¼ labu kuning/waluh yang tidak terlalu besar, potong kecil",
              "1 batang serai geprek",
              "1 ikat kangkung (atau daun gedi), petik pilih yang muda",
              "1 ikat bayam merah, petik pilih yg muda",
              "1 ikat kemangi",
            ]}
            titleList2="Bumbu halus:"
            listItems2={[
              "2 buah kemiri",
              "Garam, lada secukupnya. ",
              "2 siung bawang putih ",
              "2 siung bawang merah ",
            ]}
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
