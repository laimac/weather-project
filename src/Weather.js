import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";


export default function Weather(props){
let [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        setWeatherData({
            ready: true,
            name: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: new Date((response.data.dt*1000)),
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"

        });
    }
    if(weatherData.ready){
        return(
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <h1>
                    {weatherData.name}
                </h1>
                <ul>
                    <li>
                       <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
    
                        <img 
                        src={weatherData.iconUrl}
                        alt={weatherData.description} 
                        />
    
                    <span className="temperature">{Math.round(weatherData.temperature)} </span>
                     <span className="unit">°C</span>
    
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: null%
                            </li>
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>                        <li>
                                Wind: {Math.round(weatherData.wind)} m/s
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
        )
    } else{
        let apiKey="5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }
}