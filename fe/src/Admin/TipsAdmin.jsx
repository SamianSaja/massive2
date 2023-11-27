import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const isitabel = [
  {
    id: 1,
    judul: "Menyimpan Bumbu Dapur agar Awet",
    tggl: "2023-11-24",
    desc: "Menyimpan bumbu dapur dengan tepat menjaga kebersihan dapur dan meningkatkan daya tahan bumbu.",
    img: "/img/tips/1.png",
  },
  {
    id: 2,
    judul: "Tips Membuat Anak Menyukai Makanan Sehat",
    tggl: "2023-11-24",
    desc: "Temukan cara mudah dan efektif mengajarkan anak mencintai makanan sehat dengan tips menyenangkan dan bermanfaat!",
    img: "/img/tips/2.png",
  },
];
const TipsAdmin = () => {
  return (
    <>
      <NavbarComponent />

      <div className="tambah container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="tambah-menu col-lg-2 ">
            <li>
              <Link to="/addartikelA" className="text-decoration-none ">
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
              <Link to="#" className="text-decoration-none add-active">
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
              <h3 className="text-center text-dark fw-bold mb-3">
                Tips & Trik
              </h3>
              <div className="d-flex admin-tambah ">
                <Link to="/tambahtips">
                  <img src="/img/imgtambahartikel/iconplus.png" alt="hay" />
                  <button>Tambah Tips & Trik </button>
                </Link>
              </div>
              <div className="mt-3">
                <table className="table table-bordered table-hover ">
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
                    {isitabel.map((tips) => (
                      <tr key={tips.id}>
                        <td>{tips.judul}</td>
                        <td>{tips.tggl}</td>
                        <td className="">{tips.desc}</td>
                        <td>
                          <img
                            src={tips.img}
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

export default TipsAdmin;
