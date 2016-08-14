// Set up your root reducer here...
import { combineReducers } from 'redux';


//CHECK WHAT THIS GUY IS DOING
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer
});

export default rootReducer;