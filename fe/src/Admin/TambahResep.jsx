import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";

import { Link } from "react-router-dom";

const TambahResep = () => {
  let [uuid, setuuid] = useState("");
  const [food_name, setFood_name] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [food_making, setFood_making] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("/img/artikel/1.png");
  const [diet, setDiet] = useState(false);
  const navigate = useNavigate();
  const saveResep = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uuid', uuid);
    formData.append('food_name', food_name);
    formData.append('ingredient', ingredient);
    formData.append('food_making', food_making);
    formData.append('img', img);
    // formData.append('diet', numericValue);
    
    try {
      await axios.post('http://localhost:5000/recept', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate("/addresepA");
  } catch (error) {
      console.log(error);
  }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
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

  // const handleCheckboxChange = () => {
  //   setDiet(!diet);
  // };

  // const numericValue = diet ? 1 : 0;
  // console.log(numericValue)


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

                {/* <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Diet? 
                  </label>
                  <input 
                  type="checkbox"
                  id='article-diet'
                  name='article-diet'
                  checked={diet}
                  onChange={handleCheckboxChange}
                  className='m-3'
                  />
                </div> */}

                <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Cara Pembuatan
                  </label>
                  <div className="App">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={food_making}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          setFood_making(data);
                      } }

                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Bahan-Bahan
                  </label>
                  <div className="App">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={ingredient}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          setIngredient(data);
                      } }

                    />
                </div>
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
