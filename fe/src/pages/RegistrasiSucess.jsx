import { Link } from "react-router-dom";
const RegistrasiSucess = () => {
  return (
    <>
      <div className="regverif">
        <div className="verif">
          <div>
            <img src="/img/imglogin/imgsukseslogin.png" alt="" />
          </div>
          <div className="verif-content mt-5">
            <h5 className=" text-white fs-4 fw-bold mt-5">
              Akun Anda Berhasil Dibuat
            </h5>
            <Link to="/login">
              <button>Login Sekarang</button>
            </Link>
            <p className="text-white mt-2 ">
              Tidak Menerima Kode ?<span> KIRIM ULANG KODE</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrasiSucess;
