import { Row, Col, Container } from "react-bootstrap";
import HeaderDetail from "../components/HeaderDetail";
import CardArtikel from "../components/CardArtikel";
import Bagikan from "../components/Bagikan";
import DesKolom from "../components/DesKolom";
import CtaBtnSmall from "../components/CtaBtnSmall";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DTips1 = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderDetail
        title="Menyimpan Bumbu Dapur agar Awet"
        date="Terbit, 11 November 2023"
      />

      <Container fluid className="d-flex content-detail">
        <Row>
          <DesKolom
            imgDetail="/img/tips/1.png"
            paragraphs={[
              "Dalam menjaga semangat memasak, memiliki dapur yang baik dan bersih adalah kunci utamanya. Tidaklah mudah untuk mempertahankan kebersihan dapur, namun langkah-langkah tertentu dapat membantu menjaga kebersihan setelah proses memasak. Menurut artikel yang ada di Fimela.com, salah satu aspek penting adalah cara menyimpan bumbu dapur dengan benar, sehingga dapur tetap bersih dan bumbu lebih awet.",
              "Berikut adalah beberapa tips yang dapat diterapkan untuk menyimpan bumbu dapur secara optimal:",
              " Beberapa bumbu dapur, seperti daun basil dan daun salam segar, sebaiknya disimpan dalam freezer. Rendam bumbu dalam minyak zaitun sebelum ditempatkan dalam kantong plastik, lalu simpan di freezer. Minyak zaitun akan membantu menjaga kesegaran daun basil dan daun salam.",
              "Untuk saos dan kecap yang belum dibuka, disarankan untuk disimpan dalam suhu ruang. Namun, setelah dibuka, segera simpan dalam lemari es. Untuk kemasan isi ulang, pastikan menuangkannya dalam botol bersih agar saos atau kecap tetap awet.",
              "Bumbu bubuk sebaiknya disimpan dalam suhu ruangan, namun pastikan untuk menaruhnya dalam kaleng atau wadah kedap udara. Lemari es sebaiknya dihindari karena dapat menyebabkan penggumpalan bumbu bubuk.",
              " Bumbu yang sudah dihaluskan dan siap digunakan sebaiknya disimpan di dalam freezer dengan kemasan kedap udara. Jika ingin menyimpan dalam jumlah besar, sebaiknya dibagi dalam beberapa bagian dan disimpan dalam kemasan sekali pakai.",
              "Hindari meletakkan bumbu di dekat kompor, karena suhu di sekitar kompor cenderung lebih tinggi dan dapat merusak kualitas bumbu.",
              "Dengan menerapkan tips ini, bumbu dapur dapat tetap awet dan membantu menciptakan lingkungan dapur yang bersih..",
            ]}
          />

          <Col xs={4} className="col-5">
            <CardArtikel
              title="Artikel Terkait"
              imgCard="/img/tips/2.png"
              titleCard="Tips Membuat Anak Menyukai Makanan Sehat"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/tips/3.png"
              titleCard="Cegah Anak Obesitas dengan Mengganti Camilan"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/tips/4.png"
              titleCard="Cemilan Alternatif Pengganti Junkfood"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/tips/5.png"
              titleCard="tips pola makan sehat untuk kamu yang sibuk"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>
            <CardArtikel
              imgCard="/img/tips/6.png"
              titleCard="Tips and Trik Hidup Sehat Ala Anak Kostan"
            >
              <CtaBtnSmall />
              <Bagikan />
            </CardArtikel>

            <Bagikan />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DTips1;
