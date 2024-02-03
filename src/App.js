import { useEffect, useState } from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { tomorrowData } from "./tomorrow";
import clearIcon from "../src/components/Assets/clear.png";
import cloudIcon from "../src/components/Assets/cloud.png";
import humidityIcon from "../src/components/Assets/humidity.png";
import rainIcon from "../src/components/Assets/rain.png";
import snowIcon from "../src/components/Assets/snow.png";
import windIcon from "../src/components/Assets/wind.png";
import drizzleIcon from "../src/components/Assets/drizzle.png";

function App() {
  const [name, setName] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [wicon, setWicon] = useState(cloudIcon);
  const [tommorrowData, setTommorrowData] = useState([]);

  const handleButtonClick = (name, time) => {
    console.log(name, "app");
    setName(name);
    const filterData = tommorrowData.timelines.daily.filter(
      (item) => item.time === time
    );
    setFilterData(filterData);
  };

  const handleSearch = (searchName) => {
    console.log(searchName);
    fetchData(searchName);
  };

  useEffect(() => {
    fetchData("korutla");
  }, []);

  const fetchData = (name) => {
    let tomorrow_url = `https://api.tomorrow.io/v4/weather/forecast?location=${name}&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;

    fetch(tomorrow_url)
      .then((response) => response.json())
      .then((data) => setTommorrowData(data));
  };

  if (tommorrowData.length === 0) {
    return <div>Loading........</div>;
  }

  // const search = async (cityName) => {
  //   const element = document.getElementsByClassName("cityInput");
  //   if (element[0].value === "" && cityName === "") {
  //     return 0;
  //   }

  //   const searchName = element[0].value || cityName;
  //   // let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  //   let url = `https://api.tomorrow.io/v4/weather/forecast?location=${searchName}&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;

  //   let response = await fetch(url);
  //   let data = await response.json();

  //   // let data = weatherData;
  //   const humidity = document.getElementsByClassName("humidity-percent");
  //   const wind = document.getElementsByClassName("wind-rate");
  //   const temprature = document.getElementsByClassName("weather-temp");
  //   const location = document.getElementsByClassName("weather-location");

  //   console.log(filterData, "filterData");

  //   humidity[0].innerHTML = filterData[0].values.humidityAvg + "%";
  //   wind[0].innerHTML = filterData[0].values.windSpeedAvg + "km/h";
  //   temprature[0].innerHTML = filterData[0].values.temperatureAvg + "ºC";
  //   location[0].innerHTML = cityName;

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

  return (
    <div className="App">
      <WeatherApp
        name={name}
        filterData={filterData}
        handleSearch={handleSearch}
      />
      <div className="weatherForecast">
        <ul>
          {tommorrowData.timelines.daily.map((item) => (
            <WeatherForecast
              time={item.time}
              dailyData={item}
              handleClick={handleButtonClick}
              locationName={tommorrowData.location.name.split(", ")[0]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
