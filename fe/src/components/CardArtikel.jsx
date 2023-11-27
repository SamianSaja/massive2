const CardArtikel = (props) => {
  return (
    <>
      <div className="ms-lg-5">
        <div>
          <h3 className="text-center bold my-4 ms-lg-5">{props.title}</h3>
        </div>
        <div className="start-0 d-flex mb-4">
          <div className="detail-img">
            <img src={props.imgCard} alt="" width={"180px"}/>
          </div>
          <div className="ms-2 px-2 detail-card">
            <p className="bold pt-3 mb-2">{props.titleCard}</p>
            {props.children[0]}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArtikel;
