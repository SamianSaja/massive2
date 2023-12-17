import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const isitabel = [
  {
    id: 1,
    judul: "Katie Milner, Berhasil Turun 40 Kg Dan Bukan Lagi Miss Piggy",
    desc: "Katie Adalah seseorang yang ingin kurus",
    inspirasi: "Gadis ini dibully dengan panggilan Miss. Piggy karena ia bertubuh tambun dengan berat sekitar 100 kg pada tinggi sekitar 152 cm.",
    img: "/img/inspirasi/1.png",
  },
  {
    id: 2,
    judul: "Cerita Sukses Dewi Hughes Turun 90 Kg dalam 15 Bulan",
    desc: "Cerita seseorang yang ingin turu badan",
    inspirasi: "Dewi Hughes, artis dan presenter yang sukses menurunkan 90 kilogram berat badannya dalam 15 bulan",
    img: "/img/inspirasi/2.png",
  },
];
const InspirasiAdmin = () => {
  const [ins, setIns] = useState([]);

  useEffect(() => {
    getIns()
  }, []);

  const getIns = async () => {
    try {
      axios.get('http://localhost:5000/ins')
      .then(res => setIns(res.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

  const deleteIns = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/ins/${id}`);
        getIns();
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
              <Link to="/addresepA" className="text-decoration-none">
                Resep
              </Link>
            </li>
            <li>
              <Link
                to="/addinspirasiA"
                className="text-decoration-none add-active"
              >
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
              <h3 className="text-center text-dark fw-bold mb-3">Inspirasi</h3>
              <div className="d-flex admin-tambah ">
                <Link to="/tambahinspirasi">
                  <img src="/img/imgtambahartikel/iconplus.png" alt="hay" />
                  <button>Tambah Inspirasi</button>
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
                    {ins.map((inspirasi) => (
                      <tr key={inspirasi.uuid}>
                        <td>{inspirasi.title}</td>
                        <td>
                        <i>created:</i> {new Date(inspirasi.createdAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}<br/><br/>
                        <i>updated:</i> {new Date(inspirasi.updatedAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
                        </td>
                        <td>{inspirasi.desk}</td>
                        {/* <td className="">{inspirasi.fill_content}</td> */}
                        <td>
                          <img
                            src={`http://localhost:5000/${inspirasi.img}`}
                            alt="Gambar Contoh"
                            style={{
                              width: "150px",
                              height: "100px",
                              borderRadius: "10px",
                            }}
                          />
                        </td>
                        <td className="button">
                          <Link to={`/editins/${inspirasi.uuid}`} className="btn btn-primary px-3">Edit</Link>
                          <button onClick={() => deleteIns(inspirasi.uuid)} className="btn btn-danger ms-lg-2 px-3 bg-danger">
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

export default InspirasiAdmin;
