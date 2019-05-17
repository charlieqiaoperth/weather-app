import {UPDATE} from '../actions/updateAction';

const defaultState = {
   
}

const data = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE :
        return Object.assign({}, state, action.payload.rawData);        
        default:
            return state;
    }        
}

export default data;