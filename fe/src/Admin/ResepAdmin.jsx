import axios from 'axios';
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const isitabel = [
  {
    id: 1,
    nama: "Bubur Manado",
    img: "/img/resep/1.png",
  },
  {
    id: 2,
    nama: "Pepes Ikan Dori",
    img: "/img/resep/2.png",
  },
];
const ResepAdmin = () => {
  const [recepts, setRecepts] = useState([]);

  useEffect(() => {
    getRecepts()
  }, []);

  const getRecepts = async () => {
    try {
      axios.get('http://localhost:5000/recept')
      .then(res => setRecepts(res.data.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  const deleteResep = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/recept/${id}`);
        getRecepts();
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
              <Link to="/addartikelA" className="text-decoration-none ">
                Artikel
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none add-active">
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
              <h3 className="text-center text-dark fw-bold mb-3">Resep</h3>
              <div className="d-flex admin-tambah ">
                <Link to="/tambahresep">
                  <img src="/img/imgtambahartikel/iconplus.png" alt="hay" />
                  <button>Tambah Resep</button>
                </Link>
              </div>
              <div className="mt-3">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>Nama</th>
                      <th style={{ width: "35%" }}>Gambar</th>
                      <th style={{ width: "25%" }}>Pilihan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recepts.map((resep) => (
                      <tr key={resep.uuid}>
                        <td>{resep.food_name}</td>
                        <td>
                          <img
                            src={`http://localhost:5000/${resep.img}`}
                            alt="Gambar Contoh"
                            style={{
                              width: "160px",
                              height: "110px",
                              borderRadius: "10px",
                            }}
                          />
                        </td>
                        <td className="button">
                          <Link to={`/editresep/${resep.uuid}`} className="btn btn-primary px-3">Edit</Link>
                          <button onClick={() => deleteResep(resep.uuid)} className="btn btn-danger ms-lg-2 px-3 bg-danger">
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

export default ResepAdmin;
