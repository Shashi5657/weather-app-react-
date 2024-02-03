import React from "react";
import "./WeatherForecast.css";
import { weatherData } from "../../data";
import { tomorrowData } from "../../tomorrow";
const WeatherForecast = ({ time, handleClick, dailyData, locationName }) => {
  // let yesterday_url = `https://api.tomorrow.io/v4/weather/history/recent?location=korutla&units=metric&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;
  // let tomorrow_url =
  //   "https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6";

  // const data = fetch(yesterday_url)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  let data = weatherData;
  let tomorrow = tomorrowData;
  // console.log(dailyData);

  const getDayFromDate = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const today = new Date();

    if (
      date.getUTCFullYear() === today.getUTCFullYear() &&
      date.getUTCMonth() === today.getUTCMonth() &&
      date.getUTCDate() === today.getUTCDate()
    ) {
      return "Today";
    } else {
      const dayIndex = date.getUTCDay();
      return daysOfWeek[dayIndex];
    }
  };

  return (
    <li
      className="components"
      onClick={() => handleClick(tomorrow.location.name.split(", ")[0], time)}
    >
      <h3>{getDayFromDate(time)}</h3>
      <h4>{locationName}</h4>
      <p>{dailyData.values.temperatureAvg + "ºC"}</p>
      <p>{dailyData.values.humidityAvg + "%"}</p>
      <p>{dailyData.values.windSpeedAvg + "km/h"}</p>
    </li>
  );
};

export default WeatherForecast;
