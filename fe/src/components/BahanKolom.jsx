import { Col } from "react-bootstrap";

const BahanKolom = (props) => {
  const listItems1 = props.listItems1 || [];
  const listItems2 = props.listItems2 || [];
  return (
    <>
      <Col xs={4} className="col-lg-5 col-12">
        <div className="">
          <div className="judul-bahan">
            <h3 className="bold text-center my-4">Bahan-Bahan</h3>
          </div>
          <div className="detail-bahan">
            <ul className="pt-3">
              {props.listItems1.map((item1, index) => (
                <li key={index}>{item1}</li>
              ))}
            </ul>
            <p className="mb-0">{props.titleList2}</p>
            <ul className="pb-3">
              {props.listItems2.map((item2, index) => (
                <li key={index}>{item2}</li>
              ))}
            </ul>
          </div>
          {/* Konten tambahan di dalam BahanKolom */}
          {props.children}
        </div>
      </Col>
    </>
  );
};

BahanKolom.defaultProps = {
  listItems1: [],
  listItems2: [],
};

export default BahanKolom;
