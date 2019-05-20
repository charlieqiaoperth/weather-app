export const LOCATION = "LOCATION";


const location = (city,country) => {
    return {
        type: LOCATION,
        payload: {
           city: {city},
           country:{country}
        }
    };
}

export default location;