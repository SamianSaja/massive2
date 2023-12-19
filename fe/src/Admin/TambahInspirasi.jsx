import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import { Link } from "react-router-dom";

const TambahInspirasi = () => {
  let [uuid, setuuid] = useState("");
  const [title, setTitle] = useState("");
  const [desk, setDesk] = useState("");
  const [fill_content, setFillContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const saveInspirasi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uuid', uuid);
    formData.append('title', title);
    formData.append('desk', desk);
    formData.append('fill_content', fill_content);
    formData.append('img', img);

    try {
        await axios.post('http://localhost:5000/ins', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate("/addinspirasiA");
    } catch (error) {
        console.log(error);
    }
  }


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
              <Link to="/tambahresep" className="text-decoration-none">
                Tambah Resep
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none add-active">
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
                to="/addinspirasiA"
                className="text-decoration-none text-info"
              >
                Lihat Tabel Inspirasi
              </Link>
            </li>
          </div>
          <div className="col-lg-10">
            <div className="form-container ms-3  float-start">
              <h3 className="text-center fw-bold mb-3">
                Tambah <span> Inspirasi </span>
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="article-title" className="form-label">
                    Judul Inspirasi
                  </label>
                  <input
                    placeholder="Masukkan Judul "
                    type="text"
                    className="form-control"
                    id="article-title"
                    name="article-title"
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))}
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
                    value={desk}
                    onChange={(e) => setDesk(e.target.value)}
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
                    Isi Inspirasi
                  </label>
                  <div className="App">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={fill_content}
                            
                        onChange={ ( event, editor) => {
                          const data = editor.getData();
                          setFillContent(data);
                      } }

                    />
                  </div>
                </div>

                <div className="mb-3 button  ">
                  <button type="submit" onClick={saveInspirasi}>Publikasi</button>
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

export default TambahInspirasi;
