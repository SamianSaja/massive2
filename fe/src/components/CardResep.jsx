import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const resep = [
  {
    id: 1,
    images: "/img/imghome/buburmanado.png",
    title: "Bubur Manado",
    desc: "Bubur Manado, bubur dari beras, ubi labu kuning, jagung manis dan berbagai sayuran",
  },
  {
    id: 2,
    images: "/img/imghome/pepes.png",
    title: "Pepes Ikan Dori",
    desc: "Dibuat dari fillet ikan dori dipotong kecil dan bumbu rempah-rempah",
  },

  {
    id: 3,
    images: "/img/imghome/kuahasam.png",
    title: "Ikan Kuah Asam",
    desc: "Dibuat dari ikan kembung segar dipotong kecil dan bumbu asam seperti belimbing wuluh dll",
  },
  {
    id: 4,
    images: "/img/imghome/lemonteh.png",
    title: "Lemon Grass Tea",
    desc: "Dibuat dari serai lemon grass, air, dan gula. Minuman ini memiliki rasa yang menyegarkan",
  },
];
const CardResep = () => {
  return (
    <>
      <div className="card-resep d-flex justify-content-center align-items-center ">
        <div className="card-resep2 row justify-content-center align-items-center ">
          {resep.map((card) => (
            <div
              key={card.id}
              className="col-6 col-lg-3"
              style={{ zIndex: 1000 }}
            >
              <Link to="/dresep1" className="text-decoration-none text-dark">
                <div className="card-content py-2  ">
                  <img src={card.images} alt="Gambar Card" />
                  <h5 className="fw-bold text-center ">{card.title}</h5>
                  <p className="text-center ">{card.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
};
export default CardResep;
