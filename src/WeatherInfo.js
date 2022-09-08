import React from "react";
import FormattedDate from "./FormattedDate";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>
                    {props.data.name}
                </h1>
                <ul>
                    <li>
                       <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">
                        {props.data.description}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
    <WeatherIcon code={props.data.icon}/>
    
    <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: null%
                            </li>
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>                        <li>
                                Wind: {Math.round(props.data.wind)} m/s
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}