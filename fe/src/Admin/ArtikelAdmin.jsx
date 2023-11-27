import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const isitabel = [
  {
    id: 1,
    judul: "Pola Makan Sehat",
    tggl: "2023-11-24",
    desc: "Upaya membiasakan anak-anak dengan makanan sehat ini harus dimulai sejak dini dengan memberikan asupan nutrisi yang seimbang. Kebiasaan makan yang sehat dapat membantu anak tumbuh dan berkembang dengan optimal dan mengurangi risiko terkena penyakit kronis di masa depan",
    img: "/img/artikel/1.png",
  },
  {
    id: 2,
    judul: "UNICEF dukung kampanye makanan sehat",
    tggl: "2023-11-24",
    desc: "Para pemuda dari delapan negara berpartisipasi dalam sebuah kampanye yang didukung  UNICEF di Bangkok pada pekan ini",
    img: "/img/artikel/2.png",
  },
];
const ArtikelAdmin = () => {
  return (
    <>
      <NavbarComponent />

      <div className="tambah container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="tambah-menu col-lg-2 ">
            <li>
              <Link to="#" className="text-decoration-none add-active">
                Artikel
              </Link>
            </li>
            <li>
              <Link to="/addresepA" className="text-decoration-none">
                Resep
              </Link>
            </li>
            <li>
              <Link to="/addinspirasiA" className="text-decoration-none">
                Inspirasi
              </Link>
            </li>
            <li>
              <Link to="/addtipsA" className="text-decoration-none">
                Tips & Trik
              </Link>
            </li>
            <li>
              <Link to="/adddietA" className="text-decoration-none">
                Diet Khusus
              </Link>
            </li>
          </div>
          <div className="col-lg-10 ">
            <div className="form-container ms-3 w-100">
              <h3 className="text-center text-dark fw-bold mb-3">Artikel</h3>
              <div className="d-flex admin-tambah ">
                <Link to="/tambahartikel">
                  <img src="/img/imgtambahartikel/iconplus.png" alt="hay" />
                  <button>Tambah Artikel</button>
                </Link>
              </div>
              <div className="mt-3">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "12%" }}>Judul</th>
                      <th style={{ width: "10%" }}>Tanggal</th>
                      <th style={{ width: "37%" }}>Deskripsi</th>
                      <th style={{ width: "15%" }}>Gambar</th>
                      <th style={{ width: "15%" }}>Pilihan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isitabel.map((artikel) => (
                      <tr key={artikel.id}>
                        <td>{artikel.judul}</td>
                        <td>{artikel.tggl}</td>
                        <td className="">{artikel.desc}</td>
                        <td>
                          <img
                            src={artikel.img}
                            alt="Gambar Contoh"
                            style={{
                              width: "150px",
                              height: "100px",
                              borderRadius: "10px",
                            }}
                          />
                        </td>
                        <td className="button">
                          <button className="btn btn-primary px-3">Edit</button>
                          <button className="btn btn-danger ms-lg-2 px-3 bg-danger">
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ArtikelAdmin;
