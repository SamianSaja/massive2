const tersimpan = [
    {
      id: 1,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 2,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 3,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 4,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 5,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 6,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
  ];
  const CardTersimpan = () => {
    return (
      <>
        {tersimpan.map((card) => (
          <div className="col-lg-6 my-lg-1 ">
            <div className="d-flex gap-3 tersimpan">
              <div key={card.id}>
                <img src={card.img} alt="hay" />
              </div>
              <div className="content-tersimpan d-flex ">
                <div className="my-auto">
                  <h5 className="fw-bold">{card.title}</h5>
                  <p>{card.desc}</p>
                  <button>{card.more}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  export default CardTersimpan;
  