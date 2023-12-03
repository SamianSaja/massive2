import { Button, Card, Row, Col, Container } from "react-bootstrap";

const DesKolom = (props) => {
  // const paragraphs = props.paragraphs || [];
  // const listItems = props.listItems || [];
  return (
    <>
      <Col xs={4} className="col-lg-7 col-12">
        <div className="mb-5 ">
          <img
            src={props.imgDetail}
            alt=""
            width={"100%"}
            className="img-detail"
          />
        </div>
        <h3 className="bold">{props.titleDesk}</h3>

        <div dangerouslySetInnerHTML={{__html:props.paragraphs}} className="fs-5 text-justify text-detail">
          {/* {props.paragraphs.map((paragraph, index) => (
            <p key={index}> {paragraph} </p>
          ))} */}
        </div>

        <div dangerouslySetInnerHTML={{__html:props.listItems}} className="fs-5 text-justify text-detail">
          {/* {props.paragraphs.map((paragraph, index) => (
            <p key={index}> {paragraph} </p>
          ))} */}
        </div>
      </Col>

    </>
  );
};

DesKolom.defaultProps = {
  paragraphs: [],
  listItems: [],
};

export default DesKolom;
