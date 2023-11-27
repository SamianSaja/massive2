import { Card } from "react-bootstrap";

export const CardItem = (props) => {
  return (
    <Card className="bg-card">
      <Card.Img variant="top" src={props.imgCard} className="card-img"/>
      <Card.Body>
        <Card.Title className="bold text-center mb-3">{props.title}</Card.Title>
        <Card.Text>
          <p className="secondColor text-center">{props.jenis}</p>
          <p className="text-justify mb-3">{props.text}</p>
        </Card.Text>
        {props.children}
      </Card.Body>
    </Card>
  );
};
