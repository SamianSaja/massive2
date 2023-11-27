import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer-content">
          <div>
            <img src="/img/logo-kalt.png" alt="logo" className="logo" />
          </div>
          <div className="d-flex justify-content-between mt-lg-4  ">
            <div className="d-flex gap-5">
              <Link to={'/kebijakanprivasi'} className="text-decoration-none">
                <p>KEBIJAKAN PRIVASI</p>
              </Link>
              <Link to={'/syaratketentuan'}  className="text-decoration-none">
                <p>SYARAT DAN KETENTUAN</p>
              </Link>
            </div>
            <p>Copyright © 2023 KALT. All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
