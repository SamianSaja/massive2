import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import { Link } from "react-router-dom";

const EditInspirasi = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState("");
  const [selectedIns, setSelectedIns] = useState([]);

  const navigate = useNavigate();
  const { uuid } = useParams();

  
  useEffect(() => {
    getSelectedIns();
  }, []);

  const updateIns = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uuid', uuid);
    selectedIns.map((ins) => {
      formData.append('title', ins.title);
      formData.append('desk', ins.desk);
      formData.append('fill_content', ins.fill_content);
      
      return ins;
    });
    formData.append('img', img);

    try {
        await axios.put(`http://localhost:5000/ins/${uuid}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate("/addinspirasiA");
    } catch (error) {
        console.log(error);
    }
  };

const getSelectedIns = async () => {
    try {
      axios.get(`http://localhost:5000/ins/${uuid}`)
      .then(res =>console.log(setSelectedIns(res.data)))
      .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
    
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name);
    setImg(file)
    if (file) {
      const reader = new FileReader();
      console.log(reader)
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleRemoveImage = () => {
    setSelectedImage(null);
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
                Edit <span> Inspirasi </span>
              </h3>
              {selectedIns.map((ins, index) => (
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
                    value={ins.title}
                    onChange={(e) => {
                      const updated = [...selectedIns];
                      updated[index] = { ...ins, title: e.target.value };
                      setSelectedIns(updated);
                    }}
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
                    value={ins.desk}
                    onChange={(e) => {
                      const updated = [...selectedIns];
                      updated[index] = { ...ins, desk: e.target.value };
                      setSelectedIns(updated);
                    }}
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
                  <div className="App">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={ins.fill_content}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          const updated = [...selectedIns];
                          updated[index] = { ...ins, fill_content: data };
                          setSelectedIns(updated);
                      } }

                    />
                  </div>
                </div>

                <div className="mb-3 button  ">
                  <button type="submit" onClick={updateIns}>Publikasi</button>
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

export default EditInspirasi;
