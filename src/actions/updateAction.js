import axios from 'axios';

export const UPDATE = 'UPDATE';

// const update = (rawData) => {
//     return {
//         type: UPDATE,
//         payload: {rawData}
//     };
// }



const getDataSuccess = (rawData)=>{
    // const { city, currentWeather, forecastWeather } = rawData.data;
    return {
        type: UPDATE,
        payload:{rawData}
        // payload: {
        //     city,
        //     currentWeather,
        //     forecastWeather
        // }
    };
    // console.log(rawData.data);
} 

// const getDataFail=() =>{

// }

export const getDataFromServer = (city,country) => {
    return (dispatch) =>{       
        axios.get(`https://weather-server-api.herokuapp.com/api/weather/${country}/${city}`
        // , {
        //     params: {
        //       q: `${city},${country}`
        //     // q:'perth,AU'
        //     }
        //   }
          )
          .then(response =>{
            // console.log(response.data);
            dispatch(getDataSuccess(response.data.data))
          })
          .catch(error =>{
            //   dispatch(getDataFail());
            console.log(error);
          });
    }
}

// export default;

