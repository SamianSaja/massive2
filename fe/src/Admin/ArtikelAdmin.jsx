import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const ArtikelAdmin = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      axios
        .get("http://localhost:5000/articles")
        .then((res) => setArticles(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/articles/${id}`);
        getArticle();
    } catch (error) {
        console.log(error);
    }
  };

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
                      <th style={{ width: "12%" }}>Tanggal</th>
                      <th style={{ width: "37%" }}>Deskripsi</th>
                      <th style={{ width: "15%" }}>Gambar</th>
                      <th style={{ width: "15%" }}>Pilihan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((artikel) => (
                      <tr>
                        <td>{artikel.title}</td>
                        <td>
                        <i>created:</i> {new Date(artikel.createdAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}<br/><br/>
                        <i>updated:</i> {new Date(artikel.updatedAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
                        </td>
                        <td>{artikel.desk}</td>
                        {/* <td dangerouslySetInnerHTML={{__html:artikel.fill_content}} className=""></td> */}
                        <td>
                          <img
                            src={`http://localhost:5000/${artikel.img}`}
                            alt="Gambar Contoh"
                            style={{
                              width: "150px",
                              height: "100px",
                              borderRadius: "10px",
                            }}
                          />
                        </td>
                        <td className="button">
                          <Link to={`/editartikel/${artikel.uuid}`} className="btn btn-primary px-3">Edit</Link>
                          <button onClick={() => deleteArticle(artikel.uuid)} className="btn btn-danger ms-lg-2 px-3 bg-danger">
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
