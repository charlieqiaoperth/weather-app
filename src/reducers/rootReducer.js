import { combineReducers } from 'redux';
import data from './dataReducer';
import unit from './unitReducer';
import active from './activeReducer';
import location from './locationReducer';



const rootReducer = combineReducers(
    {        
        unit,
        active,
        data,
        location
    }
);
export default rootReducer;