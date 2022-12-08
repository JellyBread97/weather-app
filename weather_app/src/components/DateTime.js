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
        {dt} - {currentTime}
      </center>
    </div>
  );
};

export default Datetime;
