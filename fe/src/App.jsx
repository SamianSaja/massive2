// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HeaderDetail from "./components/HeaderDetail";
import Resep from "./pages/Resep";
import DietVegan from "./pages/DietVegan";
import TipsTrik from "./pages/TipsTrik";
import Inspirasi from "./pages/Inspirasi";
import Artikel from "./pages/Artikel";
import Home from "./pages/Home";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

import DArtikel1 from "./pages/DArtikel1";
import DArtikel2 from "./pages/DArtikel2";
import DResep1 from "./pages/DResep1";
import DTips1 from "./pages/DTips1";
import DInspirasi1 from "./pages/DInspirasi1";
import { DVegan1 } from "./pages/DVegan1";

// new
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import LoginTelp from "./pages/DaftarTelp";
import RegistrasiVerif from "./pages/RegistrasiVerif";
import RegistrasiSucess from "./pages/RegistrasiSucess";
import HomeAfterLogin from "./pages/HomeAfterLogin";
import EditProfil from "./pages/EditProfil";
import PasswordPages from "./pages/PasswordPages";
import TersimpanPages from "./pages/TersimpanPages";
import { SyaratKetentuan } from "./pages/SyaratKetentuan";
import { KebijakanPrivasi } from "./pages/KebijakanPrivasi";

// addmin
import TambahArtikel from "./Admin/TambahArtikel";
import DietAdmin from "./Admin/DietAdmin";
import InspirasiAdmin from "./Admin/InspirasiAdmin";
import ResepAdmin from "./Admin/ResepAdmin";
import TambahInspirasi from "./Admin/TambahInspirasi";
import TambahResep from "./Admin/TambahResep";
import TambahTips from "./Admin/TambahTips";
import TipsAdmin from "./Admin/TipsAdmin";
import ArtikelAdmin from "./Admin/ArtikelAdmin";
import TambahDiet from "./Admin/Tambahdiet";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/resep" element={<Resep />} />
        <Route path="/tips" element={<TipsTrik />} />
        <Route path="/inspirasi" element={<Inspirasi />} />
        <Route path="/vegan" element={<DietVegan />} />
        <Route path="/syaratketentuan" element={<SyaratKetentuan />} />
        <Route path="/kebijakanprivasi" element={<KebijakanPrivasi />} />

        {/* halaman detail */}
        <Route path="/dartikel1" element={<DArtikel1 />} />
        <Route path="/dartikel2" element={<DArtikel2 />} />

        <Route path="/dresep1" element={<DResep1 />} />

        <Route path="/dtips1" element={<DTips1 />} />

        <Route path="/dinspirasi1" element={<DInspirasi1 />} />

        <Route path="/dvegan1" element={<DVegan1 />} />

        {/* ===NEW=== */}
        <Route path="/login" Component={LoginPages} />
        <Route path="/register" Component={RegisterPages} />
        <Route path="/logintelp" Component={LoginTelp} />
        <Route path="/kodeverif" Component={RegistrasiVerif} />
        <Route path="/sukseslogin" Component={RegistrasiSucess} />

        {/* sesudah login */}
        <Route path="/homeakun" Component={HomeAfterLogin} />
        <Route path="/editprofil" Component={EditProfil} />
        <Route path="/password" Component={PasswordPages} />
        <Route path="/tersimpan" Component={TersimpanPages} />

        {/* rounting halaman admin */}
        <Route path="/tambahartikel" Component={TambahArtikel} />
        <Route path="/tambahresep" Component={TambahResep} />
        <Route path="/tambahtips" Component={TambahTips} />
        <Route path="/tambahinspirasi" Component={TambahInspirasi} />
        <Route path="/tambahdiet" Component={TambahDiet} />
        <Route path="/addartikelA" Component={ArtikelAdmin} />
        <Route path="/addresepA" Component={ResepAdmin} />
        <Route path="/addtipsA" Component={TipsAdmin} />
        <Route path="/addinspirasiA" Component={InspirasiAdmin} />
        <Route path="/adddietA" Component={DietAdmin} />
      </Routes>

      {/* <DArtikel1/>
      <DResep1 />
      <DTips1 />
      <DInspirasi1/>
      <DVegan1 /> */}
    </>
  );
}

export default App;
