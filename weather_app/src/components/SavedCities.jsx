import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class SavedCities extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container id="container">
            <input id="input" type="text" />
            <div>
              {" "}
              <p>City</p>
            </div>
            <Row>
              <Link to="/search">
                <Button id="seemore">See more</Button>
              </Link>
              <Button id="searchbutton">Saved locations</Button>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default SavedCities;
