import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";


export default function Weather(){
let [ready, setReady] = useState(false);
let [temperature, setTemperature] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.main.temp)
        setReady(true);
    }

    if(ready){
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
                    Jokkmokk
                </h1>
                <ul>
                    <li>
                        Wednesday 07:00
                    </li>
                    <li>
                        Mostly cloudy
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
    
                        <img 
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="Mostly cloudy" 
                        />
    
                    <span className="temperature">{Math.round(temperature)} </span>
                     <span className="unit">°C</span>
    
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: 50%
                            </li>
                            <li>
                                Humidity: 72%
                            </li>                        <li>
                                Wind: 8 m/s
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
        )
    } else{
        let apiKey="8740228fba90a854cea90d4f0155d9e9";
        let city="Jokkmokk";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }



   
}