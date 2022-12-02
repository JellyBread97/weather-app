import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = ({ city }) => {
  console.log("city props", city);
  return (
    <Row>
      <Col>
        <h1>{city.name}</h1>
      </Col>
    </Row>
  );
};

export default City;
