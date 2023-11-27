import { Link } from "react-router-dom";
const RegistrasiVerif = () => {
  return (
    <>
      <div className="regverif">
        <div className="verif">
          <div>
            <img src="/img/imglogin/imgkodetelp.png" alt="" />
          </div>
          <div className="verif-content">
            <h5 className=" text-white fw-bold mt-5">Kode Verifikasi</h5>
            <p className="text-white">
              Masukkan 4 digit kode yang dikirimkan ke 081231414141
            </p>
            <div className="verif-input d-flex gap-4">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <Link to="/sukseslogin">
              <button>Lanjut</button>
            </Link>
            <p className="text-white mt-3">
              Tidak Menerima Kode ?<span> KIRIM ULANG KODE</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrasiVerif;
