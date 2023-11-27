import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Cardswipe = [
  {
    id: 1,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard1.png",
    url: "/dArtikel1",
  },
  {
    id: 2,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard2.png",
    url: "/dArtikel2",
  },

  {
    id: 3,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard3.png",
  },
  {
    id: 4,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard4.png",
  },
  {
    id: 5,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard5.png",
  },
  {
    id: 5,
    desc: "Baca Selengkapnya",
    images: "/img/imghome/imgcard6.png",
  },
];
const SwiperHome = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {Cardswipe.map((card) => (
            <SwiperSlide>
              <div className="card-swipe" key={card.id}>
                <img src={card.images} alt="Gambar Card" />
                <div className="card-body-swiper">
                  <Link
                    to={card.url}
                    className="text-decoration-none text-dark"
                  >
                    <p className=" fw-bolder">{card.desc}</p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default SwiperHome;
