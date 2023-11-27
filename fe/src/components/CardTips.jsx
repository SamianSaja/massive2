import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const tipstrik = [
  {
    id: 1,
    images: "/img/imghome/bumbudapur.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Menyimpan Bumbu Dapur",
    url: "/dtips1",
  },
  {
    id: 2,
    images: "/img/imghome/makanansehat.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Makanan Sehat",
  },
  {
    id: 3,
    images: "/img/imghome/cemilan.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Mengganti Camilan",
  },
  {
    id: 4,
    images: "/img/imghome/cemilanalt.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Camilan Alternatif",
  },
  {
    id: 5,
    images: "/img/imghome/polasehat.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Pola Makan Sehat",
  },
  {
    id: 6,
    images: "/img/imghome/sehatanakkos.png",
    more: "Lihat Tips",
    title: "Tips & Trik",
    desc: "Hidup Sehat Ala Anak Kost",
  },
];
const CardTips = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-lg-5   w-100 ">
        <div className="row w-75 ms-lg-5  ">
          {tipstrik.map((card) => (
            <div className="tips-card col-lg-4 my-lg-2" key={card.id}>
              <img
                src={card.images}
                alt="Gambar Card"
                style={{ height: "200px", width: "260px" }}
              />
              <div className="tips-content w-75 ">
                <Link to={card.url}>
                  <button className="bg-transparent p-lg-2  ">
                    {card.more}
                  </button>
                </Link>
                <br />
                <button className=" border-0">{card.title}</button>
                <p className="text-center text-white">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardTips;
