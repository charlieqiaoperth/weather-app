export const LOCATION = "LOCATION";


const location = (location) => {
    return {
        type: LOCATION,
        payload: {
            location
        }
    };
}

export default location;