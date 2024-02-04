import { useEffect, useState } from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import clearIcon from "./components/Assets/clear.png";
import cloudIcon from "./components/Assets/cloud.png";
import drizzleIcon from "./components/Assets/drizzle.png";
import rainIcon from "./components/Assets/rain.png";
import snowIcon from "./components/Assets/snow.png";

function App() {
  const [name, setName] = useState("");
  const [wicon, setWicon] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [tommorrowData, setTommorrowData] = useState([]);
  const [clickedName, setClickedName] = useState("");

  const handleButtonClick = (name, time) => {
    console.log(name, "app");
    setName(name);
    setClickedName("");
    const filterData = tommorrowData.timelines.daily.filter(
      (item) => item.time === time
    );
    setFilterData(filterData);
  };

  const handleSearch = (searchName, name) => {
    setName(searchName);
    setClickedName(name);
    console.log(name, "clickedName");
    fetchData(searchName);
    // search(searchName);
  };

  useEffect(() => {
    fetchData("korutla");
  }, []);

  const fetchData = (name) => {
    let tomorrow_url = `https://api.tomorrow.io/v4/weather/forecast?location=${name}&apikey=s4Vp6Qz4TSelxrpaN4FsVWS1SrycInz6`;

    fetch(tomorrow_url)
      .then((response) => response.json())
      .then((data) => {
        setTommorrowData(data);
        search(data);
      });
  };

  const search = (data) => {
    const { weatherCodeMax } = data.timelines.daily[0].values;
    console.log(weatherCodeMax, "max");
    if (weatherCodeMax === "1000" || weatherCodeMax === "10001") {
      setWicon(clearIcon);
    } else if (weatherCodeMax === "1001" || weatherCodeMax === "10011") {
      setWicon(cloudIcon);
    } else if (weatherCodeMax === "4000" || weatherCodeMax === "40001") {
      setWicon(drizzleIcon);
    } else if (weatherCodeMax === "42040" || weatherCodeMax === "42041") {
      setWicon(drizzleIcon);
    } else if (["4001", "40011", "4201", "42011"].includes(weatherCodeMax)) {
      setWicon(rainIcon);
    } else if (weatherCodeMax === "4201" || weatherCodeMax === "42011") {
      setWicon(rainIcon);
    } else if (
      ["5001", "50011", "5100", "51001", "51011"].includes(weatherCodeMax)
    ) {
      setWicon(snowIcon);
    } else {
      setWicon(clearIcon);
    }
  };

  if (tommorrowData.length === 0 || tommorrowData.type === "Too Many Calls") {
    return <div>Loading........</div>;
  }

  return (
    <div className="App">
      <WeatherApp
        name={tommorrowData.location.name.split(", ")[0]}
        filterData={clickedName ? tommorrowData.timelines.daily : filterData}
        handleSearch={handleSearch}
        wicon={wicon}
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
