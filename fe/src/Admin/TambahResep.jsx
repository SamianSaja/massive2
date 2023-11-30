import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";

import { Link } from "react-router-dom";

const TambahResep = () => {
  let [uuid, setuuid] = useState("");
  const [food_name, setFood_name] = useState("");
  const [ingredient, setIngredient] = useState("ini adalah deskripsi");
  const [food_making, setFood_making] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("img/artikel/1.png");
  const [diet, setDiet] = useState(false);

  const navigate = useNavigate();

  const saveResep = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/recept', {
            uuid,
            food_name,
            ingredient,
            food_making,
            img,
            diet
        });
        navigate("/resep");
    } catch (error) {
        console.log(error);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImg(`img/resep/${file.name}`);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  setuuid = () => {
    return uuid = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  setuuid()

  return (
    <>
      <NavbarComponent />
      <div className="tambah container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="tambah-menu col-lg-2">
            <li>
              <Link to="/tambahartikel" className="text-decoration-none ">
                Tambah Artikel
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none add-active">
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
              <Link to="/addresepA" className="text-decoration-none text-info">
                Lihat Tabel Resep
              </Link>
            </li>
          </div>
          <div className="col-lg-10">
            <div className="form-container ms-3  float-start">
              <h3 className="text-center fw-bold mb-3">
                Tambah <span> Resep </span>
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="article-title" className="form-label">
                    Nama Resep:
                  </label>
                  <input
                    placeholder="Nama resep"
                    type="text"
                    className="form-control"
                    id="article-title"
                    name="article-title"
                    value={food_name}
                    onChange={(e) => (setFood_name(e.target.value))}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="article-image" className="form-label">
                    Masukkan Gambar
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
                    Cara Pembuatan
                  </label>
                  <textarea
                    placeholder="Masukan cara pembuatan"
                    className="form-control border border-2 rounded-1"
                    id="article-content"
                    name="article-content"
                    rows="8"
                    value={food_making}
                    onChange={(e) => (setFood_making(e.target.value))}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Bahan-Bahan
                  </label>
                  <textarea
                    placeholder="Masukan bahan-bahan"
                    className="form-control border border-2 rounded-1"
                    id="article-content"
                    name="article-content"
                    rows="8"
                    value={ingredient}
                    onChange={(e) => (setIngredient(e.target.value))}
                  ></textarea>
                </div>

                <div className="mb-3 button  ">
                  <button type="submit" onClick={saveResep}>Publikasi</button>
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

export default TambahResep;
