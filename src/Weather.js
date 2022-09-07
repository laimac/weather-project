import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
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
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy" />
               6 C
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
}