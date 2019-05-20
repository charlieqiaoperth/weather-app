import {LOCATION} from '../actions/locationAction';

const defaultState = {
    city:"Perth",
    country:"AU"
}

const location = (state = defaultState, action) => {
    switch (action.type) {
        case LOCATION :
        return Object.assign({}, state,{city:action.payload.city.city,country:action.payload.country.country});        
        default:
            return state;
    }        
}

export default location;