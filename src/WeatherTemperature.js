import React, {useState} from "react";

export default function WeatherTemperature(props){
let[unit, setUnit]=useState("celsius");

function converetToFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
setUnit("celsius");
}

if(unit==="celsius"){
    return(
    <span className="WeatherTemperature">
<span className="temperature">{Math.round(props.celsius)} </span>
<span className="unit">°C | <a href="/" onClick={converetToFahrenheit}> °F </a> </span>
</span>
);
} else{
    let fahrenheit = (props.celsius * 9/5) +32;
    return(
        <span className="WeatherTemperature">
    <span className="temperature">{Math.round(fahrenheit)} </span>
    <span className="unit"> <a href="/" onClick={convertToCelsius}> °C </a> | °F </span>
    </span>);
}


}