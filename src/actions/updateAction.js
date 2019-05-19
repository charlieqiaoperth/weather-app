import axios from 'axios';
import locationUpdate from './locationAction';

export const UPDATE = 'UPDATE';



const getDataSuccess = (city,currentWeather,forecastWeather)=>{
   
    return {
        type: UPDATE,        
        payload: {
            city:{city},
            currentWeather:{currentWeather},
            forecastWeather:{forecastWeather}
        }
    };    
} 



export const getDataFromServer = (city,country) => {
    return (dispatch) =>{ 
         dispatch(locationUpdate({city},{country}))     
        axios.get(`https://weather-server-api.herokuapp.com/api/weather/${country}/${city}`
        // , {
        //     params: {
        //       q: `${city},${country}`
        //     // q:'perth,AU'
        //     }
        //   }
          )
          .then(response =>{
            // console.log(response.data.data.city);
            dispatch(getDataSuccess(response.data.data.city,response.data.data.currentWeather,response.data.data.forecastWeather))
            // console.log(response.data.data);

          })
          .catch(error =>{
            //   dispatch(getDataFail());
            console.log(error);
          });
    }
}



