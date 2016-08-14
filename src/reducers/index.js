// Set up your root reducer here...
import { combineReducers } from 'redux';
import todos from './TodosReducer';

//CHECK WHAT THIS GUY IS DOING
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    todos,
    routing: routerReducer
});

export default rootReducer;