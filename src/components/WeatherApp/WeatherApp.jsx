import React, { useEffect, useState } from "react";
import "./weatherApp.css";
import searchIcon from "../Assets/search.png";
import drizzleIcon from "../Assets/drizzle.png";
import clearIcon from "../Assets/clear.png";
import cloudIcon from "../Assets/cloud.png";
import humidityIcon from "../Assets/humidity.png";
import rainIcon from "../Assets/rain.png";
import snowIcon from "../Assets/snow.png";
import windIcon from "../Assets/wind.png";
import { weatherData } from "../../data";
import { tomorrowData } from "../../tomorrow";

const WeatherApp = ({ name, filterData, handleSearch, wicon }) => {
  // let api_key = "2d655309f2bc37bae6cbd23e35bbf3e5";
  // console.log(name, "weather");
  // const [wicon, setWicon] = useState(cloudIcon);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    // search(name);
    if (filterData.length > 0) {
      setTotalData(filterData);
    } else {
      setTotalData(tomorrowData.timelines.daily, "tommorrowData");
    }
  }, [name, filterData]);

  // const search = async (cityName) => {
  //   const element = document.getElementsByClassName("cityInput");
  //   if (element[0].value === "" && cityName === "") {
  //     return 0;
  //   }

  //   const searchName = element[0].value || cityName;

  //   const { weatherCode } = filterData[0].values;

  //   if (weatherCode === "1100" || weatherCode === "10001") {
  //     setWicon(clearIcon);
  //   } else if (weatherCode === "10010" || weatherCode === "10011") {
  //     setWicon(cloudIcon);
  //   } else if (weatherCode === "40000" || weatherCode === "40001") {
  //     setWicon(drizzleIcon);
  //   } else if (weatherCode === "42040" || weatherCode === "42041") {
  //     setWicon(drizzleIcon);
  //   } else if (weatherCode === "42000" || weatherCode === "42001") {
  //     setWicon(rainIcon);
  //   } else if (weatherCode === "40010" || weatherCode === "40011") {
  //     setWicon(rainIcon);
  //   } else if (weatherCode === "50000" || weatherCode === "50001") {
  //     setWicon(snowIcon);
  //   } else {
  //     setWicon(clearIcon);
  //   }
  // };

  if (totalData.length === 0) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search city/town..."
          className="cityInput"
        />
        <div
          className="search-icon"
          onClick={() => {
            const element = document.getElementsByClassName("cityInput");
            if (element[0].value === "") {
              return 0;
            }
            handleSearch(element[0].value, "weatherApp");
          }}
        >
          <img src={searchIcon} alt="search image" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="weather-image" />
      </div>
      <div className="weather-temp">
        {totalData[0].values.temperatureAvg + "ºC"}
      </div>
      <div className="weather-location">{name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">
              {totalData[0].values.humidityAvg + "%"}
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">
              {totalData[0].values.windSpeedAvg + "km/h"}
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
// let url = `https://api.tomorrow.io/v4/weather/forecast?location=${searchName}&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;

// let response = await fetch(url);
// let data = await response.json();

// let data = weatherData;

// console.log(filterData, "filterData");
