import SWITCH_UNIT from '../actions/unitAction';


const defaultState = {unit:"C"};

const unit = (state = defaultState,action) => {
    switch (action.type) {
        case SWITCH_UNIT :
        return Object.assign({}, state, {unit: action.payload.unit});
        default:
            return state;
    }        
}

export default unit;