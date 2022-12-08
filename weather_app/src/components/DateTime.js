import React from "react";
import { useState } from "react";

let Datetime = () => {
  let showdate = new Date();
  let dt = showdate.toDateString();

  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div id="datetime">
      <center>
        <i class="bi bi-calendar2-week-fill"></i> {dt}
        {"­ ­ ­ ­­ ­ ­ ­­ ­ ­ ­"}
        <i class="bi bi-clock-fill"></i> {currentTime}
      </center>
    </div>
  );
};

export default Datetime;
