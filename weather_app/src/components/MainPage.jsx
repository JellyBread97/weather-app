import { Container, Form, Button, Row } from "react-bootstrap";
import { useState } from "react";
import DateTime from "./DateTime";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [city, setCities] = useState([]);
  /*const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };*/

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
          <BootstrapTooltip
            title="Work in Progress"
            placement="right"
            enterDelay={100}
            leaveDelay={200}
            arrow
          >
            <Button id="savedLocations">Saved Locations</Button>
          </BootstrapTooltip>
        </Row>

        {city.main && (
          <>
            <Container id="container2">
              <BootstrapTooltip
                title={city.name}
                placement="right"
                enterDelay={300}
                leaveDelay={200}
                arrow
              >
                <h1>{city.name}</h1>
              </BootstrapTooltip>
              <Row>
                <BootstrapTooltip
                  title="Current temperature"
                  placement="right"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h2>
                    <img
                      src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                    />
                    {(city.main.temp - 273.15).toFixed(1)} ºC
                  </h2>
                </BootstrapTooltip>
              </Row>
              <Row>
                {/*<h6 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <i class="bi bi-thermometer-sun"></i>{" "}
                  {(city.main.temp_max - 273.15).toFixed(1)}ºC
                  {isHovering && <p>Maximum temperature at the moment</p>}
        </h6>*/}
                <BootstrapTooltip
                  title="Maximum temperature at the moment"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h6 data-tooltip-content="Maximum temperature at the moment">
                    <i class="bi bi-thermometer-sun"></i>{" "}
                    {(city.main.temp_max - 273.15).toFixed(1)}ºC
                  </h6>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="Minimum temperature at the moment"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h6>
                    <i class="bi bi-thermometer-snow"></i>{" "}
                    {(city.main.temp_min - 273.15).toFixed(1)}ºC
                  </h6>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="Humidity"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h6>
                    <i class="bi bi-droplet-fill"></i> {city.main.humidity}%
                  </h6>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="Wind speed"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h6>
                    <i class="bi bi-wind"></i> {city.wind.speed} m/s
                  </h6>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="Cloudiness"
                  enterDelay={300}
                  leaveDelay={200}
                  arrow
                >
                  <h6>
                    <i class="bi bi-cloud-fill"></i> {city.clouds.all}%
                  </h6>
                </BootstrapTooltip>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default MainPage;
