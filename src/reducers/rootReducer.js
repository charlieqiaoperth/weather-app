import { combineReducers } from 'redux';
import data from './dataReducer';
import unit from './unitReducer';
import active from './activeReducer';


const rootReducer = combineReducers(
    {        
        unit,
        active,
        data
    }
);
export default rootReducer;