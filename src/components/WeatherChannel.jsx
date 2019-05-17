import React , {Component} from 'react';
import { connect } from 'react-redux';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import {getDataFromServer} from '../actions/updateAction';


const mockConditionData = {
    city: 'Sydney, Australia',
    weather: 'sunny',    
    temp: {C:29, F:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE',
  };
  
  
  const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'11:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'17:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'18:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'19:00', high:{C:29, F:70}, low:{C:18, F:58}},
  ];
  

class WeatherChannel extends Component{

     componentDidMount() {
     this.props.dispatch(getDataFromServer("perth","AU"));
  }
    render(){
        const { unit, active, data, dispatch } = this.props;
        console.log(data);
        // const {city, currentWeather, forecastWeather }= data;
        // const mockConditionData = {
        //         city: city.name,
        //         weather: 'sunny', //待修改   
        //         temp: {C:currentWeather.minCelsius, F:currentWeather.minFahrenheit},
        //         humidity: currentWeather.humidity,
        //         windSpeed: 5,//待修改
        //         windDirection:currentWeather.windDirection,
        //       };


        return(
            <main>
                <Toolbar 
                    unit={unit}
                    dispatch={dispatch}
                />                
                <CityCondition 
                    data={mockConditionData} 
                    unit={unit}    
                    // dispatch={dispatch}            
                 />               
                <Forecast 
                    data={mockForecastData}                     
                    unit={unit}
                    active={active}
                    dispatch={dispatch}
                 />                            
            </main>
        );
    }
}
const mapStateToProps = (state) => {
    return {        
        unit: state.unit.unit,
        active:state.active,
        data:state.data.data
           }
    
  }

const WeatherChannelC = connect(mapStateToProps)(WeatherChannel);

export default WeatherChannelC;