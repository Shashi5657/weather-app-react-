import React from "react";
import "./WeatherForecast.css";
import { weatherData } from "../../data";
import { tomorrowData } from "../../tomorrow";
const WeatherForecast = () => {
  // let yesterday_url = `https://api.tomorrow.io/v4/weather/history/recent?location=korutla&units=metric&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;
  // let tomorrow_url =
  //   "https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6";

  // const data = fetch(yesterday_url)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  let data = weatherData;
  let tomorrow = tomorrowData

  return (
    <div className="weatherForecast">
      <ul>
        <li className="components">
          <h3>Yesterday...</h3>
          <h4>{data.location.name.split(", ")[0]}</h4>
          <p>{data.timelines.daily[1].values.temperatureAvg + "ºC"}</p>
          <p>{data.timelines.hourly[1].values.humidity + "%"}</p>
          <p>{data.timelines.hourly[1].values.windSpeed + "km/h"}</p>
        </li>
        <li className="components">
          <h3>Yesterday...</h3>
          <h4>{data.location.name.split(", ")[0]}</h4>
          <p>{data.timelines.daily[0].values.temperatureAvg + "ºC"}</p>
          <p>{data.timelines.daily[0].values.humidityAvg + "%"}</p>
          <p>{data.timelines.hourly[1].values.windSpeedAvg + "km/h"}</p>
        </li>
        <li className="components">
          <h3>tomorrow...</h3>
          <h4>{tomorrow.location.name.split(", ")[0]}</h4>
          <p>{tomorrow.timelines.daily[1].values.temperatureAvg + "ºC"}</p>
          <p>{tomorrow.timelines.daily[1].values.humidityAvg + "%"}</p>
          <p>{tomorrow.timelines.daily[1].values.windSpeedAvg + "km/h"}</p>
        </li>
        {/* <li className="components">{data.location.name.split(", ")[0]}</h4>
          <p>{data.timelines.daily[1].values.temperatureAvg + "ºC"}</p>
          <p>{data.timelines.hourly[1].values.humidity + "%"}</p>
          <p>{data.timelines.hourly[1].values.windSpeed + "km/h"}</li> */}
      </ul>
    </div>
  );
};

export default WeatherForecast;
