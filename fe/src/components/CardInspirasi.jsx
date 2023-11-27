import { Link } from "react-router-dom";

const inspirasi = [
  {
    id: 1,
    images: "/img/imghome/milner.png",
    title: "Turun 40 Kg",
    desc: "K. Milner, bukan lagi Miss Piggy",
    url: "/dinspirasi1",
  },
  {
    id: 2,
    images: "/img/imghome/dewi.png",
    title: "Turun 90 Kg",
    desc: "Dewi Hughess turun 90 Kg",
  },
  {
    id: 3,
    images: "/img/imghome/laura.png",
    title: "Turun 30 Kg",
    desc: "Laura Patricia turun 30 Kg",
  },
  {
    id: 4,
    images: "/img/imghome/suksesdiet.png",
    title: "Turun 44 Kg",
    desc: "Sukses diet, turun 44 Kg",
  },
];

const CardInspirasi = () => {
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="row w-75  ">
          {inspirasi.map((card) => (
            <div className="inspirasi-card col-lg-3 " key={card.id}>
              <img
                src={card.images}
                alt="Gambar Card"
                style={{ height: "auto", width: "100%" }}
              />
              <Link to={card.url}>
                <div className="inspirasi-content">
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardInspirasi;
