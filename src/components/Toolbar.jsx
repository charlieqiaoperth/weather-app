import React, {Component}from 'react';
import switchUnit from '../actions/unitAction'
// import locationUpdate from '../actions/locationAction';
import { getDataFromServer } from '../actions/updateAction';


class Toolbar extends Component {
   constructor(props) {
       super(props);
       this.state= {
           city:'',
           country:'',
       }
   }

   onSearch = (e) => {
    e.preventDefault();    
    this.props.dispatch(getDataFromServer(this.state.city,this.state.country)) 
    }

    onCityChange = (e) => {
        this.setState({city:e.target.value});
    }

    onCountryChange = (e) => {
        this.setState({country:e.target.value});
    }
      
   render() {
    const {unit, dispatch} = this.props;
   
    const swapTempUnit = () => {
            
        if (unit==="C") {
            return ("F");
        }
        return ("C");            
    }
      
    return (
        <nav>
            <form  onSubmit={this.onSearch}>
                <label >
                    City : 
                    <input className="search-input" type="text" name="city" value={this.state.city} onChange={this.onCityChange}/>
                </label>
                <label>
                    Country : 
                    <input className="search-input" type="text" name="country" value={this.state.country} onChange={this.onCountryChange}/>
                </label  >
                     <input className="search-btn" type="submit" value="Search"/>
            
            </form>            
            <button onClick={()=>dispatch(switchUnit(swapTempUnit()))} className="temp-switch">°{unit}</button>
        </nav>
    );
}
}

export default Toolbar;