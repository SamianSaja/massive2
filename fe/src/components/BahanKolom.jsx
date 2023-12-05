import { Col } from "react-bootstrap";

const BahanKolom = (props) => {
  // const listItems1 = props.listItems1 || [];
  // const listItems2 = props.listItems2 || [];
  return (
    <>
      <Col xs={4} className="col-lg-5 col-12">
        <div className="">
          <div className="judul-bahan">
            <h3 className="bold text-center my-4">Bahan-Bahan</h3>
          </div>
          <div dangerouslySetInnerHTML={{__html:props.listItems}} className="detail-bahan">
            
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
