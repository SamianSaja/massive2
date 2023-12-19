import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";

import { Link } from "react-router-dom";

const EditDiet = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("/img/artikel/1.png");
  // const [diet, setDiet] = useState(false);
  const [selectedRecept, setSelectedRecept] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');


  const navigate = useNavigate();
  const { uuid } = useParams();

  useEffect(() => {
    getSelectedRecept ();
  }, [])


  const updateResep = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uuid', uuid);
    selectedRecept.map((recept) => {
      formData.append('food_name', recept.food_name);
      formData.append('ingredient', recept.ingredient);
      formData.append('food_making', recept.food_making);
      return recept;
    });
    formData.append('img', img);
    formData.append('category', selectedCategory);

    try {
        await axios.put(`http://localhost:5000/diet/${uuid}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate("/adddietA");
    } catch (error) {
        console.log(error);
    }
  }

  const getSelectedRecept = async () => {
    try {
      axios.get(`http://localhost:5000/diet/${uuid}`)
      .then(res => setSelectedRecept(res.data))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };

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

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

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
              {selectedRecept.map((recept, index) => (
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
                    value={recept.food_name}
                    onChange={(e) => {
                      const updated = [...selectedRecept];
                      updated[index] = { ...recept, food_name: e.target.value };
                      setSelectedRecept(updated);
                    }}
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
                  <label className="form-label">
                    Kategori :
                  </label><br/>
                  <input 
                    type="radio" 
                    id="html" 
                    name="category" 
                    value="Diabetik"
                    checked={selectedCategory === 'Diabetik'}
                    onChange={handleRadioChange}
                  />
                  <label for="html" className='m-2'>Diabetik</label><br/>
                  <input 
                    type="radio" 
                    id="css" 
                    name="category"
                    value="Vegetarian"
                    checked={selectedCategory === 'Vegetarian'}
                    onChange={handleRadioChange}
                  />
                  <label for="css" className='m-2'>Vegetarian</label><br/>
                  <input 
                    type="radio" 
                    id="javascript" 
                    name="category" 
                    value="Vegan"
                    checked={selectedCategory === 'Vegan'}
                    onChange={handleRadioChange}
                  />
                  <label for="javascript" className='m-2'>Vegan</label>
                </div>

                <div className="mb-3">
                  <label htmlFor="article-content" className="form-label">
                    Cara Pembuatan
                  </label>
                  <div className="App">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={recept.food_making}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          const updated = [...selectedRecept];
                          updated[index] = { ...recept, food_making: data };
                          setSelectedRecept(updated);
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
                        data={recept.ingredient}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          const updated = [...selectedRecept];
                          updated[index] = { ...recept, ingredient: data };
                          setSelectedRecept(updated);
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDiet;
