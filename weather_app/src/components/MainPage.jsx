import { Button, Row, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import City from "./City";

export default function MainPage() {
  const [query, setQuery] = useState("");
  const [city, setCities] = useState(null);

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        baseEndpoint + query + ",&APPID=f659463b0549ba98597434fca08d8a11"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCities(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container id="container">
        <Form className="input" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Search for Location"
          />
        </Form>
        <div>{city && <City city={city} />}</div>
        <Row>
          <Link to="/search">
            <Button id="seeMore">See More</Button>
          </Link>
          <Button id="savedLocations">Saved Locations</Button>
        </Row>
      </Container>
    </>
  );
}
