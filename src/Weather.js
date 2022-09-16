import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){
let [weatherData, setWeatherData] = useState({ready: false});
let [city, setCity]=useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            name: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: new Date((response.data.dt*1000)),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon});
    }

    function search(){
        let apiKey="aa3395dedb0e4908d3cb2a4b546ea887";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

function handleCityChange(event){
setCity(event.target.value);
}

    if(weatherData.ready){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates}/>
                </div>
        )
    } else{
search();
    return "Loading...";
    }
}