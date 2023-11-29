import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import { Link } from "react-router-dom";

const TambahArtikel = () => {
  const [uuid, setuuid] = useState("art0002");
  const [title, setTitle] = useState("");
  const [desk, setDesk] = useState("ini adalah deskripsi");
  const [fill_content, setFillContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("img/artikel/1.png");
  const navigate = useNavigate();

  const saveArtikel = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/articles', {
            uuid,
            title,
            desk,
            fill_content,
            img
        });
        navigate("/artikel");
    } catch (error) {
        console.log(error);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name);
    setImg(`img/artikel/${file.name}`)
    if (file) {
      const reader = new FileReader();
      console.log(reader)
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImg(`img/${file.name}`);
    
  // }

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  console.log(img);

  return (
    <>
      <NavbarComponent />
      <div className="tambah container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="tambah-menu col-lg-2">
            <li>
              <Link to="#" className="text-decoration-none add-active">
                Tambah Artikel
              </Link>
            </li>
            <li>
              <Link to="/tambahresep" className="text-decoration-none">
                Tambah Resep
              </Link>
            </li>
            <li>
              <Link to="/tambahinspirasi" className="text-decoration-none">
                Tambah Inspirasi
              </Link>
            </li>
            <li>
              <Link to="/tambahtips" className="text-decoration-none">
                Tambah Tips & Trik
              </Link>
            </li>
            <li>
              <Link to="/tambahdiet" className="text-decoration-none">
                Tambah Diet Khusus
              </Link>
            </li>
            <li>
              <Link
                to="/addartikelA"
                className="text-decoration-none text-info"
              >
                Lihat Tabel Artikel
              </Link>
            </li>
          </div>
          <div className="col-lg-10">
            <div className="form-container ms-3  float-start">
              <h3 className="text-center fw-bold mb-3">
                Tambah <span> Artikel </span>
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="article-title" className="form-label">
                    Judul Artikel:
                  </label>
                  <input
                    placeholder="judul artikel"
                    type="text"
                    className="form-control"
                    id="article-title"
                    name="article-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="post-date" className="form-label">
                    Deskripsi
                  </label>
                  <textarea
                    placeholder="isi deskripsi"
                    className="form-control border border-2 rounded-1"
                    id="article-content"
                    name="article-content"
                    rows="8"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="article-image" className="form-label">
                    Masukkan gambar
                  </label>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="input-gambar text-center">
                      <div className="browse">
                        <img src="/img/imgtambahartikel/browse.png" alt="" />
                        <br />
                        <label htmlFor="file-upload" className="mt-2">
                          Browse file to upload
                        </label>
                      </div>
                      <input
                        type="file"
                        id="file-upload"
                        name="article-image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                      {selectedImage && (
                        <div className="ml-3">
                          <img
                            src={selectedImage}
                            alt="Selected"
                            className="img-thumbnail"
                            style={{ maxWidth: "400px", maxHeight: "400px" }}
                          />
                          <span
                            className="ml-3 text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={handleRemoveImage}
                          >
                            Hapus
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Isi Artikel:
                  </label>
                  <textarea
                    placeholder="isi artikel"
                    className="form-control border border-2 rounded-1"
                    id="article-content"
                    name="article-content"
                    rows="8"
                    value={fill_content}
                    onChange={(e) => setFillContent(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-3 button  ">
                  <button type="submit" onClick={saveArtikel}>Publikasi</button>
                  <button type="button" className="ms-lg-4">
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahArtikel;
