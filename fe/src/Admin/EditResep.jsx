import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";

import { Link } from "react-router-dom";

const EditResep = () => {
//   let [uuid, setuuid] = useState("");
  const [food_name, setFood_name] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [food_making, setFood_making] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("/img/artikel/1.png");
  const [diet, setDiet] = useState(false);

  const navigate = useNavigate();
  const { uuid } = useParams();

  useEffect(() => {
    getResepById();
  }, [])


  const updateResep = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uuid', uuid);
    formData.append('food_name', food_name);
    formData.append('ingredient', ingredient);
    formData.append('food_making', food_making);
    formData.append('img', img);
    formData.append('diet', diet);

    try {
        await axios.put(`http://localhost:5000/recept/${uuid}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate("/resep");
    } catch (error) {
        console.log(error);
    }
  }

  const getResepById = async () => {
    const response = await axios.get(`http://localhost:5000/recept/${uuid}`);
    setFood_name(response.data.food_name);
    setIngredient(response.data.ingredient);
    setFood_making(response.data.food_making);
    setImg(response.data.img);
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

//   setuuid = () => {
//     return uuid = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
//   }
//   setuuid()

  return (
    <>
      <NavbarComponent />
      <div className="tambah container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
        <div className="tambah-menu col-lg-2">
            {/* <li>
              <Link to="#" className="text-decoration-none add-active">
                Edit Artikel
              </Link>
            </li> */}
            <li>
            <Link
                to="/addartikelA" className="text-decoration-none">
                Lihat Tabel Artikel
              </Link>
            </li>
            <li>
            <Link
                to="/addresepA" className="text-decoration-none">
                Lihat Tabel Resep
              </Link>
            </li>
            <li>
            <Link
                to="/addinspirasiA" className="text-decoration-none">
                Lihat Tabel Inspirasi
              </Link>
            </li>
            <li>
            <Link
                to="/addtipsA" className="text-decoration-none">
                Lihat Tabel Tips & Triks
              </Link>
            </li>
            <li>
              <Link
                to="/adddietA" className="text-decoration-none">
                Lihat Tabel Diet
              </Link>
            </li>
          </div>
          <div className="col-lg-10">
            <div className="form-container ms-3  float-start">
              <h3 className="text-center fw-bold mb-3">
                Edit <span> Resep </span>
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
                  <button type="submit" onClick={updateResep}>Publikasi</button>
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

export default EditResep;
