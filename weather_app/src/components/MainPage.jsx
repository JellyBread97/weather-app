import { Container, Form, Button, Row } from "react-bootstrap";
import { useState } from "react";
import DateTime from "./DateTime";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [city, setCities] = useState([]);

  const handleSubmit = async (event) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=f659463b0549ba98597434fca08d8a11`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCities(data);
        setQuery("");
        console.log(data);
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
        <DateTime />
        <Form className="input">
          <Form.Control
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for Location"
          />
        </Form>
        <Row>
          <Button id="seeMore" onClick={handleSubmit}>
            Search Location
          </Button>
          <Button id="savedLocations">Saved Locations</Button>
        </Row>

        {city.main && (
          <>
            <Container id="container2">
              <h3>{city.name}</h3>
              <Row>
                <p>
                  Current Temperature: {(city.main.temp - 273.15).toFixed(2)} ºC
                </p>
                <p>
                  Feels like: {(city.main.feels_like - 273.15).toFixed(2)} ºC
                </p>
              </Row>
              <Row>
                <p>Maximum Temperature: </p>
                {(city.main.temp_max - 273.15).toFixed(2)} ºC
                <p>Minimum Temperature: </p>
                {(city.main.temp_min - 273.15).toFixed(2)} ºC
              </Row>
              <p>Humidity: {city.main.humidity} % </p>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default MainPage;
