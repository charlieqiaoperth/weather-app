import {LOCATION} from '../actions/locationAction';

const defaultState = {
    city:"Perth",
    country:"AU"
}

const location = (state = defaultState, action) => {
    switch (action.type) {
        case LOCATION :
        return Object.assign({}, state, action.payload.location);        
        default:
            return state;
    }        
}

export default location;