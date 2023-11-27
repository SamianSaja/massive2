import { Row, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import Bagikan from "../components/Bagikan";
import Simpan from "../components/Simpan";
import DesKolom from "../components/DesKolom";
import BahanKolom from "../components/BahanKolom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export const DVegan1 = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderDetail title="Sup Kubis" />
      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail="/img/diet/vegan/1.png"
            titleDesk="Cara Membuat"
            listItems={[
              "Panaskan minyak dalam panci besar dengan api sedang. Tambahkan bawang bombay, wortel dan seledri. Masak sambil diaduk hingga sayuran mulai melunak, 6 hingga 8 menit. Tambahkan paprika, bawang putih,  merica, dan garam, lalu masak sambil diaduk selama 2 menit.",
              "Tambahkan kaldu, kubis dan tomat; tingkatkan api menjadi sedang-besar dan didihkan. Kecilkan api agar api tetap mendidih, tutup sebagian dan masak hingga semua sayuran empuk, 15 hingga 20 menit lagi. Angkat dari api dan aduk dengan cuka",
            ]}
          />

          <BahanKolom
            listItems1={[
              "2 sendok makan minyak zaitun extra-virgin",
              "1 bawang bombay ukuran sedang , cincang",
              "2 wortel sedang , cincang",
              "2 batang seledri, cincang",
              "1 paprika merah ukuran sedang , cincang",
              "2 siung bawang putih, cincang",
              "½ sendok teh merica bubuk",
              "¼ sendok teh garam",
              "8 cangkir kaldu sayuran rendah sodium",
              "1 kubis hijau sedang , dibelah dua dan diiris",
              "1 buah tomat besar , cincang",
              "2 sendok teh cuka",
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
