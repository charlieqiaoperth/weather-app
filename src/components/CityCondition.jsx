import React from 'react';
import umberella from '../images/icon-umberella.png';
import compass from '../images/icon-compass.png';
import wind from '../images/icon-wind.png';
 

const CityCondition = (props) => {
    const { data, unit}=props;
    const {city, currentWeather} = data;   
    const temp = {C:currentWeather.tempCelsius,F:currentWeather.tempFahrenheit};
    return (
        <section className="weather-condition">
            <div className="weather-condition__location">{city.name},{city.country}</div>
            <div className="weather-condition__weather">{currentWeather.weather}</div>
            <div className="weather-condition__temp">{temp[unit]} {unit}</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={umberella} alt="umberella"/>
                    <span className="citem">{`${currentWeather.humidity}%`}</span>
                </div>
                <div>
                    <img src={wind} alt="wind"/>
                    <span className="citem">{`${currentWeather.windSpeed} km/h`}</span>
                </div>
                <div>
                    <img src={compass} alt="compass"/>
                    <span className="citem">{currentWeather.windDirection}</span>                
                </div>
            </div>
        </section>
    );
}

export default CityCondition;