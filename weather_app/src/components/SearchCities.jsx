import React from "react";
import { Button, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchCities extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container id="container">
            <Row>
              <input type="text" />
            </Row>
            <div>
              {" "}
              <p>City</p>
            </div>
            <Row>
              <Link to="/">
                <Button id="seemore">Home</Button>
              </Link>
              <Button id="searchbutton">Saved locations</Button>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default SearchCities;
