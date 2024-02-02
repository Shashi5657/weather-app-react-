import React, { useState } from 'react'
import './weatherApp.css'
import searchIcon from '../Assets/search.png'
import drizzleIcon from '../Assets/drizzle.png'
import clearIcon from '../Assets/clear.png'
import cloudIcon from '../Assets/cloud.png'
import humidityIcon from '../Assets/humidity.png'
import rainIcon from '../Assets/rain.png'
import snowIcon from '../Assets/snow.png'
import windIcon from '../Assets/wind.png'


const WeatherApp = () => {

    let api_key = '2d655309f2bc37bae6cbd23e35bbf3e5'

    const [wicon, setWicon] = useState(cloudIcon)

    const search = async() => {
        const element = document.getElementsByClassName('cityInput')
        if(element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
        let response = await  fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-rate')
        const temprature = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')

        humidity[0].innerHTML = data.main.humidity+ "%";
        wind[0].innerHTML = data.wind.speed+ "km/h";
        temprature[0].innerHTML = data.main.temp+ "ºC";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clearIcon);
        }else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloudIcon)
        }else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzleIcon)
        }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzleIcon)
        }else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rainIcon)
        }else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rainIcon)
        }else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snowIcon)
        }else {
            setWicon(clearIcon)
        }
    }



  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" placeholder='Search city/town...' className="cityInput" />
            <div className="search-icon" onClick={()=> {search()}}>
                <img src={searchIcon} alt='search image' />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt='weather-image' />
        </div>
        <div className="weather-temp">24ºC</div>
        <div className="weather-location">Hyderabad</div>
        <div className="data-container">
            <div className="element">
                <img src={humidityIcon} alt='' className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windIcon} alt='' className='icon' />
                <div className="data">
                    <div className="wind-rate">18 KM/H</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;