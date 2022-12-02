import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = ({ data }) => (
  <Row>
    <Col>
      <Link>{data.city.name}</Link>
    </Col>
    <Col>
      <a href={data.city.country} target="_blank" rel="noreferrer">
        {data.city.temperature.value}
      </a>
    </Col>
  </Row>
);

export default City;
