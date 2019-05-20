import React , {Component} from 'react';
import { connect } from 'react-redux';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import {getDataFromServer} from '../actions/updateAction';


class WeatherChannel extends Component{ 
    
     componentDidMount() {
     this.props.dispatch(getDataFromServer(this.props.location.city,this.props.location.country));    
  }

    render(){
        const { unit, active,data, dispatch } = this.props;       
        // console.log(this.props.location);
        return(
            <main>
                <Toolbar 
                    unit={unit}
                    dispatch={dispatch}
                                    />                
                <CityCondition 
                    data={data} 
                    unit={unit}                               
                 />               
                <Forecast 
                    data={data}                     
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
        data:state.data,
        location:state.location
           }
    
  }

const WeatherChannelC = connect(mapStateToProps)(WeatherChannel);

export default WeatherChannelC;